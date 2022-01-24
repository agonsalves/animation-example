import PropTypes             from 'prop-types'
import styled                from 'styled-components/macro'
import {defaultLinkStyle}    from '../themes/elements'
import {themer}              from '../utils/themer'

const Article = styled.article`${props => themer({...defaultLinkStyle, ...props.theme})}`

Article.propTypes = {
	theme: PropTypes.object,
}

Article.defaultProps = {
	theme: {},
}

export default Article