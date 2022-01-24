import PropTypes          from 'prop-types'
import React              from 'react'
import Img                from '../Basic/Img'
import RichText           from '../Basic/RichText'
import {imageWidgetStyle} from '../themes/sidebars'
import Widget             from './Widget'

const ImageWidget = ({widget, theme}) =>
    <Widget theme={{...imageWidgetStyle, ...theme}}>
        {widget.widget_image && (
            <Img
                theme={{...imageWidgetStyle.image, ...theme.image}}
                image={widget.widget_image}
            />
        )}
        {widget.widget_caption && (
            <RichText
                theme={{...imageWidgetStyle.caption, ...theme.caption}}
                children={widget.widget_caption}
            />
        )}
    </Widget>

ImageWidget.propTypes = {
    widget: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

ImageWidget.defaultProps = {
    theme: {},
}

export default ImageWidget