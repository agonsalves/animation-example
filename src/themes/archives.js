import {iconToData}                 from '../utils/styling'
import {
    absolute,
    auto,
    black,
    block,
    borderBox,
    center,
    column,
    flex,
    flexStart,
    hidden,
    inherit,
    inlineBlock,
    inlineFlex,
    none,
    normal,
    pointer,
    relative,
    spaceBetween,
    transparent,
    uppercase,
    white,
    wrap
}                                   from '../utils/themer'
import {caretRightSolid}            from '../variables/iconLibrary'
import {globals}                    from '../variables/styles'
import {
    searchButton,
    smallButtonStyle
}                                   from './buttons'
import {innerContainerDefaultStyle} from './layout'

/**
 *
 *   ARCHIVE LISTINGS
 *
 */

export const archiveSearchStyle = {
    panel: {
        width: '100%',
        backgroundColor: white,
        color: globals.colors.textColor,
        pointerEvents: auto,
        overflow: hidden,
        zIndex: 1,
        mobile: {
            padding: '0 25px',
            boxSizing: 'border-box'
        },
        class: {
            name: 'open',
            pointerEvents: auto
        },
    },
    toggle: {
        display: flex,
        cursor: pointer,
        position: relative,
        alignItems: 'center',
        background: white,
        right: 0,
        padding: '0 35px',
        height: 125,
        font: globals.fonts.heading,
        color: globals.colors.black,
        fontWeight: 500,
        fontSize: 13,
        lineHeight: '13px',
        letterSpacing: '3px',
        textTransform: uppercase,
        boxSizing: borderBox,
        mobile: {
            marginTop: 0,
            width: '100%',
            backgroundColor: globals.colors.lightGray,
            color: globals.colors.darkGray,
            height: 50,
            padding: '0 25px',
        },
        tablet: {
            paddingLeft: 53,
            paddingTop: 15,
            height: 85
        },
        small: {
            paddingLeft: 60,
            height: 105
        },
        large: {
            paddingLeft: 80,
            paddingRight: 80,
            height: 125,
        },
        ieTablet: {
            height: 86
        },
        ieSmall: {
            height: 106
        },
        ieLarge: {
            height: 126
        },
        print: {
            display: none
        },
        icon: {
            marginRight: 20,
            boxSizing: borderBox,
            paddingTop: 1,
            size: 9,
            color: globals.colors.black,
            mobile: {
                color: globals.colors.darkGray
            }
        },
        inner: {
            hover: {
                color: globals.colors.green,
                child: {
                    selector: 'svg',
                    color: globals.colors.green
                }
            },
        }
    },
    container: {
        ...innerContainerDefaultStyle,
        flexDirection: column,
        mobile: {
            padding: '45px 0'
        },
        tablet: {
            maxWidth: 447,
            margin: '0 0 0 53px',
            flexDirection: column,
            paddingTop: 5,
            paddingBottom: 90
        },
        small: {
            marginLeft: 60
        },
        large: {
            maxWidth: 447,
            marginLeft: 80
        },
        print: {
            display: none
        }
    },
    field: {
        color: globals.colors.black,
        height: 60,
        size: 18,
        weight: 300,
        tablet: {},
        small: {},
        large: {
            size: 18
        },
        placeholder: {
            color: transparent,
            weight: 300
        },
        icon: {
            height: '100%',
            fontSize: 20,
            pointerEvents: none,
            color: white,
            tablet: {
                color: globals.colors.black
            },
            class: {
                name: 'fa-angle-up',
                fontSize: 26,
                tablet: {
                    fontSize: 36,
                }
            },
        },
        fieldOuter: {
            marginBottom: 18
        },
        legend: {
            ie: {
                position: absolute,
                background: white,
                height: 20,
                top: -11,
                zIndex: 0
            }
        },
        inputLabel: {
            ie: {
                zIndex: 1
            }
        }
    },
    buttonWrapper: {
        display: flex,
        flexDirection: 'row'
    },
    button: {
        ...searchButton,
        backgroundColor: globals.colors.green,
        mobile: {
            marginTop: 0
        },
        tablet: {
            marginLeft: 0,
            marginTop: 0
        },
        hover: {
            backgroundColor: globals.colors.darkGreen
        }
    },
    resetButton: {
        background: 'transparent',
        color: globals.colors.darkGray,
        weight: 400,
        letterSpacing: '3px',
        size: 13,
        height: 60,
        boxSizing: borderBox,
        alignItems: center,
        mobile: {
            marginTop: 0
        }
    }
}

