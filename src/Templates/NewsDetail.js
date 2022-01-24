import PropTypes               from 'prop-types'
import React                   from 'react'
import Div                     from '../Basic/Div'
import H1                      from '../Basic/H1'
import RichText                from '../Basic/RichText'
import ArchiveDateAndType      from '../Elements/ArchiveDateAndType'
import ArchiveDetailTopSection from '../Elements/ArchiveDetailTopSection'
import Resources               from '../Elements/Resources'
import SocialSharing           from '../Elements/SocialSharing'
import {
    archiveDetailStyle,
    archiveDetailTitleStyle,
    archiveSourceStyle
}                              from '../themes/archives'
import {postContentStyle}      from '../themes/layout'

const NewsDetail = ({post}) =>
    <Div theme={{postContentStyle, ...archiveDetailStyle}}>
        <ArchiveDetailTopSection>
            <ArchiveDateAndType date={post.date} itemType={post.news_item_type}/>
            <H1 theme={archiveDetailTitleStyle}>{post.post_title}</H1>
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

NewsDetail.propTypes = {
    post: PropTypes.object.isRequired,
}

export default NewsDetail