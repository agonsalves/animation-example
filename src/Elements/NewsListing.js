import PropTypes                     from 'prop-types'
import React                         from 'react'
import Div                           from '../Basic/Div'
import {
    archiveListingStyle,
    archiveListingWrapperStyle
}                                    from '../themes/archives'
import ArchiveDateAndType            from './ArchiveDateAndType'
import ArchiveListingTeaserThumbnail from './ArchiveListingTeaserThumbnail'
import ArchiveListingWrapper         from './ArchiveListingWrapper'
import LinkSwitch                    from './LinkSwitch'

const NewsListing = ({post, theme}) =>
    <ArchiveListingWrapper theme={{...archiveListingWrapperStyle, ...theme}}>
        {post.thumbnail_teaser && (
            <ArchiveListingTeaserThumbnail
                img={post.thumbnail_teaser}
                url={post.slug}
                theme={theme.thumbnail}
            />
        )}
        <Div>
            <ArchiveDateAndType
                date={post.date}
                itemType={post.news_item_type}
            />
            <LinkSwitch
                theme={{...archiveListingStyle.title, ...theme.title}}
                url={post.slug}
                children={post.post_title}
            />
            {post.source && (
                <Div theme={{...archiveListingStyle.source, ...theme.source}}>{post.source}</Div>
            )}
        </Div>
    </ArchiveListingWrapper>

NewsListing.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

NewsListing.defaultProps = {
    theme: {
        thumbnail: {},
        title: {},
        source: {},
    },
}

export default NewsListing