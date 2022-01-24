import PropTypes                   from 'prop-types'
import React                       from 'react'
import Div                         from '../Basic/Div'
import Pagination                  from '../Elements/Pagination'
import PublicationListing          from '../Elements/PublicationListing'
import PublicationListingFirstItem from '../Elements/PublicationListingFirstItem'
import {
    archiveListingStyle,
    publicationListingStyle
}                                  from '../themes/archives'
import {postContentStyle}          from '../themes/layout'
import {isPaginated}               from '../utils/flags'

const PublicationListings = ({post}) =>
    <Div theme={{postContentStyle, ...archiveListingStyle.wrapper}}>
        {post.related_posts.map((item, index) =>
            index === 0 && parseInt(post.page) === 1
                ? <PublicationListingFirstItem key={index} post={item}/>
                : <PublicationListing key={index} post={item} theme={publicationListingStyle}/>
        )}
        {isPaginated(post) && (
            <Pagination post={post}/>
        )}
    </Div>

PublicationListings.propTypes = {
    post: PropTypes.object.isRequired
}

export default PublicationListings