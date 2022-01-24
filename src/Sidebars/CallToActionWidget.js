import PropTypes   from 'prop-types'
import React       from 'react'
import H3          from '../Basic/H3'
import Img         from '../Basic/Img'
import RichText    from '../Basic/RichText'
import ButtonSmall from '../Elements/ButtonSmall'
import {
    callToActionWidgetStyle,
    featuredContentWidgetStyle,
    widgetTitleStyle
}                  from '../themes/sidebars'
import {triangle}  from '../variables/iconLibrary'
import Widget      from './Widget'

const CallToActionWidget = ({widget, theme}) =>
    <Widget theme={{...callToActionWidgetStyle, ...theme}}>
        {widget.widget_title && (
            <H3 theme={{widgetTitleStyle, ...featuredContentWidgetStyle.heading}} children={widget.widget_title}/>
        )}
        {widget.widget_cta_image && (
            <Img image={widget.widget_cta_image} theme={callToActionWidgetStyle.image} />
        )}
        {widget.widget_message && (
            <RichText children={widget.widget_message} theme={{...callToActionWidgetStyle.excerpt}}/>
        )}
        {widget.widget_link_url && (
            <ButtonSmall
                url={widget.widget_link_url}
                theme={{...callToActionWidgetStyle.button, ...theme.button}}
                title={widget.widget_link_description}
                label={widget.widget_link_label || 'Go'}
                icon={triangle}
            />
        )}
    </Widget>

CallToActionWidget.propTypes = {
    widget: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

CallToActionWidget.defaultProps = {
    theme: {
        button: {}
    },
}

export default CallToActionWidget