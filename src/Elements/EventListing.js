import PropTypes             from 'prop-types'
import React                 from 'react'
import Div                   from '../Basic/Div'
import Img                   from '../Basic/Img'
import Span                  from '../Basic/Span'
import {
    archiveListingStyle,
    eventListingHeadshotsStyle,
    eventListingInfoStyle,
    eventsListingStyle
}                            from '../themes/archives'
import {isUpcoming}          from '../utils/upcomingEvents'
import ArchiveDate           from './ArchiveDate'
import ArchiveListingWrapper from './ArchiveListingWrapper'
import LinkSwitch            from './LinkSwitch'
import UpcomingEventFlag     from './UpcomingEventFlag'

const EventListing = ({post, theme}) =>
    <ArchiveListingWrapper theme={{...theme, ...eventsListingStyle}}>
        <LinkSwitch
            theme={{...archiveListingStyle.title, ...theme.title}}
            url={post.slug}
            children={post.post_title}
        />
        <Div theme={eventListingInfoStyle}>
            <div>
                <span>When: </span>
                <span>
                    <ArchiveDate
                        date={post.date}
                        displayDate={post.display_date}
                        useDisplayDate={post.use_display_date}
                        startTime={post.time}
                        endTime={post.end_time}
                        timezone={post.timezone}
                    />
                    {isUpcoming(post.date) && (
                        <UpcomingEventFlag date={post.date}/>
                    )}
                </span>
            </div>
            {post.where && (
                <div>
                    <span>Location: </span>
                    <span>{post.where}</span>
                </div>
            )}
            {post.people && (
                <div>
                    <span>People: </span>
                    <Span>
                        {post.people.map((person, index) =>
                            <Span key={Math.random()}>
                                {!!index ? ', ' : ''}
                                <Span theme={{'textDecoration': 'underline'}}>
                                    {person.post_title}
                                </Span>
                            </Span>
                        )}
                        {post.other_speakers && (
                            <>
                                {post.people && ', '}
                                {post.other_speakers}
                            </>
                        )}
                    </Span>
                </div>
            )}
            {isUpcoming(post.date) && post.people && (
                <Div theme={eventListingHeadshotsStyle}>
                    {post.people.map(person =>
                        person.thumbnail_teaser && (
                            <Img
                                image={person.thumbnail_teaser}
                                key={person.id}
                                theme={eventListingHeadshotsStyle.image}
                            />
                        )
                    )}
                </Div>
            )}
        </Div>
    </ArchiveListingWrapper>

EventListing.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

EventListing.defaultProps = {
    theme: {
        thumbnail: {},
        title: {},
    },
}

export default EventListing