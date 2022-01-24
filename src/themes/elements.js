import {
    iconInSolidCircle,
    iconToData
}                     from '../utils/styling'
import {
    absolute,
    auto,
    block,
    borderBox,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    hidden,
    none,
    normal,
    pointer,
    relative,
    row,
    spaceBetween,
    transparent,
    uppercase,
    white,
    wrap
}                     from '../utils/themer'
import {circle}       from '../variables/iconLibrary'
import {globals}      from '../variables/styles'
import {
    archiveListingStyle,
    archiveSearchStyle
}                     from './archives'
import {searchButton} from './buttons'

export const defaultLinkStyle = {
    color: globals.colors.linkColor,
    textDecoration: none,
    hover: {
        color: globals.colors.linkHoverColor
    }
}

export const richTextDefaultStyle = {
    lineHeight: 1.5,
    child: [
        {
            selector: 'p',
            mobile: {
                size: globals.bodyFontSize.mobile,
                lineHeight: '30px'
            },
            tablet: {
                size: globals.bodyFontSize.tablet,
                lineHeight: '26px'
            },
            small: {
                size: globals.bodyFontSize.small,
                lineHeight: '28px'
            },
            large: {
                size: globals.bodyFontSize.large,
                lineHeight: '35px'
            },
            lastChild: {
                marginBottom: 0
            }
        },
        {
            selector: 'a',
            textDecoration: 'underline',
            hover: {
                color: globals.colors.darkGreen
            }
        },
        {
            selector: 'iframe',
            maxWidth: '100%'
        }
    ]

}

export const introTextStyle = {
    size: 24,
    font: globals.fonts.heading,
    letterSpacing: globals.style.headingLetterSpacing,
    weight: 600,
    lineHeight: 1.5,
    marginBottom: 35,
    tablet: {
        size: 28,
        marginBottom: 30
    },
    small: {
        size: 32
    },
    large: {
        size: 43,
        marginBottom: 50
    }
}

export const h3DefaultStyle = {
    font: globals.fonts.heading,
    lineHeight: '35px',
    margin: '40px 0 10px',
    size: 25,
    color: globals.colors.black,
    weight: 900,
    tablet: {
        size: 22,
        lineHeight: '36px'
    },
    small: {
        size: 27,
        lineHeight: '40px'
    },
    large: {
        size: 34,
        lineHeight: '44px',
        margin: '45px 0 25px',
    }
}

export const bulletedListStyle = {
    listStyle: none,
    padding: 0,
    lineHeight: 1.3,
    large: {
        marginTop: 15,
        marginBottom: 40
    },
    not: {
        param: 'li',
        child: {
            selector: 'li',
            position: relative,
            marginBottom: 5,
            lineHeight: '35px',
            mobile: {
                marginLeft: 28,
            },
            tablet: {
                marginLeft: 28,
                marginBottom: 8,
                lineHeight: '26px'
            },
            small: {
                marginLeft: 28,
                marginBottom: 7,
                lineHeight: '28px'
            },
            large: {
                marginLeft: 40,
                marginBottom: 8,
                lineHeight: '35px'
            },
            before: {
                content: iconToData(circle, globals.colors.linkColor),
                display: block,
                position: relative,
                left: -28,
                top: 0,
                height: 5,
                width: 5,
                tablet: {
                    left: -27,
                    width: 4,
                    height: 4
                },
                small: {
                    left: -26
                },
                large: {
                    left: -38,
                    height: 5,
                    width: 5,
                }
            },
            child: [
                {
                    selector: 'li',
                    before: {
                        content: iconToData(circle, globals.colors.linkColor),
                        backgroundColor: transparent,
                        top: 1,
                        width: 5,
                        height: 5,
                        color: globals.colors.linkColor,
                        tablet: {
                            top: 1,
                            width: 4,
                            height: 4,
                            left: -34
                        },
                        large: {
                            top: 2,
                            left: -34,
                            height: 5,
                            width: 5
                        }
                    },
                    mobile: {
                        paddingLeft: 30,
                        marginLeft: 0
                    },
                    tablet: {
                        marginLeft: 0,
                        paddingLeft: 35
                    },
                    small: {},
                    large: {
                        marginBottom: -3
                    }
                },
                {
                    selector: 'ul',
                    listStyle: none,
                    padding: 0,
                    marginTop: 4,
                    tablet: {
                        marginTop: 9
                    }
                }
            ]
        }
    },
}

