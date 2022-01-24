import PropTypes            from 'prop-types'
import React                from 'react'
import Div                  from '../Basic/Div'
import H2                   from '../Basic/H2'
import EventListing         from '../Elements/EventListing'
import Pagination           from '../Elements/Pagination'
import {
    archiveListingStyle,
    eventsHeadingStyle,
    eventsListingStyle,
    pastEventsHeadingStyle
} from '../themes/archives'
import {postContentStyle}   from '../themes/layout'
import {isPaginated}        from '../utils/flags'
import {plural}             from '../utils/helpers'
import {upcomingEvents}     from '../utils/upcomingEvents'

const EventListings = ({post}) => {
    const upcoming = upcomingEvents(post)
    return (
        <Div theme={{postContentStyle, ...archiveListingStyle.wrapper}}>
            {upcoming.isVisible && (
                <>
                    <H2 theme={eventsHeadingStyle}>Upcoming {plural('event')}</H2>
                    {upcoming.events.map(item =>
                        <EventListing
                            key={item.slug}
                            post={item}
                            theme={{...eventsListingStyle}}
                        />
                    )}
                    {post.related_posts.length > upcoming.events.length && (
                        <H2 theme={pastEventsHeadingStyle}>Past {plural('event')}</H2>
                    )}
                </>
            )}
            {post.related_posts.map(event => {
                if (upcoming.isVisible) {
                    if (!upcoming.events.includes(event))
                        return <EventListing
                            key={event.slug}
                            post={event}
                            theme={{...eventsListingStyle}}
                        />

                    return null
                } else {
                    return <EventListing
                        key={event.slug}
                        post={event}
                        theme={{...eventsListingStyle}}
                    />
                }
            })}
            {isPaginated(post) && (
                <Pagination post={post}/>
            )}
        </Div>
    )
}

EventListings.propTypes = {
    post: PropTypes.object.isRequired,
}

export default EventListings