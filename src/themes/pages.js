import {iconToData} from '../utils/styling'
import {
    absolute,
    auto,
    block,
    borderBox,
    center,
    column,
    flex,
    flexStart,
    hidden,
    inlineBlock,
    inlineFlex,
    none,
    pointer,
    relative,
    spaceBetween,
    transparent,
    uppercase,
    white,
    wrap
}                   from '../utils/themer'

import {
    caretRightSolid,
    chevronCircleDown,
    chevronCircleRight,
    triangle
}                             from '../variables/iconLibrary'
import {globals}              from '../variables/styles'
import {
    largeButtonStyle,
    smallButtonStyle
}                             from './buttons'
import {
    headingStyle,
    pageTitleInContentStyle
}                             from './elements'
import {
    postContentStyle,
    richTextFirstParagraphStyle,
    richTextParagraphStyle
} from './layout'
import {pullquoteWidgetStyle} from './sidebars'

export const communityStyle = {
    topSection: {
        display: flex,
        alignContent: flexStart,
        alignItems: flexStart,
        color: globals.colors.textColor,
        mobile: {
            flexDirection: column,
        },
    },
    rightColumn: {
        tablet: {
            marginLeft: 30,
            flexShrink: 0,
            flexGrow: 0,
        },
        small: {
            marginLeft: 45,
        },
        large: {
            marginLeft: 60,
        },
    },
    image: {
        width: 180,
        mobile: {
            marginTop: 20
        },
        small: {
            width: 220,
        },
        large: {
            width: auto,
            marginLeft: 100
        },
    },
    caption: {
        marginTop: 20,
        size: 15,
        large: {
            marginLeft: 100
        },
    },
    gallery: {
        marginTop: 30,
        borderTop: globals.style.dividingBorder,
        paddingTop: 40,
        display: flex,
        flexWrap: wrap,
        justifyContent: spaceBetween,
        mobile: {
            flexDirection: column,
        },
        tablet: {
            paddingTop: 45,
            marginTop: 40
        },
        large: {
            marginTop: 60,
            paddingTop: 70
        },
        item: {
            marginBottom: 35,
            tablet: {
                marginBottom: 40,
                width: 470,
            },
            small: {
                width: 600,
            },
            large: {
                marginBottom: 80,
                width: 750,
            },
        },
        image: {},
        caption: {
            color: globals.colors.textColor,
            marginTop: 15,
            lineHeight: 1.3,
            size: 16,
            large: {
                marginTop: 25,
                size: 17
            }
        },
    },
}

