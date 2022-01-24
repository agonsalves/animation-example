import React, {useContext} from 'react'
import MotionDiv           from '../Basic/MotionDiv'
import {Transitions}       from '../Containers/TransitionController'
import FirmHighlights      from '../Elements/FirmHighlights'
import {footerStyle}       from '../themes/footer'
import Footer              from './Footer'

const AnimatedFooter = () => {
    const {footerAnimation, post} = useContext(Transitions)

    return (
        <MotionDiv animate={footerAnimation} theme={footerStyle.wrapper}>
            <FirmHighlights post={post}/>
            <Footer/>
        </MotionDiv>
    )
}

export default AnimatedFooter