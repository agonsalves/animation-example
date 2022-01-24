import PropTypes              from 'prop-types'
import React, {memo}          from 'react'
import {useSelector}          from 'react-redux'
import Div                    from '../Basic/Div'
import MobileBlogCategories   from '../Elements/MobileBlogCategories'
import {mobileFlag}           from '../redux/selectors'
import {sidebarLeftStyle}     from '../themes/sidebars'
import {
    hasSidebarNav,
    hasUpcomingEventsWidget,
    isBlog,
    isPeopleSearch,
    isPersonMicrosite,
    isPersonMicrositeMainPage,
    isPracticeSearch,
}                             from '../utils/flags'
import {personUpcomingEvents} from '../utils/upcomingEvents'
import BlogCategoriesWidget   from './BlogCategoriesWidget'
import BlogFollowWidget       from './BlogFollowWidget'
import BlogSearchWidget       from './BlogSearchWidget'
import MenuWidget             from './MenuWidget'
import PeopleSearchWidget     from './PeopleSearchWidget'
import PersonInfoWidget       from './PersonInfoWidget'
import PracticeSearchWidget   from './PracticeSearchWidget'
import UpcomingEventsWidget   from './UpcomingEventsWidget'

const SidebarLeft = memo(({post, theme}) => {
    const isMobile = useSelector(mobileFlag)

    return (
        <Div theme={{...sidebarLeftStyle, ...theme}}>
            {!isMobile && isPeopleSearch(post) && (
                <PeopleSearchWidget post={post}/>
            )}
            {!isMobile && hasSidebarNav(post) && (
                <MenuWidget post={post}/>
            )}
            {isPracticeSearch(post) && (
                <PracticeSearchWidget/>
            )}
            {isPersonMicrosite(post) && (
                <PersonInfoWidget post={post.parentPost}/>
            )}
            {isPersonMicrositeMainPage(post) && hasUpcomingEventsWidget(post) && (
                <UpcomingEventsWidget upcoming={personUpcomingEvents(post).upcoming}/>
            )}
            {isBlog(post) && (
                (!isMobile && (
                    <>
                        {post.parentPost.related_categories && (
                            <BlogCategoriesWidget categories={post.parentPost.related_categories}/>
                        )}
                        <BlogSearchWidget post={post}/>
                        <BlogFollowWidget
                            twitterLink={post.parentPost.blog_twitter_link}
                            linkedinLink={post.parentPost.blog_linkedin_link}
                        />
                    </>
                )) || (
                    <MobileBlogCategories post={post}/>
                )
            )}
        </Div>
    )
})

SidebarLeft.displayName = 'SidebarLeft'

SidebarLeft.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object
}

SidebarLeft.defaultProps = {
    theme: {},
}

export default SidebarLeft