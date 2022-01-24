import PropTypes               from 'prop-types'
import React, {
    useEffect,
    useState
}                              from 'react'
import {connect}               from 'react-redux'
import Div                     from '../Basic/Div'
import Icon                    from '../Basic/Icon'
import Li                      from '../Basic/Li'
import Span                    from '../Basic/Span'
import Ul                      from '../Basic/Ul'
import LinkSwitch              from '../Elements/LinkSwitch'
import Overlay                 from '../Elements/Overlay'
import {getCurrentPost}        from '../redux/selectors'
import {
    mobileMenuBackLinkStyle,
    mobileMenuStyle
}                              from '../themes/menus'
import {isNavItemActive}       from '../utils/isNavItemActive'
import {absoluteToRelativeUrl} from '../utils/url'
import {
    arrowCircleLeft,
    arrowCircleRight
}                              from '../variables/iconLibrary'

const MobileMenuItem = ({currentLevel, item, level, handleBack, handleForward, handleClose, post, visibleSubMenu, initial}) =>
    <Li theme={{...mobileMenuStyle.item}}>
        {(!item.children && (
            <LinkSwitch
                initial={isNavItemActive(item, post) ? initial(level, parseInt(item.menu_item_parent)) : false}
                theme={mobileMenuStyle.link}
                url={absoluteToRelativeUrl(item.url)}
                type="nav"
                children={item.title}
                isActive={isNavItemActive(item, post)}
                onClick={handleClose}
                data={true}
            />
        )) || (
            <>
                <Span
                    theme={mobileMenuStyle.link}
                    onClick={() => handleForward(item.ID)}
                    className={item.children.find(child => isNavItemActive(child, post)) ? 'active' : ''}
                >
                    {item.title}
                    <Icon theme={mobileMenuStyle.icon} icon={arrowCircleRight}/>
                </Span>
                <MenuBuilder
                    index={item.ID}
                    menu={item.children}
                    level={level + 1}
                    handleBack={handleBack}
                    handleForward={handleForward}
                    currentLevel={currentLevel}
                    visibleSubMenu={visibleSubMenu}
                    post={post}
                    initial={initial}
                />
            </>
        )}
    </Li>

const MenuBuilder = ({menu, level, currentLevel, handleBack, handleForward, handleClose, post, visibleSubMenu, index, initial}) =>
    <Ul
        theme={{...mobileMenuStyle.list, left: `100%`}}
        level={level}
        currentLevel={currentLevel}
        style={
            index === 0
            || (index === visibleSubMenu && currentLevel >= level)
            || menu.find(menuItem => menuItem.ID === visibleSubMenu)
                ? {
                    zIndex: 999,
                    display: 'block'
                }
                : currentLevel < level || index !== visibleSubMenu
                ? {display: 'none'}
                : {}
        }
    >
        {level > 1 && (
            <Li theme={mobileMenuStyle.item}>
                <Span
                    theme={mobileMenuBackLinkStyle}
                    onClick={() => handleBack(parseInt(menu[0].menu_item_parent))} // from the top item
                >
                    <Icon theme={mobileMenuBackLinkStyle.icon} icon={arrowCircleLeft}/>
                    {' '}
                    Back
                </Span>
            </Li>
        )}
        {menu && menu.map(item => (
            <MobileMenuItem
                key={item.ID}
                item={item}
                level={level}
                handleBack={handleBack}
                handleForward={handleForward}
                handleClose={handleClose}
                currentLevel={currentLevel}
                visibleSubMenu={visibleSubMenu}
                post={post}
                initial={initial}
            />
        ))}
    </Ul>

const MobileMenu = ({isOpen, pathname, menu, post, handleClose}) => {
    const [isInitialized, setIsInitialized] = useState(false)
    const [menuState, setMenuState] = useState({
        currentLevel: 1,
        visibleSubMenu: 0,
    })

    const handleBack = visibleSubMenu => {
        setMenuState({
            currentLevel: menuState.currentLevel - 1,
            visibleSubMenu: visibleSubMenu || 0,
        })
    }

    const handleForward = visibleSubMenu => {
        setMenuState({
            currentLevel: menuState.currentLevel + 1,
            visibleSubMenu: visibleSubMenu || 0,
        })
    }

    const initialize = (level, visibleSubMenu) => {
        if (menuState.currentLevel !== level && !isInitialized)
            setMenuState({
                currentLevel: level,
                visibleSubMenu: visibleSubMenu
            })

        setIsInitialized(true)
    }

    useEffect(() => {
        if (isOpen) handleClose()
    }, [pathname, isOpen, handleClose])

    return (
        <Div
            as="nav"
            theme={{...mobileMenuStyle, display: isOpen ? 'block' : 'none', left: `-${menuState.currentLevel}00%`}}
        >
            <Overlay isOpen={isOpen}/>
            <MenuBuilder
                index={0}
                menu={menu}
                level={1}
                currentLevel={menuState.currentLevel}
                handleBack={handleBack}
                handleForward={handleForward}
                handleClose={() => null}
                visibleSubMenu={menuState.visibleSubMenu}
                post={post}
                initial={initialize}
            />
        </Div>
    )
}

MobileMenu.propTypes = {
    pathname: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    menu: PropTypes.array.isRequired,
    post: PropTypes.object.isRequired,
    handleClose: PropTypes.func
}

MobileMenu.defaultProps = {
    handleClose: () => null
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    post: getCurrentPost(state)
})

export default connect(mapStateToProps)(MobileMenu)