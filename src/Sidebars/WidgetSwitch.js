import PropTypes                 from 'prop-types'
import React                     from 'react'
import AssociatedPracticesWidget from './AssociatedPracticesWidget'
import CallToActionWidget        from './CallToActionWidget'
import FeaturedContentWidget     from './FeaturedContentWidget'
import ImageWidget               from './ImageWidget'
import KeyContactsWidget         from './KeyContactsWidget'
import PullquoteImageWidget      from './PullquoteImageWidget'
import PullquoteWidget           from './PullquoteWidget'
import SpacerWidget              from './SpacerWidget'
import VideoWidget               from './VideoWidget'

const WidgetSwitch = ({widget}) => {
    switch (widget.template.type) {
        case 'call_to_action':
            return <CallToActionWidget widget={widget}/>
        case 'image':
            return <ImageWidget widget={widget}/>
        case 'key_contacts':
            return <KeyContactsWidget widget={widget}/>
        case 'pullquote':
            return <PullquoteWidget widget={widget}/>
        case 'pullquote_with_image':
            return <PullquoteImageWidget widget={widget}/>
        case 'spacer':
            return <SpacerWidget widget={widget}/>
        case 'video':
            return <VideoWidget widget={widget}/>
        case 'related_content':
            return <FeaturedContentWidget widget={widget}/>
        case 'related_practices':
            return <AssociatedPracticesWidget practices={widget.widget_related_practices}/>
        default:
            return null
    }
}

WidgetSwitch.propTypes = {
    widget: PropTypes.object.isRequired,
}

export default WidgetSwitch