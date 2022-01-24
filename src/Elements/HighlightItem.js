import PropTypes     from 'prop-types'
import React, {memo} from 'react'
import Div           from '../Basic/Div'
import H3            from '../Basic/H3'
import Img           from '../Basic/Img'
import {
    excerpt,
    plural
}                    from '../utils/helpers'
import LinkSwitch    from './LinkSwitch'

const HighlightItem = memo(({item, theme, className, opacity}) => {
    const label = item.post_type === 'firm-highlights' ? item.highlight_label[0].term : plural(item.post_type)
    const longText = item.full_content || item.highlight_text
    const link = item.slug || item.highlight_link

    return (
        <LinkSwitch url={link} theme={theme} className={className}>
            <Div theme={{...theme.postType, opacity: opacity}}>{label}</Div>
            {item.thumbnail_teaser && (
                <Img image={item.thumbnail_teaser} theme={{...theme.image, opacity: opacity}}/>
            )}
            <H3 theme={{...theme.postTitle, opacity: opacity}}>
                {item.post_title}
            </H3>
            {!item.thumbnail_teaser && longText && (
                <Div theme={{...theme.excerpt, opacity: opacity}}>
                    {excerpt(longText, 30)}&#8230;
                </Div>
            )}
        </LinkSwitch>
    )
})

HighlightItem.displayName = 'HighlightItem'

HighlightItem.propTypes = {
    item: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

HighlightItem.defaultProps = {
    theme: {},
}

export default HighlightItem