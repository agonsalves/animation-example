import {iconInSolidCircle}       from '../utils/styling'
import {
    absolute,
    block,
    center,
    column,
    flex,
    inlineBlock,
    inlineFlex,
    none,
    pointer,
    relative,
    spaceBetween,
    white,
    wrap
}                                from '../utils/themer'
import {globals}                 from '../variables/styles'
import {
    centerContent,
    h3DefaultStyle
}                                from './elements'
import {
    postContentStyle,
    richTextParagraphStyle
}                                from './layout'
import {micrositePageTitleStyle} from './microsites'
import {
    associatedPracticeItemStyle,
    associatedPracticeList,
    associatedPracticeNameStyle
}                                from './sidebars'

export const blogContributorStyle = {
    display: flex,
    margin: '0 0 15px',
    image: {
        flexShrink: 0,
        width: 60,
        height: 60,
        marginRight: 10,
    },
}

export const blogFollowLinkStyle = {
    display: inlineFlex,
    alignItems: center,
    textDecoration: 'underline',
    marginBottom: 12,
    tablet: {
        marginBottom: 8,
    },
    small: {
        marginBottom: 10,
    },
    large: {
        marginBottom: 12,
        size: 18,
        lineHeight: '22px'
    },
    icon: {
        ...centerContent,
        backgroundColor: globals.colors.black,
        color: white,
        marginRight: 17,
        tablet: {
            marginRight: 13
        },
        small: {
            marginRight: 15
        },
        large: {
            marginRight: 17
        },
        ...iconInSolidCircle({
            mobile: {
                iconSize: 18,
                circleSize: 38,
            },
            tablet: {
                iconSize: 13,
                circleSize: 30,
            },
            small: {
                iconSize: 15,
                circleSize: 34,
            },
            large: {
                iconSize: 18,
                circleSize: 38,
            },
        })
    }
}

export const blogMainStyle = {
    paddingTop: 0,
    mobile: {
        ...postContentStyle.mobile,
        marginTop: 30
    }
}

export const blogSearchFormStyle = {
    display: flex,
    position: relative,
    border: none,
    borderRight: 0,
    width: '100%',
    child: [
        {
            selector: 'input',
            paddingRight: 0,
            weight: 400,
            height: 60,
            size: 18,
            tablet: {
                size: 16,
                height: 50,
            },
            small: {
                size: 17,
                height: 55,
            },
            large: {
                height: 60,
                size: 18
            }
        },
        {
            selector: 'button',
            position: absolute,
            right: -2,
            top: 0,
            height: 64,
            width: 60,
            cursor: pointer,
            backgroundColor: globals.colors.green,
            border: none,
            tablet: {
                height: 54,
                width: 50
            },
            small: {
                height: 59,
                width: 55
            },
            large: {
                height: 64,
                width: 60
            },
            hover: {
                backgroundColor: globals.colors.darkGreen
            }
        },
        {
            selector: 'legend',
            display: none
        },
        {
            selector: '> div',
            width: '100%',
            child: {
                selector: 'svg',
                display: none
            }
        }
    ],
    field: {
        width: '100%',
    },
    button: {
        zIndex: 1
    },
    icon: {
        size: 22,
        color: white,
        zIndex: 0,
        tablet: {},
        small: {},
        large: {
            size: 24
        }
    }
}

export const blogSearchWidgetStyle = {
    heading: {
        marginBottom: 30,
        weight: 900,
        size: 20,
        tablet: {
            marginBottom: 25,
            size: 16
        },
        small: {
            marginBottom: 30,
            size: 18
        },
        large: {
            marginBottom: 35,
            size: 20,
            lineHeight: '24px'
        },
    },
    aside: {
        borderBottom: `1px solid ${globals.colors.borderColor}`,
        marginTop: 40,
        paddingBottom: 40,
        tablet: {
            marginTop: 33,
            paddingBottom: 40
        },
        small: {
            marginTop: 55,
            paddingBottom: 50
        },
        large: {
            marginTop: 75,
            paddingBottom: 80
        },
        firstChild: {
            marginTop: 0,
        },
        lastChild: {
            border: none
        }
    }
}