export const numberedListStyle = {
    counterReset: 'li',
    marginTop: 23,
    paddingLeft: 0,
    tablet: {
        marginTop: 16
    },
    small: {
        marginTop: 20
    },
    large: {
        marginTop: 23,
        marginBottom: 36
    },
    child: {
        selector: 'li',
        listStyle: none,
        marginLeft: 32,
        marginBottom: 11,
        lineHeight: '35px',
        tablet: {
            marginLeft: 26,
            marginBottom: 9,
            lineHeight: '26px'
        },
        small: {
            marginLeft: 26,
            lineHeight: '28px',
        },
        large: {
            marginLeft: 40,
            marginBottom: 22,
            lineHeight: '35px',
        },
        before: {
            position: absolute,
            marginLeft: -26,
            color: globals.colors.black,
            content: 'counter(li) \'.\'',
            counterIncrement: 'li',
            tablet: {
                marginLeft: -28
            },
            small: {
                marginLeft: -28
            },
            large: {
                marginLeft: -40
            },
        },
        child: {
            selector: 'ol',
            marginTop: 12,
            mobile: {
                paddingLeft: 26
            },
            tablet: {
                paddingLeft: 0,
                marginTop: 9,
            },
            child: {
                selector: 'li',
                marginLeft: 0,
                tablet: {
                    marginLeft: 35,
                    marginBottom: 9
                },
                small: {
                    // marginLeft: -35
                    marginBottom: 0
                },
                large: {
                    // marginLeft: 0,
                    marginBottom: 0
                },
                before: {
                    tablet: {
                        marginLeft: -35
                    }
                }
            }
        }
    }
}

export const blockQuoteStyle = {
    fontStyle: 'italic',
    lineHeight: '35px',
    mobile: {
        margin: '18px 55px'
    },
    tablet: {
        size: 15,
        lineHeight: '26px',
        margin: '23px 62px'
    },
    small: {
        lineHeight: '28px'
    },
    large: {
        fontSize: 20,
        margin: '20px 80px',
    }
}

const pageTitleStyle = {
    position: absolute,
    bottom: '100%',
    color: white,
    font: globals.fonts.heading,
    fontWeight: 900,
    margin: '0 0 35px 50px',
    width: '90%',
    size: 96,
    lineHeight: 1,
    zIndex: 1,
    tablet: {
        fontSize: 57,
        marginLeft: 50,
        width: '90%'
    },
    small: {
        fontSize: 78,
        marginBottom: 38,
        marginLeft: 60,
        width: '100%',
    },
    large: {
        fontSize: 96,
        lineHeight: '96px',
        marginLeft: 80,
        marginBottom: 54
    },
    print: {
        color: globals.colors.black,
        position: relative,
        size: 44,
        ie: {
            color: globals.colors.black,
        }
    },
    child: {
        selector: 'a',
        color: white,
        hover: {
            color: white,
            print: {
                color: globals.colors.black,
                ie: {
                    color: globals.colors.black,
                }
            }
        },
        print: {
            color: globals.colors.black,
            ie: {
                color: globals.colors.black,
            }
        }
    },
    subpage: {
        tablet: {
            size: 40
        },
        small: {
            size: 53
        },
        large: {
            size: 75
        }
    },
    practice: {
        position: relative,
        // mobile: {
        //     size: 32,
        //     lineHeight: '28px',
        //     paddingLeft: 25
        // },
        tablet: {
            fontSize: 42,
            lineHeight: '50px',
            marginLeft: 50
        },
        small: {
            fontSize: 56,
            lineHeight: '76px',
            marginLeft: 60

        },
        large: {
            fontSize: 72,
            lineHeight: '76px',
            marginLeft: 80,
            marginBottom: 61
        }
    },
    person: {
        textAlign: 'left',
        boxSizing: borderBox,
        tablet: {
            size: 45,
            paddingLeft: 370,
            width: globals.containerWidth.tablet
        },
        small: {
            paddingLeft: 510,
            size: 60,
            width: globals.containerWidth.small
        },
        large: {
            paddingLeft: 640,
            size: 76,
            width: globals.containerWidth.large
        },
    },
    personNoImage: {
        textAlign: 'left',
        boxSizing: borderBox,
        mobile: {
            paddingLeft: 20
        },
        tablet: {
            size: 45,
            paddingLeft: 0,
            width: globals.containerWidth.tablet
        },
        small: {
            paddingLeft: 0,
            size: 60,
            width: globals.containerWidth.small
        },
        large: {
            paddingLeft: 0,
            size: 76,
            width: globals.containerWidth.large
        },
    }
}

