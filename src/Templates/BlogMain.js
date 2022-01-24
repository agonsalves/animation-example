import PropTypes          from 'prop-types'
import React              from 'react'
import Div                from '../Basic/Div'
import BlogPostListing    from '../Elements/BlogPostListing'
import Pagination         from '../Elements/Pagination'
import {blogMainStyle}    from '../themes/blogs'
import {postContentStyle} from '../themes/layout'
import {isPaginated}      from '../utils/flags'

const BlogMain = ({post}) =>
    <Div theme={{...postContentStyle, ...blogMainStyle}}>
        {post.related_posts?.map(item =>
            <BlogPostListing
                key={item.id}
                title={item.post_title}
                image={item.thumbnail_teaser}
                description={item.full_content}
                url={item.slug}
                date={item.date}
                authors={item.bp_authors}
                guestAuthors={item.bp_guest_authors}
                outsideAuthors={item.bp_outside_authors}
            />
        )}
        {isPaginated(post) && (
            <Pagination post={post}/>
        )}
    </Div>

BlogMain.propTypes = {
    post: PropTypes.object.isRequired,
}

export default BlogMain