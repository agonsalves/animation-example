import PropTypes                     from 'prop-types'
import React                         from 'react'
import Div                           from '../Basic/Div'
import {
    archiveListingStyle,
    newsExcerptStyle,
    newsFirstListingTitleStyle
}                                    from '../themes/archives'
import {excerpt}                     from '../utils/helpers'
import {flexStart}                   from '../utils/themer'
import ArchiveDateAndType            from './ArchiveDateAndType'
import ArchiveListingTeaserThumbnail from './ArchiveListingTeaserThumbnail'
import ArchiveListingWrapper         from './ArchiveListingWrapper'
import LinkSwitch                    from './LinkSwitch'

const NewsListingFirstItem = ({post, theme}) =>
    <ArchiveListingWrapper theme={{display: 'flex', alignItems: flexStart, ...theme}}>
        {post.thumbnail_teaser && (
            <ArchiveListingTeaserThumbnail
                img={post.thumbnail_teaser}
                url={post.slug}
                theme={theme.thumbnail}
            />
        )}
        <Div>
            <ArchiveDateAndType date={post.date} itemType={post.news_item_type}/>
            <LinkSwitch
                url={post.slug}
                theme={newsFirstListingTitleStyle}
                children={post.post_title}
            />
            {post.full_content && (
                <Div theme={newsExcerptStyle}>{excerpt(post.full_content)}&#8230;</Div>
            )}
            {post.source && (
                <Div theme={{...archiveListingStyle.source, ...theme.source}}>{post.source}</Div>
            )}
        </Div>
    </ArchiveListingWrapper>

NewsListingFirstItem.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

NewsListingFirstItem.defaultProps = {
    theme: {
        thumbnail: {},
        source: {},
    },
}

export default NewsListingFirstItem