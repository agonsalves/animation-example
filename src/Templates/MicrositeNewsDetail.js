import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H2                        from '../Basic/H2'
import RichText                  from '../Basic/RichText'
import ArchiveDateAndType        from '../Elements/ArchiveDateAndType'
import ArchiveDetailTopSection   from '../Elements/ArchiveDetailTopSection'
import Resources                 from '../Elements/Resources'
import SocialSharing             from '../Elements/SocialSharing'
import MicrositeDetailBreadcrumb from '../Microsites/MicrositeDetailBreadcrumb'
import {
    archiveDetailTitleStyle,
    archiveSourceStyle
}                                from '../themes/archives'
import {postContentStyle}        from '../themes/layout'

const MicrositeNewsDetail = ({post}) =>
    <Div theme={postContentStyle}>
        <MicrositeDetailBreadcrumb slug={post.slug}/>
        <ArchiveDetailTopSection>
            <ArchiveDateAndType date={post.date} itemType={post.news_item_type}/>
            <H2 theme={archiveDetailTitleStyle}>{post.post_title}</H2>
            {post.source && (
                <Div theme={archiveSourceStyle}>{post.source}</Div>
            )}
            <SocialSharing/>
        </ArchiveDetailTopSection>
        <RichText>{post.full_content}</RichText>
        {(post.add_document || post.add_link) && (
            <Resources documents={post.add_document} links={post.add_link}/>
        )}
    </Div>

MicrositeNewsDetail.propTypes = {
    post: PropTypes.object.isRequired
}

export default MicrositeNewsDetail