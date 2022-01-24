import React, {useContext} from 'react'
import MotionDiv           from '../Basic/MotionDiv'
import {Transitions}       from '../Containers/TransitionController'
import {
    fixed,
    none
}                          from '../utils/themer'
import {globals}           from '../variables/styles'

const TransitionOverlay = () => {
    const {overlayAnimation} = useContext(Transitions)

    return (
        <MotionDiv
            theme={{
                position: fixed,
                top: 0,
                left: 0,
                pointerEvents: none,
                height: '100vh',
                width: '100vw',
                backgroundColor: globals.colors.black,
                zIndex: 8,
                opacity: 0
            }}
            animate={overlayAnimation}
        />
    )
}

export default TransitionOverlay