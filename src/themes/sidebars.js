import {
    isAboutUsPage,
    isPracticeSearch
}                      from '../utils/flags'
import {
    absolute,
    auto,
    black,
    block,
    borderBox,
    center,
    column,
    fixed,
    flex,
    flexStart,
    hidden,
    inlineBlock,
    inlineFlex,
    none,
    pointer,
    relative,
    transparent,
    white
}                      from '../utils/themer'
import {globals}       from '../variables/styles'
import {centerContent} from './elements'
import {overlayStyle}  from './layout'

export const sidebarLeftStyle = {
    width: globals.sidebarLeftWidth.mobile,
    marginRight: 0,
    flexShrink: 0,
    tablet: {
        width: globals.sidebarLeftWidth.tablet,
        marginRight: 50,
    },
    small: {
        width: globals.sidebarLeftWidth.small,
        marginRight: 75,
    },
    large: {
        width: globals.sidebarLeftWidth.large,
        marginRight: 100,
    },
}

export const sidebarRightStyleSwitch = post => {
    if (isPracticeSearch(post))
        return {
            ...sidebarRightStyle,
            tablet: {
                ...sidebarRightStyle.tablet,
                width: 225
            },
            print: {
                display: none
            }
        }

    if (isAboutUsPage(post))
        return {
            display: none
        }

    return {
        ...sidebarRightStyle
    }
}

export const sidebarRightStyle = {
    width: globals.sidebarRightWidth.mobile,
    marginLeft: 0,
    flexShrink: 0,
    mobile: {
        backgroundColor: globals.colors.white,
        marginTop: 45,
        marginBottom: 10,
        padding: '40px 25px',
        boxSizing: borderBox,
        position: relative,
        before: {
            position: absolute,
            top: 0,
            left: 25,
            content: '\' \'',
            height: 1,
            width: 'calc(100% - 50px)',
            backgroundColor: globals.colors.borderColor,

        }
    },
    tablet: {
        width: globals.sidebarRightWidth.tablet,
        paddingLeft: 50,
        marginLeft: 50,
        borderLeft: '1px solid #e5e5e5'
    },
    small: {
        width: globals.sidebarRightWidth.small,
        paddingLeft: 55,
        marginLeft: 60
    },
    large: {
        width: globals.sidebarRightWidth.large,
        paddingLeft: 80,
        marginLeft: 75
    },
    empty: {
        display: none
    },
    child: {
        selector: '> *',
        lastChild: {
            child: {
                selector: '> div:first-child:last-child',
                border: none
            }
        }
    }
}

export const widgetStyle = {
    margin: '40px 0 0',
    paddingBottom: 35,
    fontSize: 17,
    display: flex,
    flexDirection: column,
    alignItems: flexStart,
    justifyContent: flexStart,
    borderBottom: `1px solid ${globals.colors.borderColor}`,
    firstChild: {
        marginTop: 0,
    },
    tablet: {
        fontSize: 15,
        marginTop: 33,
        paddingBottom: 40
    },
    small: {
        marginTop: 55,
        paddingBottom: 50
    },
    large: {
        marginTop: 75,
        fontSize: 16,
        paddingBottom: 80
    },
    lastChild: {
        border: none
    },
    child: {
        selector: '> *',
        tablet: {
            maxWidth: globals.sidebarRightWidth.tablet
        },
        small: {
            maxWidth: globals.sidebarRightWidth.small
        },
        large: {
            maxWidth: globals.sidebarRightWidth.large
        }
    },
    print: {
        display: block,
        pageBreakInside: 'avoid',
    }
}

export const widgetTitleStyle = {
    size: 20,
    fontWeight: 600,
    font: globals.fonts.heading,
    color: globals.colors.black,
    lineHeight: '24px',
    marginBottom: 20,
    marginTop: 0,
    display: block,
    width: '100%',
    tablet: {
        size: 16,
        marginBottom: 21
    },
    small: {
        size: 18,
        marginBottom: 30
    },
    large: {
        size: 20,
        lineHeight: '24px',
        marginBottom: 45
    },
}