export const pageTitleStyleSwitch = (theme, isPractice, isIndustry, isSubpage) => {
    if (isPractice || isIndustry)
        return {
            ...pageTitleStyle,
            ...pageTitleStyle.practice,
            ...theme,
        }

    return {
        ...pageTitleStyle,
        ...theme
    }
}

export const pageTitleInContentStyle = {
    color: globals.colors.black,
    font: globals.fonts.heading,
    marginTop: 0,
    marginBottom: 38,
    weight: 900,
    size: 30,
    lineHeight: 1,
    mobile: {
        marginTop: 30,
        //  marginBottom: 0,
    },
    tablet: {
        size: 28,
        marginBottom: 38
    },
    small: {
        size: 32,
        marginBottom: 46
    },
    large: {
        size: 46,
        marginBottom: 35
    },
    print: {
        marginBottom: 30
    }
}

export const headingStyle = {
    weight: 900,
    size: 25,
    lineHeight: '35px',
    marginTop: 31,
    tablet: {
        size: 22,
        lineHeight: '26px',
        marginTop: 0
    },
    small: {
        size: 27,
        lineHeight: '36px',
        marginTop: 0
    },
    large: {
        size: 34,
        lineHeight: '44px',
        marginTop: 0
    }
}

export const paginationStyle = {
    position: relative,
    paddingBottom: 60,
    paddingTop: 45,
    display: flex,
    justifyContent: spaceBetween,
    marginTop: 40,
    width: '100%',
    boxSizing: borderBox,
    mobile: {
        marginBottom: 40,
        paddingTop: 25,
        border: none,
    },
    tablet: {
        paddingTop: 45,
        marginTop: 55,
        paddingBottom: 0
    },
    print: {
        display: none
    },
    pageNumber: {
        alignSelf: center,
        paddingBottom: 10,
        size: 18,
        lineHeight: '35px',
        ie: {
            width: '100%'
        }
    },
    next: {
        height: 56,
        width: 128,
        border: `2px solid ${globals.colors.black}`,
        display: flex,
        alignItems: center,
        justifyContent: center,
        hover: {
            borderColor: globals.colors.green,
            backgroundColor: globals.colors.green,
            color: white,
            child: {
                selector: 'svg',
                color: white
            }
        }
    },
    prev: {
        marginRight: 15,
        height: 56,
        width: 128,
        border: `2px solid ${globals.colors.black}`,
        display: flex,
        alignItems: center,
        justifyContent: center,
        hover: {
            borderColor: globals.colors.green,
            backgroundColor: globals.colors.green,
            color: white,
            child: {
                selector: 'svg',
                color: white
            }
        }
    },
    before: {
        content: '\' \'',
        width: '100%',
        position: absolute,
        height: 1,
        background: globals.colors.borderColor,
        top: 0,
        left: 0,
        mobile: {
            width: '100%'
        }
    },
    icon: {
        color: globals.colors.black,
        size: 24
    }
}

export const blogPaginationStyle = {
    border: none,
    justifyContent: flexEnd,
    tablet: {
        marginTop: 0
    },
    small: {
        marginTop: 0
    },
    large: {
        marginTop: 0
    },
    next: {
        cursor: pointer
    },
    inner: {},
    before: {
        content: none
    }
}

export const socialSharingStyle = {
    display: flex,
    alignItems: center,
    marginTop: 23,
    size: 17,
    tablet: {},
    small: {},
    large: {
        marginTop: 42
    },
    icon: {
        cursor: pointer,
        width: '18px !important',
        height: 18,
        marginLeft: 10,
        color: '#A2A5A5',
        backgroundColor: globals.colors.lightGray,
        ...iconInSolidCircle({
            iconSize: 15,
            circleSize: 36,
        }),
        focus: {
            border: none
        },
        hover: {
            backgroundColor: globals.colors.green,
            color: white
        }
    },
    shareText: {
        textTransform: uppercase,
        size: 13,
        weight: 500,
        letterSpacing: '2px',
        lineHeight: '13px',
        color: '#6e7373',
    }
}

