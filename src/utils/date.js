import dayjs     from 'dayjs'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * Formats a given date according to the global date format
 *
 * @param {string} date
 * @param dateFormat
 * @returns {string}
 * @constructor
 */
const FormattedDate = ({date, dateFormat}) => {
    dateFormat = dateFormat.replace('F', 'MMMM').replace('j', 'DD').replace('Y', 'YYYY')
    return dayjs(date).format(dateFormat)
}

FormattedDate.propTypes = {
    date: PropTypes.string.isRequired,
    dateFormat: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    dateFormat: state.site.config.dateFormat
})

export default connect(mapStateToProps)(FormattedDate)