export const associatedPersonStyle = {
    display: flex,
    alignItems: center,
    hover: {
        color: globals.colors.green,
    },
    name: {
        display: inlineFlex,
        textDecoration: none,
        lineHeight: '22px',
        size: 18,
        tablet: {
            size: 15
        },
        small: {
            size: 16
        },
        large: {
            size: 18,
            lineHeight: '22px'
        }
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 20,
        tablet: {
            width: 66,
            height: 66,
            borderRadius: 33,
        },
        small: {
            width: 66,
            height: 66,
            borderRadius: 33
        },
        large: {
            width: 80,
            height: 80,
            borderRadius: 40,
            marginRight: 20,
        }
    },
    container: {
        marginBottom: 35,
        large: {
            marginBottom: 45,
        },
        lastOfType: {
            marginBottom: 0
        },
    },
    noImageName: {
        textDecoration: 'underline',
        marginBottom: 20,
        marginLeft: 15,
        lineHeight: '22px',
        size: 18,
        tablet: {
            size: 15,
            lineHeight: '18px',
            marginLeft: 11
        },
        small: {
            size: 16,
            lineHeight: '20px',
            marginLeft: 13
        },
        large: {
            size: 18,
            lineHeight: '22px',
            marginBottom: 20,
            marginLeft: 15
        },
        hover: {
            color: globals.colors.green,
        },
    }
}

export const associatedPracticeNameStyle = {
    display: inlineFlex,
    marginBottom: 20,
    marginLeft: 26,
    size: 18,
    lineHeight: '22px',
    textDecoration: 'underline',
    tablet: {
        size: 15,
        lineHeight: '18px',
        marginLeft: 22
    },
    small: {
        size: 16,
        lineHeight: '20px',
        marginLeft: 26
    },
    large: {
        size: 18,
        lineHeight: '22px',
        marginBottom: 20,
        marginLeft: 34
    },
    hover: {
        color: globals.colors.green,
    },
}

export const associatedPracticeItemStyle = {
    display: flex,
    lastOfType: {
        child: {
            selector: '> a',
            marginBottom: 0
        }
    },
    icon: {
        position: relative,
        top: 9,
        size: 5,
        left: 1,
        minWidth: '1em',
        tablet: {
            top: 6,
        },
        small: {
            top: 7,
        },
        large: {
            top: 8
        }
    }
}

export const associatedPracticeList = {
    margin: 0,
    padding: 0,
    listStyleType: none,
    tablet: {},
    small: {},
    large: {}
}

export const personMicrositeLeftSidebarStyle = {
    tablet: {
        ...sidebarLeftStyle.tablet,
        width: 240,
    },
    small: {
        ...sidebarLeftStyle.small,
        width: 290
    },
    large: {
        ...sidebarLeftStyle.large,
        width: 380
    }
}

export const personInfoWidgetStyle = {
    fontSize: 17,
    mobile: {
        borderBottom: globals.style.dividingBorder,
        paddingBottom: 25,
        marginBottom: 30
    },
    tablet: {
        backgroundColor: globals.colors.lightGray,
        padding: '20px 25px',
        fontSize: 15
    },
    small: {
        fontSize: 16
    },
    name: {
        color: globals.colors.headingColor,
        font: globals.fonts.heading,
        fontSize: 28,
        fontWeight: 600,
        lineHeight: 1.2,
        margin: '10px 0 5px',
        letterSpacing: globals.style.headingLetterSpacing,
        overflowWrap: 'break-word',
        tablet: {
            fontSize: 22,
        },
        small: {
            fontSize: 24,
            marginBottom: 10
        },
        large: {
            fontSize: 26,
        },
    },
    title: {
        fontSize: 17,
        marginBottom: 4,
        font: globals.fonts.heading,
        weight: 300,
        letterSpacing: globals.style.headingLetterSpacing,
        tablet: {
            fontSize: 15
        },
        small: {
            fontSize: 16
        },
        large: {
            fontSize: 18,
            marginBottom: 7,
        }
    },
    email: {
        wordBreak: 'break-word',
        marginTop: 6,
        tablet: {
            fontSize: 15
        },
        small: {
            fontSize: 16
        }
    }
}

