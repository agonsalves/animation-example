import PropTypes              from 'prop-types'
import React, {memo}          from 'react'
import {connect}              from 'react-redux'
import withToggle             from '../utils/withToggle'
import MobileHeaderMenuToggle from './MobileHeaderMenuToggle'
import MobileMenu             from './MobileMenu'

const MobileHeaderMenu = memo(({isOpen, menu}) =>
    <>
        <MobileHeaderMenuToggle isOpen={isOpen}/>
        <MobileMenu isOpen={isOpen} menu={menu}/>
    </>
)

MobileHeaderMenu.displayName = 'MobileHeaderMenu'

MobileHeaderMenu.propTypes = {
    menu: PropTypes.array.isRequired,
    panelName: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired
}

const mapStateToProps = ({site}) => ({
    menu: site.menus.locations['mobile-header-menu']
})

export default connect(mapStateToProps)(withToggle(MobileHeaderMenu))