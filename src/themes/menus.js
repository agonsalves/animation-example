import {iconToData} from '../utils/styling'
import {
    absolute,
    black,
    block,
    borderBox,
    center,
    column,
    flex,
    flexStart,
    hidden,
    inlineBlock,
    none,
    normal,
    pointer,
    relative,
    spaceBetween,
    transparent,
    uppercase,
    white,
    wrap
} from '../utils/themer'
import {triangle} from '../variables/iconLibrary'
import {globals} from '../variables/styles'
import {centerContent} from './elements'

/**
 *
 *    HEADER MENU
 *
 */
export const headerMenuStyle = {
    tablet: {
        marginBottom: 50,
        marginTop: 49,
        width: '64vw',
        maxWidth: 640
    },
    small: {
        marginBottom: 80,
        marginTop: 68,
        width: 842,
        maxWidth: none
    },
    large: {
        marginBottom: 70,
        width: 1046
    },
    list: {
        position: relative,
        zIndex: 10,
        listStyle: none,
        display: flex,
        justifyContent: spaceBetween,
        margin: 0,
        padding: 0,
        large: {
            marginTop: 18
        }
    },
    listItem: {
        tablet: {
            paddingLeft: 49
        },
        small: {
            paddingLeft: 58
        },
        large: {
            paddingLeft: 72
        },
        firstChild: {
            tablet: {
                paddingLeft: 0,
            },
            small: {},
            large: {
                paddingLeft: 0
            }
        },
    },
    expandableItem: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 3,
        marginLeft: 14,
        small: {
            marginLeft: 20
        },
        large: {
            marginLeft: 31
        }
    },
    topLevelLink: {
        cursor: pointer,
        display: flex,
        alignItems: center,
        height: globals.headerHeight.tablet,
        font: globals.fonts.heading,
        textDecoration: none,
        color: globals.colors.green,
        fontWeight: 900,
        transition: 'all 0.5s',
        hover: {
            color: white,
            opacity: .5
        },
        class: [
            {
                name: 'active',
                color: white,
                hover: {
                    opacity: .5
                },
                child: {
                    selector: '~ div > svg',
                    color: white
                }
            },
            {
                name: 'open',
            },
        ],
        tablet: {
            size: '1.2rem',
            lineHeight: '26px',
        },
        small: {
            size: 28,
            lineHeight: '36px',
        },
        large: {
            size: 34,
        },
        icon: {
            transform: 'rotate(60deg)',
            transformOrigin: center,
            size: 6,
            marginTop: -2,
            color: globals.colors.lightGreen,
            transition: 'transform 0.5s, color 0.5s',
            position: relative,
            small: {
                size: 8,
                marginTop: -2,
            },
            large: {
                size: 8,
                marginTop: -2,
            },
            class: {
                name: 'active',
                color: white
            }
        }
    },
    subList: {
        display: flex,
        flexDirection: column,
        overflow: hidden,
        paddingLeft: 0,
        position: relative,
        width: '100%',
        backgroundColor: globals.colors.black,
        padding: 20,
        small: {
            paddingTop: 17
        },
        large: {
            paddingTop: 15,
        }
    },
    subItem: {
        display: block,
        margin: 0,
        overflow: hidden,
        whiteSpace: 'nowrap',
        position: relative,
        tablet: {
            marginBottom: 8
        },
        small: {
            marginBottom: 13
        },
        large: {
            marginBottom: 15
        },
        child: {
            selector: 'a',
            color: globals.colors.green,
            display: block,
            tablet: {
                size: 15,
                lineHeight: '17px'
            },
            small: {
                size: 17,
                lineHeight: '20px'
            },
            large: {
                size: 19,
                lineHeight: '23px'
            },
            hover: {
                color: white,
                opacity: .5
            },
            class: {
                name: 'active',
                color: white,
                textDecoration: 'underline'
            }
        }
    },
    phantom: {
        display: block,
        color: transparent,
        position: relative,
        top: 0,
        zIndex: -1
    }
}

/**
 *
 *     MICROSITE MENU
 *
 */
