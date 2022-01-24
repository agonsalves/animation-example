import {
    absolute,
    auto,
    block,
    borderBox,
    center,
    column,
    fixed,
    flex,
    flexEnd,
    flexStart,
    hidden,
    inherit,
    none,
    pointer,
    relative,
    transparent,
    white
}                           from '../utils/themer'
import {globals}            from '../variables/styles'
import {defaultLegendStyle} from './forms'
import {
    innerContainerDefaultStyle,
    pageFrameStyle
}                           from './layout'

/**
 *
 *    HEADER
 *
 */

export const headerContainerStyle = {
    position: 'fixed',
    maxWidth: 1920,
    margin: '0 auto',
    width: '100%',
    display: flex,
    justifyContent: flexEnd,
    zIndex: 10,
    ie: {
        position: absolute,
    }
}

export const headerToggleStyle = {
    width: '100%',
    margin: '0 auto',
    backgroundColor: globals.colors.darkGreen,
    position: relative,
    height: 60,
    maxWidth: 1920,
    cursor: pointer,
    ieTablet: {
        right: 17,
        top: 0,
        position: fixed,
    },
    mobile: {
        paddingBottom: 20,
    },
    tablet: {
        overflow: hidden,
        position: fixed,
        top: 0,
        right: 0,
        height: 100,
        width: 100,
        zIndex: 9,
        display: flex,
        alignItems: center,
        justifyContent: center,
    },
    small: {
        height: 130,
        width: 130
    },
    large: {
        height: 160,
        width: 160
    },
    xLarge: {
        right: 'calc((100vw - 1937px)/2)',
    },
    ieXLarge: {
        right: 'calc((100vw - 1903px)/2)',
    },
    icon: {
        color: white,
        size: 24,
        pointerEvents: none,
        tablet: {
            size: 24,
            transform: 'scale(1, 0.65)'
        },
        small: {
            size: 34,
            transform: 'scale(1, 0.65)'
        },
        large: {
            size: 41,
            transform: 'scale(1, 0.65)'
        }
    }
}

export const headerStyle = {
    position: fixed,
    top: 0,
    left: 0,
    backgroundColor: globals.colors.black,
    height: 0,
    overflow: hidden,
    width: '100%',
    zIndex: 9,
    xLarge: {
        maxWidth: 1920,
        width: 1920,
        right: 'calc((100vw - 1937px)/2)',
        left: 'initial'
    },
    ieXLarge: {
        right: 'calc((100vw - 1903px)/2)',
        left: auto
    },
    mobile: {
        height: 60,
        position: relative,
        overflow: 'visible'
    },
    overlay: {
        width: '100%',
        height: '100%',
        position: fixed,
        top: 0,
        left: 0,
        zIndex: -1,
        mobile: {
            content: none
        }
    },
    inner: {
        ...innerContainerDefaultStyle,
        flexDirection: 'row',
        maxWidth: 1920,
        right: 0,
        height: 0,
        position: relative,
        zIndex: 4,
        mobile: {
            display: flex,
            flexDirection: 'row'
        },
        tablet: {
            minHeight: 280
        },
        small: {
            minHeight: 380
        },
        large: {
            minHeight: 431
        }
    },
    logoWrapper: {
        position: absolute,
        width: '100vw',
        maxWidth: 1920,
        margin: '0 auto',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 1
    },
    navWrapper: {
        display: flex,
        flexDirection: column,
        alignItems: flexStart,
        width: 1920,
        maxWidth: 1920,
        margin: '0 auto',
        left: 0,
        right: 0,
        top: 0,
        height: 0,
        boxSizing: borderBox,
        zIndex: 0,
        tablet: {
            paddingLeft: '31vw',
        },
        small: {
            paddingLeft: 396,
        },
        large: {
            paddingLeft: 571,
        }
    },
    globalSearchWrapper: {
        display: flex,
        tablet: {
            width: '64vw',
            maxWidth: 640
        },
        small: {
            width: 842,
            maxWidth: none
        },
        large: {
            width: 1046,
        }
    },
    covidBanner: {
        transition: 'width .5s, opacity .25s',
        hover: {
            opacity: .6,
        },
        tablet: {
            paddingTop: 2,
            width: 175,
            marginLeft: 60,
            marginRight: 85,
            minWidth: 175
        },
        small: {
            paddingTop: 3,
            marginLeft: 75,
            marginRight: 155,
            width: 220,
            minWidth: auto
        },
        large: {
            paddingTop: 5,
            marginLeft: 105,
            marginRight: 245,
            width: 295
        }
    },
    globalSearch: {
        paddingBottom: 10,
        borderBottom: '1px solid white',
        marginBottom: 60,
        width: '100%'
    },
    siteLogo: {
        opacity: 0
    },
    print: {
        display: none
    }
}

export const logoStyle = {
    position: absolute,
    display: block,
    mobile: {
        position: relative,
        marginRight: auto,
        top: 0,
        left: 25,
    },
    tablet: {
        left: 53,
        top: 50,
        zIndex: 11
    },
    small: {
        left: 60,
        top: 60
    },
    large: {
        top: 72,
        left: 80,
    },
    image: {
        width: auto,
        height: 31,
        zIndex: -1,
        maxWidth: 240,
        mobile: {
            marginTop: 27
        },
        tablet: {
            height: 31,
            maxWidth: 149
        },
        small: {
            height: 43,
            maxWidth: 207
        },
        large: {
            height: 50,
            maxWidth: 240
        },
        print: {
            display: none
        }
    }
}

export const printLogoStyle = {
    pageFrame: {
        ...pageFrameStyle.logo,
        display: none,
        print: {
            display: block,
            position: relative,
            marginTop: 0,
        }
    },
    siteLogo: {
        ...logoStyle.image,
        display: none,
        print: {
            display: block
        }
    }
}


