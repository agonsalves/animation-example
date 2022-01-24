import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H1                        from '../Basic/H1'
import RichText                  from '../Basic/RichText'
import ArchiveDetailTopSection   from '../Elements/ArchiveDetailTopSection'
import BlogPostAuthors           from '../Elements/BlogPostAuthors'
import BlogPostByline            from '../Elements/BlogPostByline'
import BlogPostCategories        from '../Elements/BlogPostCategories'
import BlogPostRelatedItems      from '../Elements/BlogPostRelatedItems'
import SocialSharing             from '../Elements/SocialSharing'
import {archiveDetailTitleStyle} from '../themes/archives'
import {
    blogPostDetailRelatedInfoStyle,
    blogPostDetailStyle
}                                from '../themes/blogs'
import {postContentStyle}        from '../themes/layout'
import {plural}                  from '../utils/helpers'

const BlogPostDetail = ({post}) =>
    <Div theme={postContentStyle}>
        <ArchiveDetailTopSection>
            <H1 theme={archiveDetailTitleStyle}>{post.post_title}</H1>
            <BlogPostByline
                authors={post.bp_authors}
                guestAuthors={post.bp_guest_authors}
                outsideAuthors={post.bp_outside_authors}
                date={post.date}
                theme={blogPostDetailStyle.byline}
            />
            <SocialSharing/>
        </ArchiveDetailTopSection>
        <RichText>{post.full_content}</RichText>
        <Div theme={blogPostDetailRelatedInfoStyle}>
            {post.bp_authors && (
                <BlogPostAuthors authors={post.bp_authors}/>
            )}
            {post.practice_area && (
                <BlogPostRelatedItems posts={post.practice_area} title={`Related ${plural('practice-area')}`}/>
            )}
            {post.industry && (
                <BlogPostRelatedItems posts={post.industry} title={`Related ${plural('industry')}`}/>
            )}
            {post.bp_categories && (
                <BlogPostCategories post={post}/>
            )}
        </Div>
    </Div>

BlogPostDetail.propTypes = {
    post: PropTypes.object.isRequired,
}

export default BlogPostDetail