export const micrositeMenuStyle = {
    overflow: hidden,
    position: relative,
    width: '100%',
    before: {
        mobile: {
            content: '\' \'',
            width: 'calc(100% - 50px)',
            left: 25,
            height: 1,
            top: 0,
            backgroundColor: globals.colors.borderColor,
            position: absolute,
        }
    },
    mobile: {
        width: '100%',
        margin: '35px auto 0 auto',
        padding: '40px 25px',
        boxSizing: borderBox,
        position: relative,
    },
    tablet: {
        margin: '0 auto',
        backgroundColor: globals.colors.green,
        class: {
            name: 'mm-enter-done',
            backgroundColor: 'red'
        }
    },
    print: {
        display: none
    },
    dropDownIcon: (isExpanded) => {
        const baseStyle = {
            size: 7,
            marginLeft: 12,
            transformOrigin: 'center',
            transition: 'transform 250ms ease',
        }
        if (isExpanded)
            return {
                ...baseStyle,
                transform: 'rotate(-120deg)'
            }

        return {
            ...baseStyle,
            transform: 'rotate(60deg)'
        }
    },
    list: {
        width: '100%',
        display: flex,
        flexWrap: wrap,
        justifyContent: flexStart,
        alignContent: flexStart,
        boxSizing: borderBox,
        listStyle: none,
        padding: 0,
        margin: 0,
        mobile: {
            flexDirection: column
        },
        tablet: {
            padding: '0 0 0 48px'
        },
        small: {
            padding: '0 0 0 61px',
        },
        large: {
            padding: '0 0 0 80px'
        }
    },
    item: {
        margin: 0,
        padding: 0,
        position: relative,
        mobile: {
            backgroundColor: globals.colors.borderColor,
            margin: 0,
            width: '100%',
            borderBottom: `1px solid ${white}`
        },
        after: {
            tablet: {
                content: '\' \'',
                position: absolute,
                bottom: 0,
                left: -250,
                width: '2000px',
                height: 1,
                backgroundColor: '#91C57D',
            }
        },
        firstChild: {
            child: {
                selector: '> a',
                tablet: {
                    paddingLeft: 0
                }
            },
        },
        child: {
            selector: '> a',
            fontWeight: 600,
            mobile: {
                weight: 500
            },
            tablet: {
                size: 13
            },
            small: {
                size: 16
            },
            large: {
                size: 20
            }
        }
    },
    blogMore: {
        hover: {
            cursor: pointer
        }
    },
    link: {
        display: flex,
        alignItems: center,
        position: relative,
        height: 50,
        color: black,
        padding: '0 25px',
        textDecoration: none,
        font: globals.fonts.heading,
        fontSize: 17,
        fontWeight: 500,
        transition: 'color .25s',
        hover: {
            color: globals.colors.black,
            tablet: {
                color: 'rgba(255, 255, 255, 0.50);'
            },
        },
        tablet: {
            marginRight: 30,
            padding: '14px 0',
        },
        small: {
            padding: '25px 0',
            marginRight: 45,
            size: 16,
        },
        large: {
            fontSize: 19,
            padding: '37px 0',
            marginRight: 60
        },
        after: {
            mobile: {
                content: iconToData(triangle, globals.colors.green),
                display: block,
                position: absolute,
                right: 23,
                width: 9,
                height: 25,
                transform: 'rotate(90deg)',
                top: '50%',
                marginTop: -13
            }
        },
        class: {
            name: 'active',
            color: white,
            mobile: {
                backgroundColor: globals.colors.green,
                after: {
                    content: iconToData(triangle, white),
                }
            },
            hover: {
                color: white,
            },
        },
    },
}

export const blogMicrositeMenuStyle = {
    overflow: 'visible',
    list: {
        overflow: 'visible'
    },
    item: {
        after: {
            content: none
        }
    },
    subItem: {
        after: {
            content: none
        },
        child: {
            selector: '> a',
            height: 'auto',
            borderTop: '1px solid #E5E5E5',
            margin: 0,
            size: 16,
            weight: '400 !important',
            padding: '12px 15px',
            transition: 'background-color 500ms ease',
            tablet: {
                size: 14,
            },
            small: {
                size: 15,
            },
            large: {
                size: 16,
            },
            class: {
                name: 'active',
                color: globals.colors.green,
                hover: {
                    color: globals.colors.green,
                    backgroundColor: white
                }
            },
            hover: {
                color: black,
                backgroundColor: '#e5e5e5',
            }
        },
        firstChild: {
            child: {
                selector: '> a',
                borderTop: '1px solid #000',
                paddingLeft: 15,
            }
        },
        lastChild: {
            child: {
                selector: '> a',
                borderBottom: '1px solid #000',
            }
        },
    },
    link: isExpanded => {
        const baseStyle = {
            tablet: {
                size: 13,
                padding: '14px 0',
                weight: 600
            },
            weight: 600,
            position: relative,
            hover: {
                cursor: pointer,
                color: white
            }
        }
        if (isExpanded)
            return {
                ...baseStyle,
                color: white
            }

        return {
            ...baseStyle
        }

    },
    subMenu: {
        overflow: hidden,
        backgroundColor: white,
        height: 0,
        position: absolute,
        right: 60,
        marginTop: -22,
        zIndex: 2,
        borderLeft: `1px solid #000`,
        borderRight: `1px solid #000`,
        width: 260,
        tablet: {
            marginTop: -18,
            width: 220,
            right: 0
        },
        small: {
            marginTop: -20,
            width: 240,
            right: 45
        },
        large: {
            marginTop: -22,
            width: 260,
            right: 60
        }
    },
    subMenuLink: {
        weight: 400,
        tablet: {
            size: 14,
        },
        small: {
            size: 15,
        },
        large: {
            size: 16,
        },
    }
}

