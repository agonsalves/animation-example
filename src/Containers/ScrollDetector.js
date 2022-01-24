import React, {
    useContext,
    useRef
}                          from 'react'
import {useScrollPosition} from '../utils/useScrollPosition'
import {Transitions}       from './TransitionController'

/**
 * This component is used in conjunction with TransitionController to detect the scroll position of the wrapped
 * element. This info is then used to determine which page transition should be used.
 *
 * Note: This does not work in IE. A different, more basic method is used for that browser.
 */
const ScrollDetector = ({children}) => {
    const elementRef = useRef()
    const {setScrolledFlag} = useContext(Transitions)

    useScrollPosition(
        ({currPos}) => {
            setScrolledFlag(currPos)
        }, [], elementRef
    )

    return (
        <span ref={elementRef}>
            {children}
        </span>
    )
}

export default ScrollDetector