import React           from 'react'
import Div             from '../Basic/Div'
import LinkSwitch      from '../Elements/LinkSwitch'
import SiteAttribution from '../Elements/SiteAttribution'
import {
    secondaryFooterMenuStyle
}                      from '../themes/footer'
import PropTypes       from 'prop-types'

const SecondaryFooterMenu = ({theme}) =>
    <Div theme={{...secondaryFooterMenuStyle, ...theme}}>
        <SiteAttribution/>
        <Div>
            <LinkSwitch
                theme={secondaryFooterMenuStyle.item}
                url="/website-credits"
                children="Website Credits"
            />
            <LinkSwitch
                theme={secondaryFooterMenuStyle.item}
                url="/disclaimer"
                children="Disclaimer"
            />
        </Div>
    </Div>


SecondaryFooterMenu.propTypes = {
    theme: PropTypes.object
}

SecondaryFooterMenu.defaultProps = {
    theme: {}
}

export default SecondaryFooterMenu