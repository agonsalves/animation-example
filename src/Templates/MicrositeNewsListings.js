import idx                       from 'idx'
import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H2                        from '../Basic/H2'
import NewsListing               from '../Elements/NewsListing'
import {archiveListingStyle}     from '../themes/archives'
import {postContentStyle}        from '../themes/layout'
import {micrositePageTitleStyle} from '../themes/microsites'
import {isPaginated}             from "../utils/flags";
import Pagination                from "../Elements/Pagination";

const MicrositeNewsListings = ({post}) =>
    <Div theme={postContentStyle}>
        <H2 theme={{...micrositePageTitleStyle, ...archiveListingStyle.pageTitle}}>{post.post_title}</H2>
        {idx(post, _ => _.related_posts.map(item =>
            <NewsListing key={item.id} post={item}/>
        ))}
        {isPaginated(post) && (
            <Pagination post={post}/>
        )}
    </Div>

MicrositeNewsListings.propTypes = {
    post: PropTypes.object.isRequired,
}

export default MicrositeNewsListings