import {isMicrositeSubpage} from '../utils/flags'
import {iconInSolidCircle}  from '../utils/styling'
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
    inlineBlock,
    inlineFlex,
    none,
    relative,
    spaceBetween,
    transparent,
    uppercase,
    white,
    wrap
}                           from '../utils/themer'
import {globals}            from '../variables/styles'
import {
    archiveListingStyle,
    newsExcerptStyle
}                           from './archives'
import {smallButtonStyle}   from './buttons'
import {centerContent}      from './elements'


import {defaultLegendStyle} from './forms'

import {logoStyle} from './header'

import {
    innerContainerDefaultStyle,
    richTextFirstParagraphStyle,
    richTextParagraphStyle
} from './layout'


/**
 *
 *     PERSON BIO
 *
 */

export const personPortraitStyle = {
    position: absolute,
    maxWidth: none,
    maxHeight: none,
    width: auto,
    mobile: {
        maxWidth: 920,
        left: -90
    },
    tablet: {
        height: 240,
        margin: '0 auto',
        left: '50%',
        transform: 'translate(-50%, 0)',
    },
    small: {
        height: 320
    },
    large: {
        height: 500
    }
}

export const bioDescriptionStyle = {
    paddingBottom: 25,
    mobile: {
        borderBottom: globals.style.dividingBorder
    },
    description: {
        child: {
            selector: '> p',
            ...richTextParagraphStyle,
            firstChild: {
                ...richTextFirstParagraphStyle,
                mobile: {
                    size: 18,
                    weight: 400
                }
            }
        }
    },
    expandButton: {
        flexDirection: 'row-reverse',
        marginTop: 26,
        tablet: {
            size: 11,
            marginTop: 23
        },
        small: {
            size: 11,
            marginTop: 28
        },
        large: {
            size: 13,
            marginTop: 43,
        },
        child: {
            selector: '> svg',
            transform: 'rotate(0deg)',
            marginRight: 17,
            marginLeft: 0,
            tablet: {
                marginRight: 12,
                marginLeft: 0,
            },
            small: {
                marginRight: 20,
                marginLeft: 0,
            },
            large: {
                marginLeft: 0,
                marginRight: 17,
            }
        }
    },
    collapseButton: {
        flexDirection: 'row-reverse',
        marginTop: 15,
        tablet: {
            size: 11,
            marginTop: 16
        },
        small: {
            size: 11,
            marginTop: 21
        },
        large: {
            size: 13,
            marginTop: 25,
        },
        child: {
            selector: '> svg',
            transform: 'rotate(180deg)',
            marginRight: 17,
            marginLeft: 0,
            tablet: {
                marginRight: 12,
                marginLeft: 0,
            },
            small: {
                marginRight: 20,
                marginLeft: 0
            },
            large: {
                marginRight: 17,
                marginLeft: 0
            }
        }
    }
}

export const bioInfoWrapperStyle = {
    position: relative,
    marginTop: 48,
    paddingTop: 48,
    mobile: {
        marginBottom: 25,
        paddingTop: 32
    },
    tablet: {
        columns: '2',
        columnGap: '70px',
        columnFill: 'balance',
        maxWidth: 600,
        marginTop: 48,
        paddingTop: 48,
    },
    small: {
        maxWidth: 625,
        marginTop: 70,
        paddingTop: 64,
        columnGap: '76px',
    },
    large: {
        marginTop: 77,
        paddingTop: 77,
        maxWidth: 760,
        columnGap: '84px',
    },
    print: {
        pageBreakInside: 'avoid'
    },
    empty: {
        display: none
    },
    before: {
        position: absolute,
        borderTop: `1px solid ${globals.colors.borderColor}`,
        content: '" "',
        height: 75,
        width: '1000%',
        top: 0,
        backgroundColor: white,
        zIndex: 1,
        mobile: {
            height: 0
        },
        tablet: {
            height: 40
        },
        small: {
            height: 65
        },
        large: {
            height: 80
        },
        print: {
            display: none
        }
    }
}

export const bioInfoStyle = {
    position: relative,
    columnSpan: 'none',
    breakInside: 'avoid',
    mobile: {
        paddingTop: 21,
        marginTop: 41,
        borderTop: `1px solid ${globals.colors.borderColor}`
    },
    firstChild: {
        marginTop: 0,
        paddingTop: 0,
        mobile: {
            border: none,
        },
        before: {
            content: none,
        },
        child: {
            selector: 'h3',
            marginTop: 0
        }
    },
    before: {

        tablet: {
            position: absolute,
            content: '" "',
            width: '100%',
            height: 1,
            background: globals.colors.borderColor,
            top: -50
        },
        small: {
            top: -62
        },
        large: {
            top: -67
        }
    },
    tablet: {
        paddingBottom: 33,
        marginBottom: 52
    },
    small: {
        paddingBottom: 43,
        marginBottom: 61
    },
    large: {
        paddingBottom: 52,
        marginBottom: 67,
    },
    print: {
        pageBreakInside: 'avoid'
    },
    listItem: {
        textDecoration: 'underline'
    }
}