export const contactUsStyle = {
    description: {
        mobile: {
            marginTop: 30,
            marginBottom: 15
        },
        tablet: {
            marginBottom: 15,
        },
        small: {
            marginBottom: 20,
        },
        large: {
            marginBottom: 35,
        },
        child: {
            selector: '>p:first-child',
            ...richTextFirstParagraphStyle
        }
    },
    wrapper: {
        display: flex,
        flexWrap: wrap,
        justifyContent: spaceBetween,
        flexDirection: 'row',
        mobile: {
            flexDirection: column,
        },
        tablet: {
            marginTop: 10
        }
    },
    officeListing: {
        backgroundColor: globals.colors.lightGray,
        boxSizing: borderBox,
        height: 330,
        padding: '45px 38px',
        mobile: {
            marginBottom: 2
        },
        tablet: {
            width: 'calc(50% - 1px)',
            marginBottom: 2,
            height: 215,
            padding: '24px 22px'
        },
        small: {
            width: 'calc(50% - 1px)',
            height: 250,
            padding: '36px 32px'
        },
        large: {
            width: 'calc(50% - 1px)',
            height: 305,
            padding: '45px 38px'
        },
        print: {
            paddingLeft: 0
        },
        hover: {
            backgroundColor: globals.colors.green,
            color: globals.colors.white,
            child: {
                selector: '*',
                color: white
            }
        },
        panelName: {
            weight: 900,
            size: 34,
            marginBottom: 33,
            lineHeight: '44px',
            tablet: {
                size: 20,
                marginBottom: 12,
                lineHeight: '28px',
            },
            small: {
                size: 30,
                marginBottom: 29
            },
            large: {
                size: 34,
                marginBottom: 33,
                lineHeight: '44px'
            }
        },
        address: {
            size: 18,
            lineHeight: '22px',
            tablet: {
                size: 14,
                lineHeight: '18px',
            },
            small: {
                size: 16,
                lineHeight: '20px',
            },
            large: {
                size: 18,
                lineHeight: '22px'
            }
        },
        phone: {
            size: 18,
            lineHeight: '30px',
            weight: 400,
            color: globals.colors.gray,
            marginTop: 12,
            tablet: {
                size: 14,
                marginTop: 6
            },
            small: {
                size: 16,
                marginTop: 10
            },
            large: {
                size: 18,
                lineHeight: '30px',
                marginTop: 12
            }
        },
        button: {
            margin: 0,
            padding: 0,
            ...smallButtonStyle,
            backgroundColor: transparent,
            marginTop: 18,
            mobile: {
                padding: 0,
            },
            tablet: {
                ...smallButtonStyle.tablet,
                size: 10,
                marginTop: 6
            },
            small: {
                ...smallButtonStyle.small,
                marginTop: 13
            },
            large: {
                ...smallButtonStyle.large,
                marginTop: 18
            },
            after: {
                display: none
            }
        }
    }
}

export const departmentStyle = {
    height: 50,
    zIndex: 5,
    marginBottom: 30,
    mobile: {
        marginTop: -30,
        marginLeft: -25,
        width: 'calc(100% + 50px)',
        backgroundColor: globals.colors.panelBackgroundColor,
    },
    tablet: {
        marginTop: -90,
        position: absolute,
        left: 0,
        width: '100%'
    },
    small: {
        marginTop: -95
    },
    large: {
        marginTop: -134
    },
    hover: {
        child: [
            {
                selector: '.department-panel',
                display: block
            },
            {
                selector: '> div',
                backgroundColor: globals.colors.linkHoverColor
            },
        ]

    },
    button: {
        display: flex,
        alignItems: center,
        justifyContent: center,
        backgroundColor: globals.colors.panelBackgroundColor,
        float: 'right',
        color: white,
        font: globals.fonts.heading,
        width: 210,
        height: 50,
        weight: 600,
        size: 14,
        small: {
            size: 16,
            letterSpacing: .5,
            width: 225
        },
        large: {
            size: 19,
            width: 265,
            height: 64
        },
        hover: {
            backgroundColor: globals.colors.linkHoverColor,
            cursor: 'pointer',
        },
        after: {
            content: iconToData(chevronCircleDown, white),
            display: block,
            width: 14,
            marginLeft: 15
        },
    },
    panel: {
        display: none,
        clear: 'both',
        font: globals.fonts.heading,
        weight: 300,
        backgroundColor: globals.colors.linkHoverColor,
        color: white,
        zIndex: 2,
        padding: '25px 30px',
        boxSizing: 'border-box',
        tablet: {
            width: 300,
            marginLeft: auto
        },
        small: {
            width: 360,
            padding: '30px'
        },
        large: {
            padding: '50px 30px'
        },
        hover: {
            display: block
        }
    },
    contact: {
        marginBottom: 50,
        lineHeight: 1.5,
        tablet: {
            marginBottom: 40,
        },
        small: {
            marginBottom: 45,
        },
        large: {
            marginBottom: 50,
        },
        child: {
            selector: 'span',
            display: block
        }
    },
    contactType: {
        weight: 900,
        size: 20,
        lineHeight: '24px',
        marginBottom: 12,
        tablet: {
            size: 18,
            marginBottom: 8
        },
        small: {
            size: 19,
            marginBottom: 10
        },
        large: {
            size: 20,
            lineHeight: '24px',
            marginBottom: 12
        }
    },
    person: {
        size: 18,
        lineHeight: '22px',
        marginBottom: 6,
        tablet: {
            size: 15,
            marginBottom: 3
        },
        small: {
            size: 16,
            marginBottom: 5
        },
        large: {
            size: 18,
            lineHeight: '22px',
            marginBottom: 6
        }
    },
    phone: {
        color: globals.colors.black,
        display: block,
        size: 18,
        lineHeight: '22px',
        marginBottom: 6,
        tablet: {
            size: 15,
            marginBottom: 3
        },
        small: {
            size: 16,
            marginBottom: 5
        },
        large: {
            size: 18,
            marginBottom: 6
        },
        hover: {
            color: globals.colors.green
        }
    },
    email: {
        color: globals.colors.black,
        display: block,
        textDecoration: 'underline',
        lineHeight: '22px',
        tablet: {
            size: 15
        },
        small: {
            size: 16
        },
        large: {
            size: 18,
            lineHeight: '22px'
        },
        hover: {
            color: globals.colors.green
        }
    },
}

