import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H2                        from '../Basic/H2'
import Icon                      from '../Basic/Icon'
import RichText                  from '../Basic/RichText'
import ArchiveDateAndType        from '../Elements/ArchiveDateAndType'
import ArchiveDetailTopSection   from '../Elements/ArchiveDetailTopSection'
import LinkSwitch                from '../Elements/LinkSwitch'
import Resources                 from '../Elements/Resources'
import SocialSharing             from '../Elements/SocialSharing'
import MicrositeDetailBreadcrumb from '../Microsites/MicrositeDetailBreadcrumb'
import {
    archiveDetailTitleStyle,
    archiveDetailTopStyle,
    archiveSourceStyle,
    publicationDetailPdfStyle,
    publicationDetailTitleStyle,
    resourcesStyle
}                                from '../themes/archives'
import {postContentStyle}        from '../themes/layout'
import {file}                    from '../variables/iconLibrary'

const MicrositePublicationDetail = ({post}) =>
    <Div theme={postContentStyle}>
        <MicrositeDetailBreadcrumb slug={post.slug}/>
        <ArchiveDetailTopSection>
            <H2 theme={{...archiveDetailTitleStyle, ...publicationDetailTitleStyle}}>{post.post_title}</H2>
            <ArchiveDateAndType
                date={post.date}
                itemType={post.publication_type}
                displayDate={post.display_date}
                useDisplayDate={!!post.use_display_date}
                theme={{...archiveDetailTopStyle.publicationDateAndType}}
            />
            {(post.publication || post.byline) && (
                <Div>
                    {post.publication && (
                        <Div theme={archiveSourceStyle}>{post.publication}</Div>
                    )}
                    {post.byline && (
                        <Div theme={{...archiveSourceStyle, ...archiveSourceStyle.byline}}>{post.byline}</Div>
                    )}
                </Div>
            )}
            <SocialSharing/>
        </ArchiveDetailTopSection>
        {post.upload_pdf && (
            <Div theme={publicationDetailPdfStyle}>
                <Icon icon={file} theme={resourcesStyle.icon}/>
                <LinkSwitch
                    url={post.upload_pdf}
                    children="Download a PDF of this Piece"
                    theme={publicationDetailPdfStyle.link}
                />
            </Div>
        )}
        <RichText>{post.full_content}</RichText>
        {(post.add_document || post.add_link) && (
            <Resources documents={post.add_document} links={post.add_link}/>
        )}
    </Div>

MicrositePublicationDetail.propTypes = {
    post: PropTypes.object.isRequired
}

export default MicrositePublicationDetail