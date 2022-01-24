import idx                              from 'idx'
import PropTypes                        from 'prop-types'
import React                            from 'react'
import connect                          from 'react-redux/es/connect/connect'
import Div                              from '../Basic/Div'
import H1                               from '../Basic/H1'
import Img                              from '../Basic/Img'
import ArchiveSearchQuery               from '../Elements/ArchiveSearchQuery'
import ArchiveSearch                    from '../Forms/ArchiveSearch'
import PeopleSearchRefine               from '../Forms/PeopleSearchRefine'
import MobileBlogMicrositeMenu          from '../Menus/MobileBlogMicrositeMenu'
import MobileBlogMicrositeSearch        from '../Menus/MobileBlogMicrositeSearch'
import MobileMicrositeMenu              from '../Menus/MobileMicrositeMenu'
import {
    globalPageTitle,
    peopleSearchResultsStyle
}                                       from '../themes/elements'
import {mobileBlogMicrositeMenuWrapper} from '../themes/menus'
import {
    micrositePersonStyle,
    personMarqueeStyle
}                                       from '../themes/microsites'
import {
    hasArchiveSearch,
    hasMobileMicrositeMenu,
    isBlog,
    isHomepage,
    isMicrositeSubpage,
    isPeopleSearch,
    isPersonMicrosite,
    isPersonMicrositeMainPage
} from '../utils/flags'
import {
    composePersonTitle,
    isEmpty
}                                       from '../utils/helpers'

const MobileBelowMarquee = ({post, query}) =>
    <>
        {((isPersonMicrosite(post) && isMicrositeSubpage(post)) && (
            <>
                <H1 theme={{...globalPageTitle, ...personMarqueeStyle.title}}>{post.parentPost.post_title}</H1>
                <Div theme={micrositePersonStyle.personTitle}>{composePersonTitle(post.parentPost)}</Div>
            </>
        )) || ((!isHomepage(post) && !isPersonMicrositeMainPage(post)) && (
            <H1 theme={globalPageTitle}>{post.parentPost.post_title}</H1>
        ))}
        {(isPeopleSearch(post)) && (
            <Div theme={peopleSearchResultsStyle}>
                <PeopleSearchRefine
                    panelName={'people-search'}
                    theme={peopleSearchResultsStyle.refine}
                    post={post}
                />
                {!isEmpty(query.search) && (
                    <ArchiveSearchQuery query={query} theme={peopleSearchResultsStyle.query}/>
                )}
            </Div>
        )}
        {(isPersonMicrosite(post) && !isMicrositeSubpage(post)) && (
            <Div theme={personMarqueeStyle.imageWrapper}>
                <Img theme={personMarqueeStyle.image} src={idx(post, _ => _.parentPost.photo.url)}/>
            </Div>
        )}
        {hasArchiveSearch(post) && (
            <ArchiveSearch panelName={'archive-search'} post={post}/>
        )}
        {hasMobileMicrositeMenu(post) && !isBlog(post) && (
            <MobileMicrositeMenu panelName="mobile-microsite-menu" parentPost={post.parentPost}/>
        )}
        {hasMobileMicrositeMenu(post) && isBlog(post) && (
            <Div theme={mobileBlogMicrositeMenuWrapper}>
                <MobileBlogMicrositeSearch panelName="mobile-blog-microsite-search" post={post}/>
                <MobileBlogMicrositeMenu panelName="mobile-blog-microsite-menu" post={post}/>
            </Div>
        )}
    </>

MobileBelowMarquee.propTypes = {
    post: PropTypes.object.isRequired,
    query: PropTypes.object.isRequired,
    theme: PropTypes.object
}

const mapStateToProps = ({router}, {post}) => ({
    query: idx(post, _ => _.search.query) || {},
    theme: {}
})

export default connect(mapStateToProps)(MobileBelowMarquee)