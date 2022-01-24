import PropTypes          from 'prop-types'
import React              from 'react'
import Div                from '../Basic/Div'
import MicrositeMenu      from '../Menus/MicrositeMenu'
import SidebarRight       from '../Sidebars/SidebarRight'
import {
    innerContainerDefaultStyle,
    mainContentStyleSwitch,
}                         from '../themes/layout'
import {
    hasMobileMicrositeMenu,
    hasRightSidebar,
    isArchiveListing,
    isCaseStudyListing
}                         from '../utils/flags'
import {column}           from '../utils/themer'
import MainContent        from './MainContent'
import MobileBelowMarquee from './MobileBelowMarquee'

const MobileContent = ({post}) => {
    return (
        <Div
            theme={{...innerContainerDefaultStyle, ...mainContentStyleSwitch(post)}}
            className="main-content"
        >
            <MobileBelowMarquee post={post}/>
            <Div theme={{
                display: 'flex',
                overflow: 'hidden',
                flexDirection: 'row-reverse',
                justifyContent: 'flex-start'
            }}>
                <Div
                    className={(isArchiveListing(post)
                        && !isCaseStudyListing(post)
                        && !hasRightSidebar(post))
                        ? 'no-sidebar-right'
                        : ''}
                    theme={{display: 'flex', flexDirection: column, width: '100%'}}
                >
                    <MainContent post={post}/>
                    {hasRightSidebar(post) && (
                        <SidebarRight post={post}/>
                    )}
                </Div>
            </Div>
            {hasMobileMicrositeMenu(post) && (
                <MicrositeMenu post={post.parentPost}/>
            )}
        </Div>
    )
}

MobileContent.propTypes = {
    post: PropTypes.object.isRequired
}

export default MobileContent