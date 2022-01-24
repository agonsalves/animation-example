import React              from 'react'
import Div                from '../Basic/Div'
import H3                 from '../Basic/H3'
import ButtonLarge        from '../Elements/ButtonLarge'
import {postContentStyle} from '../themes/layout'

const Error404 = () =>
    <Div theme={postContentStyle}>
        <H3>The page that you are looking for was not found.</H3>
        <p>It's possible your entered the address incorrectly or are looking for a page that has moved.</p>
        <ButtonLarge url="/" label="Return to Homepage"/>
    </Div>

export default Error404