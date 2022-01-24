import PropTypes     from 'prop-types'
import React, {memo} from 'react'
import Div           from '../Basic/Div'
import H3            from '../Basic/H3'
import Img           from '../Basic/Img'
import ButtonSmall   from '../Elements/ButtonSmall'
import LinkSwitch    from '../Elements/LinkSwitch'
import {
    featuredContentWidgetStyle,
    widgetTitleStyle
}                    from '../themes/sidebars'
import {singular}    from '../utils/helpers'
import {triangle}    from '../variables/iconLibrary'
import Widget        from './Widget'
import WidgetSwitch  from './WidgetSwitch'

const FeaturedContentWidget = memo(({widget}) => {
    if (widget.related_posts && widget.related_posts.length > 0) {
        let post = widget.related_posts[Math.floor(Math.random() * widget.related_posts.length)]

        if (post.post_type === 'widget')
            return <WidgetSwitch widget={post}/>

        return (
            <Widget theme={{...featuredContentWidgetStyle}}>
                <H3 theme={{widgetTitleStyle, ...featuredContentWidgetStyle.heading}}>
                    Featured {singular(post.post_type)}
                </H3>
                <LinkSwitch url={post.slug} theme={featuredContentWidgetStyle}>
                    {post.thumbnail_teaser && (
                        <Img image={post.thumbnail_teaser} theme={featuredContentWidgetStyle.image}/>
                    )}
                    <Div theme={featuredContentWidgetStyle.title}>{post.post_title}</Div>
                </LinkSwitch>
                <ButtonSmall
                    url={post.slug}
                    label="Read More"
                    theme={featuredContentWidgetStyle.button}
                    title={`Read ${post.post_title}`}
                    icon={triangle}
                />
            </Widget>
        )
    }

    return null
})

FeaturedContentWidget.displayName = 'FeaturedContentWidget'

FeaturedContentWidget.propTypes = {
    widget: PropTypes.object.isRequired,
    theme: PropTypes.object
}

FeaturedContentWidget.defaultProps = {
    theme: {}
}

export default FeaturedContentWidget