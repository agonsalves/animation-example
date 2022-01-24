import PropTypes  from 'prop-types'
import React      from 'react'
import LinkSwitch from '../Elements/LinkSwitch'

const EmailLink = ({email, children, ...props}) =>
    <LinkSwitch url={`mailto:${email}`} {...props} children={children || email}/>

EmailLink.propTypes = {
    email: PropTypes.string.isRequired
}

export default EmailLink