export const archiveSourceStyle = {
    fontStyle: 'italic',
    color: globals.colors.black,
    size: 18,
    lineHeight: '30px',
    tablet: {
        size: 15
    },
    small: {
        size: 18
    },
    large: {
        size: 20,
        lineHeight: '30px',
        marginTop: 8,
    },
    byline: {
        lineHeight: '30px',
        tablet: {
            size: 15
        },
        small: {
            size: 18,
        },
        large: {
            size: 20,
            marginTop: 6,
        },
    }
}

export const archiveBylineStyle = {
    marginTop: 1,
    lineHeight: '30px',
}

export const teaserThumbnailStyle = {
    float: 'right',
    margin: '0 0 4px 35px',
    mobile: {
        float: 'left',
        marginLeft: 0,
        marginBottom: 32,
        width: 240
    },
    tablet: {
        marginLeft: 0,
        minWidth: 220,
        width: 220,
        marginRight: 55,
        marginBottom: 9,
    },
    small: {
        minWidth: 280,
        width: 280,
        marginRight: 65,
        marginBottom: 12,
    },
    large: {
        width: 360,
        minWidth: 360,
        marginRight: 75,
        marginBottom: 15,
    },
    print: {
        float: none
    }
}

export const archiveListingWrapperStyle = {
    display: flex,
    print: {
        display: block
    }
}

export const archiveListingStyle = {
    marginBottom: 40,
    paddingTop: 40,
    borderTop: globals.style.dividingBorder,
    width: '100%',
    overflow: hidden,
    color: globals.colors.textColor,
    display: flex,
    mobile: {
        display: flex,
        flexDirection: column,
    },
    tablet: {
        marginBottom: 40,
        paddingTop: 40,
        alignItems: center
    },
    print: {
        pageBreakInside: 'avoid'
    },
    hover: {
        color: globals.colors.textColor,
    },
    wrapper: {
        width: '100%',
        mobile: {
            padding: '0 25px',
            backgroundColor: white,
            boxSizing: borderBox
        }
    },
    firstOfType: {
        alignItems: flexStart,
        mobile: {
            borderTop: none,
        }
    },
    thumbnail: {
        ...teaserThumbnailStyle
    },
    pageTitle: {
        mobile: {
            borderBottom: `1px solid ${globals.colors.borderColor}`
        }
    },
    title: {
        color: globals.colors.textColor,
        fontSize: 23,
        font: globals.fonts.heading,
        fontWeight: 500,
        lineHeight: '31px',
        textDecoration: none,
        paddingBottom: 10,
        tablet: {
            size: 21
        },
        small: {
            fontSize: 24,
            marginTop: 12
        },
        large: {
            weight: 500,
            size: 29,
            lineHeight: '37px'
        }
    },
    excerpt: {
        lineHeight: '30px',
        fontSize: 18,
        tablet: {
            fontSize: 16,
            marginTop: 20
        },
        small: {
            fontSize: 17
        },
        large: {
            fontSize: 20
        }
    },
    source: {
        ...archiveSourceStyle
    },
    byline: {
        ...archiveBylineStyle
    },
    query: {
        mobile: {
            marginLeft: 0,
            marginTop: 38,
            marginBottom: 0,
        }
    },
    type: {},
    clearButton: {
        ...searchButton,
        textTransform: uppercase,
        marginTop: 15,
        marginBottom: 30,
        tablet: {
            marginTop: 0,
            marginBottom: 45
        },
        small: {
            marginBottom: 50
        },
        large: {
            marginBottom: 80
        },
        hover: {
            color: white,
            backgroundColor: globals.colors.green
        }
    }
}

