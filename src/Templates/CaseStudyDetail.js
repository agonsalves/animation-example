import PropTypes               from 'prop-types'
import React                   from 'react'
import Div                     from '../Basic/Div'
import H1                      from '../Basic/H1'
import Img                     from '../Basic/Img'
import RichText                from '../Basic/RichText'
import ArchiveDetailTopSection from '../Elements/ArchiveDetailTopSection'
import Resources               from '../Elements/Resources'
import SocialSharing           from '../Elements/SocialSharing'
import {
    archiveDetailTitleStyle,
    caseStudyDetailImageStyle
}                              from '../themes/archives'
import {postContentStyle}      from '../themes/layout'

const CaseStudyDetail = ({post}) =>
    <Div theme={postContentStyle}>
        <ArchiveDetailTopSection>
            <H1 theme={archiveDetailTitleStyle}>{post.post_title}</H1>
            <SocialSharing/>
        </ArchiveDetailTopSection>
        {post.photo && (
            <Img theme={caseStudyDetailImageStyle} image={post.photo}/>
        )}
        <RichText>
            {post.full_content}
        </RichText>
        {(post.add_document || post.add_link) && (
            <Resources documents={post.add_document} links={post.add_link}/>
        )}
    </Div>

CaseStudyDetail.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CaseStudyDetail