export const upcomingEventsWidgetStyle = {
    padding: 25,
    backgroundColor: globals.colors.lightGray,
    color: globals.colors.textColor,
    item: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 18,
        display: block,
        paddingBottom: 10,
        color: globals.colors.textColor,
        lineHeight: 1.5,
        fontWeight: 700
    },
    date: {
        fontSize: 15,
        display: block,
        paddingBottom: 10,
        color: globals.colors.textColor,
        lineHeight: 1.5,
        fontWeight: 700
    },
    where: {
        fontSize: 15,
        display: block,
        paddingBottom: 10,
        color: globals.colors.textColor,
        lineHeight: 1.5,
        fontWeight: 700
    },
}

export const imageWidgetStyle = {
    image: {
        marginBottom: 20,
    },
    caption: {
        child: {
            selector: 'p',
            size: 18,
            lineHeight: '28px',
            tablet: {
                size: 15,
                lineHeight: '22px',
                marginBottom: 0
            },
            small: {
                size: 16,
                lineHeight: '23px'
            },
            large: {
                size: 18,
                lineHeight: '28px'
            }
        },
    },
}

export const videoWidgetStyle = {
    ...imageWidgetStyle,
    firstChild: {
        marginTop: 40,
        tablet: {
            marginTop: 33,
        },
        small: {
            marginTop: 55,
        },
        large: {
            marginTop: 75
        },
        lastChild: {
            borderBottom: `1px solid ${globals.colors.borderColor}`
        }
    },
    imageWrapper: {
        position: relative,
        cursor: pointer,
        marginBottom: 20,
        tablet: {
            height: '100%'
        },
        hover: {
            opacity: .7,
            child: {
                selector: '> div',
                opacity: 1
            }
        }
    },
    image: {
        marginBottom: 0,
    },
    playButton: {
        ...centerContent,
        position: absolute,
        height: 60,
        width: 60,
        bottom: 0,
        left: 0,
        color: globals.colors.green,
        fontSize: 15,
        pointerEvents: none,
        backgroundColor: white,
        transform: 'rotate(90deg)',
        tablet: {
            height: 40,
            width: 40,
            fontSize: 13,
        },
        small: {
            fontSize: 16,
            height: 55,
            width: 55,
        },
        large: {
            fontSize: 19,
            height: 60,
            width: 60,
        }
    },
    videoWrapper: {
        ...centerContent,
        position: fixed,
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9,
        pointerEvents: none,
    },
    video: {
        position: relative,
        pointerEvents: auto
    },
    closeButton: {
        position: absolute,
        top: -25,
        right: -25,
        size: 34,
        color: white,
        background: black,
        display: flex,
        width: '50px !important',
        height: 50,
        borderRadius: 50,
        cursor: pointer,
        child: {
            selector: 'path',
            pointerEvents: none
        }
    },
    overlay: {
        ...overlayStyle,
        zIndex: -1,
    },
}

