import PropTypes          from 'prop-types'
import styled             from 'styled-components/macro'
import {defaultLinkStyle} from '../themes/elements'
import {themer}           from '../utils/themer'

const Anchor = styled.a`${props => themer({...defaultLinkStyle, ...props.theme})}`

Anchor.propTypes = {
    theme: PropTypes.object,
}

Anchor.defaultProps = {
    theme: {}
}

export default Anchor