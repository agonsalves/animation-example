import dayjs     from 'dayjs'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * Formats a given time according to the global time format
 *
 * @param {string} time
 * @param timeFormat
 * @returns {string}
 * @constructor
 */
const FormattedTime = ({time, timeFormat}) => {
    timeFormat = timeFormat.replace('g', 'h').replace('i', 'mm').replace(' a', 'a')
    return dayjs('1970-01-01 ' + time).format(timeFormat)
}

FormattedTime.propTypes = {
    time: PropTypes.string.isRequired,
    timeFormat: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    timeFormat: state.site.config.timeFormat
})

export default connect(mapStateToProps)(FormattedTime)