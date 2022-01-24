import {AnimatePresence}   from 'framer-motion'
import PropTypes           from 'prop-types'
import React, {useContext} from 'react'
import MotionDiv           from '../Basic/MotionDiv'
import {PanelToggle}       from '../Containers/PanelSwitch'
import {overlayStyle}      from '../themes/layout'

const Overlay = ({isOpen, theme, ...props}) => {
    const {closePanels} = useContext(PanelToggle)

    return (
        <AnimatePresence>
            {isOpen && (
                <MotionDiv
                    theme={{...overlayStyle, ...theme}}
                    {...props}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="close-panels"
                    onClick={() => closePanels()}
                />
            )}
        </AnimatePresence>
    )
}

Overlay.propTypes = {
    isOpen: PropTypes.bool
}

export default Overlay