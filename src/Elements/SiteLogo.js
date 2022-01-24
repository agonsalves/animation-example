import PropTypes        from 'prop-types'
import React, {memo}    from 'react'
import printLogo        from '../assets/miles-logo-print.svg'
import logo             from '../assets/miles-logo.svg'
import Img              from '../Basic/Img'
import MotionDiv        from '../Basic/MotionDiv'
import {
    logoStyle,
    printLogoStyle
}                       from '../themes/header'
import LinkSwitch       from './LinkSwitch'

// internet explorer svg rendering hack (animating a property forces IE to redraw svg)
const logoVariants = {
    closed: {
        transform: 'translateZ(0)',
    },
    open: {
        transform: 'translateZ(50px)',
        transition: {
            delay: .25,
        }
    }
}

const SiteLogo = memo(({title, isOpen}) =>
    <LinkSwitch
        theme={logoStyle}
        url="/"
    >
        <MotionDiv animate={isOpen ? 'open' : 'closed'} variants={logoVariants}>
            <Img
                theme={logoStyle.image}
                src={logo}
                alt={`${title}'s logo`}
            />
            <Img
                src={printLogo}
                theme={{...printLogoStyle.siteLogo}}
                alt={`${title}'s logo`}
            />
        </MotionDiv>
    </LinkSwitch>
)

SiteLogo.displayName = 'SiteLogo'

SiteLogo.propTypes = {
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool
}

export default SiteLogo