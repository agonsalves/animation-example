import PropTypes          from 'prop-types'
import {Link}             from 'react-router-dom'
import styled             from 'styled-components/macro'
import {defaultLinkStyle} from '../themes/elements'
import {themer}           from '../utils/themer'

const StyledLink = styled(Link)`${props => themer({...defaultLinkStyle, ...props.theme})}`

StyledLink.propTypes = {
    theme: PropTypes.object,
}

export default StyledLink