export const bioInfoSubheadStyle = {
    margin: '20px 0 20px',
    fontSize: 19,
    fontWeight: 600,
    tablet: {
        size: 16,
        lineHeight: '19px'
    },
    small: {
        size: 16,
        lineHeight: '19px'
    },
    large: {
        fontSize: 20,
        lineHeight: '24px',
        marginTop: 20
    }
}

export const personIconLinksStyle = {
    width: '100%',
    display: flex,
    marginLeft: 60,
    tablet: {},
    small: {},
    large: {
        marginLeft: 60
    },
    print: {
        display: none
    },
    link: {
        font: globals.fonts.heading,
        display: flex,
        alignItems: center,
        color: globals.colors.textColor,
        padding: '0 0 7px 0',
        width: auto,
        fontWeight: 700,
        fontSize: 14,
        textDecoration: none,
        textTransform: uppercase,
        lineHeight: 1.3,
        position: relative,
        letterSpacing: globals.style.headingLetterSpacing,
        hover: {
            child: {
                selector: '.svg-inline--fa',
                backgroundColor: globals.colors.linkHoverColor,
            },
        },
        tablet: {
            fontSize: 11,
            paddingBottom: 7
        },
        small: {
            fontSize: 12,
        },
        large: {
            fontSize: 14,
        },
    },
    icon: {
        ...centerContent,
        ...iconInSolidCircle({
            iconSize: 20,
            circleSize: 40,
            mobile: {
                iconSize: 18,
                circleSize: 38,
            },
            tablet: {
                iconSize: 15,
                circleSize: 33,
            },
            small: {
                iconSize: 19,
                circleSize: 40,
            },
            large: {
                iconSize: 26,
                circleSize: 52,
            },
        }),
        border: '1px solid #d8d8d8',
        marginRight: 9,
        backgroundColor: globals.colors.textColor,
        color: white,
        zIndex: 1,
        hover: {
            borderColor: globals.colors.lightGreen
        }
    },
}

export const personOfficeWrapperStyle = {
    margin: '27px 0 0',
    lineHeight: 1.3,
    width: auto,
    color: white,
    icon: {
        color: globals.colors.green,
        tablet: {
            paddingRight: 13
        },
        small: {
            paddingRight: 20
        },
        large: {
            paddingRight: 20
        }
    },
    nameLink: {
        color: 'white',
        display: 'table-cell',
        paddingBottom: 7,
        paddingRight: 15,
        tablet: {},
        small: {},
        large: {
            paddingRight: 15
        }
    },
    phoneLink: {
        color: globals.colors.gray,
        display: 'table-cell'
    }
}

export const personAssociationsStyle = {
    textDecoration: none,
}

export const micrositePageTitleStyle = {
    margin: '42px 0 0 0',
    color: globals.colors.black,
    fontSize: 30,
    font: globals.fonts.heading,
    fontWeight: 900,
    lineHeight: '37px',
    padding: '0 0 23px 0',
    tablet: {
        margin: '0 0 30px',
        paddingBottom: 0
    },
    small: {
        fontSize: 36,
        margin: '0 0 40px',
    },
    large: {
        fontSize: 46,
    },
}


/**
 *
 *     MICROSITE RSS BLOG LISTING
 *
 */
export const micrositeRssBlogListingStyle = {
    button: {
        marginBottom: 25,
        small: {
            marginBottom: 30
        },
        large: {
            marginBottom: 35
        },
        hover: {
            color: white,
            backgroundColor: globals.colors.green,
        }
    },
    item: {
        ...archiveListingStyle,
        alignItems: flexStart,
        flexDirection: column,

        tablet: {
            ...archiveListingStyle.tablet,
            alignItems: flexStart,
        }
    },
    itemInner: {

    },
    title: {
        ...archiveListingStyle.title,
        marginTop: 0,
        tablet: {
            ...archiveListingStyle.title.tablet,
            marginTop: 0
        },
        hover: {
            color: globals.colors.green
        }
    },
    excerpt: {
        ...newsExcerptStyle,
        marginTop: 0,
        tablet: {
            ...newsExcerptStyle.tablet,
            marginTop: 0
        },
        small: {
            ...newsExcerptStyle.small,
            marginTop: 0
        },
        large: {
            ...newsExcerptStyle.large,
            marginTop: 0
        }
    },
    introText: {
        marginBottom: 40,
        small: {
            marginBottom: 50,
        }
    }
}


/**
 *
 *     MICROSITE SUBPAGES
 *
 */

