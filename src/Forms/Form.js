import PropTypes     from 'prop-types'
import React, {memo} from 'react'
import styled        from 'styled-components'
import {themer}      from '../utils/themer'

const StyledForm = styled.form`${props => themer(props.theme)}`

const Form = memo(({theme, ...props}) =>
    <StyledForm theme={theme} {...props} autoComplete="off"/>
)

Form.displayName = 'Form'

Form.propTypes = {
    theme: PropTypes.object,
}

Form.defaultProps = {
    theme: {}
}

export default Form