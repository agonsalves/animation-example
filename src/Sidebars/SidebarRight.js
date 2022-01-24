import PropTypes                  from 'prop-types'
import React                      from 'react'
import Div                        from '../Basic/Div'
import {sidebarRightStyleSwitch}  from '../themes/sidebars'
import {
    hasDynamicWidgets,
    isArchiveDetail,
    isBlog,
    isBlogCustomCategoryPage,
    isBlogMainPage,
    isBlogPost,
    isContactPage,
    isOfficeDetail,
    isPersonMicrosite,
    isPracticeSearch
}                                 from '../utils/flags'
import AssociatedIndustriesWidget from './AssociatedIndustriesWidget'
import AssociatedPeopleWidget     from './AssociatedPeopleWidget'
import AssociatedPracticesWidget  from './AssociatedPracticesWidget'
import BlogFollowWidget           from './BlogFollowWidget'
import BlogSearchWidget           from './BlogSearchWidget'
import BlogSubcategoriesWidget    from './BlogSubcategoriesWidget'
import DepartmentContactsWidget   from './DepartmentContactsWidget'
import DiversityNewsWidget        from './DiversityNewsWidget'
import OfficeAddressWidget        from './OfficeAddressWidget'
import PracticeSearchWidget       from './PracticeSearchWidget'
import WidgetSwitch               from './WidgetSwitch'

const SidebarRight = ({post, theme}) =>
    <Div className="sidebar-right" theme={{...sidebarRightStyleSwitch(post), ...theme}}>
        {isContactPage(post) && post.departmental_contacts && (
            <DepartmentContactsWidget post={post}/>
        )}
        {post.people && !isBlogMainPage(post) && isArchiveDetail(post) && !isPersonMicrosite(post) && (
            <AssociatedPeopleWidget people={post.people}/>
        )}
        {post.practice_area && !isBlogMainPage(post) && !isBlogPost(post) && isArchiveDetail(post) && (
            <AssociatedPracticesWidget practices={post.practice_area}/>
        )}
        {post.industry && !isBlogMainPage(post) && !isBlogPost(post) && isArchiveDetail(post) && (
            <AssociatedIndustriesWidget industries={post.industry}/>
        )}
        {post.diversity_news && (
            <DiversityNewsWidget diversityNews={post.diversity_news}/>
        )}
        {isBlogCustomCategoryPage(post) && post.associated_blog_category && (
            <BlogSubcategoriesWidget post={post}/>
        )}
        {isBlog(post) && (
            <>
                <BlogSearchWidget post={post}/>
                <BlogFollowWidget
                    twitterLink={post.parentPost.blog_twitter_link}
                    linkedinLink={post.parentPost.blog_linkedin_link}
                />
            </>
        )}
        {isPracticeSearch(post) && (
            <PracticeSearchWidget/>
        )}
        {isOfficeDetail(post) && (
            <OfficeAddressWidget post={post}/>
        )}
        {hasDynamicWidgets(post) && post.widgets.map((widget, index) =>
            <WidgetSwitch key={index} widget={widget}/>
        )}
    </Div>

SidebarRight.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

SidebarRight.defaultProps = {
    theme: {},
}

export default SidebarRight