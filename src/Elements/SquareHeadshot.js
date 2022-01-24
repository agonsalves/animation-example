import PropTypes           from 'prop-types'
import React               from 'react'
import placeholderHeadshot from '../assets/square-headshot-placeholder.png'
import Img                 from '../Basic/Img'

const SquareHeadshot = ({headshot, name, theme, size, ...props}) =>
    <Img
        theme={theme}
        image={headshot}
        alt={`Photo of ${name}.`}
        height={size}
        width={size}
        placeholder={placeholderHeadshot}
        {...props}
    />

SquareHeadshot.propTypes = {
    headshot: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    theme: PropTypes.object,
    size: PropTypes.number
}

SquareHeadshot.defaultProps = {
    headshot: {},
    theme: {},
    size: 185
}

export default SquareHeadshot