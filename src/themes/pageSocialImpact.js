import {
    block,
    flex,
    flexStart,
    wrap
}                       from '../utils/themer'
import {globals}        from '../variables/styles'
import {h3DefaultStyle} from './elements'
import {
    richTextFirstParagraphStyle,
    richTextParagraphStyle
}                       from './layout'

export const socialImpactStyle = {
    tablet: {
        maxWidth: 650
    },
    small: {
        maxWidth: 850
    },
    large: {
        maxWidth: 1000,
    },
    proBono: {
        mobile: {
            ...h3DefaultStyle.mobile,
            marginTop: 0,
            marginBottom: 15
        },
        tablet: {
            ...h3DefaultStyle.tablet,
            marginTop: 0
        },
        small: {
            ...h3DefaultStyle.small,
            marginTop: 0
        },
        large: {
            ...h3DefaultStyle.large,
            marginTop: 0
        }
    },
    recentCasesWrapper: {
        tablet: {
            maxWidth: 448
        },
        small: {
            maxWidth: 624
        },
        large: {
            maxWidth: 760,
        },
        print: {
          pageBreakInside: 'avoid'
        },
        child: {
            selector: 'h4',
            weight: 600,
            fontSize: 20,
            lineHeight: '22px',
            display: flex,
            marginTop: 50,
            marginBottom: 28,
            tablet: {
                fontSize: 18,
                lineHeight: '19px',
                marginTop: 45,
                marginBottom: 24,
            },
            small: {
                fontSize: 20,
                lineHeight: '22px',
                marginTop: 50,
                marginBottom: 28,
            },
            large: {
                fontSize: 22,
                marginTop: 60,
                marginBottom: 32,
                lineHeight: '28px',
            },
        }
    },
    recentCases: {
        display: 'flex',
        flexWrap: wrap,
        justifyContent: flexStart,
        mobile: {
            display: block,
        }
    },
    recentCase: {
        mobile: {
            marginBottom: 50
        },
        tablet: {
            minWidth: 136,
            width: 136,
            marginRight: 20,
            marginBottom: 20
        },
        small: {
            minWidth: 184,
            width: 184,
            marginRight: 35,
            marginBottom: 35
        },
        large: {
            minWidth: 218,
            width: 218,
            marginRight: 50,
            marginBottom: 50
        },
        print: {
            pageBreakInside: 'avoid'
        },
        child: {
            selector: ':nth-child(3n)',
            marginRight: 0,
            print: {
                marginRight: 20
            }
        },
        image: {
            width: '100%',
            marginBottom: 15,
            tablet: {
                marginBottom: 10
            },
            small: {
                marginBottom: 15
            },
            large: {
                marginBottom: 20
            }
        },
        title: {
            color: globals.colors.gray,
            marginBottom: 15,
            lineHeight: 1.5,
            tablet: {
                size: 15,
                lineHeight: '22px',
                marginBottom: 10
            },
            small: {
                size: 16,
                lineHeight: '26px',
                marginBottom: 15
            },
            large: {
                size: 20,
                lineHeight: '30px',
                marginBottom: 20
            }
        },
        button: {
            tablet: {
                size: 11
            },
            small: {
                size: 12
            }
        }
    },
    description: {
        borderBottom: `1px solid ${globals.colors.borderColor}`,
        marginBottom: 46,
        paddingBottom: 28,
        tablet: {
            marginBottom: 40,
            paddingBottom: 30
        },
        small: {
            marginBottom: 53,
            paddingBottom: 39
        },
        large: {
            marginBottom: 70,
            paddingBottom: 50
        },
        child: {
            selector: 'p',
            ...richTextParagraphStyle,
            firstChild: {
                ...richTextFirstParagraphStyle
            }
        }
    },
    communityService: {
        borderTop: `1px solid ${globals.colors.borderColor}`,
        marginTop: 0,
        paddingTop: 41,
        tablet: {
            marginTop: 30,
            paddingTop: 40
        },
        small: {
            marginTop: 25,
            paddingTop: 52
        },
        large: {
            marginTop: 27,
            paddingTop: 70
        },
        photos: {
            marginTop: 40,
            tablet: {
                marginTop: 30
            },
            small: {
                marginTop: 40
            },
            large: {
                marginTop: 70
            },
        },
        item: {
            display: flex,
            mobile: {
                display: block,
                marginBottom: 50
            },
            tablet: {
                marginBottom: 40
            },
            small: {
                marginBottom: 50
            },
            large: {
                marginBottom: 70
            },
            print: {
                pageBreakInside: 'avoid'
            }
        },
        image: {
            mobile: {
                marginBottom: 15
            },
            tablet: {
                width: 240,
                minWidth: 240,
                height: 153,
                marginRight: 30
            },
            small: {
                width: 330,
                minWidth: 330,
                height: 210,
                marginRight: 38
            },
            large: {
                width: 470,
                minWidth: 470,
                height: 300,
                marginRight: 46
            },
            print: {
                width: 150,
                minWidth: 150,
                height: 96
            }
        },
        heading: {
            mobile: {
                ...h3DefaultStyle.mobile,
                marginTop: 0,
                marginBottom: 15
            },
            tablet: {
                ...h3DefaultStyle.tablet,
                marginTop: 0
            },
            small: {
                ...h3DefaultStyle.small,
                marginTop: 0
            },
            large: {
                ...h3DefaultStyle.large,
                marginTop: 0
            }
        },
        description: {
            color: globals.colors.gray,
            tablet: {},
            small: {},
            large: {}
        }
    }
}