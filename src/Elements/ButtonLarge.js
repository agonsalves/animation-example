import PropTypes          from 'prop-types'
import React              from 'react'
import {largeButtonStyle} from '../themes/buttons'
import {angleRight}       from '../variables/iconLibrary'
import LinkSwitch         from './LinkSwitch'

const ButtonLarge = ({children, label, url, title, icon, theme, ...props}) =>
    <LinkSwitch
        url={url}
        title={title}
        className={props.className}
        theme={{...largeButtonStyle, ...theme}}
        {...props}
    >
        {label || children}
    </LinkSwitch>

ButtonLarge.propTypes = {
    label: PropTypes.string,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.object,
    theme: PropTypes.object,
}

ButtonLarge.defaultProps = {
    title: '',
    icon: angleRight,
    theme: {},
}

export default ButtonLarge