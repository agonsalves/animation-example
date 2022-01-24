import idx                       from 'idx'
import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H2                        from '../Basic/H2'
import EventListing              from '../Elements/EventListing'
import {eventsHeadingStyle}      from '../themes/archives'
import {postContentStyle}        from '../themes/layout'
import {micrositePageTitleStyle} from '../themes/microsites'
import {plural}                  from '../utils/helpers'
import {upcomingEvents}          from '../utils/upcomingEvents'
import {isPaginated}             from "../utils/flags";
import Pagination                from "../Elements/Pagination";

const MicrositeEventListings = ({post}) => {
    const upcoming = upcomingEvents(post)

    return (
        <Div theme={postContentStyle}>
            {(upcoming.isVisible && (
                <H2 theme={{...eventsHeadingStyle, ...micrositePageTitleStyle}}>Upcoming {plural('event')}</H2>
            )) || (
                <H2 theme={micrositePageTitleStyle}>{post.post_title}</H2>
            )}

            {upcoming.isVisible && upcoming.events.map(event =>
                <EventListing key={event.slug} post={event}/>
            )}

            {upcoming.isVisible && post.related_posts && post.related_posts.length > upcoming.events.length && (
                <H2 theme={{...eventsHeadingStyle, ...micrositePageTitleStyle}}>Past {plural('event')}</H2>
            )}

            {idx(post, _ => _.related_posts.map((event, index) => {
                if (upcoming.isVisible) {
                    return !upcoming.events.includes(event)
                        ? <EventListing key={index} post={event}/>
                        : null
                } else {
                    return <EventListing key={index} post={event}/>
                }
            }))}
            {isPaginated(post) && (
                <Pagination post={post}/>
            )}
        </Div>
    )
}

MicrositeEventListings.propTypes = {
    post: PropTypes.object.isRequired
}

export default MicrositeEventListings