import PropTypes                     from 'prop-types'
import React                         from 'react'
import Div                           from '../Basic/Div'
import {archiveListingStyle}         from '../themes/archives'
import {caseStudySearchResultStyle}  from '../themes/microsites'
import {excerpt}                     from '../utils/helpers'
import ArchiveListingTeaserThumbnail from './ArchiveListingTeaserThumbnail'
import ArchiveListingWrapper         from './ArchiveListingWrapper'
import LinkSwitch                    from './LinkSwitch'

const CaseStudyListing = ({post, theme}) =>
    <ArchiveListingWrapper theme={{...caseStudySearchResultStyle, ...theme}}>
        {post.thumbnail_teaser && (
            <ArchiveListingTeaserThumbnail
                img={post.thumbnail_teaser}
                url={post.slug}
                theme={theme.thumbnail}
            />
        )}
        <Div theme={!!post.thumbnail_teaser
            ? {...caseStudySearchResultStyle.textWrapperWithImage, ...theme.textWrapperWithImage}
            : {...caseStudySearchResultStyle.textWrapper, ...theme.textWrapper}}>
            <LinkSwitch
                theme={{...archiveListingStyle.title, ...theme.title}}
                url={post.slug}
                children={post.post_title}
            />
            {post.full_content && (
                <Div theme={{...archiveListingStyle.excerpt, ...theme.excerpt}}>{excerpt(post.full_content, Infinity)}</Div>
            )}
        </Div>
    </ArchiveListingWrapper>

CaseStudyListing.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

CaseStudyListing.defaultProps = {
    theme: {
        thumbnail: {},
        title: {}
    },
}

export default CaseStudyListing