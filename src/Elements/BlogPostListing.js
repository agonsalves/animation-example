import PropTypes from 'prop-types'
import React from 'react'
import Div from '../Basic/Div'
import {blogPostListingStyle} from '../themes/blogs'
import {excerpt} from '../utils/helpers'
import {triangle} from '../variables/iconLibrary'
import ArchiveListingTeaserThumbnail from './ArchiveListingTeaserThumbnail'
import ArchiveListingWrapper from './ArchiveListingWrapper'
import BlogPostByline from './BlogPostByline'
import ButtonSmall from './ButtonSmall'
import LinkSwitch from './LinkSwitch'

const BlogPostListing = ({title, url, authors, guestAuthors, outsideAuthors, image, description, date, theme}) =>
    <ArchiveListingWrapper theme={{...blogPostListingStyle, ...theme}}>
        <LinkSwitch
            theme={{...blogPostListingStyle.title, ...theme.title}}
            url={url}
            children={title}
        />
        <Div theme={blogPostListingStyle.details}>
            <BlogPostByline
                authors={authors}
                guestAuthors={guestAuthors}
                outsideAuthors={outsideAuthors}
                date={date}
                theme={{...blogPostListingStyle.byline, ...theme.byline}}
            />
            {image && (
                <ArchiveListingTeaserThumbnail
                    url={url}
                    img={image}
                    theme={{...blogPostListingStyle.image, ...theme.image}}
                />
            )}
            {description && (
                <Div theme={{...blogPostListingStyle.excerpt, ...theme.excerpt}}>
                    {excerpt(description, 80)}
                </Div>
            )}
            <ButtonSmall
                theme={{...blogPostListingStyle.button, ...theme.button}}
                url={url}
                label="Go"
                icon={triangle}
            />
        </Div>
    </ArchiveListingWrapper>

BlogPostListing.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.object,
    authors: PropTypes.array,
    guestAuthors: PropTypes.array,
    outsideAuthors: PropTypes.array,
    description: PropTypes.string,
    theme: PropTypes.object
}

BlogPostListing.defaultProps = {
    theme: {},
}

export default BlogPostListing