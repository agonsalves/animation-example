import React  from 'react'
import Widget from './Widget'
import PropTypes from 'prop-types'

const SpacerWidget = ({widget, theme}) =>
    <Widget theme={{...theme, border: 'none', height: `${widget.widget_height || 50}px`}} />

SpacerWidget.propTypes = {
    widget: PropTypes.object.isRequired,
    theme: PropTypes.object
}

SpacerWidget.defaultProps = {
    theme: {}
}

export default SpacerWidget