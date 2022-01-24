import {AnimatePresence}       from 'framer-motion'
import PropTypes               from 'prop-types'
import React, {
    useEffect,
    useState
}                              from 'react'
import Icon                    from '../Basic/Icon'
import MotionDiv               from '../Basic/MotionDiv'
import Span                    from '../Basic/Span'
import Ul                      from '../Basic/Ul'
import LinkSwitch              from '../Elements/LinkSwitch'
import {headerMenuStyle}       from '../themes/menus'
import {isNavItemActive}       from '../utils/isNavItemActive'
import {
    absolute,
    center,
    hidden
}                              from '../utils/themer'
import {absoluteToRelativeUrl} from '../utils/url'
import withPost                from '../utils/withPost'
import {triangle}              from '../variables/iconLibrary'

const subMenuVariants = {
    closed: {
        height: 0,
        opacity: 0,
        transition: {
            duration: .5,
        }
    },
    open: {
        height: 'auto',
        opacity: 1,
        transition: {
            duration: .4
        }
    }
}

const subMenuItemVariants = {
    closed: x => ({
        top: -30 * (x + 1),
        transition: {
            ease: 'easeOut',
            duration: .25,
            delay: x * .10
        }
    }),
    open: {
        top: 0,
        transition: {
            duration: .2
        }
    }
}

const iconVariants = {
    closed: {
        transform: 'rotate(0deg)',
        transformOrigin: center,
    },
    open: {
        transform: 'rotate(60deg)',
        transformOrigin: center,
    }
}

const HeaderMenuItem = ({item, theme, post, isOpen, setIsSubMenuExpanded}) => {
    const isExpandable = item.classes.includes('expandable')
    const [isExpanded, setIsExpanded] = useState(isNavItemActive(item, post))
    let additionalProps = {}

    useEffect(() => {
        if (!isOpen)
            setIsExpanded(isNavItemActive(item, post))

        setIsSubMenuExpanded({
            toggle: isExpanded
        })

    }, [item, post, isOpen, isExpanded, setIsSubMenuExpanded])


    if (item.url)
        additionalProps = {
            type: 'nav',
            target: item.target,
            url: absoluteToRelativeUrl(item.url),
            isActive: isNavItemActive(item, post) || isExpanded
        }

    return (
        <li key={item.ID} style={{flexShrink: 0}}>
            <Span
                theme={{display: 'flex'}}
                onClick={isExpandable ? () => setIsExpanded(flag => !flag) : null}
            >
                <LinkSwitch
                    theme={{...headerMenuStyle.topLevelLink, ...theme.topLevelLink}}
                    title={item.title}
                    data={item.classes[0]}
                    className={isExpanded ? 'open' : ''}
                    children={item.title}
                    {...additionalProps}
                />
                {isExpandable && (
                    <MotionDiv
                        variants={iconVariants}
                        initial="closed"
                        animate={isExpanded ? 'open' : 'closed'}
                        theme={{...headerMenuStyle.expandableItem, ...theme.expandableItem}}
                        className="expandable"
                    >
                        <Icon
                            icon={triangle}
                            theme={headerMenuStyle.topLevelLink.icon}
                            className={isExpanded ? 'active' : ''}
                            onClick={isExpandable ? () => setIsExpanded(flag => !flag) : null}
                        />
                    </MotionDiv>
                )}
            </Span>
            <MotionDiv
                animate={isExpanded ? 'open' : 'closed'}
                variants={subMenuVariants}
                style={{position: absolute, overflow: hidden}}
            >
                <Ul theme={item.children ? {...headerMenuStyle.subList, ...theme.subList} : {display: 'none'}}>
                    <AnimatePresence>
                        {item.children && item.children.map((subItem, key) => {
                            additionalProps = {
                                type: 'nav',
                                target: subItem.target,
                                url: absoluteToRelativeUrl(subItem.url),
                                isActive: isNavItemActive(subItem, post)
                            }

                            return isExpanded && (
                                <MotionDiv
                                    key={key}
                                    initial="closed"
                                    variants={subMenuItemVariants}
                                    custom={key}
                                    animate="open"
                                    exit="closed"
                                    theme={{...headerMenuStyle.subItem, ...theme.subItem}}
                                >
                                    <LinkSwitch
                                        title={subItem.title}
                                        data={subItem.classes[0]}
                                        children={subItem.title}
                                        {...additionalProps}
                                    />
                                </MotionDiv>
                            )
                        })}
                    </AnimatePresence>
                </Ul>
            </MotionDiv>
        </li>
    )
}

HeaderMenuItem.displayName = 'HeaderMenuItem'

HeaderMenuItem.propTypes = {
    isOpen: PropTypes.bool,
    item: PropTypes.object.isRequired,
    theme: PropTypes.object,
    post: PropTypes.object.isRequired,
    panelName: PropTypes.string
}

HeaderMenuItem.defaultProps = {
    theme: {},
}

export default withPost(HeaderMenuItem)