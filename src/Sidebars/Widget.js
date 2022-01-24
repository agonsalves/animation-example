import PropTypes     from 'prop-types'
import React         from 'react'
import Div           from '../Basic/Div'
import {widgetStyle} from '../themes/sidebars'

const Widget = ({theme, ...props}) => <Div theme={{...widgetStyle, ...theme}} {...props}/>

Widget.propTypes = {
    theme: PropTypes.object
}

Widget.defaultProps = {
    theme: {}
}

export default Widget