export const personListingStyle = {
    display: flex,
    flexDirection: column,
    float: 'left',
    padding: '40px',
    marginBottom: 3,
    height: 304,
    backgroundColor: globals.colors.lightGray,
    boxSizing: borderBox,
    mobile: {
        alignItems: flexStart,
        flexDirection: column,
        margin: '0 0 3px 0',
        width: '100%'
    },
    tablet: {
        paddingBottom: 20,
        width: 242.66,
        height: 184,
        overflow: hidden,
        border: none,
        marginBottom: 3,
        padding: '15px',
        marginRight: 3,
    },
    small: {
        width: 328,
        height: 250,
        padding: '30px'
    },
    large: {
        height: 304,
        width: 400,
        padding: '40px'
    },
    print: {
        display: block,
        float: 'left',
        pageBreakInside: 'avoid'
    },
    hover: {
        backgroundColor: globals.colors.green,
        child: {
            selector: '*',
            color: '#fff !important'
        }
    },
    child: [
        {
            selector: '> div',
            lineHeight: '32px',
            size: 19,
            tablet: {
                lineHeight: '18px',
                size: 14
            },
            small: {
                lineHeight: '24px',
                size: 15
            },
            large: {
                lineHeight: '32px',
                size: 19
            }
        },
        {
            selector: ':nth-child(3n+3)',
            tablet: {
                marginRight: 0
            }
        },
        {
            selector: ':last-of-type',
            tablet: {
                marginBottom: 55,
            }
        }
    ],
    headshot: {
        margin: '0 0 10px',
        mobile: {
            width: 80,
            height: 80,
            borderRadius: 40,
            marginBottom: 18
        },
        tablet: {
            marginBottom: 8,
            width: 60,
            height: 60,
            borderRadius: 30,
        },
        small: {
            marginBottom: 12,
            width: 75,
            height: 75,
            borderRadius: 35,
        },
        large: {
            marginBottom: 18,
            width: 80,
            height: 80,
            borderRadius: 40,
        }
    },
    name: {
        weight: 600,
        fontSize: 20,
        lineHeight: '26px',
        display: flex,
        tablet: {
            fontSize: 18,
            lineHeight: '19px',
        },
        small: {
            fontSize: 20,
            lineHeight: '22px',
            marginBottom: 2
        },
        large: {
            fontSize: 22,
            lineHeight: '28px',
            marginBottom: 5
        },
        hover: {
            color: globals.colors.black
        }
    },
    title: {},
    phone: {
        display: block,
        color: globals.colors.textColor,
        tablet: {
            size: 13
        },
        small: {
            size: 14
        },
        large: {
            size: 18
        },
        hover: {
            color: globals.colors.black
        }
    },
    email: {
        display: none,
        hover: {
            color: globals.colors.black
        }
    },
    button: {
        display: block,
        marginTop: 12,
        tablet: {
            marginTop: 10,
            size: 10
        },
        small: {
            marginTop: 12,
            size: 11
        },
        large: {
            marginTop: 18,
            size: 13
        },
        hover: {
            color: globals.colors.green
        },
        icon: {
            transition: none
        }
    },
}

export const micrositePeopleListingStyle = {
    display: flex,
    flexWrap: wrap
}

export const globalPersonListingStyle = {
    border: none,
    paddingTop: 0,
    justifyContent: 'flex-start',
    height: auto,
    flexDirection: 'row',
    alignItems: center,
    width: '100%',
    mobile: {
        flexDirection: 'row',
        padding: '0 0 35px 0',
        margin: 0
    },
    tablet: {
        paddingBottom: 40,
        paddingLeft: 0
    },
    small: {
        paddingBottom: 45
    },
    large: {
        paddingBottom: 50
    },
    print: {
        float: none
    },
    hover: {
        backgroundColor: transparent
    },
    lastChild: {
        border: none
    },
    firstOfType: {
        mobile: {
            marginTop: 0
        }
    },
    button: {
        display: none
    },
    headshot: {
        marginRight: 20,
        marginBottom: 0,
        mobile: {
            height: 70,
            width: 70,
            borderRadius: 35,
        },
        tablet: {
            height: 60,
            width: 60,
            borderRadius: 30,
            marginRight: 38
        },
        small: {
            height: 70,
            width: 70,
            borderRadius: 35,
        },
        large: {
            height: 80,
            width: 80,
            borderRadius: 40,
        }
    },
    name: {
        weight: 500,
        color: globals.colors.black,
        size: 23,
        lineHeight: '31px',
        tablet: {
            size: 21,
            lineHeight: '31px'
        },
        small: {
            size: 24,
            lineHeight: '33px'
        },
        large: {
            size: 29,
            lineHeight: '37px'
        },
        hover: {
            color: globals.colors.lightGreen
        }
    },
    title: {
        color: globals.colors.black,
        margin: 0,
        size: 18,
        tablet: {
            size: 16
        },
        small: {
            size: 18
        },
        large: {
            size: 20,
            lineHeight: '26px'
        }
    },
    col2: {
        tablet: {
            width: '100%'
        }
    }
}