export const blogPostAuthorStyle = {
    marginBottom: 15,
    tablet: {
        display: flex,
        flexWrap: wrap,
        marginBottom: 35,
        child: {
            selector: '> div',
            width: '50%',
            paddingBottom: 30,
            tablet: {
                paddingBottom: 25,
            },
            small: {
                paddingBottom: 25,
            },
            large: {
                paddingBottom: 30,
            }
        }
    },
    small: {
        marginBottom: 15,
    },
    large: {
        marginBottom: 15,
    },
    inner: {
        display: flex,
        mobile: {
            marginBottom: 30,
        }
    },
    name: {
        weight: 600,
        color: globals.colors.black,
        tablet: {
            lineHeight: 1.25
        },
        small: {
            lineHeight: 1.35
        },
        large: {
            size: 20,
            lineHeight: 1.45
        }
    },
    details: {
        color: globals.colors.gray,
        lineHeight: 1.45,
        tablet: {},
        small: {},
        large: {
            size: 18,
            lineHeight: 1.45
        }
    },
    image: {
        height: 80,
        width: 80,
        minWidth: 80,
        marginRight: 28,
        borderRadius: 40,
        overflow: 'hidden',
        tablet: {
            marginRight: 22
        },
        small: {
            marginRight: 24
        },
        large: {
            marginRight: 28
        }
    },
    email: {
        color: globals.colors.gray,
        textDecoration: 'underline',
        display: block,
    }
}

export const blogPostDetailRelatedInfoStyle = {
    borderTop: `1px solid ${globals.colors.borderColor}`,
    borderBottom: `1px solid ${globals.colors.borderColor}`,
    paddingTop: 50,
    marginTop: 52,
    mobile: {
        borderBottom: 0
    },
    tablet: {
        paddingTop: 45,
        paddingBottom: 25,
        marginTop: 52,
    },
    small: {
        paddingTop: 50,
        paddingBottom: 30,
        marginTop: 62,
    },
    large: {
        marginTop: 72,
        paddingBottom: 35,
        paddingTop: 55
    }
}

export const blogPostRelatedItemsStyle = {
    marginBottom: 16,
    title: {
        weight: 600
    },
    link: {
        textDecoration: 'underline'
    }
}

export const blogPostListingStyle = {
    flexWrap: wrap,
    flexDirection: column,
    tablet: {},
    small: {},
    large: {
        marginBottom: 80,
        paddingTop: 74
    },
    category: {
        textDecoration: 'underline',
        color: globals.colors.gray,
        hover: {
            color: globals.colors.green
        }
    },
    details: {
        width: '100%',
        mobile: {
            display: flex,
            flexDirection: column
        }
    },
    title: {
        ...h3DefaultStyle,
        margin: '0 0 13px 0',
        width: '100%',
        tablet: {
            ...h3DefaultStyle.tablet,
            lineHeight: '26px',
            margin: '0 0 9px 0'
        },
        small: {
            ...h3DefaultStyle.small,
            lineHeight: '32px',
            margin: '0 0 12px 0'
        },
        large: {
            ...h3DefaultStyle.large,
            lineHeight: '44px',
            margin: '0 0 13px 0'
        }
    },
    categories: {
        color: globals.colors.gray,
        marginBottom: 13,
        width: '100%',
        lineHeight: '26px',
        tablet: {
            lineHeight: '24px',
        },
        small: {
            lineHeight: '32px',
        },
        large: {
            size: 18,
            lineHeight: '35px',
        },
        name: {
            color: globals.colors.gray,
        },
    },
    byline: {
        color: globals.colors.gray,
        marginBottom: 0,
        width: '100%',
        lineHeight: '26px',
        tablet: {
            lineHeight: '24px',
        },
        small: {
            lineHeight: '32px',
        },
        large: {
            size: 18,
            lineHeight: '35px',
        },
        name: {
            color: globals.colors.gray,
        },
    },
    image: {
        mobile: {
            float: none,
            marginLeft: 0,
            marginTop: 20,
            order: 1,
            width: 240
        },
        tablet: {
            width: 180,
            marginLeft: 35,
            marginTop: 22,
        },
        small: {
            width: 220,
            marginLeft: 45,
            marginTop: 28,
        },
        large: {
            width: 290,
            marginLeft: 65,
            marginTop: 32
        },
        print: {
            marginLeft: 0
        },
        wrapper: {
            mobile: {
                order: 1
            }
        }
    },
    excerpt: {
        ...richTextParagraphStyle,
        tablet: {
            marginTop: 22,
        },
        small: {
            marginTop: 28,
        },
        large: {
            size: 18,
            marginTop: 32
        },
    },
    button: {
        marginTop: 25,
        size: 13,
        mobile: {
            order: 2
        },
        tablet: {
            marginTop: 30,
            size: 11
        },
        small: {
            marginTop: 35,
            size: 12
        },
        large: {
            marginTop: 40,
            size: 13
        }
    },
    firstChild: {
        border: none,
        paddingTop: 0,
        child: {
            selector: '> a',
            marginTop: 0,
            tablet: {
                marginTop: 0,
            },
            small: {
                marginTop: 0,
            },
            large: {
                marginTop: 0,
            }
        }

    }
}

