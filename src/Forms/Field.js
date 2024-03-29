import PropTypes           from 'prop-types'
import styled              from 'styled-components/macro'
import {defaultFieldStyle} from '../themes/forms'
import {themer}            from '../utils/themer'

const Field = styled.input`${props => themer({...defaultFieldStyle, ...props.theme})}`

Field.propTypes = {
    theme: PropTypes.object,
    name: PropTypes.string.isRequired
}

Field.defaultProps = {
    theme: {}
}

export default Field