export const micrositeCaseStudyStyle = {
    title: {
        marginTop: 0,
        textTransform: none,
        size: 21,
        lineHeight: '28px',
        tablet: {
            size: 20
        },
        small: {
            size: 21,
            marginBottom: 14,
        },
        large: {
            marginTop: 0,
            size: 22,
            marginBottom: 19,
            lineHeight: '28px'
        }
    },
    textWrapper: {},
    excerpt: {
        size: 18,
        lineHeight: '30px',
        tablet: {
            size: 17,
            lineHeight: '28px',
        },
        small: {
            size: 18,
            lineHeight: '30px',
        },
        large: {
            lineHeight: '35px',
            size: 20
        }
    },
    people: {
        marginTop: 20,
        size: 18,
        lineHeight: '30px',
        tablet: {
            size: 17,
            lineHeight: '28px',
        },
        small: {
            size: 18,
            lineHeight: '30px',
        }
    },
    personWrapper: {
        lastChild: {
            child: {
                selector: 'span',
                display: none
            }
        }
    },
    person: {
        textDecoration: 'underline',
        color: globals.colors.gray
    },
    icon: {
        marginRight: 10,
        color: globals.colors.gray,
        size: 18,
        tablet: {
            size: 15
        },
        small: {
            size: 16
        },
        large: {
            size: 16
        }
    }
}


/**
 *
 *     PERSON BIO
 *
 */

export const personMarqueeStyleSwitch = post => {
    if (isMicrositeSubpage(post)) {
        return {
            ...personMarqueeStyle,
            tablet: {
                ...personMarqueeStyle.tablet,
                height: 290,
            },
            small: {
                ...personMarqueeStyle.small,
                height: 365,
            },
            large: {
                ...personMarqueeStyle.large,
                height: 425,
            },
        }
    }

    return {
        ...personMarqueeStyle
    }
}

export const personMarqueeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'fixed',
    justifyContent: center,
    marginLeft: 145,
    transition: 'height .5s ease-out',
    tablet: {
        height: 365
    },
    small: {
        height: 422
    },
    large: {
        height: 620
    },
    print: {
        marginLeft: 53,
        position: relative
    },
    title: {
        color: globals.colors.green,
        mobile: {
            size: 32,
            lineHeight: '28px',
            paddingLeft: 25
        },
        tablet: {
            marginTop: logoStyle.tablet.top + logoStyle.image.tablet.height,
            size: 42,
            lineHeight: '50px',
            marginBottom: 12,
            maxWidth: 500
        },
        small: {
            marginTop: logoStyle.small.top + logoStyle.image.small.height,
            size: 56,
            lineHeight: '76px',
            marginBottom: 15,
            maxWidth: 650
        },
        large: {
            marginBottom: 30,
            marginTop: logoStyle.large.top + logoStyle.image.large.height,
            size: 72,
            maxWidth: 800
        },
        child: {
            selector: 'a',
            color: globals.colors.green
        }
    },
    image: {
        mobile: {
            width: 636,
            // marginLeft: -150,
            transform: 'scale(1.2)',
            marginTop: 30,
            marginLeft: -200,
            height: auto,
            maxWidth: none,
            maxHeight: none
        }
    },
    imageWrapper: {
        mobile: {
            backgroundColor: globals.colors.black,
            height: 298,
            overflow: hidden,
            borderTop: '2px solid #3A3A3A',
        }
    }
}

export const mobilePersonMarqueeStyle = {
    ...personMarqueeStyle,
    title: {
        ...personMarqueeStyle.title,
        backgroundColor: white,
        mobile: {
            ...personMarqueeStyle.title.mobile,
            paddingLeft: 0,
            minHeight: 0,
            marginTop: 29,
            marginBottom: 13
        }
    },
    personTitle: {
        mobile: {
            backgroundColor: white,
            size: 16,
            lineHeight: '19px',
            marginBottom: 20
        },
        color: globals.colors.black
    },
    emailLink: {
        color: globals.colors.black,
        size: 18,
        lineHeight: '30px',
        hover: {
            color: globals.colors.green
        },
        icon: {
            color: globals.colors.green,
            marginRight: 12,
            size: 16
        }
    },
    phoneList: {
        wrapper: {
            marginTop: 13
        },
        icon: {
            marginRight: 10
        },
        nameLink: {
            color: globals.colors.black,
            paddingBottom: 15
        }
    },
    contact: {
        borderBottom: `1px solid ${globals.colors.borderColor}`,
        paddingBottom: 33
    },
    personIconLinks: {
        mobile: {
            flexDirection: column,
            marginLeft: 0,
            marginTop: 30,
            borderBottom: `1px solid ${globals.colors.borderColor}`,
            paddingBottom: 25
        },
        link: {
            size: 18,
            lineHeight: '30px',
            color: globals.colors.black,
            textDecoration: 'underline',
            textTransform: none,
            weight: 400,
            letterSpacing: 0,
            hover: {
                color: globals.colors.green
            }
        },
        icon: {
            marginRight: 15
        }
    }
}