export const globalSearchStyle = {
    container: {
        marginBottom: 57,
        tablet: {
            display: 'table',
        }
    },
    section: {
        background: globals.colors.lightGray,
        tablet: {
            display: 'table-row',
        }
    },
    sectionHeader: {
        width: '100%',
        color: globals.colors.black,
        tablet: {
            display: 'table-cell',
            width: 240,
            textAlign: 'left',
            borderTop: `2px solid ${white}`,
            verticalAlign: 'top'
        },
        small: {
            width: 280
        },
        large: {
            width: 340,
        }
    },
    heading: {
        font: globals.fonts.heading,
        letterSpacing: .5,
        fontSize: 38,
        margin: 0,
        weight: 900,
        lineHeight: 1,
        mobile: {
            padding: '38px 25px 18px 25px'
        },
        tablet: {
            fontSize: 34,
            padding: '40px 32px'
        },
        small: {
            size: 40,
            padding: '45px 38px'
        },
        large: {
            size: 46,
            padding: '50px 42px'
        },
        print: {
            paddingLeft: 0
        }
    },
    results: {
        padding: '20px 25px 25px',
        boxSizing: borderBox,
        mobile: {
            width: '100%',
            borderBottom: `2px solid ${white}`,
        },
        tablet: {
            display: 'table-cell',
            borderTop: `2px solid ${white}`,
            borderLeft: `2px solid ${white}`,
            padding: '50px 42px',
        },
        ieTablet: {
            width: 454,
            maxWidth: 454
        },
        ieSmall: {
            width: 661,
            maxWidth: 661
        },
        ieLarge: {
            width: 831,
            maxWidth: 831
        }
    },
    query: {
        mobile: {
            marginTop: 35,
            marginLeft: 0
        }
    },
    button: {
        ...searchButton,
        boxSizing: borderBox,
        backgroundColor: globals.colors.green,
        marginTop: 0,
        alignSelf: flexStart,
        mobile: {
            marginLeft: auto,
            marginTop: 30,
            marginBottom: 15,
            minWidth: 120,
            width: auto,
            alignSelf: flexStart,
            height: 50,
            size: 12,
        },
        tablet: {
            ...searchButton.tablet,
            float: 'right',
            height: 50,
            size: 12,
        },
        small: {
            ...searchButton.small,
            height: 55,
            size: 15,
        },
        large: {
            ...searchButton.large,
            height: 60
        },
        print: {
            display: none
        }
    }
}

export const searchQueryStyle = {
    marginBottom: 22,
    mobile: {
        marginLeft: 25,
        marginTop: 38
    },
    tablet: {
        width: '100%'
    },
    small: {},
    large: {
        marginBottom: 38,
        marginTop: 8
    },
    child: {
        selector: 'em',
        fontStyle: normal
    }
}

