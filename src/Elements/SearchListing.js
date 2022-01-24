import PropTypes          from 'prop-types'
import React              from 'react'
import PersonListing      from '../Microsites/PersonListing'
import PracticeListing    from '../Microsites/PracticeListing'
import BlogPostListing    from './BlogPostListing'
import CaseStudyListing   from './CaseStudyListing'
import EventListing       from './EventListing'
import NewsListing        from './NewsListing'
import PublicationListing from './PublicationListing'

const SearchListing = ({item, postType, ...props}) => {
    switch (postType) {
        case 'person':
            return <PersonListing person={item} {...props} />
        case 'practice-area':
            return <PracticeListing post={item} {...props} />
        case 'news-item':
            return <NewsListing post={item} {...props} />
        case 'event':
            return <EventListing post={item} {...props} />
        case 'publication':
            return <PublicationListing post={item} {...props} />
        case 'case-study':
            return <CaseStudyListing post={item} {...props} />
        case 'blog-post':
            return (
                <BlogPostListing
                    title={item.post_title}
                    image={item.thumbnail_teaser}
                    description={item.full_content}
                    url={item.slug}
                    date={item.date}
                    authors={item.bp_authors}
                    guestAuthors={item.bp_guest_authors}
                    outsideAuthors={item.bp_outside_authors}
                    {...props}
                />
            )
        default:
            return null
    }
}

SearchListing.propTypes = {
    item: PropTypes.object.isRequired,
    postType: PropTypes.string.isRequired
}

export default SearchListing