export const jobListingStyle = {
    margin: '0 0 30px',
    title: {
        margin: 0,
        large: {
            fontSize: 22,
        },
    },
    offices: {
        marginTop: 4,
    },
    category: {},
    description: {
        marginTop: 30,
    },
    expandButton: {
        display: inlineFlex,
        marginRight: auto,
    },
    applyOnline: {
        display: inlineFlex,
        textDecoration: 'underline',
    },
    applyLinks: {
        marginBottom: 0,
        tablet: {
            marginBottom: 0,
        },
        small: {
            marginBottom: 0,
        },
        large: {
            marginBottom: 0,
        },
        child: {
            selector: 'li',
            lastChild: {
                marginBottom: 0,
                tablet: {
                    marginBottom: 0,
                },
                small: {
                    marginBottom: 0,
                },
                large: {
                    marginBottom: 0,
                },
            }
        }
    },
    continued: {
        mobile: {
            marginTop: 0
        },
        marginTop: 25,
        large: {
            marginTop: 25
        }
    },
    email: {
        display: inlineFlex,
        textDecoration: 'underline',
    },
}

export const diversityStyle = {
    wrapper: {
        mobile: {
            ...postContentStyle.mobile,
            marginTop: 30
        }
    },
    description: {
        ...richTextParagraphStyle,
        child: {
            selector: 'p:first-child',
            ...richTextFirstParagraphStyle
        }
    },
    continuedDescription: {
        ...richTextParagraphStyle,
        child: {
            selector: 'h3',
            firstOfType: {
                marginTop: 0,
                tablet: {},
                small: {},
                large: {
                    marginTop: 14
                }
            }
        }
    },
    testimonial: {
        display: flex,
        borderTop: `1px solid ${globals.colors.borderColor}`,
        borderBottom: `1px solid ${globals.colors.borderColor}`,
        mobile: {
            flexDirection: column,
            padding: '47px 0',
            margin: '36px 0'
        },
        tablet: {
            padding: '47px 0',
            margin: '36px 0'
        },
        small: {
            padding: '57px 0',
            margin: '40px 0'
        },
        large: {
            padding: '67px 0 72px 0',
            margin: '48px 0'
        }
    },
    image: {
        alignSelf: flexStart,
        mobile: {
            marginBottom: 20
        },
        tablet: {
            alignSelf: center,
            marginRight: 45,
            height: 155,
            width: 155,
            minWidth: 155
        },
        small: {
            marginRight: 55,
            height: 185,
            width: 185,
            minWidth: 185
        },
        large: {
            marginRight: 65,
            height: 205,
            width: 205,
            minWidth: 205
        }
    },
    quoteWrapper: {
        tablet: {},
        small: {},
        large: {}
    },
    quote: {
        position: relative,
        lineHeight: '45px',
        fontSize: 33,
        fontWeight: 900,
        zIndex: 1,
        marginBottom: 4,
        mobile: {
            marginTop: 40
        },
        tablet: {
            fontSize: 24,
            lineHeight: '33px'
        },
        small: {
            fontSize: 28,
        },
        large: {
            fontSize: 33,
            lineHeight: '45px',
        },
        before: {
            display: block,
            position: absolute,
            top: -55,
            right: 0,
            content: 'open-quote',
            size: 390,
            weight: 900,
            transform: 'rotate(180deg)',
            color: globals.colors.lightGray,
            zIndex: -1,

            tablet: {
                top: -40,
                size: 250
            },
            small: {
                top: -45,
                size: 300
            },
            large: {
                top: -60,
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
        margin: '25px 0 0 0',
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
            width: 16,
            marginTop: 18
        },
        tablet: {
            fontSize: 15,
            marginTop: 15
        },
        small: {
            fontSize: 16,
            marginTop: 18
        },
        large: {
            size: 18,
            lineHeight: '22px',
            marginTop: 21
        }
    },
    widgetTitle: {
        marginBottom: 32,
        tablet: {
            marginBottom: 24
        },
        small: {
            marginBottom: 26
        },
        large: {
            marginBottom: 32
        }
    },
    newsLink: {
        display: block,
        textDecoration: 'underline',
        size: 18,
        lineHeight: '28px',
        marginBottom: 27,
        tablet: {
            size: 15,
            marginBottom: 22,
            lineHeight: '22px',
        },
        small: {
            size: 16,
            marginBottom: 24,
            lineHeight: '24px',
        },
        large: {
            size: 18,
            lineHeight: '28px',
            marginBottom: 27
        }
    },
    button: {
        marginTop: 13,
        tablet: {
            marginTop: 7,
            size: 11
        },
        small: {
            marginTop: 10,
            size: 12
        },
        large: {
            marginTop: 13,
            size: 13
        },
        hover: {
            color: globals.colors.lightGreen
        },
    },
    newsItem: {
        mobile: {
            child: {
                selector: ':first-of-type',
                borderTop: `1px solid ${globals.colors.borderColor}`,
                flexDirection: column
            }
        }
    }
}

export const currentOpeningStyle = {
    margin: '35px 0 40px 0',
    mobile: {
        maxWidth: 305
    },
    tablet: {},
    small: {},
    large: {
        marginBottom: 80
    },
    filter: {
        font: globals.fonts.heading,
        weight: 400,
        size: 20,
        lineHeight: '15px',
        marginRight: 30,
        mobile: {
            display: block,
            marginBottom: 15
        },
        tablet: {
            size: 16,
        },
        small: {
            size: 18,
        },
        large: {
            size: 20,
            lineHeight: '35px'
        },
        print: {
            display: none
        }
    },
    jobListing: {
        borderTop: globals.style.dividingBorder,
        paddingTop: 10,
        marginBottom: 50,
        tablet: {
            paddingTop: 20,
            marginBottom: 48,
        },
        small: {
            paddingTop: 25,
            marginBottom: 64,
        },
        large: {
            paddingTop: 30,
            marginBottom: 80,
        },
        print: {
            pageBreakInside: 'avoid'
        },
        title: {
            weight: 900,
            size: 27,
            lineHeight: '36px',
            marginTop: 33,
            tablet: {
                size: 22,
                lineHeight: '26px',
                marginTop: 24
            },
            small: {
                size: 27,
                lineHeight: '36px',
                marginTop: 33
            },
            large: {
                size: 34,
                lineHeight: '44px',
                marginTop: 43
            },
            hover: {
                cursor: pointer
            },
        },
        category: {
            display: none
        },
        offices: {
            size: 18,
            lineHeight: '30px',
            marginTop: 2,
            tablet: {
                size: 17,
                lineHeight: '28px'
            },
            small: {
                size: 18,
                lineHeight: '30px'
            },
            large: {
                size: 20,
                lineHeight: '35px',
                marginTop: 2
            }
        },
        expandingDescription: {
            description: {
                marginTop: 22,
                tablet: {
                    marginTop: 18
                },
                small: {
                    marginTop: 22
                },
                large: {
                    marginTop: 26
                }
            },
            collapseButton: {
                marginTop: 30,
                tablet: {
                    marginTop: 25,
                    size: 10
                },
                small: {
                    marginTop: 30,
                    size: 12
                },
                large: {
                    marginTop: 40,
                    size: 13,
                },
                icon: {
                    transform: 'rotate(180deg)'
                }
            },
            expandButton: {
                marginTop: 38,
                tablet: {
                    size: 10,
                    marginTop: 23
                },
                small: {
                    size: 12,
                    marginTop: 28
                },
                large: {
                    marginTop: 38,
                    size: 13
                },
                icon: {
                    transform: 'rotate(0deg)'
                }
            }
        },

    },
    heading: {
        large: {
            ...pageTitleInContentStyle.large,
            marginBottom: 27
        }
    },
    description: {
        child: {
            selector: 'p',
            ...richTextParagraphStyle,
            firstChild: {
                ...richTextFirstParagraphStyle
            }
        }
    }
}

export const careersStyle = {
    description: {
        ...richTextParagraphStyle,
        child: {
            selector: 'p:first-child',
            ...richTextFirstParagraphStyle
        }
    },
    mainDescription: {
        ...richTextParagraphStyle,
        mobile: {
            marginTop: 30
        },
        child: {
            selector: 'p:first-child',
            ...richTextFirstParagraphStyle
        }
    },
    features: {
        display: flex,
        justifyContent: flexStart,
        maxWidth: 760,
        mobile: {
            flexDirection: column,
            marginTop: 50
        },
        tablet: {
            marginTop: 33
        },
        small: {
            marginTop: 70
        },
        large: {
            marginTop: 110
        },
        child: {
            selector: '>div:last-child',
            marginBottom: 0,
            tablet: {
                marginLeft: 39
            },
            small: {
                marginLeft: 63
            },
            large: {
                marginLeft: 73
            }
        }
    },
    feature: {
        mobile: {
            marginBottom: 70
        },
        tablet: {
            width: 211,
            minWidth: 211
        },
        small: {
            width: 280,
            minWidth: 280
        },
        large: {
            width: 340,
            minWidth: 340
        },
        print: {
            maxWidth: 170,
            minWidth: 170
        },
        image: {
            width: '100%',
            minWidth: '100%',
            mobile: {
                maxWidth: 400,
                minWidth: 0,
                width: auto
            }
        },
        heading: {
            weight: 900,
            size: 27,
            lineHeight: '36px',
            marginTop: 33,
            tablet: {
                size: 22,
                lineHeight: '26px',
                marginTop: 24
            },
            small: {
                size: 27,
                lineHeight: '36px',
                marginTop: 33
            },
            large: {
                size: 34,
                lineHeight: '44px',
                marginTop: 43
            }
        },
        description: {
            color: globals.colors.gray,
            ...richTextParagraphStyle,
            marginTop: 14,
            tablet: {
                size: 15,
                lineHeight: '21px',
                marginTop: 11
            },
            small: {
                size: 16,
                lineHeight: '24px',
                marginTop: 12
            },
            large: {
                size: 20,
                lineHeight: '30px',
                marginTop: 14
            }
        },
        button: {
            marginTop: 26,
            tablet: {
                size: 11,
                lineHeight: '13px',
                marginTop: 18
            },
            small: {
                size: 11,
                lineHeight: '13px',
                marginTop: 22
            },
            large: {
                marginTop: 26,
                size: 13,
            }
        }
    }
}


/// ABOUT US PAGE

export const aboutUsStyle = {
    tablet: {},
    small: {},
    large: {
        marginBottom: 60
    },
    description: {
        borderBottom: `1px solid ${globals.colors.borderColor}`,
        mobile: {
            marginTop: 30,
            paddingBottom: 13
        },
        tablet: {
            paddingBottom: 37,
            marginBottom: 55
        },
        small: {
            paddingBottom: 44,
            marginBottom: 60
        },
        large: {
            paddingBottom: 58,
            marginBottom: 70
        },
        child: {
            selector: 'p',
            ...richTextParagraphStyle,
            firstChild: {
                ...richTextFirstParagraphStyle,
                mobile: {
                    size: 18,
                    lineHeight: '30px',
                    weight: 400
                }
            }
        }
    },
    heading: {
        ...headingStyle,
        mobile: {
            marginBottom: 13
        }
    },
    twoUp: {
        display: flex,
        justifyContent: spaceBetween,
        mobile: {
            display: flex,
            flexDirection: column
        },
        item: {
            width: '50%',
            flexShrink: 0,
            boxSizing: borderBox,
            mobile: {
                width: '100%',
                paddingBottom: 31
            },
            firstChild: {
                tablet: {
                    paddingRight: 60,
                    borderRight: `1px solid ${globals.colors.borderColor}`,
                },
                small: {
                    paddingRight: 70,
                },
                large: {
                    paddingRight: 80,
                }
            },
            lastChild: {
                mobile: {
                    borderTop: `1px solid ${globals.colors.borderColor}`,
                },
                tablet: {
                    paddingLeft: 60
                },
                small: {
                    paddingLeft: 70,
                },
                large: {
                    paddingLeft: 80,
                }
            }
        }
    },
    sectionThree: {
        display: flex,
        alignItems: center,
        backgroundColor: globals.colors.green,
        color: white,
        mobile: {
            display: block,
            position: relative,
            flexDirection: column,
            padding: '30px 30px 38px 30px',
            margin: '42px 0',
        },
        tablet: {
            height: 294,
            marginTop: 60,
            marginBottom: 60
        },
        small: {
            height: 396,
            marginTop: 70,
            marginBottom: 70
        },
        large: {
            height: 480,
            marginTop: 80,
            marginBottom: 80
        },
        print: {
            paddingTop: 30,
            backgroundColor: globals.colors.white,
            color: globals.colors.black,
            pageBreakInside: 'avoid'
        },
        before: {
            mobile: {
                content: '\' \'',
                height: 1,
                width: '100%',
                backgroundColor: globals.colors.borderColor,
                top: -43,
                left: 0,
                position: absolute
            }
        },
        after: {
            mobile: {
                content: '\' \'',
                height: 1,
                width: '100%',
                backgroundColor: globals.colors.borderColor,
                bottom: -43,
                left: 0,
                position: absolute
            }
        }
    },
    historyImage: {
        mobile: {
            //maxWidth: 270
        },
        tablet: {
            width: '50%',
            minWidth: '50%'
        }
    },
    history: {
        boxSizing: borderBox,
        mobile: {
            width: '100%'
        },
        tablet: {
            padding: '32px 44px',
        },
        small: {
            padding: '42px 54px',
        },
        large: {
            padding: '48px 62px',
        },
        print: {
            color: globals.colors.black
        },
        heading: {
            ...headingStyle,
            mobile: {
                marginTop: 21,
                marginBottom: 13
            }
        },
        description: {
            weight: 400,
            size: 18,
            lineHeight: '30px',
            mobile: {
                weight: 300
            },
            tablet: {},
            small: {},
            large: {
                size: 20,
                lineHeight: '35px'
            },
            print: {
                color: globals.colors.black
            }
        },
        button: {
            color: white,
            weight: 300,
            mobile: {
                marginTop: 25
            },
            tablet: {
                marginTop: 25,
                size: 10
            },
            small: {
                marginTop: 30,
                size: 11
            },
            large: {
                marginTop: 40,
                size: 13
            },
            print: {
                color: globals.colors.black
            },
            icon: {
                backgroundColor: transparent,
                color: white
            }
        }
    },
    quoteWrapper: {
        ...pullquoteWidgetStyle,
        mobile: {
            paddingTop: 40,
            marginBottom: 60,
            borderTop: `1px solid ${globals.colors.borderColor}`
        },
        tablet: {
            paddingLeft: 60,
            boxSizing: borderBox
        },
        small: {
            paddingLeft: 70
        },
        large: {
            paddingLeft: 80
        },
        image: {
            mobile: {
                maxWidth: 280
            },
            tablet: {
                width: '100%'
            }
        },
        quote: {
            marginTop: 19,
            ...pullquoteWidgetStyle.quote,
            tablet: {
                ...pullquoteWidgetStyle.quote.tablet
            },
            small: {
                ...pullquoteWidgetStyle.quote.small,
            },
            large: {
                ...pullquoteWidgetStyle.quote.large,
                marginTop: 41
            },
            before: {
                ...pullquoteWidgetStyle.quote.before,
                mobile: {
                    top: -204
                },
                tablet: {
                    ...pullquoteWidgetStyle.quote.before.tablet,
                    top: -118
                },
                small: {
                    ...pullquoteWidgetStyle.quote.before.small,
                    top: -133
                },
                large: {
                    ...pullquoteWidgetStyle.quote.before.large,
                    top: -207
                },
            }
        },
        attribution: {
            ...pullquoteWidgetStyle.attribution,
            marginTop: 27,
            tablet: {
                ...pullquoteWidgetStyle.attribution.tablet,
            },
            small: {
                ...pullquoteWidgetStyle.attribution.small,
            },
            large: {
                ...pullquoteWidgetStyle.attribution.large,
                marginTop: 27
            }
        }
    },
    sectionBottom: {
        display: flex,
        top: {
            mobile: {
                marginBottom: 38
            }
        },
        mobile: {
            flexDirection: column
        },
        bottom: {
            borderTop: `1px solid ${globals.colors.borderColor}`,
            tablet: {
                paddingTop: 52,
                marginTop: 63
            },
            small: {
                paddingTop: 62,
                marginTop: 73
            },
            large: {
                paddingTop: 72,
                marginTop: 83
            }
        },
    },
    button: {
        ...smallButtonStyle,
        mobile: {
            marginTop: 20
        },
        tablet: {
            ...smallButtonStyle.tablet,
            marginTop: 25,
            size: 11
        },
        small: {
            ...smallButtonStyle.small,
            size: 12,
            marginTop: 32
        },
        large: {
            ...smallButtonStyle.large,
            marginTop: 47
        },
        download: {
            color: globals.colors.green,
            marginRight: 20,
            size: 22,
            tablet: {
                marginRight: 16,
                size: 15
            },
            small: {
                marginRight: 18,
                size: 17
            },
            large: {
                marginRight: 20,
                size: 22
            }
        }
    }
}

/// FIRM HISTORY TEMPLATE
export const firmHistoryStyle = {
    wrapper: {
        tablet: {
            marginTop: 20,
            paddingLeft: 327
        },
        small: {
            marginTop: 37,
            paddingLeft: 383
        },
        large: {
            marginTop: 47,
            paddingLeft: 435
        }
    },
    heading: {
        weight: 900,
        lineHeight: 1,
        tablet: {
            size: 34
        },
        small: {
            size: 40
        },
        large: {
            size: 46,
        }
    },
    row: {
        display: flex,
        position: relative,
        print: {
            display: block,
            pageBreakInside: 'avoid'
        },
        mobile: {
            display: flex,
            flexDirection: column,
        },
        lastChild: {
            child: {
                selector: '> div > div',
                border: none
            }
        }
    },
    cell: {
        minWidth: 435,
        tablet: {
            position: absolute,
            minWidth: 265,
            width: 265,
            marginLeft: -265,
        },
        small: {
            minWidth: 385,
            width: 385,
            marginLeft: -385
        },
        large: {
            minWidth: 435,
            width: 435,
            marginLeft: -435
        }
    },
    year: {
        width: '100%',
        heading: {
            weight: 600,
            marginTop: 0,
            fontSize: 38,
            lineHeight: '36px',
            tablet: {
                size: 34,
                lineHeight: '36px',
                marginBottom: 10,
            },
            small: {
                size: 40,
                lineHeight: '42px',
                marginBottom: 13,
            },
            large: {
                size: 46,
                marginBottom: 15,
                lineHeight: '48px'
            }
        },
        headingWithImage: {
            color: globals.colors.green,
            display: flex,
            position: relative,
            before: {
                position: absolute,
                left: -52,
                content: iconToData(triangle, globals.colors.black),
                display: block,
                width: 20,
                transform: 'rotate(-90deg)',
                mobile: {
                    display: none
                },
                tablet: {
                    left: -38,
                    width: 16,
                },
                small: {
                    width: 19,
                    left: -46,
                },
                large: {
                    left: -52,
                    width: 20,
                }
            }
        },
        description: {
            borderBottom: `1px solid ${globals.colors.borderColor}`,
            paddingBottom: 40,
            marginBottom: 42,
            tablet: {
                paddingBottom: 30,
                marginBottom: 32
            },
            small: {
                paddingBottom: 35,
                marginBottom: 37
            },
            large: {
                paddingBottom: 40,
                marginBottom: 42
            }
        }
    },
    image: {
        mobile: {
            marginBottom: 20
        },
        tablet: {
            position: absolute,
            minWidth: 265,
            width: 265,
            minHeight: 166,
            marginLeft: -327
        },
        small: {
            minWidth: 320,
            width: 300,
            minHeight: 188,
            marginLeft: -383
        },
        large: {
            minWidth: 360,
            width: 360,
            minHeight: 226,
            marginLeft: -435
        }
    }
}

/// OFFICE LISTING PAGE

export const officeListingStyle = {
    position: relative,
    height: auto,
    width: auto,
    mobile: {
        paddingBottom: 30
    },
    tablet: {
        width: 300,
        height: 320,
    },
    small: {
        width: 372,
        height: 320
    },
    large: {
        width: 475,
        height: 405
    },
    hover: {
        child: [
            {
                selector: '.office-panel',
                opacity: 1,
            },
            {
                selector: '.office-name',
                opacity: 0,
            },
        ],
    },
    phone: {
        fontSize: 17,
        fontWeight: 700
    },
    button: {
        ...largeButtonStyle,
        font: globals.fonts.heading,
        textTransform: uppercase,
        letterSpacing: .5,
        display: inlineFlex,
        position: relative,
        mobile: {
            marginTop: 10,
            size: 12,
            padding: '10px 12px 8px 12px'
        },
        tablet: {
            marginTop: 30,
            padding: '8px 14px 6px 14px',
            size: 11
        },
        small: {
            marginTop: 35,
            padding: '8px 16px',
            size: 13
        },
        large: {
            marginTop: 45,
            padding: '10px 20px',
            size: 15
        },
        hover: {
            backgroundColor: white,
            color: globals.colors.textColor,
            after: {
                content: iconToData(chevronCircleRight, globals.colors.linkColor),
            }
        },
        after: {
            content: iconToData(chevronCircleRight, globals.colors.linkColor),
            display: block,
            right: 15,
            width: 11,
            marginLeft: 6
        },
    },
    icon: {
        ...smallButtonStyle.icon,
        backgroundColor: transparent
    },
    name: {
        display: flex,
        alignItems: center,
        font: globals.fonts.heading,
        color: globals.colors.textColor,
        weight: 800,
        before: {
            content: iconToData(caretRightSolid, globals.colors.linkColor),
            display: block,
            width: 8,
            marginRight: 10,
            small: {
                width: 10
            }
        },
        mobile: {
            display: none,
        },
        tablet: {
            size: 16,
            marginTop: 14
        },
        small: {
            size: 20
        },
        large: {
            size: 20
        }
    },
    image: {
        mobile: {
            marginBottom: 8
        }
    }
}

export const subscribeStyle = {
    minHeight: 800,
    child: {
        selector: 'iframe',
        border: none
    }
}
