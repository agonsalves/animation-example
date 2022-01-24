import PropTypes                     from 'prop-types'
import React                         from 'react'
import Div                           from '../Basic/Div'
import {
    archiveListingStyle,
    newsExcerptStyle,
    newsFirstListingTitleStyle,
    pubSourceAndBylineStyle
}                                    from '../themes/archives'
import {excerpt}                     from '../utils/helpers'
import ArchiveDateAndType            from './ArchiveDateAndType'
import ArchiveListingTeaserThumbnail from './ArchiveListingTeaserThumbnail'
import ArchiveListingWrapper         from './ArchiveListingWrapper'
import LinkSwitch                    from './LinkSwitch'

const PublicationListingFirstItem = ({post, theme}) =>
    <ArchiveListingWrapper theme={{display: 'flex', ...theme}}>
        {post.thumbnail_teaser && (
            <ArchiveListingTeaserThumbnail
                img={post.thumbnail_teaser}
                url={post.slug}
                theme={theme.thumbnail}
            />
        )}
        <Div>
            <ArchiveDateAndType date={post.date} itemType={post.publication_type}/>
            <LinkSwitch
                url={post.slug}
                theme={newsFirstListingTitleStyle}
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
            {post.full_content && (
                <Div theme={newsExcerptStyle}>{excerpt(post.full_content)}</Div>
            )}
        </Div>
    </ArchiveListingWrapper>

PublicationListingFirstItem.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

PublicationListingFirstItem.defaultProps = {
    theme: {
        thumbnail: {},
        source: {},
    },
}

export default PublicationListingFirstItem