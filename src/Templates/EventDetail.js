import PropTypes                     from 'prop-types'
import React                         from 'react'
import styled                        from 'styled-components/macro'
import Div                           from '../Basic/Div'
import H1                            from '../Basic/H1'
import RichText                      from '../Basic/RichText'
import ArchiveDate                   from '../Elements/ArchiveDate'
import ArchiveDetailTopSection       from '../Elements/ArchiveDetailTopSection'
import ArchiveListingTeaserThumbnail from '../Elements/ArchiveListingTeaserThumbnail'
import ButtonLarge                   from '../Elements/ButtonLarge'
import LinkSwitch                    from '../Elements/LinkSwitch'
import Resources                     from '../Elements/Resources'
import SocialSharing                 from '../Elements/SocialSharing'
import UpcomingEventFlag             from '../Elements/UpcomingEventFlag'
import {
    archiveDetailTitleStyle,
    eventsListingStyle
}                                    from '../themes/archives'
import {searchButton}                from '../themes/buttons'
import {postContentStyle}            from '../themes/layout'
import {parseHtml}                   from '../utils/parseHtml'
import {isUpcoming}                  from '../utils/upcomingEvents'

export const EventDetailInfo = styled.table`
    border: 0;
    padding: 0;
    margin: 0;
    width: 80%;
    td {
      vertical-align: top;
    };
    tr {
        line-height: 1.8
    };
    td p {
        margin-bottom: 0
    }
`

export const buildPeopleList = (people, other_speakers) =>
    <>
        {people && people.map((item, index) =>
            <React.Fragment key={index}>
                <LinkSwitch url={item.slug} theme={{textDecoration: 'underline'}}>{item.post_title}</LinkSwitch>
                {(people.length - 1 > index ? ', ' : null)}
            </React.Fragment>
        )}
        {other_speakers && (
            <>
                {people && ', '}
                {other_speakers}
            </>
        )}
    </>

const EventDetail = ({post}) =>
    <Div theme={postContentStyle}>
        <ArchiveDetailTopSection>
            <H1 theme={archiveDetailTitleStyle}>{post.post_title}</H1>
            <EventDetailInfo>
                <tbody>
                <tr>
                    <td>When:</td>
                    <td>
                        <ArchiveDate
                            date={post.date}
                            displayDate={post.display_date}
                            useDisplayDate={!!post.use_display_date}
                            startTime={post.time}
                            endTime={post.end_time}
                            timezone={post.timezone}
                        />
                        {isUpcoming(post.date) && (
                            <UpcomingEventFlag date={post.date}/>
                        )}
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
                {post.where && (
                    <tr>
                        <td>Location:</td>
                        <td>{post.where}</td>
                    </tr>
                )}
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
        {post.thumbnail_teaser && (
            <ArchiveListingTeaserThumbnail
                img={post.thumbnail_teaser}
                url={post.slug}
                theme={{float: 'left'}}
            />
        )}
        <RichText>{post.full_content}</RichText>
        {(post.add_document || post.add_link) && (
            <Resources documents={post.add_document} links={post.add_link}/>
        )}
    </Div>

EventDetail.propTypes = {
    post: PropTypes.object.isRequired
}

export default EventDetail