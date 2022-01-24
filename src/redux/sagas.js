import axios                from 'axios'
import Cookies              from 'js-cookie'
import {
    all,
    call,
    put,
    takeLatest
}                           from 'redux-saga/effects'
import {isEmpty}            from '../utils/helpers'
import {stripTrailingSlash} from '../utils/url'
import {
    globalSearchPost,
    notFoundPost
}                           from '../variables/generalPosts'
import {
    LOAD_ADMIN,
    LOAD_CONFIG,
    REQUEST_DATA,
    REQUEST_HIGHLIGHTS,
    STORE_HIGHLIGHTS,
    STORE_POSTS
}                           from './reducers'
import {
    configureStore,
    history,
    sagaMiddleware
}                           from './store'

/**
 * Queries the API asynchronously and returns the response.
 *
 * @param {string} pathname
 * @param {string} search
 * @returns {object}
 */
export const queryApi = (pathname, search = '') =>
    axios.get(process.env.REACT_APP_API_LOCATION + pathname + search, {
        headers: {
            'X-Index': process.env.REACT_APP_INDEX_NAME,
            'X-Page-Size': configureStore.getState().site.config.postsPerPage,
            'x-init': !configureStore.getState().site.isInitialized
        }
    }).then(response => response.data)
        .catch(error => {
            if (error.response.status === 404)
                return {
                    ...error.response.data,
                    content: [{
                        '_source': {
                            ...notFoundPost,
                            slug: pathname + search
                        }
                    }],
                    error
                }

            throw error
        })

/**
 * Distills the config payload from the remote API response into values used in the redux store.
 *
 * @param {object} config
 * @returns {object}
 */
const composeConfigFromPayload = config => ({
    dateFormat: config.date_format,
    favicons: config.favicons,
    firmHighlights: config.firm_highlights,
    firmHighlightsMode: config.firm_highlights_mode,
    firmName: config.company_name,
    frontendDomain: config.frontend_domain,
    gaWebPropertyId: config.ga_web_property_id,
    googleMaps: config.google_maps,
    industry: config.industry,
    jobOpenings: config['job-opening'],
    keyContacts: config.key_contacts,
    listingPages: config.listing_pages,
    person: config.person,
    phoneFormat: config.phone_format,
    postsPerPage: parseInt(config.posts_per_page),
    practiceArea: config['practice-area'],
    searchablePostTypes: config.searchable_post_types,
    siteName: config.site_name,
    socialUrls: config.social_urls,
    tagline: config.tagline,
    timeFormat: config.time_format,
    uploadsDomain: config.uploads_domain
})

/**
 * Parses the response from the remote API to normalize all of the posts within it.
 *
 * @param {object} payload
 * @returns {object}
 */
const composePostsFromPayload = payload => {
    const parseMicrositePages = payload => {
        payload._source.microsite_pages.map(item => {
            posts = {
                ...posts,
                [item.slug]: {
                    ...item,
                    key: item.slug,
                    template: (item.child_type && `microsite-${item.child_type}`)
                    || item.post_type === 'microsite-page'
                        ? `microsite-${item.page_template}`
                        : item.post_type
                }
            }

            if (item.hasOwnProperty('related_posts')) {
                item.related_posts.map(related => {
                    posts = {
                        ...posts,
                        [related.slug]: {
                            ...related,
                            key: related.slug,
                            template:
                                payload._source.post_type === 'blogs' && related.post_type === 'blog-post'
                                    ? related.post_type
                                    : `microsite-${related.post_type}-detail`
                        }
                    }

                    return null
                })
            }
            return null
        })

        return posts
    }

    const parseRelatedPosts = ({related_posts}) => {
        related_posts.map(item => {
            posts = {
                ...posts,
                [item.slug]: {
                    ...item,
                    key: item.slug,
                    template: item.page_type || item.post_type,
                }
            }
            return null
        })

        return posts
    }

    let posts = {}

    Array.isArray(payload.content) && payload.content.map(post => {
        const page = parseInt(post._source.page) > 1
            ? `/page/${post._source.page}`
            : ''

        posts = {
            ...posts,
            [post._source.slug + page]: {
                ...post._source,
                key: post._source.slug + page,
                template: post._source.page_type || post._source.post_type
            }
        }

        if (post._source.hasOwnProperty('microsite_pages'))
            posts = parseMicrositePages(post)

        if (post.hasOwnProperty('related_posts'))
            posts = parseRelatedPosts(post)

        if (post._source.hasOwnProperty('related_posts'))
            posts = parseRelatedPosts(post._source)

        return null
    })

    return posts
}

