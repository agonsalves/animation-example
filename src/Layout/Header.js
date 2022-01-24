import PropTypes         from 'prop-types'
import React, {memo}     from 'react'
import {connect}         from 'react-redux'
import HeaderPanel       from '../Elements/HeaderPanel'
import HeaderPanelToggle from '../Elements/HeaderPanelToggle'
import SkipNavigation    from '../Elements/SkipNavigation'

const Header = memo(({theme, firmName}) =>
    <>
        <SkipNavigation/>
        <HeaderPanelToggle panelName="header-panel"/>
        <HeaderPanel panelName="header-panel" firmName={firmName}/>
    </>
)

Header.displayName = 'Header'

Header.propTypes = {
    theme: PropTypes.object,
    firmName: PropTypes.string.isRequired
}

Header.defaultProps = {
    theme: {}
}

const mapStateToProps = ({site}) => ({
    firmName: site.config.firmName
})

export default connect(mapStateToProps)(Header)