export const archiveTypeStyle = {
    display: inlineBlock,
    fontWeight: 400,
    fontSize: 13,
    lineHeight: '13px',
    letterSpacing: '3px',
    textTransform: uppercase,
    color: globals.colors.gray,
    marginBottom: 0,
    before: {
        content: '"\\2013\\0020"',
        marginLeft: 6
    },
    mobile: {
      lineHeight: 2
    },
    tablet: {
        size: 12,
        marginBottom: 0
    },
    small: {
        size: 13,
        marginBottom: 0
    },
    large: {
        marginBottom: 0
    }
}

export const archiveDateStyle = {
    ...archiveTypeStyle,
    display: block,

    tablet: {
        ...archiveTypeStyle.tablet,
    },
    small: {
        ...archiveTypeStyle.small,
    },
    large: {
        ...archiveTypeStyle.large,
    },
    before: {
        content: none
    }
}
export const archiveDateAndTypeStyle = {
    display: flex,
    flexWrap: wrap,
    marginBottom: 20,
    tablet: {
        marginBottom: 13,
    },
    small: {
        marginBottom: 15,
    },
    large: {
        marginBottom: 20,
    },
    type: {
        ...archiveTypeStyle
    },
    date: {
        ...archiveDateStyle
    }
}


export const pubSourceAndBylineStyle = {
    marginTop: 10,
}

export const publicationListingStyle = {
    display: flex
}


export const newsFirstListingTitleStyle = {
    ...archiveListingStyle.title,
    fontSize: 32,
    lineHeight: '36px',
    weight: 600,
    tablet: {
        size: 34,
        lineHeight: '36px',
    },
    small: {
        size: 40,
        lineHeight: '42px',
    },
    large: {
        size: 46,
        lineHeight: '48px',
        weight: 600
    }
}

export const newsExcerptStyle = {
    fontSize: 18,
    color: black,
    lineHeight: '30px',
    marginTop: 16,
    tablet: {
        size: 17,
        lineHeight: '28px',
    },
    small: {
        marginTop: 18,
        size: 19,
        lineHeight: '32px',
    },
    large: {
        marginTop: 20,
        size: 20,
        lineHeight: '35px'
    }
}

export const eventsHeadingStyle = {
    fontSize: 34,
    color: black,
    marginBottom: 36,
    weight: 900,
    lineHeight: '44px',
    mobile: {
        borderBottom: `1px solid ${globals.colors.borderColor}`,
        marginBottom: 0,
        paddingBottom: 36,
    }
}

export const eventsListingStyle = {
    tablet: {
        flexDirection: column
    },
    button: {
        //maxWidth: 200,
        alignSelf: flexStart,
        width: auto,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: globals.colors.green,
        tablet: {},
        small: {},
        large: {}
    }
}

export const pastEventsHeadingStyle = {
    ...eventsHeadingStyle,
    paddingTop: 30,
    mobile: {
        border: none
    },
    tablet: {
        paddingTop: 30
    },
    small: {
        paddingTop: 40
    },
    large: {
        paddingTop: 51
    }
}

export const eventListingInfoStyle = {
    lineHeight: '30px',
    marginTop: 6,
    fontSize: 17,
    tablet: {
        marginTop: 6,
        size: 16,
        lineHeight: '28px'
    },
    small: {
        marginTop: 8,
        size: 17,
        lineHeight: '32px'
    },
    large: {
        marginTop: 10,
        size: 20,
        lineHeight: '35px',
    }
}

