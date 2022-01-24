import {
    absolute,
    auto,
    block,
    borderBox,
    column,
    flex,
    flexEnd,
    hidden,
    inlineBlock,
    none,
    pointer,
    relative,
    uppercase,
    white
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const firmHighlightsStyle = {
    display: flex,
    flexDirection: column,
    justifyContent: flexEnd,
    transform: 'translateZ(0)',
    boxSizing: borderBox,
    backgroundColor: globals.colors.lightGray,
    color: white,
    overflow: hidden,
    zIndex: 8,
    headingBar: {
        backgroundColor: globals.colors.lightGray,
    },
    tablet: {
        paddingBottom: 62,
        height: 561
    },
    small: {
        paddingBottom: 82,
        height: 747
    },
    large: {
        paddingBottom: 100,
        height: 920
    },
    print: {
        display: none
    },
    heading: {
        size: 48,
        lineHeight: '58px',
        weight: 900,
        display: inlineBlock,
        color: globals.colors.borderColor,
        font: globals.fonts.heading,
        mobile: {
            marginLeft: 25,
            marginTop: 17,
            marginBottom: 8
        },
        tablet: {
            size: 110,
            marginLeft: 43,
        },
        small: {
            size: 140,
            marginLeft: 55
        },
        large: {
            size: 183,
            marginLeft: 71
        }
    },
    wrapper: {
        position: relative,
        zIndex: 0,
        height: 365,
        tablet: {
            height: 330 - 4
        },
        small: {
            height: 437 - 13
        },
        large: {
            height: 540 - 25
        },
        child: [
            {
                selector: '.slider-frame',
                child: {
                    selector: '+ div',
                    zIndex: 1
                }
            },
            {
                selector: '.slider-control-centerright',
                top: '0 !important',
                transform: 'none !important',
                mobile: {
                  top: '50% !important'
                },
                tablet: {
                    right: '-73px !important'
                },
                small: {
                    right: '-87px !important'
                },
                large: {
                    right: '-48px !important'
                }
            },
            {
                selector: '.slider',
                position: 'absolute !important',
                top: 0,
                mobile: {
                    marginLeft: 25,
                    marginBottom: 30,
                },
                tablet: {
                    marginTop: -4,
                    clip: 'rect(0px,1920px,330px,95px)'
                },
                small: {
                    marginTop: -13,
                    clip: 'rect(0px,1920px,437px,121px)'
                },
                large: {
                    marginTop: -25,
                    clip: 'rect(0px,1920px,540px,150px)'
                },
                after: {
                    content: '\' \'',
                    display: none,
                    height: '100%',
                    width: 262,
                    background: 'rgba(255, 255, 255, 0.85);',
                    right: 0,
                    top: 0,
                    position: absolute,
                    zIndex: 0,
                    mobile: {
                        display: none
                    },
                    tablet: {
                        width: 262
                    },
                    small: {
                        width: 350
                    },
                    large: {
                        width: 430,
                    }
                },
            },
        ]
    },
    innerWrapper: {
        // position: absolute,
    },
    nextButtonWrapper: {
        position: relative,
        display: block,
        cursor: pointer,
        color: globals.colors.black,
        /// backgroundColor: 'rgba(255, 255, 255, 0.59)',
        tablet: {
            height: 330,
            width: 262,
        },
        small: {
            height: 437,
            width: 350,
        },
        large: {
            height: 540,
            width: 361,
        },
        hover: {
            color: globals.colors.green,
            child: {
                selector: '> svg',
                color: globals.colors.green
            }
        }
    },
    nextButton: {
        color: globals.colors.black,
        zIndex: 2,
        position: relative,
        display: none,
        mobile: {
            display: block,
            right: -65,
            marginTop: -30,
            width: 30,
        },
        tablet: {
            top: '50%',
            marginLeft: auto,
            right: 73
        },
        small: {
            right: 283,
            size: 32
        },
        large: {
            right: 48,
            size: 36
        },
        hover: {
            color: globals.colors.green,
            cursor: pointer
        }
    },
}

export const firmHighlightsStyleItem = {
    // color: globals.colors.gray,
    color: '#3c3d3d',
    backgroundColor: white,
    padding: '20px 0 60px 0',
    display: block,
    boxSizing: borderBox,
    overflow: hidden,
    mobile: {
        height: 330,
        maxHeight: 330,
        paddingLeft: 25,
        paddingRight: 25,
    },
    tablet: {
        height: 330,
        maxHeight: 330,
        padding: 24,
        margin: 0,
        minWidth: 262,
        maxWidth: 262,
    },
    small: {
        height: 437,
        maxHeight: 437,
        padding: '31px 33px',
        minWidth: 348,
        maxWidth: 348
    },
    large: {
        height: 540,
        maxHeight: 540,
        padding: '37px 41px',
        minWidth: 430,
        maxWidth: 430
    },
    hover: {
        color: globals.colors.green,
        child: [
            {
                selector: '> h3',
                color: globals.colors.green
            },
            {
                selector: '> img',
                opacity: .7
            }
        ]
    },
    postType: {
        color: globals.colors.black,
        fontWeight: 500,
        font: globals.fonts.heading,
        letterSpacing: 3,
        lineHeight: '13px',
        textTransform: uppercase,
        size: 13,
        zIndex: 1,
        transition: 'opacity 500ms'
    },
    postTitle: {
        color: globals.colors.black,
        textTransform: 'none',
        marginTop: 17,
        fontSize: 23,
        lineHeight: '29px',
        weight: 900,
        transition: 'opacity 500ms',
        webkitLineClamp: 3,
        webkitBoxOrient: 'vertical',
        overflow: hidden,
        textOverflow: 'ellipsis',
        display: 'block; display: -webkit-box;',
        maxHeight: 85,
        height: auto,
        tablet: {
            fontSize: 22,
            lineHeight: '29px',
            marginTop: 18,
            marginBottom: 13,
            maxHeight: 87
        },
        small: {
            fontSize: 28,
            lineHeight: '36px',
            marginTop: 21,
            marginBottom: 15,
            maxHeight: 110,
        },
        large: {
            fontSize: 34,
            lineHeight: '42px',
            marginBottom: 27,
            maxHeight: 125,
        },
        hover: {
            color: globals.colors.green
        }
    },
    image: {
        margin: 0,
        width: '100%',
        transition: 'opacity 500ms',
        tablet: {},
        large: {}
    },
    excerpt: {
        lineHeight: '21px',
        size: 15,
        overflow: hidden,
        transition: 'opacity 500ms',
        tablet: {
            lineHeight: '21px',
            size: 15,
            overflow: hidden,
        },
        small: {
            size: 16,
            lineHeight: '24px',
        },
        large: {
            size: 20,
            lineHeight: '30px',
        }
    },
}

export const firmHighlightsStyleItemWithImage = {
    ...firmHighlightsStyleItem,
    mobile: {
        ...firmHighlightsStyleItem.mobile,
        padding: 0
    },
    tablet: {
        ...firmHighlightsStyleItem.tablet,
        padding: 0
    },
    small: {
        ...firmHighlightsStyleItem.small,
        padding: 0
    },
    large: {
        ...firmHighlightsStyleItem.large,
        padding: 0
    },
    postTitle: {
        ...firmHighlightsStyleItem.postTitle,
        mobile: {
            ...firmHighlightsStyleItem.postTitle.mobile,
            padding: '0 25px'
        },
        tablet: {
            ...firmHighlightsStyleItem.postTitle.tablet,
            padding: '0 24px'
        },
        small: {
            ...firmHighlightsStyleItem.postTitle.small,
            padding: '0 33px'
        },
        large: {
            ...firmHighlightsStyleItem.postTitle.large,
            padding: '0 41px'
        }
    },
    postType: {
        ...firmHighlightsStyleItem.postType,
        position: absolute,
        color: white,
        top: 17,
        left: 25,
        tablet: {
            top: 23,
            left: 25
        },
        small: {
            top: 28,
            left: 33
        },
        large: {
            top: 37,
            left: 41
        }
    },
    excerpt: {
        ...firmHighlightsStyleItem.excerpt,
        padding: '0 25px',

        tablet: {
            ...firmHighlightsStyleItem.excerpt.tablet,
            padding: '0 24px'
        },
        small: {
            ...firmHighlightsStyleItem.excerpt.small,
            padding: '0 33px'
        },
        large: {
            ...firmHighlightsStyleItem.excerpt.large,
            padding: '0 41px'
        }
    }
}