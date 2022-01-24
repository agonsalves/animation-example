import React            from 'react'
import printLogo        from '../assets/miles-logo-print.svg'
import logo             from '../assets/miles-logo.svg'
import Div              from '../Basic/Div'
import Img              from '../Basic/Img'
import {printLogoStyle} from '../themes/header'
import {
    fakeHeaderStyleSwitch,
    pageFrameStyle
}                       from '../themes/layout'
import LinkSwitch       from './LinkSwitch'

const FloatingLogo = ({post, theme}) =>
    <Div
        className="floating-logo"
        theme={{
            ...fakeHeaderStyleSwitch(post),
            position: 'absolute',
            zIndex: 9,
            pointerEvents: 'none'
        }}
    >
        <LinkSwitch url="/" theme={{pointerEvents: 'auto'}}>
            <Img
                src={logo}
                theme={{...pageFrameStyle.logo, ...theme.logo}}
            />
            <Img
                src={printLogo}
                theme={{...printLogoStyle.pageFrame}}
            />
        </LinkSwitch>
    </Div>

export default FloatingLogo