export const eventListingHeadshotsStyle = {
    marginTop: 17,
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 18,
        display: inlineBlock,
        tablet: {
            width: 60,
            height: 60,
            borderRadius: 30,
            marginRight: 16
        },
        small: {
            width: 70,
            height: 70,
            borderRadius: 35,
            marginRight: 18,
        },
        large: {
            width: 80,
            height: 80,
            borderRadius: 40,
            marginRight: 20,
        }
    }
}

export const upcomingEventFlagStyle = {
    backgroundColor: globals.colors.green,
    borderColor: globals.colors.green,
    color: white,
    display: inlineFlex,
    fontSize: 10,
    font: 'arial',
    fontWeight: 400,
    lineHeight: 1.4,
    marginLeft: 20,
    position: relative,
    justifyContent: center,
    alignItems: center,
    textTransform: uppercase,
    padding: '3px 10px 3px 3px',
    verticalAlign: 'middle',
    before: {
        content: '""',
        border: '1em solid transparent',
        borderRightColor: inherit,
        display: block,
        height: 0,
        width: 0,
        position: absolute,
        top: 0,
        left: '-2em',
    },
    class: [
        {
            name: 'next-month',
            backgroundColor: globals.colors.gray,
            borderColor: globals.colors.gray
        }
    ]
}


/**
 *
 *   ARCHIVE DETAILS
 *
 */
export const archiveDetailStyle = {
    mobile: {
        padding: '0 25px'
    },
    date: {
        color: globals.colors.black,
        textTransform: normal,
        size: 18,
        letterSpacing: normal,
        tablet: {},
        small: {},
        large: {
            size: 20,
            lineHeight: '30px'
        }
    }
}

export const archiveDetailTopStyle = {
    margin: '0 0 35px',
    padding: '0 0 35px',
    borderBottom: globals.style.dividingBorder,
    mobile: {
        paddingBottom: 30,
        marginBottom: 32,
        marginTop: 40
    },
    tablet: {
        paddingBottom: 30
    },
    publicationDateAndType: {
        marginBottom: 0,
        tablet: {
            marginBottom: 0
        },
        small: {
            marginBottom: 0
        },
        large: {
            marginBottom: 0
        },
        type: {
            color: globals.colors.black,
            textTransform: none,
            letterSpacing: none,
            lineHeight: '30px',
            size: 18,
            marginBottom: 0,
            tablet: {
                size: 15,
                marginBottom: 0
            },
            small: {
                size: 18,
                marginBottom: 0
            },
            large: {
                size: 20,
                marginBottom: 0
            },
            before: {
                ...archiveTypeStyle.before,
                color: globals.colors.black
            }
        },
        date: {
            color: globals.colors.black,
            textTransform: none,
            letterSpacing: none,
            lineHeight: '30px',
            size: 18,
            marginBottom: 0,
            tablet: {
                size: 15,
                marginBottom: 0
            },
            small: {
                size: 18,
                marginBottom: 0
            },
            large: {
                size: 20,
                marginBottom: 0
            },
        }
    }
}

export const archiveDetailTitleStyle = {
    font: globals.fonts.heading,
    fontSize: 32,
    fontWeight: 600,
    margin: '0 0 16px',
    color: globals.colors.black,
    lineHeight: '42px',
    tablet: {
        fontSize: 28,
        marginBottom: 20,
        lineHeight: '35px'
    },
    small: {
        fontSize: 36,
        lineHeight: '45px',
        marginBottom: 25
    },
    large: {
        fontSize: 48,
        lineHeight: '55px',
        marginBottom: 30
    },
    hover: {
        color: globals.colors.black
    }
}


export const publicationDetailTitleStyle = {
    ...archiveDetailTitleStyle,
    marginBottom: 25,
    tablet: {
        ...archiveDetailTitleStyle.tablet,
        marginBottom: 30
    },
    small: {
        ...archiveDetailTitleStyle.small,
        marginBottom: 40
    },
    large: {
        ...archiveDetailTitleStyle.large,
        marginBottom: 45
    },
    type: {},
    date: {}
}

