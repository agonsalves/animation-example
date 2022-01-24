import PropTypes  from 'prop-types'
import React      from 'react'
import Div        from '../Basic/Div'
import Title      from '../Elements/Title'
import {
    marqueeStyle,
    micrositeTypeLabelStyle
}                 from '../themes/layout'
import {singular} from '../utils/helpers'


const Marquee = ({post, theme}) =>
    <Div
        as="header"
        className="marquee"
        theme={{...marqueeStyle, ...theme}}
    >
        <Div theme={{...marqueeStyle.inner, ...theme.inner}}>
            {['practice-area', 'industry'].includes(post.parentPost.post_type) && (
                <Div theme={micrositeTypeLabelStyle}>{singular(post.parentPost.post_type)}</Div>
            )}
            <Title post={post} key={post.parentPost.id}/>
        </Div>
    </Div>

Marquee.propTypes = {
    theme: PropTypes.object,
    post: PropTypes.object
}

Marquee.defaultProps = {
    theme: {},
}

export default Marquee