import PropTypes                   from 'prop-types'
import React                       from 'react'
import Div                         from '../Basic/Div'
import Img                         from '../Basic/Img'
import RichText                    from '../Basic/RichText'
import {pullquoteImageWidgetStyle} from '../themes/sidebars'
import Widget                      from './Widget'

const PullquoteImageWidget = ({widget, theme}) =>
    <Widget theme={{...pullquoteImageWidgetStyle, ...theme}}>
        {widget.widget_pullquote_image && (
            <Img
                theme={{...pullquoteImageWidgetStyle.image, ...theme.image}}
                src={widget.widget_pullquote_image.url}
                alt={widget.widget_pullquote_image.alt}
                height={widget.widget_pullquote_image.height}
                width={widget.widget_pullquote_image.width}
            />
        )}
        <Div>
            {widget.widget_quote && (
                <RichText theme={{...pullquoteImageWidgetStyle.quote, ...theme.quote}}>
                    {widget.widget_quote}
                </RichText>
            )}
            {widget.widget_attribution && (
                <Div theme={{...pullquoteImageWidgetStyle.attribution, ...theme.attribution}}>
                    {widget.widget_attribution}
                </Div>
            )}
        </Div>
    </Widget>

PullquoteImageWidget.propTypes = {
    widget: PropTypes.object.isRequired,
    theme: PropTypes.object
}

PullquoteImageWidget.defaultProps = {
    theme: {}
}

export default PullquoteImageWidget