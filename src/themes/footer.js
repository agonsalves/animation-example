import {
    absolute,
    center,
    column,
    flex,
    flexStart,
    hidden,
    inlineBlock,
    none,
    relative,
    row,
    spaceBetween,
    uppercase,
    wrap
}                from '../utils/themer'
import {globals} from '../variables/styles'
import {
    innerContainerDefaultStyle,
    layoutInnerStyle
}                from './layout'

export const footerStyle = {
    width: '100%',
    backgroundColor: globals.colors.black,
    minHeight: 190,
    fontSize: 12,
    color: globals.colors.footerTextColor,
    margin: '0 0 -65px',
    mobile: {
        marginTop: 0
    },
    print: {
      pageBreakInside: 'avoid'
    },
    inner: {
        ...innerContainerDefaultStyle,
        ...layoutInnerStyle,
        position: relative,
        maxWidth: '100%',
        margin: '0 auto 0',
        padding: '40px 0',
        flexDirection: column,
        justifyContent: spaceBetween,
        alignItems: flexStart,
        overflow: hidden,
        height: '100%',
        mobile: {
            padding: '24px 25px 15px 25px',
        },
        tablet: {
            ...layoutInnerStyle.tablet,
            flexDirection: column,
            maxWidth: 660,
            paddingTop: 47,
            margin: '0 0 0 91px'
        },
        small: {
            ...layoutInnerStyle.small,
            flexDirection: row,
            flexWrap: wrap,
            paddingTop: 74,
            margin: '0 0 0 122px'
        },
        large: {
            ...layoutInnerStyle.large,
            margin: '0 0 0 158px'
        },
        right: {
            position: relative,
            tablet: {
                paddingLeft: 0
            },
            small: {
                paddingLeft: 35
            },
            print: {
                width: '100%',
                padding: '30px 0 0 0'
            },
            before: {
                tablet: {

                },
                small: {
                    content: '\'\'',
                    position: absolute,
                    top: 0,
                    left: 0,
                    display: inlineBlock,
                    width: 1,
                    backgroundColor: '#404040',
                    height: 111
                },
                print: {
                    content: none
                }
            }
        }
    },
    copyright: {
        display: flex,
        flexDirection: column,
        marginBottom: 30,
        size: 16,
        color: '#666',
        lineHeight: '20px',
        mobile: {
            size: 16,
            lineHeight: '20px',
            margin: '20px 0 0 0'
        },
        tablet: {
            size: 15,
            lineHeight: '35px',
            marginBottom: 0
        },
        small: {
            size: 16,
            lineHeight: '31px'
        },
        large: {
            size: 20,
            lineHeight: '35px'
        }
    },
    attribution: {
        display: flex,
        flexDirection: column,
        marginBottom: 15,
        mobile: {
            size: 16,
            marginBottom: 20,
            lineHeight: '20px'
        },
    },
    wrapper: {
        position: relative,
        zIndex: 8
    }
}

export const footerMenuStyle = {
    listStyle: none,
    display: flex,
    flexDirection: column,
    flexWrap: wrap,
    font: globals.fonts.heading,
    fontWeight: 500,
    padding: 0,
    margin: '0 0 17px',
    tablet: {
        flexDirection: row
    },
    small: {
        marginBottom: 45
    },
    listItem: {
        margin: 0,
        flexShrink: 0,
        fontSize: 20,
        weight: 600,
        lineHeight: '33px',
        tablet: {
            display: flex,
            alignItems: center,
            lineHeight: '24px',
            fontSize: 20,
            paddingRight: 26
        },
        small: {
            size: 28,
            lineHeight: '34px',
            paddingRight: 40
        },
        large: {
            size: 35,
            lineHeight: '42px'
        },
        after: {
            tablet: {
                content: '\'\'',
                display: inlineBlock,
                backgroundColor: '#404040',
                width: 2,
                height: 33,
                marginLeft: 26
            },
            small: {
                marginLeft: 40,
                height: 46
            },
        },
        lastChild: {
            tablet: {
                paddingRight: 0
            },
            small: {},
            large: {},
            after: {
                content: none
            }
        }
    },
    link: {
        color: globals.colors.footerLinkColor,
        textDecoration: none
    },
}

