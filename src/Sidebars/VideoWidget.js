import PropTypes          from 'prop-types'
import React, {memo}      from 'react'
import Div                from '../Basic/Div'
import Icon               from '../Basic/Icon'
import Img                from '../Basic/Img'
import RichText           from '../Basic/RichText'
import {videoWidgetStyle} from '../themes/sidebars'
import withToggle         from '../utils/withToggle'
import {triangle}         from '../variables/iconLibrary'
import Widget             from './Widget'

const VideoWidget = memo(({widget, theme}) => {
    const Video = withToggle(() =>
        <Div theme={videoWidgetStyle.imageWrapper}>
            <Img
                theme={{...videoWidgetStyle.image, ...theme.image}}
                image={widget.widget_video_image}
            />
            {widget.widget_show_play && (
                <Div theme={videoWidgetStyle.playButton}>
                    <Icon icon={triangle} className="icon"/>
                </Div>
            )}
        </Div>
    )

    return (
        <Widget theme={{...videoWidgetStyle, ...theme}}>
            {widget.widget_video_image && (
                <Video panelName={'video-' + widget.widget_video_url}/>
            )}
            {widget.widget_caption && (
                <RichText
                    theme={{...videoWidgetStyle.caption, ...theme.caption}}
                    children={widget.widget_caption}
                    className="close-panels"
                />
            )}
        </Widget>
    )
})

VideoWidget.displayName = 'VideoWidget'

VideoWidget.propTypes = {
    widget: PropTypes.object.isRequired,
    theme: PropTypes.object
}

VideoWidget.defaultProps = {
    theme: {},
}

export default VideoWidget