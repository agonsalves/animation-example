import {iconInSolidCircle}   from '../utils/styling'
import {
    absolute,
    black,
    borderBox,
    flex,
    none,
    pointer,
    spaceBetween,
    transparent,
    uppercase,
    white
}                            from '../utils/themer'
import {globals}             from '../variables/styles'
import {layoutInnerStyle}    from './layout'
import {alphabetFilterStyle} from './pagePeople'

/**
 *
 *    HEADER MENU PANELS
 *
 */

export const menuPanelsStyle = {
    position: absolute,
    left: 0,
    right: 0,
    backgroundColor: globals.colors.menuPanelBackgroundColor,
    width: '100%',
    zIndex: 9,
    inner: {
        ...layoutInnerStyle,
        margin: '0 auto',
        padding: '60px 0',
    },
    heading: {
        font: globals.fonts.heading,
        fontWeight: 600,
        color: '#0686F3',
        fontSize: 34,
        marginBottom: 25,
        large: {
            size: 48
        }
    },
}

export const panelContentWrapperStyle = {
    display: flex,
    justifyContent: spaceBetween,
    width: '100%',
}

export const panelColumnStyle = {
    width: '50%',
    padding: '0 30px 0 0',
    boxSizing: borderBox,
    small: {
        paddingRight: 45
    },
    large: {
        paddingRight: 60
    },
    rightPanel: {
        padding: '0 0 0 30px',
        borderLeft: '1px solid #0686F3',
        small: {
            padding: '0 0 0 45px'
        },
        large: {
            padding: '0 0 0 60px'
        }
    }
}

/**
 *
 *    PEOPLE PANEL
 *
 */

export const peoplePanelSearchStyle = {
    field: {
        width: '100%',
        backgroundColor: globals.colors.menuPanelBackgroundColor,
        color: white,
        borderBottom: '1px solid white',
        size: 17,
        firstField: {
            backgroundColor: white,
            color: black,
            border: none,
            icon: {
                color: globals.colors.darkGray
            },
            placeholder: {
                color: globals.colors.darkGray
            }
        },
        placeholder: {
            color: '#7698C5'
        },
        icon: {
            color: white
        },
        clearIcon: {
            color: globals.colors.panelBackgroundColor
        },
        fieldOuter: {
            marginBottom: 15
        }
    },
    toggle: {
        color: white,
        textTransform: uppercase,
        weight: 700,
        font: globals.fonts.heading,
        size: 14,
        cursor: pointer,
        hover: {
            color: globals.colors.linkColor,
            child: {
                selector: 'svg',
                color: globals.colors.menuPanelBackgroundColor,
                backgroundColor: globals.colors.linkColor
            }
        },
        icon: {
            marginLeft: 10,
            ...iconInSolidCircle({
                iconSize: 14,
                circleSize: 10
            }),
            color: globals.colors.panelBackgroundColor,
            backgroundColor: white
        }
    },
    button: {
        backgroundColor: globals.colors.menuPanelBackgroundColor,
        border: '1px solid white',
        color: white,
        display: flex,
        float: 'right',
        hover: {
            color: globals.colors.linkColor,
            backgroundColor: white,
            child: {
                selector: 'svg',
                color: white,
                backgroundColor: globals.colors.linkColor
            }
        },
        icon: {
            backgroundColor: white,
            color: globals.colors.menuPanelBackgroundColor
        }
    }
}

export const alphabetFilterPanelStyle = {
    ...alphabetFilterStyle,
    paddingRight: 10,
    large: {
        paddingRight: 65
    },
    letter: {
        ...alphabetFilterStyle.letter,
        backgroundColor: transparent,
        width: 20,
        height: 20,
        size: 16,
        margin: '10px 11px 7px 0',
        hover: {
            backgroundColor: white,
            color: globals.colors.linkHoverColor,
        },
        tablet: {
            ...alphabetFilterStyle.tablet,
            margin: 7
        },
        small: {
            ...alphabetFilterStyle.small,
            width: 25,
            height: 25,
            size: 18,
            marginRight: 18
        },
    },
    viewAll: {
        marginLeft: 'auto !important',
        textTransform: uppercase,
        weight: 700,
        hover: {
            backgroundColor: transparent,
            color: globals.colors.linkColor,
            child: {
                selector: 'svg',
                backgroundColor: globals.colors.linkColor,
            }
        },
        icon: {
            ...iconInSolidCircle({
                iconSize: 14,
                circleSize: 10
            }),
            color: globals.colors.panelBackgroundColor,
            backgroundColor: white,
            marginLeft: 10
        }
    }
}

/**
 *
 *    PRACTICES PANEL
 *
 */

export const practicesPanelStyle = {
    inner: {
        width: 840,
        tablet: {},
        small: {},
        large: {}
    },
    button: {
        backgroundColor: transparent,
        textTransform: uppercase,
        size: 14,
        padding: '40px 0 0',
        hover: {
            backgroundColor: transparent,
            color: globals.colors.linkColor,
            child: {
                selector: 'svg',
                backgroundColor: globals.colors.linkColor,
            }
        },
        icon: {
            ...iconInSolidCircle({
                iconSize: 12,
                circleSize: 13
            }),
            backgroundColor: white,
            color: globals.colors.panelBackgroundColor
        }
    },
    field: {
        size: 17,
        icon: {
            color: globals.colors.darkGray,
            fontSize: 20
        },
    }
}

/**
 *
 *    FIRM PANEL
 *
 */

export const firmPanelStyle = {
    inner: {
        width: 840,
        tablet: {},
        small: {},
        large: {}
    },
}