export const topMenuStyle = {
    ...micrositeMenuStyle,
    inner: {
        ...micrositeMenuStyle.list,
        listItem: {
            ...micrositeMenuStyle.item,
        },
        link: {
            ...micrositeMenuStyle.link,
        }
    }
}

/**
 *     MOBILE MENU STYLES
 */
export const mobileMenuStyle = {
    position: absolute,
    right: 0,
    width: '100%',
    zIndex: 99,
    margin: 0,
    list: {
        listStyle: none,
        top: 0,
        margin: 0,
        padding: 0,
        position: absolute,
        width: '100%'
    },
    item: {
        lineHeight: 1.5,
        padding: 0,
        margin: 0,
        borderTop: `1px solid ${white}`,
        firstChild: {
            border: none,
        },
    },
    link: {
        backgroundColor: globals.colors.borderColor,
        padding: '10px 25px',
        display: flex,
        justifyContent: spaceBetween,
        alignItems: center,
        font: globals.fonts.heading,
        textDecoration: none,
        color: black,
        fontSize: '17px',
        lineHeight: '30px',
        fontWeight: normal,
        cursor: pointer,
        mobile: {
            weight: 500
        },
        hover: {
            color: black,
        },
        class: {
            name: 'active',
            backgroundColor: globals.colors.darkGreen,
            color: white,
            hover: {
                color: white
            }
        }
    },
    icon: {
        color: '#909090',
        fontSize: 16
    },
}

export const mobileMenuBackLinkStyle = {
    ...mobileMenuStyle.link,
    justifyContent: flexStart,
    backgroundColor: '#909090',
    textTransform: uppercase,
    color: white,
    weight: 600,
    hover: {
        color: white
    },
    icon: {
        ...mobileMenuStyle.icon,
        marginRight: 10,
        fontSize: 16,
        color: white
    },
}


/**
 *
 *    FIRM PANEL
 *
 */

export const firmMenuStyle = {
    listStyle: none,
    margin: 0,
    padding: 0,
    display: flex,
    width: 840,
    fontSize: 18,
    font: globals.fonts.heading,
    small: {
        size: 21
    },
    listItem: {
        flexGrow: 0,
        position: relative,
        hover: {
            color: globals.colors.linkColor,
            child: {
                selector: 'svg',
                color: globals.colors.linkColor
            }
        },
        firstChild: {
            child: {
                selector: 'a',
                paddingLeft: 0,
                borderLeft: none
            }
        },
        lastChild: {
            child: {
                selector: 'a',
                paddingRight: 0
            }
        }
    },
    link: {
        ...centerContent,
        padding: '12px 50px',
        color: white,
        borderLeft: '1px solid #0686F3',
        cursor: pointer,
        hover: {
            color: globals.colors.linkColor,
        },
        class: {
            name: 'active',
            color: globals.colors.linkColor
        },
        small: {
            padding: '12px 58px'
        }
    },
    nextLevel: {
        listStyle: none,
        margin: 0,
        padding: 0,
        link: {
            height: 35,
            color: white,
            size: 18,
            weight: 300,
            display: block,
            hover: {
                color: globals.colors.linkColor
            },
            before: {
                content: '""',
                display: inlineBlock,
                backgroundColor: globals.colors.linkColor,
                width: 5,
                height: 5,
                margin: '0 25px 5px 50px',
                small: {
                    marginLeft: 58
                }
            },
            class: {
                name: 'active',
                color: globals.colors.linkColor
            }
        },
    },
    icon: {
        color: white,
        position: absolute,
        right: -25,
        top: 10,
        pointerEvents: none,
        size: 30,
        class: {
            name: 'active',
            color: globals.colors.linkColor,
        }
    }
}