/**
 * Parses the response from the remote API to normalize the search results and query.
 *
 * @param {object} results
 * @returns {object}
 */
const composeSearchResults = results => {
    if (results.content.hits && 'page' in results.content.hits) {
        let pages = []
        let categories = {}

        results.content.hits.page.map(item => {
            if ('page_category' in item._source) {

                if (!categories[item._source.page_category]) {
                    categories[item._source.page_category] = []
                }

                categories[item._source.page_category].push(item)
            } else {
                pages.push(item)
            }

            return null
        })

        if (pages.length > 0) {
            results.content.hits.page = pages
        } else {
            delete results.content.hits['page']
        }

        results.content.hits.categories = categories
    }

    return {
        search: {
            results: results.content.hits,
            query: results.content.query
        },
    }
}

/**
 * Adds search results to the post object before it gets stored in redux
 *
 * @param {object} results
 * @param {object} posts
 * @param {string} pathname
 * @param {string} search
 * @returns {object}
 */
const mergeSearchResultsWithPosts = (results, posts, pathname, search) => {
    let slug = pathname + search

    if (!isEmpty(results) && !isEmpty(results.content)) {
        let mainPost = {
            ...posts[pathname],
            key: pathname,
            template: posts[pathname].template + '-search'
        }

        if (results.content.query && results.content.query.s)
            mainPost = globalSearchPost

        return {
            ...posts,
            [slug]: {
                ...mainPost,
                ...composeSearchResults(results),
                key: slug
            }
        }
    } else if ((/\?s=*/g).test(search)) {
        return {
            [slug]: {
                ...globalSearchPost,
                key: slug,
                search: {
                    results: {},
                    query: {
                        s: search.replace(/\?s=/g, '')
                    }
                }
            }
        }
    }

    return posts
}

/**
 * Generator function that manages the process of querying the API, parsing the response,
 * and dispatching actions to populate the redux store.
 *
 * @param {string} pathname
 * @param {string} search
 */
function* getPost({pathname, search}) {
    try {
        const encodedPathname = encodeURI(pathname).toLowerCase(),
            slug = pathname + search

        let payload, results

        // For normal requests, just call the API with the given pathname
        if (!search) {
            payload = yield call(queryApi, encodedPathname)
            results = {}

        } else {
            // for search requests, call the API twice: for the root page data & search results
            const [postResults, searchResults] = yield all([
                call(queryApi, encodedPathname, ''),
                call(queryApi, encodedPathname, search)
            ])

            payload = postResults
            results = searchResults
        }

        // Parse & normalize the posts contained in the response
        let posts = composePostsFromPayload(payload)

        if (isEmpty(posts))
            posts = {[slug]: notFoundPost}

        // Add search results to posts
        if (search)
            posts = mergeSearchResultsWithPosts(results, posts, encodedPathname, search)

        // If posts is still empty, that means the page was not found.
        if (isEmpty(posts) || !posts[slug]) {
            posts = {
                ...posts,
                [slug]: {
                    ...notFoundPost,
                    key: slug
                }
            }
        }

        // Throw the posts into the store
        yield put({
            type: STORE_POSTS,
            posts
        })

        // Take care of any redirects
        handleRedirectIfNecessary(posts, encodedPathname + search)

        // If the payload contains configuration data (initial page request)
        if (payload.config) {
            // Check to see if the user has previously given cookie consent.
            const cookieConsent = !!Cookies.get('cookieConsent')

            // Uncomment, run, comment this line for testing
            //Cookies.remove('cookieConsent')

            // Throw the configuration data into the store
            yield put({
                type: LOAD_CONFIG,
                datalists: payload.datalist,
                menus: payload.menu,
                config: composeConfigFromPayload(payload.config),
                cookieConsent
            })
        }

    } catch (error) {
        console.log(error)
    }
}