export const micrositePersonStyle = {
    marqueeInfo: {
        display: flex,
        minWidth: 300,
        alignItems: flexEnd
    },
    marqueeInfoInner: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0
    },
    personTitle: {
        weight: 600,
        size: 20,
        lineHeight: '24px',
        color: white,
        mobile: {
            backgroundColor: globals.colors.black,
            paddingLeft: 25,
            size: 16,
            marginTop: -27,
            paddingBottom: 25,
            lineHeight: '19px'
        },
        tablet: {
            size: 15,
            lineHeight: '18px',
        },
        small: {
            size: 16,
            lineHeight: '19px',
        },
        large: {
            size: 20,
            lineHeight: '24px',
        }
    },
    emailLink: {
        color: white,
        textDecoration: 'underline',
        size: 20,
        lineHeight: '35px',
        weight: 300,
        tablet: {
            size: 15,
            lineHeight: '28px',
        },
        small: {
            size: 16,
            lineHeight: '25px',
        },
        large: {
            size: 20,
            lineHeight: '35px',
        },
        hover: {
            color: globals.colors.lightGreen,
        }
    },
    iconLinks: {
        marginLeft: 60,
        tablet: {},
        small: {},
        large: {
            marginLeft: 60
        }
    },
    descriptionHeading: {
        display: none,
        size: 30,
        lineHeight: '37px',
        marginBottom: 20,
        mobile: {
            display: block,
        }
    }
}


/**
 *
 *     CASE STUDY SEARCH LISTING
 *
 */
export const caseStudySearchResultStyle = {
    flexWrap: wrap,
    textWrapper: {},
    textWrapperWithImage: {
        tablet: {
            width: 300
        },
        small: {
            width: 355
        },
        large: {
            width: 495
        }
    }
}


/**
 *
 *     PRACTICES LISTING PAGE
 *
 */

export const practicesStyle = {
    listStyle: none,
    padding: 0,
    margin: 0,
    font: globals.fonts.heading,
    firstChild: {
        mobile: {
            borderTop: `1px solid ${globals.colors.borderColor}`
        }
    },
    lastChild: {
        mobile: {
            marginBottom: 60
        },
    },
    tablet: {
        flexGrow: 1,
        maxWidth: '42%',
        minWidth: '42%',

        lastChild: {
            marginRight: 0
        }
    },
    large: {
        maxWidth: '42%',
        minWidth: '42%'
    },
    wrapper: {
        tablet: {
            display: flex,
            justifyContent: spaceBetween,
            maxWidth: 772
        }
    },
    heading: {
        color: white,
        backgroundColor: globals.colors.black,
        margin: 0,
        size: 42,
        weight: 900,
        lineHeight: '42px',
        minHeight: 100,
        display: flex,
        alignItems: center,
        boxSizing: borderBox,
        mobile: {
            padding: '0 60px 25px 25px',
            minHeight: 0
        },
        tablet: {
            size: 42,
        },
        small: {
            size: 48,
        },
        large: {
            size: 54,
            lineHeight: '65px'
        },
        print: {
            color: globals.colors.black
        }
    },
    listItem: {
        position: relative,
        size: 20,
        lineHeight: '24px',
        weight: 700,
        paddingRight: 15,
        mobile: {
            borderBottom: '1px solid #e5e5e5',
        },
        tablet: {
            borderTop: '2px solid #323232',
            lastChild: {
                borderBottom: '2px solid #323232',
            }
        },
        print: {
            borderTop: '2px solid #323232',
            lastChild: {
                borderBottom: '2px solid #323232',
            }
        },
        child: [
            {
                selector: 'span',
                display: flex,
                alignItems: center
            }
        ]
    },
    parent: {
        display: block,
        padding: '19px 0',
        fontSize: 20,
        lineHeight: '24px',
        fontWeight: 600,
        color: globals.colors.textColor,
        cursor: 'pointer',
        tablet: {
            weight: 300,
            padding: '17px 0',
            size: 18,
            color: white,
        },
        small: {
            size: 20,
            padding: '17px 0'
        },
        large: {
            size: 20,
            padding: '17px 0'
        },
        print: {
            color: globals.colors.black
        },
        hover: {
            color: globals.colors.linkHoverColor,
        }
    },
    children: {
        listStyle: none,
        padding: 0,
        margin: 0,
    },
    childItem: {
        padding: '5px 40px',
        display: block,
        color: globals.colors.textColor,
        weight: 400,
        size: 20,
        lineHeight: '24px',
        tablet: {
            display: inlineFlex,
            color: white,
            weight: 300,
            padding: '5px 0 9px 33px',
            size: 18
        },
        small: {
            size: 20,
            padding: '5px 0 9px 38px',
        },
        large: {
            size: 20,
            padding: '5px 0 9px 43px',
        },
        hover: {
            color: globals.colors.linkHoverColor,
        }
    },
    childLi: {
        lastChild: {
            paddingBottom: 30
        }
    },
    icon: {
        position: absolute,
        color: globals.colors.panelBackgroundColor,
        size: 8,
        height: 8,
        top: 25,
        transform: 'rotate(180deg)',
        transition: 'transform 150ms ease',
        mobile: {
            right: 0,
        },
        tablet: {
            size: 8,
            height: 8,
            right: 0,
            top: 25
        },
        small: {
            size: 8
        },
        large: {
            size: 8
        }
    },
    overlay: {
        tablet: {
            height: 210,
            position: fixed,
            background: 'linear-gradient(180deg,#222222 76%,rgba(34,34,34,0.27) 90%,rgba(34,34,34,0) 100%)',
            width: '50%',
            right: 0,
            top: 0,
            zIndex: 0
        },
        small: {
            height: 220
        },
        large: {
            height: 230
        },
        xLarge: {
            width: 960,
            right: 'calc((100vw - 1937px)/2)',
        },
        ieXLarge: {
            right: 'calc((100vw - 1903px)/2)',
        },
    }
}

