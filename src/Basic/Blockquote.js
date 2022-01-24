import PropTypes         from 'prop-types'
import styled            from 'styled-components/macro'
import {blockQuoteStyle} from '../themes/elements'
import {themer}          from '../utils/themer'

const Blockquote = styled.blockquote`${props => themer({...blockQuoteStyle, ...props.theme})}`

Blockquote.propTypes = {
    theme: PropTypes.object,
}

export default Blockquote