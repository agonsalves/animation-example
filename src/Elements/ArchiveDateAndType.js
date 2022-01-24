import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import Span                      from '../Basic/Span'
import {archiveDateAndTypeStyle} from '../themes/archives'
import ArchiveDate               from './ArchiveDate'

const ArchiveDateAndType = ({date, itemType, displayDate, useDisplayDate, theme}) => {
    const type = Array.isArray(itemType) ? itemType[0].term : null

    return (
        <Div theme={{...archiveDateAndTypeStyle, ...theme}}>
            <ArchiveDate
                date={date}
                displayDate={displayDate}
                useDisplayDate={useDisplayDate}
                theme={{...archiveDateAndTypeStyle.date, ...theme.date}}
            />
            {!!type && (
                <Span theme={{...archiveDateAndTypeStyle.type, ...theme.type}}>{` ${type}`}</Span>
            )}
        </Div>
    )
}

ArchiveDateAndType.propTypes = {
    date: PropTypes.string.isRequired,
    displayDate: PropTypes.string,
    useDisplayDate: PropTypes.bool,
    itemType: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ])
}

ArchiveDateAndType.defaultProps = {
    itemType: '',
    displayDate: '',
    useDisplayDate: false,
    theme: {}
}

export default ArchiveDateAndType