export const secondaryFooterMenuStyle = {
    tablet: {
        size: 15,
        lineHeight: '35px',
        marginBottom: 0,
        paddingRight: 15
    },
    small: {
        size: 16,
        lineHeight: '31px'
    },
    large: {
        size: 20,
        lineHeight: '35px'
    },
    item: {
        color: globals.colors.footerTextColor,
        textDecoration: 'underline',
        size: 16,
        tablet: {
            size: 15,
        },
        small: {
            size: 16,
        },
        large: {
            size: 20,
        },
        firstChild: {
            paddingRight: 10,
            tablet: {
                paddingRight: 15
            },
            after: {
                display: inlineBlock,
                position: relative,
                top: 3,
                marginLeft: 10,
                content: '\'\'',
                height: 14,
                width: 1,
                backgroundColor: '#404040',
                tablet: {
                    marginLeft: 15
                }
            }
        }
    }
}

export const socialMediaLinksStyle = {
    display: flex,
    flexDirection: column,
    position: relative,
    label: {
        font: globals.fonts.heading,
        fontSize: 14,
        fontWeight: 500,
        textTransform: uppercase,
        margin: '5px 15px 7px 0',
        color: '#b7b7b7',
    },
    linkWrapper: {
        display: flex,
        marginTop: 26,
        small: {
            marginTop: 45
        }
    },
    link: {
        marginRight: 35,
        fontSize: 24,
        color: globals.colors.footerLinkColor,
        tablet: {
            fontSize: 18,
            marginRight: 27
        },
        small: {
            fontSize: 23,
            marginRight: 35
        },
        print: {
            color: globals.colors.black
        }
    }
}

export const accoladeBadges = {
    borderTop: '1px solid #404040',
    width: '100%',
    marginTop: 38,
    paddingTop: 38,
    mobile: {
        display: flex,
        flexWrap: wrap
    },
    tablet: {
        width: '100%',
        display: flex,
        flexDirection: row,
        flexWrap: wrap,
        maxWidth: 660
    },
    small: {
        marginTop: 67,
        paddingTop: 67,
        maxWidth: none
    },
    large: {
        marginTop: 87,
        paddingTop: 87,
    },
    inner: {
        width: '100%',
        display: flex,
        mobile: {
            maxWidth: 350,
            flexWrap: wrap,
        },
        tablet: {
            alignItems: flexStart
        },
        child: {
            selector: '> div',
            mobile: {
                marginBottom: 30
            }
        },
    },
    innerRight: {
        mobile: {
            width: 170
        }
    },
    leadershipCouncil: {
        width: 120,
        mobile: {
            marginRight: 50,
            marginLeft: 50
        },
        tablet: {
            width: 158,
            marginLeft: 70
        },
        small: {
            width: 228,
            marginLeft: 90
        },
        large: {
            width: 258,
            marginLeft: 120
        },
        print: {
            width: 120,
        }
    },
    bestLawyers: {
        width: 120,
        tablet: {
            width: 160,
        },
        small: {
            width: 190,
        },
        large: {
            width: 210,

        },
        print: {
            width: 120,
        }
    },
    terraLex: {
        width: 120,
        marginLeft: 50,
        mobile: {
            margin: '50px 50px 0 50px'
        },
        tablet: {
            width: 158,
            marginLeft: 70,
            marginTop: 25,
            marginBottom: 25
        },
        small: {
            width: 228,
            marginTop: 30,
            marginBottom: 30,
            marginLeft: 90
        },
        large: {
            width: 258,
            marginTop: 45,
            marginLeft: 120,
            marginBottom: 45
        },
        print: {
            width: 120,
        }
    },
    americanLawyer: {
        width: 120,
        tablet: {
            width: 209,
            marginLeft: 85
        },
        small: {
            width: 239,
            marginLeft: 100
        },
        large: {
            width: 269,
            marginLeft: 137
        },
        print: {
            width: 120,
        }
    },
    registeredFirm: {
        width: 120,
        marginLeft: 50,
        tablet: {
            width: 188,
            marginLeft: 65
        },
        small: {
            width: 228,
            marginLeft: 80
        },
        large: {
            width: 258,
            marginLeft: 110
        },
        print: {
            width: 120,
        }
    }
}