export const peopleSearchResultsStyle = {
    display: flex,
    flexWrap: wrap,
    justifyContent: spaceBetween,
    flexDirection: row,
    width: '100%',
    boxSizing: borderBox,
    background: white,
    tablet: {
        padding: '45px 53px 0 53px'
    },
    small: {
        padding: '55px 60px 0 60px'
    },
    large: {
        padding: '65px 80px 0 80px'
    },
    print: {
        paddingTop: 15,
        paddingBottom: 25
    },
    query: {
        width: '50%',
        lineHeight: '1.3',
        mobile: {
            ...searchQueryStyle.mobile,
            marginTop: 0,
            width: '100%',
        },
        tablet: {
            width: '75%',
            marginBottom: 0
        },
        small: {
            marginBottom: 0
        },
        large: {
            marginBottom: 0
        }
    },
    child: {
        selector: '.panel-people-search',
        mobile: {
            width: '100%'
        },
        tablet: {
            width: '25%',
            display: flex,
            flexWrap: wrap,
        }
    },
    refine: {
        width: '100%',
        mobile: {
            display: flex,
            flexWrap: wrap,
            width: '100%',
            marginBottom: 40
        },
        print: {
            visibility: hidden
        },
        text: {
            display: flex,
            justifyContent: flexStart,
            width: '100%',
            ...archiveSearchStyle.toggle,
            tablet: {
                ...archiveSearchStyle.toggle.tablet,
                justifyContent: flexEnd,
                height: 20,
                padding: 0,
                size: 11,
                marginBottom: 20
            },
            small: {
                ...archiveSearchStyle.toggle.small,
                height: 20,
                padding: 0,
                size: 12
            },
            large: {
                ...archiveSearchStyle.toggle.large,
                height: 20,
                padding: 0,
                size: 13
            },
            ieTablet: {
                height: 21,
            },
            ieSmall: {
                height: 20,
            },
            ieLarge: {
                height: 20,
            },
            hover: {
                color: globals.colors.green,
                child: {
                    selector: '> svg',
                    color: globals.colors.green
                }
            }
        },
        formContainer: {
            position: relative,
            marginLeft: '-300%',
            width: '400%',
            transition: 'border-color 50ms ease',
            mobile: {
                marginLeft: 0,
                marginTop: 0
            },
            child: {
                selector: 'form',
                width: '50%',
                mobile: {
                    width: '100%',
                    boxSizing: borderBox,
                    padding: '30px 25px 40px 25px'
                }
            },
            after: {
                content: '\' \'',
                width: '100%',
                position: absolute,
                height: 1,
                background: globals.colors.borderColor,
                bottom: 0,
                left: 0,
                mobile: {
                    width: 'calc(100% - 50px)',
                    left: 25,
                }
            }
        },
        form: {
            ...archiveSearchStyle.container,
            tablet: {
                ...archiveSearchStyle.container.tablet,
                marginLeft: 0,
                //marginTop: 15,
                paddingBottom: 80
            },
            small: {
                ...archiveSearchStyle.container.small,
                marginLeft: 0,
                //marginTop: 25
            },
            large: {
                ...archiveSearchStyle.container.large,
                marginLeft: 0,
                // marginTop: 40
            }
        },
        formInner: {},
        field: {
            ...archiveSearchStyle.field,
            clearIcon: {
                right: 21
            }
        },
        firstField: {},
        button: {
            ...archiveSearchStyle.button
        },
        buttonWrapper: {
            tablet: {
                flexDirection: 'row'
            },
            small: {
                flexDirection: 'row'
            }
        },
        reset: {
            small: {
                marginTop: 0
            }
        },
        icon: {
            ...archiveSearchStyle.toggle.icon,
            marginLeft: 20,
            marginRight: 0
        },
    },
    container: {
        mobile: {
            padding: '0 25px'
        }
    },
    pagination: {
        // clear: 'both'
    }
}

export const globalResultTitleStyle = {
    font: globals.fonts.heading,
    fontWeight: 500,
    fontSize: 23,
    lineHeight: '31px',
    display: block,
    color: globals.colors.linkColor,
    tablet: {
        fontSize: 21,
        maxWidth: 365
    },
    small: {
        fontSize: 24,
        maxWidth: none
    },
    large: {
        fontSize: 29,
        lineHeight: '37px'
    }
}

export const globalArchiveListingStyle = {
    ...archiveListingStyle,
    tablet: {
        ...archiveListingStyle.tablet,
        display: flex,
        flexDirection: column,
        alignItems: flexStart,
    },
    small: {
        ...archiveListingStyle.small,
        display: block
    },
    firstOfType: {
        borderTop: 0,
        paddingTop: 6
    },
    title: {
        ...archiveListingStyle.title,
        ...globalResultTitleStyle
    },
    thumbnail: {
        marginRight: 0,
        tablet: {
            marginRight: 0,
            width: 150,
            maxWidth: 150,
            marginBottom: 30,
            marginLeft: 0
        },
        small: {
            marginRight: 0,
            width: 175,
            maxWidth: 175,
            marginLeft: 45
        },
        large: {
            marginRight: 0,
            width: 195,
            maxWidth: 195,
            marginLeft: 55
        }
    },
    excerpt: {
        tablet: {
            maxWidth: 365
        },
        small: {
            maxWidth: none
        }
    }
}

