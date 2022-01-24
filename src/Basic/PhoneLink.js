import React      from 'react'
import LinkSwitch from '../Elements/LinkSwitch'
import PropTypes  from 'prop-types'

const PhoneLink = ({phone, label, theme}) =>
    <LinkSwitch url={`tel:${phone}`} children={label || phone} theme={theme} />

PhoneLink.propTypes = {
    phone: PropTypes.string.isRequired,
    label: PropTypes.string,
    theme: PropTypes.object
}

PhoneLink.defaultProps = {
    theme: {}
}

export default PhoneLink