import ButtonLarge               from '../Elements/ButtonLarge'
import PropTypes                 from 'prop-types'
import React                     from 'react'
import {searchButton}            from '../themes/buttons'
import Div                       from '../Basic/Div'
import H2                        from '../Basic/H2'
import RichText                  from '../Basic/RichText'
import ArchiveDate               from '../Elements/ArchiveDate'
import ArchiveDetailTopSection   from '../Elements/ArchiveDetailTopSection'
import Resources                 from '../Elements/Resources'
import SocialSharing             from '../Elements/SocialSharing'
import MicrositeDetailBreadcrumb from '../Microsites/MicrositeDetailBreadcrumb'
import {
    archiveDetailTitleStyle,
    eventsListingStyle
}                                from '../themes/archives'
import {postContentStyle}        from '../themes/layout'
import {parseHtml}               from '../utils/parseHtml'
import {
    buildPeopleList,
    EventDetailInfo
}                                from './EventDetail'

const MicrositeEventDetail = ({post}) =>
    <Div theme={postContentStyle}>
        <MicrositeDetailBreadcrumb slug={post.slug}/>
        <ArchiveDetailTopSection>
            <H2 theme={archiveDetailTitleStyle}>{post.post_title}</H2>
            <EventDetailInfo>
                <tbody>
                <tr>
                    <td>When:</td>
                    <td>
                        <ArchiveDate
                            date={post.date}
                            displayDate={post.display_date}
                            useDisplayDate={post.use_display_date}
                            startTime={post.time}
                            endTime={post.end_time}
                        />
                    </td>
                </tr>
                {post.people && (
                    <tr>
                        <td>People:</td>
                        <td>
                            {buildPeopleList(post.people, post.other_speakers)}
                        </td>
                    </tr>
                )}
                <tr>
                    <td>Where:</td>
                    <td>{post.where}</td>
                </tr>
                {post.location_details && (
                    <tr>
                        <td/>
                        <td>{parseHtml(post.location_details)}</td>
                    </tr>
                )}
                {post.er_third_party_registration_enabled === 'checked' && (
                    <tr>
                        <td/>
                        <td>
                            <ButtonLarge
                                theme={{...searchButton, ...eventsListingStyle.button}}
                                url={post.er_third_party_registration_link}
                                children={post.er_third_party_registration_button_text}
                            />
                        </td>
                    </tr>
                )}
                </tbody>
            </EventDetailInfo>
            <SocialSharing/>
        </ArchiveDetailTopSection>
        <RichText>{post.full_content}</RichText>
        {(post.add_document || post.add_link) && (
            <Resources documents={post.add_document} links={post.add_link}/>
        )}
    </Div>

MicrositeEventDetail.propTypes = {
    post: PropTypes.object.isRequired
}

export default MicrositeEventDetail