export const practiceMicrositeStyle = {
    minHeight: 400,
    mobile: {
        ...innerContainerDefaultStyle.mobile,
        marginTop: 30
    }
}

export const practiceMicrositeDescription = {
    description: {
        ...richTextParagraphStyle,
        child: {
            selector: 'p',
            firstChild: {
                ...richTextFirstParagraphStyle
            }
        },
    },
    collapseButton: {
        flexDirection: 'row-reverse',
        marginTop: 40,
        mobile: {
            marginBottom: 40
        },
        tablet: {
            size: 11
        },
        small: {
            size: 12
        },
        icon: {
            transform: 'rotate(180deg)',
            margin: '0 23px 0 0',
            mobile: {
                marginLeft: 0
            },
            tablet: {
                marginLeft: 0,
                size: 5,
                marginRight: 15
            },
            small: {
                marginLeft: 0,
                size: 6,
                marginRight: 17
            },
            large: {
                marginLeft: 0,
                marginRight: 23,
                size: 7
            }
        }
    },
    expandButton: {
        flexDirection: 'row-reverse',
        marginTop: 40,
        mobile: {
            marginBottom: 40
        },
        tablet: {
            size: 11
        },
        small: {
            size: 12
        },
        icon: {
            transform: 'rotate(0deg)',
            margin: '0 23px 0 0',
            mobile: {
                marginLeft: 0
            },
            tablet: {
                marginLeft: 0,
                size: 5,
                marginRight: 15
            },
            small: {
                marginLeft: 0,
                size: 6,
                marginRight: 17
            },
            large: {
                marginLeft: 0,
                size: 7,
                marginRight: 23,
            }
        }
    }
}

export const practiceSearchBarStyle = {
    padding: '38px 0',
    display: flex,
    alignItems: center,
    justifyContent: center,
    boxSizing: borderBox,
    tablet: {
        padding: '8px 0 60px 0'
    },
    small: {
        padding: '12px 0 70px 0'
    },
    large: {
        padding: '16px 0 80px 0'
    },
    print: {
        display: none
    },
    inner: {
        width: '100%',
        tablet: {
            backgroundColor: globals.colors.black,
            width: 660,
        },
        small: {
            width: 870
        },
        large: {
            width: 1040
        }
    },
    form: {
        display: flex,
        flexDirection: column,
        justifyContent: flexStart,
        small: {
            flexDirection: 'row',
        }
    },
    field: {
        size: 18,
        height: 60,
        weight: 300,
        mobile: {
            backgroundColor: transparent
        },
        tablet: {
            display: inlineBlock,
            backgroundColor: transparent,
            color: white,
            size: 20,
        },
        placeholder: {
            color: transparent,
            mobile: {
                display: none,
                color: transparent
            }
        },
        fieldOuter: {
            flexGrow: 1
        },
        fieldset: {
            height: 60
        },
        icon: {
            size: 18,
            tablet: {
                display: none
            }
        },
        inputLabel: {
            tablet: {
                color: white
            }
        },
        focusedInputLabelStyle: {
            tablet: {
                color: white
            }
        },
        legend: {
            ie: {
                ...defaultLegendStyle.ie,
                backgroundColor: globals.colors.black
            }
        }
    },
    button: {
        backgroundColor: globals.colors.darkGreen,
        color: white,
        weight: 400,
        lineHeight: '13px',
        letterSpacing: '3px',
        size: 13,
        height: 64,
        width: 137,
        display: flex,
        alignItems: center,
        justifyContent: center,
        marginTop: 20,
        small: {
            marginTop: 0,
            marginLeft: 19,
            width: 157,
            height: 64
        },
        icon: {
            display: none
        },
        hover: {
            backgroundColor: globals.colors.lightGreen
        }
    }
}

export const practiceSearchResultStyle = {
    lineHeight: 1.5,
    marginBottom: 3,
    backgroundColor: globals.colors.lightGray,
    boxSizing: borderBox,
    padding: '40px 47px',
    tablet: {
        maxWidth: 450,
    },
    small: {
        marginBottom: 3,
        padding: '45px 52px',
        maxWidth: 612
    },
    large: {
        padding: '50px 57px',
        maxWidth: 740
    },
    print: {
        paddingLeft: 0,
        paddingBottom: 0,
        paddingTop: 10,
        pageBreakInside: 'avoid'
    },
    firstOfType: {
        mobile: {
            marginTop: 40
        }
    },
    title: {
        display: inlineBlock,
        color: globals.colors.textColor,
        weight: 600,
        size: 23,
        marginBottom: 5,
        tablet: {
            size: 23,
            marginBottom: 5
        },
        small: {
            size: 26,
            marginBottom: 8
        },
        large: {
            size: 29,
            lineHeight: '37px',
            marginBottom: 14
        }
    }
}