export const publicationDetailPdfStyle = {
    marginBottom: 35,
    tablet: {
        marginBottom: 30,
        marginTop: 2
    },
    small: {
        marginBottom: 35,
        marginTop: 5
    },
    large: {
        marginBottom: 46,
        marginTop: 14
    },
    link: {
        textDecoration: 'underline'
    }
}

export const resourcesStyle = {
    marginTop: 30,
    borderTop: globals.style.dividingBorder,
    paddingTop: 40,
    tablet: {
        paddingTop: 10,
        marginTop: 40
    },
    small: {
        paddingTop: 20,
        marginTop: 55
    },
    large: {
        paddingTop: 30,
        marginTop: 70
    },
    heading: {
        fontSize: 20,
        fontWeight: 600,
        margin: '0 0 10px',
        color: globals.colors.black,
        font: globals.fonts.heading,
        tablet: {
            margin: '40px 0 10px',
            fontWeight: 700,
            fontSize: 26,
            lineHeight: '30px',
            marginBottom: 15,
        },
        small: {
            fontSize: 30,
            lineHeight: '40px',
            marginBottom: 20,
        },
        large: {
            fontSize: 34,
            lineHeight: '44px',
            marginBottom: 25,
        },
    },
    list: {
        listStyleType: none,
        marginTop: 23,
        mobile: {
            marginBottom: 0
        },
        tablet: {
            marginTop: 30
        },
        small: {
            marginTop: 36
        },
        large: {
            marginTop: 44
        },
        not: {
            param: 'li',
            child: {
                selector: 'li',
                textDecoration: 'underline',
                marginBottom: 20,
                tablet: {
                    marginBottom: 14,
                },
                small: {
                    marginBottom: 17,
                },
                large: {
                    marginBottom: 20,
                },
                before: {
                    content: none
                }
            }
        }
    },
    icon: {
        marginRight: 23,
        color: globals.colors.darkGray,
        size: 18,
        globe: {
            marginRight: 19,
        }
    }
}

export const officeDetailTitleStyle = {
    weight: 900,
    lineHeight: 1,
    mobile: {
        marginTop: 30,
        marginBottom: 30
    },
    tablet: {
        marginBottom: 40
    },
    small: {
        marginBottom: 50
    },
    large: {
        size: 46,
        marginBottom: 60
    }
}

export const officeDetailTopStyle = {
    display: flex,
    mobile: {
        flexDirection: column,
        marginBottom: 25,
    },
    googleMap: {
        alignSelf: center,
        marginBottom: 10,
        tablet: {
            margin: '0 45px 40px 0',
            width: 380
        },
        small: {
            width: 640,
            marginBottom: 45
        },
        large: {
            marginBottom: 50
        }
    },
    name: {
        weight: 900,
        marginBottom: 9,
        lineHeight: '44px',
        size: 18,
        tablet: {
            size: 16,
            marginBottom: 9
        },
        small: {
            size: 18,
            marginBottom: 17
        },
        large: {
            size: 20,
            marginBottom: 30,
            lineHeight: '26px'
        }
    },
    address: {
        size: 18,
        lineHeight: '28px',
        tablet: {
            size: 14,
            lineHeight: '24px',
        },
        small: {
            size: 16,
            lineHeight: '26px',
        },
        large: {
            size: 18,
            lineHeight: '28px'
        }
    },
    phone: {
        size: 18,
        lineHeight: '30px',
        weight: 400,
        color: globals.colors.black,
        cursor: pointer,
        marginTop: 12,
        tablet: {
            size: 14,
            marginTop: 13
        },
        small: {
            size: 16,
            marginTop: 15
        },
        large: {
            size: 18,
            lineHeight: '30px',
            marginTop: 17
        },
        hover: {
            color: globals.colors.green
        }
    },
    button: {
        margin: 0,
        padding: 0,
        ...smallButtonStyle,
        backgroundColor: transparent,
        marginTop: 24,
        mobile: {
            padding: 0,
        },
        tablet: {
            ...smallButtonStyle.tablet,
            size: 10,
            marginTop: 17
        },
        small: {
            ...smallButtonStyle.small,
            marginTop: 20
        },
        large: {
            ...smallButtonStyle.large,
            marginTop: 24
        },
        after: {
            display: none
        }
    }
}

