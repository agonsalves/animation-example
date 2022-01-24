import PropTypes           from 'prop-types'
import React, {memo}       from 'react'
import Div                 from '../Basic/Div'
import AccoladeBadge       from '../Elements/AccoladeBadge'
import Copyright           from '../Elements/Copyright'
import SocialMediaLinks    from '../Elements/SocialMediaLinks'
import FooterMenu          from '../Menus/FooterMenu'
import SecondaryFooterMenu from '../Menus/SecondaryFooterMenu'
import {footerStyle}       from '../themes/footer'

const Footer = memo(({theme}) =>
    <Div as="footer" theme={{...footerStyle, ...theme}}>
        <Div theme={{...footerStyle.inner, ...theme.inner}}>
            <Div theme={{maxWidth: '70%'}}>
                <FooterMenu/>
                <SecondaryFooterMenu/>
            </Div>
            <Div theme={{...footerStyle.inner.right, ...theme.inner.right}}>
                <Copyright/>
                <SocialMediaLinks/>
            </Div>
            <AccoladeBadge/>
        </Div>
    </Div>
)

Footer.displayName = 'Footer'

Footer.propTypes = {
    theme: PropTypes.object,
}

Footer.defaultProps = {
    theme: {
        inner: {}
    },
}

export default Footer