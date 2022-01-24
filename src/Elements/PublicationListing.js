import PropTypes                     from 'prop-types'
import React                         from 'react'
import Div                           from '../Basic/Div'
import {
    archiveListingStyle,
    pubSourceAndBylineStyle
}                                    from '../themes/archives'
import ArchiveDateAndType            from './ArchiveDateAndType'
import ArchiveListingTeaserThumbnail from './ArchiveListingTeaserThumbnail'
import ArchiveListingWrapper         from './ArchiveListingWrapper'
import LinkSwitch                    from './LinkSwitch'

const PublicationListing = ({post, theme}) =>
    <ArchiveListingWrapper theme={theme}>
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
                itemType={post.publication_type}
                displayDate={post.display_date}
                useDisplayDate={!!post.use_display_date}
            />
            <LinkSwitch
                url={post.slug}
                theme={{...archiveListingStyle.title, ...theme.title}}
                children={post.post_title}
            />
            {(post.publication || post.byline) && (
                <Div theme={pubSourceAndBylineStyle}>
                    {post.publication && (
                        <Div theme={{...archiveListingStyle.source, ...theme.source}}>{post.publication}</Div>
                    )}
                    {post.byline && (
                        <Div theme={{...archiveListingStyle.byline, ...theme.byline}}>{post.byline}</Div>
                    )}
                </Div>
            )}
        </Div>
    </ArchiveListingWrapper>

PublicationListing.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

PublicationListing.defaultProps = {
    theme: {
        thumbnail: {},
        title: {},
        source: {},
    },
}

export default PublicationListing