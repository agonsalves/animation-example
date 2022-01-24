import PropTypes                                     from 'prop-types'
import React                                         from 'react'
import Div                                           from '../Basic/Div'
import H3                                            from '../Basic/H3'
import ArchiveDate                                   from '../Elements/ArchiveDate'
import ButtonSmall                                   from '../Elements/ButtonSmall'
import LinkSwitch                                    from '../Elements/LinkSwitch'
import {upcomingEventsWidgetStyle, widgetTitleStyle} from '../themes/sidebars'
import {plural}                                      from '../utils/helpers'
import Widget                                        from './Widget'

const UpcomingEventsWidget = ({upcoming}) =>
    <Widget theme={upcomingEventsWidgetStyle}>
        <H3 theme={widgetTitleStyle}>Upcoming {plural('event')}</H3>
        {upcoming && upcoming.map(post =>
            <Div theme={upcomingEventsWidgetStyle.item} key={post.slug}>
                <LinkSwitch
                    theme={upcomingEventsWidgetStyle.title}
                    url={post.slug}
                    children={post.post_title}
                />
                <ArchiveDate
                    date={post.date}
                    displayDate={post.display_date}
                    useDisplayDate={post.use_display_date}
                />
                <Div>{post.where}</Div>
                <ButtonSmall label="More" url={post.slug}/>
            </Div>
        )}
    </Widget>

UpcomingEventsWidget.propTypes = {
    upcoming: PropTypes.array.isRequired,
}

export default UpcomingEventsWidget