/**
 * This method checks whether the pathname is a redirect within the set of posts and proceeds to find the corresponding
 * post.
 *
 * @param {object} posts
 * @param {string} slug
 */
const handleRedirectIfNecessary = (posts, slug) => {
    let redirectSlug = Object.keys(posts).find(i => posts[i].redirect_from === slug)

    if (redirectSlug)
        history.replace(redirectSlug)
}

const hasAdminUrl = queryString => queryString.indexOf('?admin=') !== -1

/**
 * Checks the query string and cookies for the admin URL.
 * The React app should not store the admin URL anywhere in the code/config, nor should it receive it through the API.
 * If the admin URL is detected in the query string, but not the cookies, it sets the cookie.
 * If the admin URL is set, it dispatches an action to load the admin URL into the redux store.
 * If a bogus admin URL is supplied, there are no ill effects.
 *
 * @param {string} queryString
 */
const handleAdminIfNecessary = queryString => {
    let adminUrl = Cookies.get('adminUrl')

    // Do nothing if the site is already initialized.
    if (configureStore.getState().site.isInitialized)
        return

    // No cookies are set, so check the query string for admin URL
    if (!adminUrl) {
        // Do nothing if the query string does not contain the admin URL
        if (!hasAdminUrl(queryString))
            return

        // Parse the admin URL from the query string and save it as a cookie.
        adminUrl = decodeURIComponent(queryString.split('admin=')[1])
        Cookies.set('adminUrl', adminUrl, {expires: 7})
        
    } else {
        configureStore.dispatch({
            type: LOAD_ADMIN,
            adminUrl
        })
    }

}

/**
 * Generator function that polls the API for firm highlights specific to a single post.
 * Stores the result within the post to prevent additional requests.
 *
 * @param {string} slug
 */
function* requestHighlights({slug}) {
    let results = yield call(queryApi, '/clhl' + slug)

    let highlights = []

    if (results.content.length && results.content[0]._source.related_posts)
        highlights = results.content[0]._source.related_posts.map(item => item)

    yield put({
        type: STORE_HIGHLIGHTS,
        slug,
        highlights
    })
}

/**
 * Checks the query string for valid params. Strips invalid params out and passes through a valid query string.
 *
 * Currently, the front end is only expecting two types of params: s (global search) and search[]
 *
 * @param {string} queryString
 * @returns {string}
 */
const preserveValidQueries = queryString => {
    const searchParams = new URLSearchParams(queryString)
    const entries = searchParams.entries()
    let cleanQueryString = []

    for (let pair of entries) {
        if (['s', 'from'].includes(pair[0]) || pair[0].includes('search['))
            cleanQueryString.push(`${pair[0]}=${pair[1]}`)
    }

    return !!cleanQueryString.length ? '?' + cleanQueryString.join('&') : ''
}

/**
 * Generator function that manages what should happen when the URL changes via react-router.
 *
 * @param {object} payload
 */
function* pathChange({payload}) {
    // stripping trailing slash by default
    const {pathname, search} = payload.location,
        {posts} = configureStore.getState()

    handleAdminIfNecessary(search)

    let queryString = preserveValidQueries(search),
        slug = stripTrailingSlash(pathname)


    if (pathname !== slug || search !== queryString)
    // Remove extra info from the address bar.
        history.replace(slug + queryString)
    else if (!posts[slug + queryString])
        yield put({
            type: REQUEST_DATA,
            pathname: slug,
            search: queryString
        })
}

/**
 * Main Generator function for redux-saga implementation.
 * Watches for dispatched actions and triggers the associated side effect.
 */
function* rootSaga() {
    yield takeLatest('@@router/LOCATION_CHANGE', pathChange)
    yield takeLatest(REQUEST_DATA, getPost)
    yield takeLatest(REQUEST_HIGHLIGHTS, requestHighlights)
}

sagaMiddleware.run(rootSaga)

/**
 * Triggers remote API call if the requested URL is not already loaded into the store.
 *
 * @param {string} slug
 * @param {string} search
 */
export const preloadPost = (slug, search) => {
    let searchString = search ? '?' + search : ''
    if (!slug.startsWith('#') && !configureStore.getState().posts[slug + searchString])
        configureStore.dispatch({
            type: REQUEST_DATA,
            pathname: slug,
            search: searchString
        })
}