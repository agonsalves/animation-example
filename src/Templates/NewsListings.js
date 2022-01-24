import PropTypes             from 'prop-types'
import React                 from 'react'
import Div                   from '../Basic/Div'
import NewsListing           from '../Elements/NewsListing'
import NewsListingFirstItem  from '../Elements/NewsListingFirstItem'
import Pagination            from '../Elements/Pagination'
import {archiveListingStyle} from '../themes/archives'
import {postContentStyle}    from '../themes/layout'
import {isPaginated}         from '../utils/flags'

const NewsListings = ({post}) =>
    <Div theme={{postContentStyle, ...archiveListingStyle.wrapper}}>
        {post.related_posts.map((item, index) =>
            index === 0 && parseInt(post.page) === 1
                ? <NewsListingFirstItem key={index} post={item}/>
                : <NewsListing key={index} post={item}/>
        )}
        {isPaginated(post) && (
            <Pagination post={post}/>
        )}
    </Div>


NewsListings.propTypes = {
    post: PropTypes.object.isRequired,
}

export default NewsListings