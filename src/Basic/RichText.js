import PropTypes              from 'prop-types'
import React, {memo}          from 'react'
import {richTextDefaultStyle} from '../themes/elements'
import {parseHtml}            from '../utils/parseHtml'
import Div                    from './Div'

const RichText = memo(({theme, children, ...props}) => children ?
    <Div theme={{...richTextDefaultStyle, ...theme}} {...props}>{parseHtml(children)}</Div> : null
)

RichText.displayName = 'RichText'

RichText.propTypes = {
    children: PropTypes.string,
    theme: PropTypes.object,
}

RichText.defaultProps = {
    children: '',
    theme: {},
}

export default RichText