export const keyContactsWidgetStyle = {
    contact: {
        display: flex,
        flexDirection: column,
        marginBottom: 45,
        lineHeight: 1.3,
        tablet: {
            marginBottom: 35,
        },
        small: {
            marginBottom: 40,
        },
        large: {
            marginBottom: 45
        },
        lastOfType: {
            marginBottom: 0
        }
    },
    imageWrapper: {
        flexShrink: 0,
        hover: {
            opacity: .7
        }
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 20,
        marginBottom: 16,
        marginTop: 4,
        tablet: {
            width: 66,
            height: 66,
            borderRadius: 33,
            marginBottom: 13
        },
        small: {
            width: 70,
            height: 70,
            borderRadius: 35,
        },
        large: {
            width: 80,
            height: 80,
            borderRadius: 40,
            marginBottom: 11,
        }
    },
    name: {
        display: block,
        size: 18,
        lineHeight: '22px',
        tablet: {
            size: 15,
        },
        small: {
            size: 16,
        },
        large: {
            size: 18,
            lineHeight: '22px',
            marginTop: 6
        },
        hover: {
            color: globals.colors.green
        }
    },
    phone: {
        child: {
            selector: 'a',
            color: globals.colors.gray,
            display: block,
            size: 18,
            lineHeight: '22px',
            marginTop: 6,
            tablet: {
                size: 15,
                marginTop: 2
            },
            small: {
                size: 16,
            },
            large: {
                size: 18,
                lineHeight: '22px',
                marginTop: 6
            },
            hover: {
                color: globals.colors.green
            }
        }
    },
    title: {
        color: globals.colors.gray,
        display: block,
        size: 18,
        lineHeight: '22px',
        marginTop: 6,
        tablet: {
            size: 15,
            marginTop: 2
        },
        small: {
            size: 16,
        },
        large: {
            size: 18,
            lineHeight: '22px',
            marginTop: 6
        },
        hover: {
            color: globals.colors.green
        }
    },
    email: {
        textDecoration: 'underline',
        display: block,
        color: globals.colors.gray,
        marginTop: 4,
        size: 18,
        lineHeight: '22px',
        tablet: {
            size: 15,
            marginTop: 0
        },
        small: {
            size: 16,
            marginTop: 1
        },
        large: {
            size: 18,
            lineHeight: '22px',
            marginTop: 6
        },
        hover: {
            color: globals.colors.green
        }
    },
    heading: {
        marginBottom: 25,
    }
}

export const pullquoteWidgetStyle = {
    font: globals.fonts.heading,
    color: globals.colors.textColor,

    quote: {
        position: relative,
        zIndex: 1,
        overflow: hidden,
        quotes: '"“" "”" "‘" "’"',
        child: {
            selector: '> p',
            lineHeight: '45px',
            fontSize: 33,
            fontWeight: 900,
            paddingTop: 30,
            zIndex: 1,
            marginBottom: 4,
            tablet: {
                fontSize: 24,
                lineHeight: '33px'
            },
            small: {
                fontSize: 28,
                lineHeight: '39px',
                marginBottom: 6
            },
            large: {
                fontSize: 33,
                paddingTop: 30,
                lineHeight: '45px',
                marginBottom: 8
            },
        },
        before: {
            display: block,
            position: absolute,
            top: -300,
            right: 0,
            content: 'open-quote',
            size: 390,
            weight: 900,
            transform: 'rotate(180deg)',
            color: globals.colors.lightGray,
            zIndex: -1,
            tablet: {
                top: -193,
                size: 250
            },
            small: {
                top: -208,
                size: 280
            },
            large: {
                top: -305,
                fontSize: 395
            },
            print: {
                top: -66,
                size: 90
            }
        },
        after: {
            content: 'close-quote',
            visibility: hidden,
            display: none
        }
    },
    attribution: {
        size: 18,
        lineHeight: '22px',
        margin: 0,
        paddingLeft: 12,
        position: relative,
        before: {
            content: '" "',
            position: relative,
            display: inlineBlock,
            background: globals.colors.black,
            top: -5,
            left: -12,
            height: 1,
            width: 16
        },
        tablet: {
            fontSize: 15,
        },
        small: {
            fontSize: 16
        },
        large: {
            size: 18,
            lineHeight: '22px'
        }
    }
}

export const pullquoteImageWidgetStyle = {
    ...pullquoteWidgetStyle,

    image: {
        marginBottom: 15,
        small: {
            marginBottom: 20
        },
        large: {
            marginBottom: 30
        }
    },
}

