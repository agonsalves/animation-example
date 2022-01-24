import PropTypes        from 'prop-types'
import React, {memo}    from 'react'
import {connect}        from 'react-redux'
import Div              from '../Basic/Div'
import SiteLogo         from '../Elements/SiteLogo'
import SkipNavigation   from '../Elements/SkipNavigation'
import MobileSearch     from '../Forms/MobileSearch'
import MobileHeaderMenu from '../Menus/MobileHeaderMenu'
import {headerStyle}    from '../themes/header'

const MobileHeader = memo(({firmName}) =>
    <Div as="header" className="header" theme={headerStyle}>
        <Div theme={headerStyle.inner}>
            <SiteLogo title={firmName}/>
            <SkipNavigation/>
            <MobileSearch panelName={'mobile-search'}/>
            <MobileHeaderMenu panelName={'mobile-header-menu'}/>
        </Div>
    </Div>
)

MobileHeader.displayName = 'MobileHeader'

MobileHeader.propTypes = {
    firmName: PropTypes.string.isRequired
}

MobileHeader.defaultProps = {
    theme: {}
}

const mapStateToProps = ({site}) => ({
    firmName: site.config.firmName,
})

export default connect(mapStateToProps)(MobileHeader)