export const practiceSearchResultsTitleStyle = {
    textShadow: '5px 7px 20px rgba(0, 0, 0, 0.18)'
}


/**
 *
 *     INDUSTRIES LISTING PAGE
 *
 */

export const industriesStyle = {
    display: flex,
    flexDirection: column,
    mobile: {
        margin: '38px 0 54px 0'
    },
    tablet: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 31%)',
        justifyContent: 'space-between',
    },
    ieTablet: {
        display: '-ms-grid',
        msGridColumns: '31% 3.5% 31% 3.5% 31%',
        gridGap: '3.5%'
    },
    heading: {
        color: 'white',
        marginTop: 175,
        marginBottom: 65,
        size: 42,
        weight: 900,
        lineHeight: '42px',
        mobile: {
            display: none,
        },
        tablet: {
            size: 42,
        },
        small: {
            size: 48,
        },
        large: {
            size: 54,
            lineHeight: '65px'
        },
        print: {
            marginTop: 100,
            marginBottom: 40
        },
    },
    title: {
        display: block,
        color: globals.colors.black,
        paddingTop: 17,
        lineHeight: '22px',
        tablet: {
            size: 18,
            lineHeight: '26px',
            paddingTop: 6,
            color: white,
            backgroundColor: globals.colors.black
        },
        small: {
            size: 21,
            lineHeight: '28px',
            paddingTop: 8
        },
        large: {
            size: 25,
            lineHeight: '34px',
            paddingTop: 10
        }
    },
    image: {
        display: block,
        flexShrink: 0,
        breakInside: 'avoid',
        maxWidth: 472,
        marginBottom: 37,
        tablet: {
            marginBottom: 45
        },
        small: {
            marginBottom: 50
        },
        large: {
            maxWidth: 550,
            marginBottom: 60
        },
        ieTablet: {
            child: [
                {
                    selector: ':nth-child(3n-2)',
                    msGridColumn: 1,
                },
                {
                    selector: ':nth-child(3n-1)',
                    msGridColumn: 3,
                },
                {
                    selector: ':nth-child(3n+3)',
                    msGridColumn: 5,
                },
                {
                    selector: ':nth-child(n+4):not(:nth-child(n+7))',
                    msGridRow: 2
                },
                {
                    selector: ':nth-child(n+7):not(:nth-child(n+10))',
                    msGridRow: 3
                },
                {
                    selector: ':nth-child(n+10):not(:nth-child(n+13))',
                    msGridRow: 4
                },
                {
                    selector: ':nth-child(n+13):not(:nth-child(n+16))',
                    msGridRow: 5
                },
                {
                    selector: ':nth-child(n+16):not(:nth-child(n+19))',
                    msGridRow: 6
                },
            ]
        }
    },
    inner: {
        display: block,
        backgroundColor: white,
        hover: {
            color: globals.colors.lightGreen,
            child: [
                {
                    selector: '> img',
                    opacity: .6
                },
                {
                    selector: '> div',
                    color: globals.colors.lightGreen
                }
            ]
        },
    }
}

export const micrositeDetailBreadcrumbStyle = {
    font: globals.fonts.heading,
    fontWeight: 600,
    letterSpacing: .5,
    marginBottom: 20,
    color: globals.colors.headingColor,
    display: none,
    textTransform: 'capitalize',
}

export const micrositeTitleStyle = {
    color: white,
    weight: 900,
    size: 72,
    lineHeight: '76px',
    marginTop: 240,
    child: {
        selector: 'a',
        color: white
    }
}

export const recentContentStylesCommon = {
    titleContainer: {
        display: 'flex',
        alignItems: center,
        borderTop: `1px solid ${globals.colors.borderColor}`,
        mobile: {
            flexDirection: column,
            alignItems: flexStart,
            paddingTop: 50,
            paddingBottom: 25,
            borderBottom: `1px solid ${globals.colors.borderColor}`
        },
        tablet: {
            paddingTop: 40,
            marginBottom: 40,
            marginTop: 45
        },
        small: {
            marginTop: 60,
            marginBottom: 45,
            paddingTop: 55
        },
        large: {
            marginTop: 70,
            marginBottom: 70,
            paddingTop: 75
        },
        title: {
            flexGrow: 1,
            size: '25px',
            lineHeight: '35px',
            margin: 0,
            tablet: {
                size: '22px',
                lineHeight: '36px',
            },
            small: {
                size: '27px',
                lineHeight: '44px',
            },
            large: {
                size: '34px',
                lineHeight: '44px',
            }
        },
        viewAllLink: {
            ...smallButtonStyle,
            mobile: {
                marginTop: 15
            },
            tablet: {
                ...smallButtonStyle.tablet,
                alignSelf: center,
                size: 11
            },
            small: {
                ...smallButtonStyle.small,
                size: 11
            },
            large: {
                ...smallButtonStyle.large,
                size: 13
            },
            icon: {
                ...smallButtonStyle.icon,
                tablet: {
                    ...smallButtonStyle.icon.tablet,
                },
                small: {
                    marginTop: -1,
                    ...smallButtonStyle.icon.small,
                },
                large: {
                    marginTop: -2,
                    ...smallButtonStyle.icon.large,
                }
            }
        }
    }
}

