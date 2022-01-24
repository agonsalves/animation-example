import idx               from 'idx'
import PropTypes         from 'prop-types'
import React             from 'react'
import {connect}         from 'react-redux'
import Li                from '../Basic/Li'
import Ul                from '../Basic/Ul'
import LinkSwitch        from '../Elements/LinkSwitch'
import {footerMenuStyle} from '../themes/footer'

const FooterMenu = ({menu, theme}) => menu && (
    <nav>
        <Ul theme={{...footerMenuStyle, ...theme}}>
            {menu.map(item =>
                <Li key={item.ID} theme={{...footerMenuStyle.listItem, ...theme.listItem}}>
                    <LinkSwitch
                        theme={{...footerMenuStyle.link, ...theme.link}}
                        url={item.url}
                        children={item.title}
                        type="nav"
                    />
                </Li>
            )}
        </Ul>
    </nav>
)


FooterMenu.propTypes = {
    menu: PropTypes.array.isRequired,
    theme: PropTypes.object,
}

FooterMenu.defaultProps = {
    theme: {
        listItem: {},
        link: {}
    },
    menu: []
}

const mapStateToProps = ({site}) => ({
    menu: idx(site, _ => _.menus.locations['footer-menu']),
})

export default connect(mapStateToProps)(FooterMenu)