export const caseStudyDetailImageStyle = {
    margin: '0 0 20px',
    tablet: {
        width: '70%',
        marginBottom: 30
    }
}

export const featuredCaseStudiesStyle = {
    display: flex,
    flexWrap: wrap,
    justifyContent: spaceBetween,
    borderBottom: globals.style.dividingBorder,
    marginBottom: 40,
    mobile: {
        flexDirection: 'column',
    },
    tablet: {
        after: {
            content: '""',
            width: '32%',
            display: block
        }
    },
    item: {
        position: relative,
        marginBottom: 60,
        transition: 'all 500ms',
        hover: {
            child: [
                {
                    selector: '.case-study-image',
                    opacity: .7
                },
            ]
        },
        tablet: {
            width: '32%',
            marginBottom: 35
        },
        small: {
            hover: {
                child: [
                    {
                        selector: '> .case-study-title',
                        opacity: 0
                    },
                    {
                        selector: '.case-study-image',
                        opacity: 1
                    },
                    {
                        selector: '.rollover',
                        opacity: 1
                    }

                ]
            }
        },
        large: {
            marginBottom: 50,
            maxWidth: 495
        },
    },
    image: {
        height: auto,
        large: {
            width: '100%',
            maxWidth: 495,
            height: 296
        }
    },
    title: {
        position: relative,
        color: globals.colors.textColor,
        fontWeight: 800,
        font: globals.fonts.heading,
        lineHeight: 1.5,
        fontSize: 16,
        marginTop: 8,
        transition: 'all 500ms',
        mobile: {
            marginTop: 15,
            fontSize: 20,
        },
        small: {
            fontSize: 24,
            marginLeft: 20
        },
        large: {
            marginTop: 12,
        },
        before: {
            small: {
                content: iconToData(caretRightSolid, globals.colors.linkColor),
                display: block,
                position: absolute,
                width: 10,
                height: 16,
                top: 4,
                left: -20
            }
        },
        hover: {
            color: globals.colors.linkHoverColor
        }
    },
    rollover: {
        position: absolute,
        top: 0,
        backgroundColor: 'rgba(6,134,243,.85)',
        width: '100%',
        color: '#fff',
        textAlign: center,
        opacity: 0,
        transition: 'all 500ms',
        height: 207,
        padding: 20,
        boxSizing: borderBox,
        tablet: {
            height: 187,
        },
        small: {
            height: 237,
        },
        large: {
            height: 296
        },
    },
    rolloverTitle: {
        position: relative,
        small: {
            fontFamily: globals.fonts.heading,
            fontWeight: 800,
            fontSize: 22,
            lineHeight: 1.5,
        },
        large: {
            fontSize: 30,
        },
    },
    rolloverPracticeArea: {
        display: block,
        marginBottom: 3,
        small: {
            fontSize: 16,
            fontWeight: 700,
        },
        large: {
            fontSize: 20
        },
        lastChild: {
            after: {
                content: 'none'
            },
        },
        after: {
            content: '\', \'',
            whiteSpace: 'pre-wrap'
        }
    },
    rolloverPracticeAreas: {
        position: relative,
        before: {
            content: '\'\'',
            height: 1,
            display: block,
            background: '#5eb5ff',
            position: relative,
            width: 170,
            margin: '20px auto',

            large: {
                margin: '26px auto',
            }
        }
    },
    practiceAreas: {
        color: '#575756',
        lineHeight: 1.3,
        marginTop: 6,
        small: {
            display: none
        }
    },
    practiceArea: {
        display: inlineBlock,
        lastChild: {
            after: {
                content: 'none'
            },
        },
        after: {
            content: '\', \'',
            whiteSpace: 'pre-wrap'
        }
    }
}