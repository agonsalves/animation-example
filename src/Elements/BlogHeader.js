import PropTypes from 'prop-types'
import React     from 'react'
import Div       from '../Basic/Div'

const BlogHeader = ({onClick, switchText}) =>
    <Div onClick={onClick} children={switchText}/>

BlogHeader.propTypes = {
    onClick: PropTypes.func.isRequired,
    switchText: PropTypes.string.isRequired
}

BlogHeader.defaultProps = {
    switchText: 'Return to Main Site'
}

export default BlogHeader