export const peopleSearchWidgetStyle = {
    backgroundColor: globals.colors.lightGray,
    padding: 25,
    size: 13,
    small: {
        size: 14
    },
    form: {
        width: '100%'
    },
    field: {
        placeholder: {
            color: transparent
        },
        fieldOuter: {
            marginBottom: 10,
        },
        search: {},
        icon: {
            size: 20
        }
    },
    button: {
        backgroundColor: globals.colors.darkGray,
        color: white,
        padding: '10px 20px',
        alignItems: 'center',
        large: {
            size: 17,
        },
        icon: {
            backgroundColor: white,
            color: globals.colors.darkGray
        },
        hover: {
            backgroundColor: globals.colors.textColor
        }
    },
    toggle: {}
}

export const practiceSearchWidgetStyle = {
    boxSizing: borderBox,
    tablet: {
        maxWidth: 225
    },
    small: {
        maxWidth: none
    },
    mobile: {
        margin: '40px 0',
        width: '100%'
    },
    form: {
        width: '100%',
        tablet: {
            maxWidth: 225
        },
        small: {
            maxWidth: none
        },
        large: {
            width: '100%'
        }
    },
    field: {
        height: 60,
        size: 17,
        weight: 300,
        icon: {
            fontSize: 20,
            display: none
        },
        inputLabel: {
            tablet: {
                size: 15,
            },
            small: {
                size: 16
            },
            large: {
                size: 18
            }
        },
        focusedInputLabelStyle: {

        }
    },
    button: {
        display: flex,
        marginTop: 20,
        backgroundColor: globals.colors.green,
        height: 60,
        width: 137,
        color: white,
        size: 13,
        padding: '10px 20px',
        alignItems: center,
        justifyContent: center,
        weight: 400,
        lineHeight: '13px',
        letterSpacing: '3px',
        icon: {
            backgroundColor: white,
            color: globals.colors.darkGray,
            display: none
        },
        hover: {
            backgroundColor: globals.colors.darkGreen
        }
    }
}

export const featuredContentWidgetStyle = {
    display: block,
    hover: {
        color: globals.colors.green,
        child: {
            selector: 'img',
            opacity: .7
        }
    },
    heading: {
        ...widgetTitleStyle,
        marginBottom: 30,
        tablet: {
            ...widgetTitleStyle.tablet,
            marginBottom: 21,
        },
        small: {
            ...widgetTitleStyle.small,
        },
        large: {
            ...widgetTitleStyle.large,
            marginBottom: 30
        },
    },
    image: {
        marginTop: 10,
        marginBottom: 20
    },
    title: {
        size: 18,
        lineHeight: '28px',
        tablet: {
            size: 15,
            lineHeight: '22px'
        },
        small: {
            size: 16,
            lineHeight: '23px'
        },
        large: {
            size: 18,
            lineHeight: '28px'
        },
        hover: {
            color: globals.colors.green
        }
    },
    button: {
        marginTop: 26,
        tablet: {
            marginTop: 18
        },
        small: {
            marginTop: 20
        },
        large: {
            marginTop: 26,
        }
    }
}

export const callToActionWidgetStyle = {
    ...featuredContentWidgetStyle,
    hover: {
        color: globals.colors.black
    },
    heading: {},
    excerpt: {
        child: {
            selector: '> p',
            size: 18,
            lineHeight: '28px',
            marginBottom: 0,
            tablet: {
                size: 15,
                lineHeight: '22px',
                marginBottom: 0
            },
            small: {
                size: 16,
                lineHeight: '23px',
                marginBottom: 0
            },
            large: {
                size: 18,
                lineHeight: '28px',
                marginBottom: 0
            },
        }
    },
    image: {
        marginBottom: [20, .7, 20]
    },
    child: [
        {
            selector: 'a',
            wordBreak: 'break-word'
        },
        {
            selector: '> *',
            tablet: {
                maxWidth: globals.sidebarRightWidth.tablet
            },
            small: {
                maxWidth: globals.sidebarRightWidth.small
            },
            large: {
                maxWidth: globals.sidebarRightWidth.large
            }
        }
    ]
}
