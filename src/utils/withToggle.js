import React, {useContext, useEffect, useRef} from 'react'
import {PanelToggle}                          from '../Containers/PanelSwitch'

/**
 * Higher-Order Component that detects clicks inside and outside its wrapped component,
 * toggling its isOpen prop. Inside = true. Outside = false.
 *
 * Any component wrapped with this HOC must have a panelName prop.
 * Multiple components may share the same panelName.
 *
 * @param Component
 * @returns {function}
 */
const withToggle = Component => ({style, ...props}) => {
    const {registerPanel, currentPanel} = useContext(PanelToggle)
    const clickRef = useRef(null)
    const {panelName} = props

    useEffect(() => {
        registerPanel(clickRef, props)
    }, [registerPanel, props])

    return (
        <span ref={clickRef} className={`panel-${panelName}`} style={style}>
            <Component isOpen={panelName === currentPanel} {...props}/>
        </span>
    )
}

export default withToggle