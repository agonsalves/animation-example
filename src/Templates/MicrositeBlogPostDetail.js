import PropTypes                        from 'prop-types'
import React                            from 'react'
import {connect}                        from 'react-redux'
import Div                              from '../Basic/Div'
import H1                               from '../Basic/H1'
import RichText                         from '../Basic/RichText'
import ArchiveDateAndType               from '../Elements/ArchiveDateAndType'
import ArchiveDetailTopSection          from '../Elements/ArchiveDetailTopSection'
import BlogPostAuthors                  from '../Elements/BlogPostAuthors'
import SocialSharing                    from '../Elements/SocialSharing'
import MicrositeDetailBreadcrumb        from '../Microsites/MicrositeDetailBreadcrumb'
import {archiveDetailTitleStyle}        from '../themes/archives'
import {blogPostDetailRelatedInfoStyle} from '../themes/blogs'
import {postContentStyle}               from '../themes/layout'
import {stripLastSlug}                  from '../utils/url'

const MicrositeBlogPostDetail = ({breadcrumbText, post}) =>
    <Div theme={postContentStyle}>
        <MicrositeDetailBreadcrumb slug={post.slug}>{breadcrumbText}</MicrositeDetailBreadcrumb>
        <ArchiveDetailTopSection>
            <H1 theme={archiveDetailTitleStyle}>{post.post_title}</H1>
            <ArchiveDateAndType
                date={post.date}
                itemType={post.publication_type}
                displayDate={post.display_date}
                useDisplayDate={!!post.use_display_date}
            />
            <SocialSharing/>
        </ArchiveDetailTopSection>
        <RichText>{post.full_content}</RichText>
        <Div theme={blogPostDetailRelatedInfoStyle}>
            {post.bp_authors && (
                <BlogPostAuthors authors={post.bp_authors}/>
            )}
        </Div>
    </Div>

MicrositeBlogPostDetail.propTypes = {
    breadcrumbText: PropTypes.string.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = ({posts}, {post}) => ({
    breadcrumbText: posts[stripLastSlug(post.slug)].post_title,
})

export default connect(mapStateToProps)(MicrositeBlogPostDetail)