export const mobileMicrositeMenuToggleStyle = {
    display: flex,
    justifyContent: center,
    alignItems: center,
    position: absolute,
    fontSize: 26,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: globals.colors.panelBackgroundColor,
    marginTop: -50,
    cursor: pointer,
    icon: {
        color: white,
        pointerEvents: none
    }
}

export const mobileBlogMicrositeMenuToggleStyle = {
    position: relative,
    fontSize: 26,
    right: 0,
    width: '50%',
    height: 50,
    backgroundColor: globals.colors.panelBackgroundColor,
    marginTop: 0,
    cursor: pointer,
    icon: {
        color: white,
        pointerEvents: none
    }
}

export const mobileBlogMicrositeMenuWrapper = {
    display: flex,
    backgroundColor: globals.colors.lightGray,
    width: '100%',
    height: 50,
    //zIndex: 0,
    child: [
        {
            selector: '> span',
            width: '50%',
            backgroundColor: globals.colors.lightGray,
            cursor: pointer,
            firstChild: {
                borderRight: `1px solid ${white}`
            },
            child: [
                {
                    selector: 'fieldset',
                    border: none
                },
                {
                    selector: 'input',
                    height: 45,
                    background: white
                },
                {
                    selector: 'button',
                    height: 45,
                    width: 45,
                    right: 25,
                    top: 25,
                    zIndex: 1
                }
            ]
        }
    ]
}

export const mobileBlogMicrositeMenu = {
    navigate: {
        display: block,
        position: relative,
        backgroundColor: globals.colors.lightGray,
        height: 50,
        overflow: hidden,
        zIndex: 2,
        menu: {
            position: absolute,
            left: '-100%',
            background: globals.colors.mobileMenuPanelBackgroundColor,
            width: '200%',
            boxSizing: borderBox,
            margin: 0,
            padding: '25px 0 40px 0',
            color: white
        }
    },
    moreButton: {
        position: relative
    },
    list: {
        margin: '12px 0 0 0',
        padding: '0 25px'
    },
    listItem: {
        display: block,

        child: [
            {
                selector: 'span',
            }
        ]
    },
    subList: {
        paddingLeft: 45,
        paddingBottom: 10
    },
    subListItem: {
        display: block,
        position: relative,
        size: 18,
        lineHeight: '28px',
        weight: 300,
        before: {
            content: '" "',
            position: absolute,
            top: 13,
            left: -25,
            width: 10,
            height: 1,
            background: white
        }
    },
    subListIcon: {
        position: absolute,
        top: 13,
        size: 7,
        marginLeft: 9
    },
    subListLink: {
        color: white,
        position: relative,
        hover: {
            color: globals.colors.lightGreen
        }
    },
    linkItem: {
        color: white,
        size: 18,
        lineHeight: '30px',
        weight: 300,
        hover: {
            color: globals.colors.lightGreen
        }
    },
    toggle: {
        backgroundColor: globals.colors.lightGray,
        width: '100%',
        textTransform: uppercase,
        size: 13,
        weight: 500,
        color: globals.colors.gray,
        letterSpacing: 3,
        lineHeight: 1,
        height: 50,
        display: flex,
        alignItems: center,
        justifyContent: center,
        open: {
            background: globals.colors.mobileMenuPanelBackgroundColor,
            color: white
        }
    },
    icon: {
        color: globals.colors.gray,
        size: 8,
        marginRight: 25,
        marginLeft: -15,
        transform: 'rotate(180deg)',
        open: {
            color: white
        }
    },
    searchForm: {
        position: absolute,
        top: 50,
        left: 0,
        width: '200%',
        height: 100,
        background: globals.colors.mobileMenuPanelBackgroundColor,
        border: 0,
        boxSizing: borderBox,
        padding: 25,
        field: {
            child: {
                selector: 'input',
                height: 44
            },
            mobile: {
                height: 44
            }
        },
        icon: {
            height: 45
        }
    },
    heading: {
        margin: 0,
        padding: '0 25px',
        size: 24,
        weight: 900,
        lineHeight: '30px',
        color: white
    },
    topics: {},
    pages: {
        borderTop: `1px solid #737373`,
        paddingTop: 24,
        marginTop: 30
    }
}

export const mobileBlogMicrositeSearchStyle = {}