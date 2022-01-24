import PropTypes               from 'prop-types'
import React, {
    memo,
    useState
}                              from 'react'
import Icon                    from '../Basic/Icon'
import Li                      from '../Basic/Li'
import MotionDiv               from '../Basic/MotionDiv'
import LinkSwitch              from '../Elements/LinkSwitch'
import {decodeEntities}        from '../utils/helpers'
import {isNavItemActive}       from '../utils/isNavItemActive'
import {absoluteToRelativeUrl} from '../utils/url'
import {
    angleDown,
    angleUp
}                              from '../variables/iconLibrary'
import MenuToUl                from './MenuToUl'

const MenuListItem = memo(({item, post, theme, ...props}) => {
    const [isOpen, setIsOpen] = useState(false)
    const isExpandable = item.classes && item.classes.includes('expandable')
    const handleToggle = (data, event) => {
        event && event.preventDefault()
        setIsOpen(!isOpen)
    }

    return (
        <Li key={item.ID} theme={theme.listItem} {...props}>
            <LinkSwitch
                theme={theme.link}
                url={absoluteToRelativeUrl(item.url)}
                children={decodeEntities(item.title)}
                type="nav"
                onClick={isExpandable ? handleToggle : null}
                isActive={isNavItemActive(item, post)}
            />
            {item.children && isExpandable && (
                <>
                    <Icon
                        icon={isOpen ? angleUp : angleDown}
                        theme={theme.icon}
                        className={isNavItemActive(item, post) ? 'active' : ''}
                    />
                    <MotionDiv
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                        variants={{
                            open: {height: 'auto'},
                            closed: {height: 0}
                        }}
                        transition={{ease: 'easeOut'}}
                        theme={{overflow: 'hidden'}}
                    >
                        <MenuToUl
                            menu={item.children}
                            theme={theme.nextLevel}
                            post={post}
                        />
                    </MotionDiv>
                </>
            )}
            {item.children && !isExpandable && (
                <MenuToUl
                    menu={item.children}
                    theme={theme.nextLevel}
                    post={post}
                />
            )}
        </Li>
    )
})

MenuListItem.displayName = 'MenuListItem'

MenuListItem.propTypes = {
    item: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

MenuListItem.defaultProps = {
    theme: {
        listItem: {},
        link: {},
        nextLevel: {},
    },
}

export default MenuListItem