/**
 *
 *     GLOBAL SEARCH FIELD
 *
 */
export const globalSearchFieldTheme = {
    zIndex: 10,
    cursor: pointer,
    width: 400,
    tablet: {
        transition: 'margin .5s',
        marginTop: 63
    },
    small: {
        marginTop: 82
    },
    large: {
        marginTop: 125
    },
    child: [
        {
            selector: '.react-autosuggest__container',
            display: flex,
            flexDirection: 'row-reverse',
            justifyContent: flexEnd
        },
        {
            selector: '.react-autosuggest__suggestion',
            borderLeft: `1px solid ${globals.colors.black}`,
            borderRight: `1px solid ${globals.colors.black}`,
        },
        {
            selector: '.react-autosuggest__suggestion--highlighted',
            borderColor: globals.colors.black,
            hover: {
                borderColor: globals.colors.black,
            },
        },
        {
            selector: '.react-autosuggest__section-title',
            child: {
                selector: '> div',
                borderLeft: `1px solid ${globals.colors.black}`,
                borderRight: `1px solid ${globals.colors.black}`
            }
        },
        {
            selector: '.react-autosuggest__suggestions-container',
            top: 50,
            width: '75%',
            maxHeight: '55vh',
            borderBottom: `1px solid ${globals.colors.black}`
        },
        {
            selector: '.react-autosuggest__section-container',
            lastOfType: {
                background: '#848484',
                height: 80,
                width: '100%',
                color: white,
                boxSizing: borderBox,
                child: {
                    selector: '.react-autosuggest__section-title',
                    display: none
                },
            },
        }
    ],
    field: {
        transition: 'width .5s',
        backgroundColor: transparent,
        width: 365,
        height: auto,
        color: white,
        size: 24,
        padding: 0,
        fontWeight: 300,
        font: globals.fonts.heading,
        textOverflow: 'ellipsis',
        placeholder: {
            color: transparent,
        },
        inputLabel: {
            color: white,
            fontStyle: 'italic',
            fontWeight: 300,
            opacity: .3,
            transform: 'translate(21px,0px) scale(1)',
            tablet: {
                size: 18,
                transform: 'translate(14px,0px) scale(1)',
            },
            small: {
                size: 22,
                transform: 'translate(21px,3px) scale(1)',
            },
            large: {
                size: 24,
                transform: 'translate(21px,0px) scale(1)',
            }
        },
        fieldset: {
            border: none
        },
        legend: {
            ie: {
                ...defaultLegendStyle.ie,
                backgroundColor: globals.colors.black
            }
        },
        focusedInputLabelStyle: {
            color: white,
            left: 0,
            transform: 'translate(0,-24px) scale(0.75)',
            large: {}
        },
        class: {
            name: 'active',
            width: 365
        },
        tablet: {
            size: 18,
            lineHeight: '22px'
        },
        small: {
            fontSize: 24,
            lineHeight: '29px'
        },
        large: {
            fontSize: 24,
        },
        icon: {
            color: white,
            height: '100%',
            marginRight: 20,
            position: absolute,
            opacity: inherit,
            left: 0,
            tablet: {
                size: 18,
                height: 18
            },
            small: {
                size: 24,
                height: 24
            },
            large: {
                size: 24
            }
        },
    },
}

/**
 *
 *     MOBILE SEARCH
 *
 */
export const mobileSearchStyle = {
    position: relative,
    height: globals.headerHeight.mobile,
    toggle: {
        height: globals.headerHeight.mobile,
        width: 60,
        display: flex,
        justifyContent: center,
        alignItems: center,
        cursor: pointer,
        borderRight: globals.style.dividingBorder,
        backgroundColor: globals.colors.green,
        hover: {
            backgroundColor: globals.colors.green,
        },
        class: {
            name: 'active',
            backgroundColor: globals.colors.green,
        },
        icon: {
            color: white,
            fontSize: 20,
            height: '100%',
        },
    },
    panel: {
        position: absolute,
        top: '100%',
        right: 0,
        backgroundColor: globals.colors.green,
        zIndex: 99,
        overflow: hidden,
        boxSizing: borderBox,
        width: 320,
        display: flex
    },
    inner: {
        margin: 20,
        display: flex,
        alignItems: flexStart,
        position: relative
    },
    field: {
        letterSpacing: .5,
        width: auto,
        height: 50,
        border: none,
        icon: {
            height: '100%',
            paddingRight: 0,
            pointerEvents: none,
        },
        fieldset: {
            background: white,
            border: 0
        },
        inputLabel: {
            transform: 'translate(0,16px) scale(1)'
        },
        focusedInputLabelStyle: {
            transform: 'translate(-23px,-14px) scale(0.75)',
        }
    },
    button: {
        width: 50,
        height: 50,
        webkitAppearance: none,
        border: none,
        backgroundColor: globals.colors.darkGreen,
        color: white,
        flexShrink: 0,
        fontSize: 22
    }
}

/**
 *
 *     MOBILE MENU
 *
 */
export const mobileMenuToggleStyle = {
    border: none,
    cursor: pointer,
    height: globals.headerHeight.mobile,
    width: 65,
    display: flex,
    justifyContent: center,
    alignItems: center,
    fontSize: 20,
    backgroundColor: globals.colors.green,
    hover: {
        // backgroundColor: '#045da8',
    },
    icon: {
        color: white,
    },
}

export const headerIconStyle = {
    right: 0,
    top: 0,
    position: absolute,
    color: white,
    size: 24,
    display: flex,
    alignItems: center,
    justifyContent: center,
    textAlign: center,
    height: '100%',
    width: '100%',
    tablet: {
        size: 19
    },
    small: {
        size: 24
    },
    large: {
        size: 30
    }
}