import idx               from 'idx'
import PropTypes         from 'prop-types'
import React, {memo}     from 'react'
import {connect}         from 'react-redux'
import Div               from '../Basic/Div'
import Ul                from '../Basic/Ul'
import {headerMenuStyle} from '../themes/menus'
import HeaderMenuItem    from './HeaderMenuItem'

const HeaderMenu = memo(({menu, theme, isOpen, menuItemRef, setIsSubMenuExpanded}) =>
    <Div
        theme={{...headerMenuStyle, ...theme}}
        as="nav"
        ref={menuItemRef}
    >
        <Ul theme={{...headerMenuStyle.list, ...theme.list}}>
            {menu.map((item, index) =>
                <HeaderMenuItem
                    key={index}
                    item={item}
                    isOpen={isOpen}
                    setIsSubMenuExpanded={setIsSubMenuExpanded}
                />
            )}
        </Ul>
    </Div>
)


HeaderMenu.displayName = 'HeaderMenu'

HeaderMenu.propTypes = {
    menu: PropTypes.array.isRequired,
    theme: PropTypes.object
}

HeaderMenu.defaultProps = {
    menu: [],
    theme: {}
}

const mapStateToProps = ({site}) => ({
    menu: idx(site, _ => _.menus.locations['header-menu']),
})

export default connect(mapStateToProps)(HeaderMenu)