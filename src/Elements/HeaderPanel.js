import {useAnimation}    from 'framer-motion'
import PropTypes         from 'prop-types'
import React, {
    useEffect,
    useRef,
    useState
}                        from 'react'
import {useSelector}     from 'react-redux'
import covidBanner       from '../assets/miles-covid-banner.jpg'
import Div               from '../Basic/Div'
import Img               from '../Basic/Img'
import MotionDiv         from '../Basic/MotionDiv'
import GlobalSearchField from '../Forms/GlobalSearchField'
import HeaderMenu        from '../Menus/HeaderMenu'
import {layoutSelector}  from '../redux/selectors'
import {headerStyle}     from '../themes/header'
import {
    LAYOUT_LARGE,
    LAYOUT_SMALL,
    LAYOUT_TABLET,
    LAYOUT_XLARGE
}                        from '../utils/getLayout'
import withToggle        from '../utils/withToggle'
import LinkSwitch        from './LinkSwitch'
import Overlay           from './Overlay'
import SiteLogo          from './SiteLogo'

const fixedMenuVariants = {
    closed: {
        y: -30,
        opacity: 0,
        transition: {
            ease: 'easeIn',
            duration: .5
        }
    },
    open: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            delay: .1,
            duration: .4,
        }
    }
}

const globalSearchVariants = {
    closed: {
        y: -50,
        opacity: 0,
        transition: {
            ease: 'easeIn',
            duration: .5
        }
    },
    open: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            delay: .2,
            duration: .3,
        }
    }
}


const HeaderPanel = ({theme, firmName, isOpen}) => {
    const headerControls = useAnimation()
    const layout = useSelector(layoutSelector)
    const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const menuItemRef = useRef(null)

    const headerPanelHeight = {
        [LAYOUT_TABLET]: 310,
        [LAYOUT_SMALL]: 401,
        [LAYOUT_LARGE]: 461,
        [LAYOUT_XLARGE]: 461
    }

    useEffect(() => {
        if (isOpen) {
            headerControls.start({
                height: headerPanelHeight[layout],
                transition: {
                    duration: .4,
                    ease: 'linear'
                },
                transitionEnd: {
                    overflow: 'visible'
                }
            })
        } else {
            headerControls.start({
                height: 0,
                overflow: 'hidden',
                visibility: 'visible',
                transition: {
                    duration: .4,
                    ease: 'linear'
                }
            })
        }
    }, [isOpen, headerControls, layout, headerPanelHeight])


    useEffect(() => {
        let menuList = Array.prototype.slice.call(menuItemRef.current.firstChild.children)

        if (menuList[3].children[0].children[0].classList.contains('open')
            || menuList[4].children[0].children[0].classList.contains('open')) {
            setIsSubMenuOpen(true)
        } else {
            setIsSubMenuOpen(false)
        }

        /* eslint-disable react-hooks/exhaustive-deps */
    }, [isSubMenuExpanded])

    return (
        <>
            <Overlay isOpen={isOpen}/>
            <MotionDiv
                className="header"
                theme={{...headerStyle, ...theme}}
                animate={headerControls}
            >
                <Div
                    className="header-inner"
                    as="header"
                    theme={{...headerStyle.inner, ...theme.inner}}
                    style={{pointerEvents: isOpen ? 'auto' : 'none'}}
                >
                    <Div theme={headerStyle.logoWrapper}>
                        <SiteLogo title={firmName} isOpen={isOpen}/>
                    </Div>
                    <Div className="nav-wrapper" theme={{...headerStyle.navWrapper, ...theme.navWrapper}}>
                        <MotionDiv
                            animate={isOpen ? 'open' : 'closed'}
                            variants={fixedMenuVariants}
                        >
                            <HeaderMenu
                                isOpen={isOpen}
                                setIsSubMenuExpanded={setIsSubMenuExpanded}
                                menuItemRef={menuItemRef}
                            />
                        </MotionDiv>
                        <Div theme={headerStyle.globalSearchWrapper}>
                            <MotionDiv
                                theme={{...headerStyle.globalSearch, ...theme.globalSearch}}
                                animate={isOpen ? 'open' : 'closed'}
                                variants={globalSearchVariants}
                            >
                                <GlobalSearchField isOpen={isOpen}/>
                            </MotionDiv>
                            <MotionDiv
                                animate={isOpen ? 'open' : 'closed'}
                                variants={globalSearchVariants}
                                theme={{
                                    opacity: isSubMenuOpen ? '0 !important' : '1 !important',
                                    transition: 'opacity 350ms ease',
                                    pointerEvents: isSubMenuOpen ? 'none' : 'auto'
                                }}
                            >
                                <LinkSwitch url="/coronavirus-task-force">
                                    <Img src={covidBanner} theme={headerStyle.covidBanner}/>
                                </LinkSwitch>
                            </MotionDiv>
                        </Div>

                    </Div>
                </Div>
            </MotionDiv>
        </>
    )
}


HeaderPanel.propTypes = {
    theme: PropTypes.object,
    firmName: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired
}

HeaderPanel.defaultProps = {
    theme: {},
}

export default withToggle(HeaderPanel)