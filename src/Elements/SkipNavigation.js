import React          from 'react'
import styled         from 'styled-components/macro'
import {hideVisually} from '../themes/elements'
import {themer}       from '../utils/themer'

const StyledLink = styled.a`${themer(hideVisually)}`

const SkipNavigation = () => <StyledLink href="#main">Skip Navigation</StyledLink>

export default SkipNavigation