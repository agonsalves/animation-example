import PropTypes           from 'prop-types'
import styled              from 'styled-components/macro'
import {numberedListStyle} from '../themes/elements'
import {themer}            from '../utils/themer'

const NumberedList = styled.ol`${props => themer({...numberedListStyle, ...props.theme})}`

NumberedList.propTypes = {
    theme: PropTypes.object,
}

export default NumberedList