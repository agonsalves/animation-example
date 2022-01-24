import PropTypes        from 'prop-types'
import {
    memo,
    useEffect,
    useState
}                       from 'react'
import ReactGA          from 'react-ga'
import {connect}        from 'react-redux'
import {getCurrentPost} from '../redux/selectors'
import {isMicrosite}    from '../utils/flags'

const GoogleAnalytics = memo(({pathname, post, search, gaWebPropertyId}) => {
    if (post.is_preview || post.is_revision || post.is_staging)
        return null

    const [prev, setPrev] = useState({})

    useEffect(() => {
        if (gaWebPropertyId) {
            ReactGA.initialize(gaWebPropertyId, {
                debug: false,
                testMode: false
            })
        }
    }, [gaWebPropertyId])

    useEffect(() => {
        if (gaWebPropertyId) {
            if (pathname + search === post.key && (prev.pathname !== pathname || prev.search !== search)) {
                ReactGA.set({
                    dimension1: post.slug === '/',
                    dimension2: isMicrosite(post) ? post.parentPost.post_type : '(not set)',
                    dimension3: isMicrosite(post) ? post.parentPost.id : '(not set)',
                    dimension4: post.post_type,
                    dimension5: post.id
                })
                ReactGA.pageview(post.key, [], post.post_title)
                setPrev({pathname, search})
            }
        }
    }, [post, pathname, search, prev, setPrev, gaWebPropertyId])

    return null
})

GoogleAnalytics.displayName = 'GoogleAnalytics'

GoogleAnalytics.propTypes = {
    pathname: PropTypes.string.isRequired,
    post: PropTypes.object.isRequired,
    search: PropTypes.string,
    gaWebPropertyId: PropTypes.string
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    post: getCurrentPost(state),
    gaWebPropertyId: state.site.config.gaWebPropertyId
})

export default connect(mapStateToProps)(GoogleAnalytics)