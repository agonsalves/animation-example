import PropTypes           from 'prop-types'
import styled              from 'styled-components/macro'
import {bulletedListStyle} from '../themes/elements'
import {themer}            from '../utils/themer'

const BulletedList = styled.ul`${props => themer({...bulletedListStyle, ...props.theme})}`

BulletedList.propTypes = {
    theme: PropTypes.object,
}

export default BulletedList