export const recentContentStyles = {
    contentDefault: {
        width: '100%',
        mobile: {
            paddingTop: 30,
            paddingBottom: 25
        },
        tablet: {
            width: '50%'
        },
        child: {
            selector: ':nth-child(2)',
            tablet: {
                marginLeft: 45
            },
            small: {
                marginLeft: 60
            },
            large: {
                marginLeft: 80
            }
        },
        title: {
            color: globals.colors.black,
            size: 21,
            lineHeight: '28px',
            textTransform: 'none',
            weight: 700,
            margin: 0,
            tablet: {
                size: 17,
                lineHeight: '22px',
            },
            small: {
                size: 19,
                lineHeight: '23px'
            },
            large: {
                size: 22,
                lineHeight: '28px'
            },
            hover: {
                color: globals.colors.green
            }
        },
        postContent: {
            size: 18,
            lineHeight: '26px',
            color: globals.colors.gray,
            mobile: {
                marginTop: 15
            },
            tablet: {
                size: 15,
                lineHeight: '21px',
                marginTop: 20
            },
            small: {
                size: 16,
                lineHeight: '24px',
                marginTop: 30
            },
            large: {
                size: 20,
                lineHeight: '30px',
                marginTop: 34
            }
        },
        postsContainer: {
            display: 'flex',
            mobile: {
                flexWrap: wrap
            }
        },
        image: {
            width: 200,
            marginBottom: 13,
            tablet: {
                width: 277,
                marginBottom: 14
            },
            small: {
                width: 277,
                marginBottom: 17
            },
            large: {
                width: 340,
                marginBottom: 22
            }
        }
    },
    contentPublications: {
        width: '100%',
        display: 'flex',
        borderTop: `1px solid ${globals.colors.borderColor}`,
        paddingTop: 30,
        marginTop: 30,
        mobile: {
            flexDirection: column,
            firstChild: {
                borderTop: 0,
                marginTop: 0
            }
        },
        tablet: {
            marginTop: 30,
            paddingTop: 30
        },
        small: {
            paddingTop: 30,
            marginTop: 30
        },
        large: {
            paddingTop: 40,
            marginTop: 40
        },
        postsContainer: {
            display: 'block'
        },
        title: {
            color: globals.colors.black,
            size: 21,
            lineHeight: '28px',
            textTransform: 'none',
            weight: 700,
            margin: 0,
            tablet: {
                size: 17,
                lineHeight: '22px',
            },
            small: {
                size: 19,
                lineHeight: '23px'
            },
            large: {
                size: 22,
                lineHeight: '28px'
            },
            hover: {
                color: globals.colors.green
            }
        },
        postContent: {
            size: 18,
            lineHeight: '26px',
            color: globals.colors.gray,
            marginTop: 8,
            tablet: {
                size: 15,
                lineHeight: '21px',
                marginTop: 4
            },
            small: {
                size: 16,
                lineHeight: '24px',
                marginTop: 13
            },
            large: {
                size: 20,
                lineHeight: '30px',
                marginTop: 14
            }
        },
        image: {
            minWidth: 200,
            width: 200,
            mobile: {
                marginBottom: 14
            },
            tablet: {
                width: 162,
                minWidth: 162,
                marginRight: 38,
            },
            small: {
                width: 162,
                minWidth: 162,
                marginRight: 30
            },
            large: {
                minWidth: 200,
                width: 200,
                marginRight: 38
            }
        }
    }
}

export const recentPostTypesStyle = {
    position: relative,
    before: {
        content: '" "',
        position: absolute,
        top: 0,
        left: 0,
        height: 70,
        width: '100%',
        backgroundColor: white,
        mobile: {
            display: none
        },
        tablet: {
            height: 40
        },
        small: {
            height: 60,
        },
        large: {
            height: 70,
        }
    },
    tablet: {
        maxWidth: 600
    },
    small: {
        maxWidth: 625
    },
    large: {
        maxWidth: 760
    },
}

export const personRecentPostTypesStyle = {
    ...recentPostTypesStyle,
    tablet: {
        ...recentPostTypesStyle.tablet,
        marginTop: -50
    },
    small: {
        ...recentPostTypesStyle.small,
        marginTop: -62
    },
    large: {
        ...recentPostTypesStyle.large,
        marginTop: -70
    }
}

export const twitterEmbedStyle = {
    tablet: {
        width: '50%',
    }
}