import {AnimatePresence}          from 'framer-motion'
import idx                        from 'idx'
import React, {
    memo,
    useContext
}                                 from 'react'
import {
    connect,
    useSelector
}                                 from 'react-redux'
import {intraSectionVariants}     from '../animations/pageTransitions'
import Div                        from '../Basic/Div'
import MotionDiv                  from '../Basic/MotionDiv'
import ScrollDetector             from '../Containers/ScrollDetector'
import {Transitions}              from '../Containers/TransitionController'
import ArchiveSearchQuery         from '../Elements/ArchiveSearchQuery'
import PortraitOverlay            from '../Elements/PortraitOverlay'
import TopMenu                    from '../Elements/TopMenu'
import ArchiveSearch              from '../Forms/ArchiveSearch'
import PeopleSearchRefine         from '../Forms/PeopleSearchRefine'
import MicrositeMenu              from '../Menus/MicrositeMenu'
import {mobileFlag}               from '../redux/selectors'
import SidebarRight               from '../Sidebars/SidebarRight'
import {peopleSearchResultsStyle} from '../themes/elements'
import {
    contentFrame,
    contentOuterStyle,
    mainContentStyleSwitch
}                                 from '../themes/layout'
import {
    hasArchiveSearch,
    hasMarquee,
    hasMicrositeMenu,
    hasRightSidebar,
    hasTopMenu, isBlog,
    isHomepage,
    isPeopleSearch,
    isPersonMicrosite
} from '../utils/flags'
import {isEmpty}                  from '../utils/helpers'
import MainContent                from './MainContent'
import Marquee                    from './Marquee'
import MicrositeMenuWithDropDown from "../Menus/MicrositeMenuWithDropDown";

/**
 * Within this component, two different versions of the post object are used: post & animation. This is because we
 * want some content updated when the navigation changes (post) while other content needs time to animate out.
 */

const ContentOuter = memo(({query}) => {
    const {contentAnimation, post} = useContext(Transitions)
    const isMobile = useSelector(mobileFlag)

    return (
        <Div theme={contentOuterStyle} className="content-outer">
            {hasMarquee(post) && (
                <Marquee post={post}/>
            )}
            {((hasMicrositeMenu(post) && !isBlog(post)) && (
                <MicrositeMenu post={post.parentPost}/>
            ))}
            {(hasMicrositeMenu(post) && isBlog(post) && (
                <MicrositeMenuWithDropDown post={post.parentPost}/>
            ))}
            {hasTopMenu(post) && (
                <TopMenu post={post}/>
            )}
            <ScrollDetector>
                <AnimatePresence>
                    {hasArchiveSearch(post) && (
                        <MotionDiv
                            initial={{height: 0, overflow: 'hidden'}}
                            animate={{
                                height: 'auto',
                                transitionEnd: {overflow: 'visible'},
                                transition: {duration: .5}
                            }}
                            exit={{height: 0, overflow: 'hidden', transition: {duration: .5}}}
                        >
                            <ArchiveSearch panelName={'archive-search'} post={post}/>
                        </MotionDiv>
                    )}
                </AnimatePresence>
                {isPeopleSearch(post) && !isMobile && (
                    <Div theme={{...peopleSearchResultsStyle}}>
                        {!isEmpty(query.search) && (
                            <ArchiveSearchQuery query={query} theme={peopleSearchResultsStyle.query}/>
                        )}
                        <PeopleSearchRefine
                            panelName={'people-search'}
                            theme={peopleSearchResultsStyle.refine}
                            post={post}
                        />
                    </Div>
                )}
                <Div
                    theme={isHomepage(post) ? {} : contentFrame}
                    className="content-frame"
                >
                    <MotionDiv
                        variants={intraSectionVariants}
                        animate={contentAnimation}
                        theme={mainContentStyleSwitch(post)}
                        className="content-inner"
                    >
                        <MainContent post={post}/>
                        {hasRightSidebar(post) && (
                            <SidebarRight post={post}/>
                        )}
                    </MotionDiv>
                    {isPersonMicrosite(post) && (
                        <PortraitOverlay/>
                    )}
                </Div>
            </ScrollDetector>
        </Div>
    )
})

ContentOuter.displayName = 'ContentOuter'

const mapStateToProps = (store, {post}) => ({
    query: idx(post, _ => _.search.query) || {},
})

export default connect(mapStateToProps)(ContentOuter)
