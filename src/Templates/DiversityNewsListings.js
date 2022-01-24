import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H1                        from '../Basic/H1'
import NewsListing               from '../Elements/NewsListing'
import NewsListingFirstItem      from '../Elements/NewsListingFirstItem'
import Pagination                from '../Elements/Pagination'
import {pageTitleInContentStyle} from '../themes/elements'
import {postContentStyle}        from '../themes/layout'
import {diversityStyle}          from '../themes/pages'
import {isPaginated}             from '../utils/flags'

const DiversityNewsListings = ({post}) =>
    <Div theme={postContentStyle}>
        <H1 theme={pageTitleInContentStyle}>{post.post_title}</H1>
        {post.diversity_news && post.diversity_news.map((diverisity_news, index) =>
            index === 0
                ? <NewsListingFirstItem key={index} post={diverisity_news} theme={{...diversityStyle.newsItem}}/>
                : <NewsListing key={index} post={diverisity_news}/>
        )}
        {isPaginated(post) && (
            <Pagination post={post}/>
        )}

    </Div>

DiversityNewsListings.propTypes = {
    post: PropTypes.object.isRequired,
}

export default DiversityNewsListings