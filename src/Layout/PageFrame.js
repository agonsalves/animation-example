import PropTypes           from 'prop-types'
import React, {useContext} from 'react'
import {useSelector}       from 'react-redux'
import Div                 from '../Basic/Div'
import {Transitions}       from '../Containers/TransitionController'
import DocumentHead        from '../Elements/DocumentHead'
import FloatingLogo        from '../Elements/FloatingLogo'
import StaticHead          from '../Elements/StaticHead'
import TransitionOverlay   from '../Elements/TransitionOverlay'
import VideoOverlay        from '../Elements/VideoOverlay'
import {mobileFlag}        from '../redux/selectors'
import {pageFrameStyle}    from '../themes/layout'
import AnimatedFooter      from './AnimatedFooter'
import Background          from './Background'
import Header              from './Header'
import MobileHeader        from './MobileHeader'
import Page                from './Page'

const PageFrame = ({theme}) => {
    const {post} = useContext(Transitions)
    const isMobile = useSelector(mobileFlag)

    return (
        <Div theme={{...pageFrameStyle, ...theme}} className="page-frame">
            <Background post={post}/>
            {!isMobile && (
                <FloatingLogo post={post} theme={theme}/>
            )}
            <StaticHead/>
            <DocumentHead post={post}/>
            {(!isMobile && (
                <Header panelName="header" post={post}/>
            )) || (
                <MobileHeader/>
            )}
            <Page
                post={post}
                isMobile={isMobile}
            />
            <AnimatedFooter/>
            <VideoOverlay/>
            <TransitionOverlay/>
        </Div>
    )
}

PageFrame.propTypes = {
    theme: PropTypes.object
}

PageFrame.defaultProps = {
    theme: {}
}

export default PageFrame