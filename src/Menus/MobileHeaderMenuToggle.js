import PropTypes               from 'prop-types'
import React                   from 'react'
import Div                     from '../Basic/Div'
import Icon                    from '../Basic/Icon'
import {mobileMenuToggleStyle} from '../themes/header'
import {hamburger}             from '../variables/iconLibrary'

const MobileHeaderMenuToggle = ({isOpen, theme}) =>
    <Div
        theme={{...mobileMenuToggleStyle, ...theme, pointerEvents: isOpen ? 'none' : 'auto'}}
        className="toggle"
    >
        <Icon theme={{...mobileMenuToggleStyle.icon, ...theme.icon}} icon={hamburger}/>
    </Div>

MobileHeaderMenuToggle.propTypes = {
    theme: PropTypes.object,
    isOpen: PropTypes.bool
}

MobileHeaderMenuToggle.defaultProps = {
    theme: {},
}

export default MobileHeaderMenuToggle