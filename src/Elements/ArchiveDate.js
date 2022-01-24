import PropTypes        from 'prop-types'
import React            from 'react'
import Span             from '../Basic/Span'
import Date             from '../utils/date'
import Time             from '../utils/time'
import {timeZoneConfig} from '../variables/timeZones'

const ArchiveDate = ({date, displayDate, useDisplayDate, startTime, endTime, timezone, theme}) => {
    let tz = timeZoneConfig.find(t => t.gmt === timezone)

    return (
        <Span theme={{...theme}}>
        <time dateTime={date}>
            {displayDate && useDisplayDate ? displayDate : <Date date={date}/>}
            {startTime && (
                <span>
                    {startTime && <span> at <Time time={startTime}/></span>}
                    {endTime && <span> – <Time time={endTime}/></span>}
                    {tz && <span> {tz.abv}</span>}
                </span>
            )}
        </time>
        </Span>
    )
}

ArchiveDate.propTypes = {
    date: PropTypes.string.isRequired,
    displayDate: PropTypes.string,
    useDisplayDate: PropTypes.bool,
    startTime: PropTypes.string,
    endTime: PropTypes.string
}

ArchiveDate.defaultProps = {
    useDisplayDate: false
}

export default ArchiveDate