export const blogPostDetailStyle = {
    byline: {
        color: globals.colors.black,
        marginBottom: 13,
        lineHeight: '26px',
        size: 18,
        tablet: {
            size: 16,
            marginBottom: 22,
            lineHeight: '24px',
        },
        small: {
            size: 18,
            marginBottom: 28,
            lineHeight: '32px',
        },
        large: {
            size: 20,
            lineHeight: '35px',
            marginBottom: 32
        },
        name: {
            textDecoration: 'underline'
        }
    },
}

export const blogSubCategoryStyle = {
    ...associatedPracticeList
}

export const blogSubCategoryItemStyle = {
    ...associatedPracticeItemStyle,
    icon: {
        ...associatedPracticeItemStyle.icon
    },
    name: {
        ...associatedPracticeNameStyle,
        cursor: pointer,
        class: {
            name: 'active',
            color: globals.colors.green
        }
    }
}

export const micrositeBlogPostListingsStyle = {
    wrapper: {
        backgroundColor: white,
        firstOfType: {
            child: {
                selector: 'article',
                border: none,
                paddingTop: 0,
            }
        }
    },
    heading: {
        ...micrositePageTitleStyle,
        borderBottom: `1px solid ${globals.colors.borderColor}`,
        paddingBottom: 40,
        mobile: {
            marginBottom: 40,
            marginTop: 30
        },
        tablet: {
            ...micrositePageTitleStyle.tablet,
            paddingBottom: 25,
        },
        small: {
            ...micrositePageTitleStyle.small,
            paddingBottom: 35,
        },
        large: {
            ...micrositePageTitleStyle.large,
            marginBottom: 78,
            paddingBottom: 63,
        }
    },
    title: {},
    description: {
        marginBottom: 30
    },
    categoryTitle: {
        color: globals.colors.green,
        display: inlineBlock,
        tablet: {
            marginBottom: 2,
            marginRight: 5
        },
        small: {
            marginBottom: 5,
            marginRight: 8
        },
        large: {
            marginBottom: 15,
            marginRight: 10
        }
    }
}

export const personMicrositeBlogPostListingStyle = {
    ...blogPostListingStyle,
    firstChild: {
        mobile: {
            borderTop: `1px solid ${globals.colors.borderColor}`,
        },
        tablet: {},
        small: {},
        large: {
            paddingTop: 40,
            marginBottom: 40
        }
    },
    large: {
        ...blogPostListingStyle.large,
        paddingTop: 40,
        marginBottom: 40
    },
    heading: {
        borderBottom: `1px solid ${globals.colors.borderColor}`,
        mobile: {
            paddingBottom: 23,
            marginTop: 42,
            marginBottom: 30
        },
        tablet: {
            ...micrositePageTitleStyle.tablet,
            marginBottom: 30,
            marginTop: 0,
            paddingBottom: 30
        },
        small: {
            ...micrositePageTitleStyle.small,
            marginBottom: 40,
            marginTop: 0,
            paddingBottom: 40
        },
        large: {
            ...micrositePageTitleStyle.large,
            marginBottom: 40,
            marginTop: 0
        }
    }
}

export const micrositeBlogSubCategory = {
    display: inlineBlock,
}

export const mobileBlogCategoriesStyle = {
    backgroundColor: globals.colors.lightGray,
    padding: '8px 24px 10px 25px',
    cursor: 'pointer',
    display: flex,
    justifyContent: spaceBetween,
    icon: {}
}