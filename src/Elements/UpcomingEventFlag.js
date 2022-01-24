import dayjs                    from 'dayjs'
import weekOfYear               from 'dayjs/plugin/weekOfYear'
import PropTypes                from 'prop-types'
import React                    from 'react'
import Span                     from '../Basic/Span'
import {upcomingEventFlagStyle} from '../themes/archives'

dayjs.extend(weekOfYear)

const isThisMonth = date => dayjs(date).month() === dayjs().month()
const isNextMonth = date => dayjs(date).month() === dayjs().add(1, 'month').month()
const isNextWeek = date => dayjs(date).week() === dayjs().add(1, 'week').week()
const isThisWeek = date => dayjs(date).week() === dayjs().week()
const isTomorrow = date => dayjs(date).date() === dayjs().add(1, 'day').date() && isThisMonth(date)
const isToday = date => dayjs(date).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')



const UpcomingEventFlag = ({date}) => {

    let flag = false
    if (isToday(date))
        flag = 'Today'
    else if (isTomorrow(date))
        flag = 'Tomorrow'
    else if (isThisWeek(date))
        flag = 'This Week'
    else if (isNextWeek(date))
        flag = 'Next Week'
    else if (isThisMonth(date))
        flag = 'This Month'
    else if (isNextMonth(date))
        flag = 'Next Month'

    return flag ? (
        <Span theme={upcomingEventFlagStyle} className={flag.replace(/\s/g, '-').toLowerCase()}>{flag}</Span>
    ) : null
}

UpcomingEventFlag.propTypes = {
    date: PropTypes.string.isRequired
}

export default UpcomingEventFlag