export const globalResultJustTitleStyle = {
    ...globalResultTitleStyle,
    marginBottom: 25,
    tablet: {
        ...globalResultTitleStyle.tablet,
        marginBottom: 30
    },
    small: {
        ...globalResultTitleStyle.small,
        marginBottom: 30
    },
    large: {
        ...globalResultTitleStyle.large,
        marginBottom: 32,

    }
}

export const globalPageTitle = {
    color: white,
    backgroundColor: globals.colors.black,
    margin: 0,
    size: 42,
    weight: 900,
    lineHeight: '42px',
    minHeight: 100,
    boxSizing: borderBox,
    display: flex,
    alignItems: center,
    mobile: {
        padding: '45px 50px 22px 25px'
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
}

export const practiceMicrositePageTitle = {
    ...globalPageTitle,
    position: relative,
    tablet: {
        ...globalPageTitle.tablet,
    },
    small: {
        ...globalPageTitle.small,
    },
    large: {
        ...globalPageTitle.large
    }
}

export const cookieNoticeStyle = {
    display: 'flex',
    position: relative,
    background: '#F3F3F3',
    padding: 34,
    boxSizing: 'border-box',
    alignItems: 'center',
    child: {
        selector: 'a',
        textDecoration: 'underline',
    },
    mobile: {
        top: 70,
        maxHeight:'85vh',
        overflow: 'scroll',
        width: '90%',
        left: '5%',
        flexDirection: column,
        alignItems: flexStart
    },
    tablet: {
        bottom: 0,
        padding: 50,
        width: '100%',
        display: flex,
        justifyContent: center,
        alignItems: center
    },
    small: {},
    print: {
        display: none
    },
    text: {
        flexGrow: 1,
        size: 18,
        lineHeight: '30px',
        tablet: {
            paddingRight: 75,
            maxWidth: 920,
            size: 16,
            lineHeight: '26px',
        },
        small: {
            size: 17,
            lineHeight: '28px',
        },
        large: {
            size: 18,
            lineHeight: '30px',
        }
    },
    button: {
        display: flex,
        justifyContent: flexStart,
        alignItems: center,
        boxSizing: borderBox,
        weight: 500,
        width: auto,
        color: white,
        backgroundColor: '#A4A4A4',
        letterSpacing: '4px',
        size: 12,
        firstOfType: {
            backgroundColor: globals.colors.green,
            mobile: {
                marginTop: 25
            },
            tablet: {
                marginRight: 14
            },
            hover: {
                backgroundColor: globals.colors.darkGreen
            }
        },
        hover: {
            color: white,
            backgroundColor: globals.colors.darkGray
        },
        mobile: {
            width: 215,
            marginTop: 13,
            letterSpacing: '3px',
            padding: '16px 33px',
            height: 60
        },
        tablet: {
            padding: '16px 20px',
            height: 50,
        },
        small: {
            padding: '16px 24px',
            height: 55,
        },
        large: {
            padding: '16px 27px',
            height: 60,
        }
    }
}

export const cookieConsentStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    flexDirection: column,
    backgroundColor: '#000',
    color: white,
    padding: '36px 56px 58px 56px',
    marginBottom: '20px',
    button: {
        display: flex,
        alignItems: center,
        justifyContent: center,
        letterSpacing: '3px',
        weight: 500,
        width: auto,
        margin: '0 auto',
        color: white,
        size: 13,
        backgroundColor: globals.colors.green,
        marginTop: 30,
        padding: '20px 26px',
        hover: {
            backgroundColor: globals.colors.lightGreen
        },
        tablet: {
            size: 11,
            padding: '16px 22px',
        },
        small: {
            size: 12,
            padding: '18px 24px',
        },
        large: {
            size: 13,
            padding: '20px 26px',
        }
    },
    text: {
        textAlign: center,
        maxWidth: '100%',
        size: 18,
        tablet: {
            size: 16
        },
        small: {
            size: 17
        },
        large: {
            size: 18
        },
        child: {
            selector: 'a',
            textDecoration: 'underline',
            color: white,
            hover: {
                color: globals.colors.lightGreen
            }
        }
    }
}

/**
 *
 *     MIXINS
 *
 */

export const hideVisually = {
    border: none,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    margin: -1,
    overflow: hidden,
    padding: 0,
    position: absolute,
    whiteSpace: 'no-wrap',
    width: 1,
}

export const centerContent = {
    display: flex,
    justifyContent: center,
    alignItems: center
}