import React, {useContext}       from 'react'
import {
    getVariant,
    pageVariants
} from '../animations/pageTransitions'
import MotionDiv                 from '../Basic/MotionDiv'
import {Transitions}             from '../Containers/TransitionController'
import {contentOuterStyleSwitch} from '../themes/layout'
import {
    personMarqueeStyleSwitch,
    practicesStyle
}                                from '../themes/microsites'
import {
    isPersonMicrosite,
    isPracticeListingPage
}                                from '../utils/flags'
import ContentOuter              from './ContentOuter'
import PersonMarquee             from './PersonMarquee'

const PageTransitions = () => {
    const {post, mainAnimation} = useContext(Transitions)

    return (
        <>
            {isPersonMicrosite(post) && (
                <MotionDiv
                    className="person-marquee-animator"
                    key={'person' + post.parentPost.id}
                    theme={personMarqueeStyleSwitch(post)}
                    variants={pageVariants}
                    animate="marqueeEnter"
                    exit="marqueeExit"
                >
                    <PersonMarquee post={post}/>
                </MotionDiv>
            )}
            {post && (
                <MotionDiv
                    className="content-animator"
                    variants={pageVariants}
                    initial={pageVariants[getVariant(post, 'initial')]}
                    animate={mainAnimation}
                    theme={contentOuterStyleSwitch(post)}
                >
                    <ContentOuter post={post}/>
                </MotionDiv>
            )}
            {post && isPracticeListingPage(post) && (
                <MotionDiv
                    key="practiceGradient"
                    theme={practicesStyle.overlay}
                    initial="practiceInitial"
                    variants={pageVariants}
                    animate={mainAnimation}
                />
            )}
        </>
    )
}

export default PageTransitions