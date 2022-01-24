import idx                    from 'idx'
import {getPostType}          from '../redux/selectors'
import {configureStore}       from '../redux/store'
import {postTypeConfig}       from '../variables/postTypes'
import {breakpointUpperLimit} from '../variables/styles'
import {personUpcomingEvents} from './upcomingEvents'

/**
 * This file is only for pure functions that return boolean values which are used to determine whether a component
 * should render or not.
 */

export const isArchiveDetail = post => getPostType('name', post.post_type).type === 'archive'
export const isArchiveListing = post => getPostType('page', post.page_type).type === 'archive'
export const isCaseStudyListing = post => isArchiveListing(post) && post.template === 'case-studies'
export const isBlog = post => idx(post, _ => _.parentPost.post_type) === 'blogs' || idx(post, _ => _.template) === 'blogs'
export const isCurrentBlogCategory = (post, pathname, item, microsite, url) => {
    let blogPostTitle, currentBlogPost, currentBlogPostCategory, currentBlogCategory
    if (!!post) {
        blogPostTitle = pathname.replace(post.slug, '').replace(/\//g, '')
        currentBlogPost = !!post.related_posts && post.related_posts.find(item => item.post_name === blogPostTitle)
        currentBlogPostCategory = (!!currentBlogPost && !!currentBlogPost.bp_categories) && currentBlogPost.bp_categories[0].id
        currentBlogCategory = !!item.associated_blog_category && item.associated_blog_category[0].id
    }
    return ((!!currentBlogCategory && !!currentBlogPostCategory) && (currentBlogCategory === currentBlogPostCategory) && url !== microsite)
}
export const isBlogMainPage = post => post.post_type === 'blogs'
export const isBlogPost = post => post.template === 'blog-post'
export const isHomepage = post => post.slug === '/'
export const isPaginated = post => !!post.page && post.total > configureStore.getState().site.config.postsPerPage
export const isPersonMicrosite = post => idx(post, _ => _.parentPost.post_type) === 'person'
export const isPeopleSearch = post => post.template === 'people-search'
export const isPracticeSearch = post => post.template === 'practice-search'
export const isPersonMicrositeMainPage = post => isPersonMicrosite(post) && post.slug === post.parentPost.slug
export const isPracticeMicrosite = post => post.parentPost.template === 'practice-area'
export const isPracticeListingPage = post => post.template === 'practice'
export const isIndustryMicrosite = post => post.parentPost.template === 'industry'
export const isIndustryListingPage = post => post.template === 'client-industries'
export const isPeoplePage = post => post.template === 'people' && !post.search
export const isContactPage = post => post.template === 'contact'
export const isCareersPage = post => post.template === 'client-careers'
export const isOfficeDetail = post => post.template === 'office'
export const isDiversityPage = post => post.template === 'client-diversity'
export const isGlobalSearch = post => post.template === 'global-search'
export const isAboutUsPage = post => post.template === 'about-us'
export const isGenericPage = post => post.template === 'custom'
export const isMicrosite = post =>
    !!postTypeConfig.find(postType => postType.name === post.parentPost.post_type && postType.type === 'microsite')
export const isMicrositeSubpage = post => isMicrosite(post) && post.slug !== post.parentPost.slug
export const isSubPage = post =>
    (!isPersonMicrosite(post)) &&
    (post.id !== post.parentPost.id ||
        post.post_type === 'office' ||
        configureStore.getState().site.config.listingPages[post.post_type]
    )
export const isBlogCustomCategoryPage = post => post.template === 'microsite-blog_category'
export const hasArchiveSearch = post =>
    getPostType('page', post.page_type).type === 'archive' &&
    !!post.parentPost.page_type
export const hasAssociations = post =>
    !['person', 'practice-area', 'industry'].includes(post.post_type) &&
    (
        post.hasOwnProperty('people') ||
        post.hasOwnProperty('practice_area') ||
        post.hasOwnProperty('industry')
    ) &&
    isArchiveDetail(post)
export const hasDynamicWidgets = post =>
    !post.hasOwnProperty('disable_sidebar_management') &&
    post.hasOwnProperty('widgets')
export const hasMarquee = post =>
    !isHomepage(post) &&
    !isPracticeListingPage(post) &&
    !isPersonMicrosite(post) &&
    !isPeoplePage(post) &&
    !isIndustryListingPage(post)
export const hasMicrositeMenu = post => !!post.parentPost.microsite_pages
export const hasMobileMicrositeMenu = post => !!post.parentPost.microsite_pages
export const hasSidebarNav = post => idx(post, _ => !!_.menu_primary_sidebar.items)
export const hasTopMenu = post => idx(post, _ => !!_.menu_above_content.items)
export const hasUpcomingEventsWidget = post => personUpcomingEvents(post).visible
export const hasRightSidebar = post =>
    ((hasAssociations(post) ||
    hasDynamicWidgets(post) ||
    isBlogMainPage(post) ||
    isContactPage(post) ||
    isPracticeSearch(post) ||
    isOfficeDetail(post) ||
    isDiversityPage(post)) && !isArchiveListing(post)) ||
    isBlogCustomCategoryPage(post)
export const isMainPage = post => isArchiveListing(post)
    || isGlobalSearch(post)
    || isPeoplePage(post)
    || isPracticeListingPage(post)
    || isPracticeSearch(post)
    || isCareersPage(post)
    || isAboutUsPage(post)
    || isContactPage(post)
    || isDiversityPage(post)
    || isBlogMainPage(post)
export const isTablet = () =>
    (window.innerWidth > breakpointUpperLimit.mobile &&
    window.innerWidth <= breakpointUpperLimit.tablet) || isPrint()
export const isSmallDesktop = () => window.innerWidth <= breakpointUpperLimit.small && !isTablet()
export const isLargeDesktop = () => window.innerWidth > breakpointUpperLimit.small
export const isXLargeDesktop = () => window.innerWidth > breakpointUpperLimit.large
export const isPrint = () => window.matchMedia('print').matches
export const isLandscape = () => window.matchMedia('(orientation: landscape)').matches
export const isInternetExplorer = () => window.matchMedia('all and (-ms-high-contrast: none), (-ms-high-contrast: active)').matches
export const isFireFox = () => window.matchMedia('@-moz-document url-prefix()').matches
export const isEdge = () => window.matchMedia('@supports (-ms-ime-align:auto)').matches
export const isIos = () => window.matchMedia('@supports (-webkit-overflow-scrolling: touch)').matches
export const isSafari = () => window.matchMedia('@supports (-webkit-marquee-repetition:infinite and (object-fit:fill)').matches
export const isDefinitelyNotSectioned = post =>
    isPeoplePage(post) ||
    isPracticeListingPage(post) ||
    isIndustryListingPage(post) ||
    isHomepage(post)
export const isSameSection = (a, b) =>
    !isDefinitelyNotSectioned(a) &&
    !isDefinitelyNotSectioned(b) &&
    parseInt(a.parentPost.id) === parseInt(b.parentPost.id)