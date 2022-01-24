import {
    hasRightSidebar,
    isAboutUsPage,
    isArchiveDetail,
    isArchiveListing,
    isBlog,
    isCareersPage,
    isContactPage,
    isDiversityPage,
    isGenericPage,
    isGlobalSearch,
    isHomepage,
    isIndustryListingPage,
    isIndustryMicrosite,
    isMicrositeSubpage,
    isPeoplePage,
    isPeopleSearch,
    isPersonMicrosite,
    isPersonMicrositeMainPage,
    isPracticeListingPage,
    isPracticeMicrosite,
    isPracticeSearch,
    isSubPage
} from '../utils/flags'
import {
    auto,
    block,
    borderBox,
    column,
    fixed,
    flex,
    flexEnd,
    hidden,
    none,
    pointer,
    relative,
    row,
    white
}                          from '../utils/themer'
import {globals}           from '../variables/styles'
import {autosuggestStyles} from './datalists'

export const pageFrameStyle = {
    margin: '0 auto',
    maxWidth: '100%',
    width: '100%',
    fontSize: globals.bodyFontSize.mobile,
    color: globals.colors.textColor,
    maxHeight: '100%',
    position: relative,
    tablet: {
        fontSize: globals.bodyFontSize.tablet,
        maxWidth: 1920,
        overflow: hidden
    },
    small: {
        fontSize: globals.bodyFontSize.small,
    },
    large: {
        fontSize: globals.bodyFontSize.large,
    },
    logo: {
        position: 'sticky',
        top: 40,
        marginTop: 40,
        marginLeft: 50,
        height: 32,
        zIndex: 2,
        transition: 'top 500ms, height 500ms',
        ie: {
            position: relative,
            marginTop: 0,
        },
        tablet: {
            height: 31,
            top: 50,
            marginTop: 50,
            marginLeft: 53,
            maxWidth: 149,
        },
        small: {
            height: 43,
            top: 60,
            marginLeft: 60,
            maxWidth: 207,
        },
        large: {
            height: 50,
            marginLeft: 80,
            top: 72,
            marginTop: 72,
            maxWidth: 240,
        },
        xLarge: {
            ie: {
                marginLeft: 88
            },
        },
        print: {
            display: none,
        }
    },
    ...autosuggestStyles
}

export const layoutInnerStyle = {
    position: relative,
    tablet: {
        width: globals.containerWidth.tablet,
        minWidth: globals.containerWidth.tablet
    },
    small: {
        width: globals.containerWidth.small,
        minWidth: globals.containerWidth.small
    },
    large: {
        width: globals.containerWidth.large,
        minWidth: globals.containerWidth.large
    }
}

export const contentOuterStyle = {
    width: '100%',
    pointerEvents: 'auto',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    print: {
        display: block
    }
}

export const contentOuterStyleSwitch = post => {
    if (isHomepage(post))
        return {
            width: '100%',
            height: '100vh'
        }

    if (isPracticeListingPage(post))
        return {
            ...innerContainerDefaultStyle,
            pointerEvents: none,
            width: '50%',
            minWidth: '50%',
            minHeight: '100vh',
            float: 'right',
            flexGrow: 1,
            backgroundColor: globals.colors.black,
            alignSelf: flexEnd,
            print: {
                width: '100%',
            }
        }

    if (isPeoplePage(post))
        return {
            ...innerContainerDefaultStyle,
            pointerEvents: none,
            width: '50%',
            minWidth: 500,
            minHeight: 900,
            flexGrow: 1,
            backgroundColor: globals.colors.black,
            mobile: {
                padding: 0
            },
        }

    if (isIndustryListingPage(post))
        return {
            ...innerContainerDefaultStyle,
            pointerEvents: none,
            width: '100%',
            minWidth: '100%',
            minHeight: '100vh',
            backgroundColor: globals.colors.black
        }

    if (isPersonMicrosite(post)) {
        if (isMicrositeSubpage(post)) {
            return {
                ...innerContainerDefaultStyle,
                ...layoutInnerStyle,
                pointerEvents: none,
                flexGrow: 1,
                paddingTop: 435,
                tablet: {
                    ...layoutInnerStyle.tablet,
                    paddingTop: 300,
                },
                small: {
                    ...layoutInnerStyle.small,
                    paddingTop: 385,
                },
                large: {
                    ...layoutInnerStyle.large,
                    paddingTop: 435,
                },
            }
        }

        return {
            ...innerContainerDefaultStyle,
            ...layoutInnerStyle,
            pointerEvents: none,
            flexGrow: 1,
            zIndex: 8,
            tablet: {
                ...layoutInnerStyle.tablet,
                paddingTop: 365,
            },
            small: {
                ...layoutInnerStyle.small,
                paddingTop: 422,
            },
            large: {
                ...layoutInnerStyle.large,
                paddingTop: 620,
            },
            print: {
                paddingTop: 0
            }
        }
    }

    if (isPracticeMicrosite(post) || isIndustryMicrosite(post)) {
        /// using isSubPage(post) returns an object {template: '': slug: '''}
        // instead of boolean -- comparing id's as current work around
        if (post.id !== post.parentPost.id) {
            return {
                ...innerContainerDefaultStyle,
                ...layoutInnerStyle,
                pointerEvents: none,
                tablet: {
                    ...innerContainerDefaultStyle.tablet,
                    ...layoutInnerStyle.tablet,
                    paddingTop: 125,
                    flexGrow: 1
                },
                small: {
                    ...innerContainerDefaultStyle.small,
                    ...layoutInnerStyle.small,
                    paddingTop: 145
                },
                large: {
                    ...innerContainerDefaultStyle.large,
                    ...layoutInnerStyle.large,
                    paddingTop: 200
                },
                print: {
                    paddingTop: 105
                }
            }
        }

        return {
            ...innerContainerDefaultStyle,
            ...layoutInnerStyle,
            pointerEvents: none,
            flexGrow: 1,
            paddingTop: 400,
            tablet: {
                ...layoutInnerStyle.tablet,
                paddingTop: 240
            },
            small: {
                ...layoutInnerStyle.small,
                paddingTop: 339,
            },
            large: {
                paddingTop: 400,
                ...layoutInnerStyle.large,
            },
            print: {
                paddingTop: 100
            }
        }
    }


    if (isDiversityPage(post)
        || (isCareersPage(post) && !isSubPage(post))
        || isAboutUsPage(post)
    )
        return {
            ...innerContainerDefaultStyle,
            ...layoutInnerStyle,
            pointerEvents: none,
            tablet: {
                ...innerContainerDefaultStyle.tablet,
                ...layoutInnerStyle.tablet,
                paddingTop: 365,
                flexGrow: 1
            },
            small: {
                ...innerContainerDefaultStyle.small,
                ...layoutInnerStyle.small,
                paddingTop: 480
            },
            large: {
                ...innerContainerDefaultStyle.large,
                ...layoutInnerStyle.large,
                paddingTop: 600
            },
            print: {
                paddingTop: 100
            }
        }


    return {
        ...innerContainerDefaultStyle,
        ...layoutInnerStyle,
        pointerEvents: none,
        tablet: {
            ...innerContainerDefaultStyle.tablet,
            ...layoutInnerStyle.tablet,
            paddingTop: 225,
            flexGrow: 1
        },
        small: {
            ...innerContainerDefaultStyle.small,
            ...layoutInnerStyle.small,
            paddingTop: 288
        },
        large: {
            ...innerContainerDefaultStyle.large,
            ...layoutInnerStyle.large,
            paddingTop: 365
        },
        print: {
            paddingTop: 100
        }
    }
}

export const fakeHeaderStyleSwitch = post => {
    if (isPersonMicrosite(post)) {
        if (!isMicrositeSubpage(post))
            return {
                tablet: {
                    height: 340
                },
                small: {
                    height: 450
                },
                large: {
                    height: 570
                }
            }
        else {
            return {
                tablet: {
                    height: 230
                },
                small: {
                    height: 300
                },
                large: {
                    height: 400
                }
            }
        }
    }

    if (isPracticeSearch(post)
        || isArchiveListing(post)
        || isPeopleSearch(post)
        || isDiversityPage(post)
        || isIndustryListingPage(post)
        || isCareersPage(post)
        || isContactPage(post)
        || isBlog(post)
        || isGlobalSearch(post))
        return {
            tablet: {
                height: 110
            },
            small: {
                height: 135
            },
            large: {
                height: 190
            }
        }

    if (isPeoplePage(post))
        return {
            tablet: {
                height: 81
            },
            small: {
                height: 103
            },
            large: {
                height: 122
            }
        }

    if (isSubPage(post) || isMicrositeSubpage(post) || isArchiveDetail(post))
        return {
            height: globals.marqueeHeight.subpage.large - 225,
            tablet: {
                height: globals.marqueeHeight.subpage.large - 275,
            },
            small: {
                height: globals.marqueeHeight.subpage.large - 250,
            },
            large: {
                height: globals.marqueeHeight.subpage.large - 195,
            }
        }

    if (isPracticeListingPage(post))
        return {
            height: '100%'
        }

    return {
        height: globals.marqueeHeight.default.large - 375,
        print: {
            top: -30
        }
    }
}

export const innerContainerDefaultStyle = {
    display: flex,
    height: '100%',
    width: '100%',
    boxSizing: borderBox,
    flexDirection: column,
    pointerEvents: auto,
    flexGrow: 1,
    transition: 'padding-top .5s ease-out',
    mobile: {
        backgroundColor: globals.colors.white,
        padding: '0 25px'
    },
    print: {
        display: block
    }
}

export const marqueeStyle = {
    width: '100%',
    transform: 'translateY(0)',
    inner: {},
}

export const mainContentStyle = {
    display: flex,
    flexDirection: column,
    backgroundColor: white,
    tablet: {
        flexDirection: row,
        marginTop: 0,
        flexShrink: 0,
        flexGrow: 1,
        flexWrap: 'nowrap',
        boxSizing: borderBox,
        maxWidth: globals.style.pageMaxWidth.tablet,
        width: '100%',
        padding: '40px 53px 50px 53px',
        class: {
            name: 'home',
            marginTop: 0,
            width: '100%',
            maxWidth: '100%',
        }
    },
    small: {
        maxWidth: globals.style.pageMaxWidth.small,
        padding: '56px 60px 55px 60px',
    },
    large: {
        boxSizing: borderBox,
        maxWidth: globals.style.pageMaxWidth.large,
        padding: '67px 80px 60px 80px',
        width: '100%',
    },
    print: {
        paddingTop: 0,
        width: '100%',
        maxWidth: '100%',
        display: block,
        child: [
            {
                selector: '> div:first-child:nth-last-child(2)',
                display: block,
                width: '51%',
                marginRight: '5%',
                float: 'left'
            },
            {
                selector: '.sidebar-right',
                float: 'left',
                width: '30%'
            }
        ]
    }
}

export const micrositeTypeLabelStyle = {
    color: 'white',
    size: 26,
    weight: 900,
    letterSpacing: .5,
    lineHeight: '30px',
    mobile: {
        backgroundColor: globals.colors.black,
        color: white,
        size: 18,
        paddingLeft: 25,
        paddingTop: 25,
    },
    tablet: {
        size: 22,
        marginLeft: 50
    },
    small: {
        size: 24,
        marginLeft: 60
    },
    large: {
        size: 26,
        marginLeft: 83,
        marginBottom: 6
    }
}

export const mainContentStyleSwitch = post => {
    if (isHomepage(post))
        return {
            mobile: {
                padding: 0
            }
        }

    if (isGlobalSearch(post)
        || isDiversityPage(post)
        || isCareersPage(post)
        || isAboutUsPage(post)
        || isContactPage(post)
        || isSubPage(post)
        || isBlog(post)
        || isGenericPage(post)){
        return {
            ...mainContentStyle,

            mobile: {
                padding: 0,
            },
        }
    }


    if (isArchiveDetail(post)) {
        return {
            ...mainContentStyle,

            mobile: {
                padding: 0
            },
            tablet: {
                ...mainContentStyle.tablet,
                width: '100%',

            },
            small: {
                ...mainContentStyle.small,

            },
            large: {
                ...mainContentStyle.large,
                paddingTop: 82,
            },
        }
    }

    if (isArchiveListing(post))
        return {
            ...mainContentStyle,

            mobile: {
                padding: 0
            },
            tablet: {
                ...mainContentStyle.tablet,
                width: '100%',
                paddingTop: 0
            },
            small: {
                ...mainContentStyle.small,
                paddingTop: 0,
            },
            large: {
                ...mainContentStyle.large,
                paddingTop: 0,
            },
        }

    if (isPeoplePage(post))
        return {
            ...mainContentStyle,
            backgroundColor: globals.colors.black,

            mobile: {
                padding: 0
            },
            tablet: {
                ...mainContentStyle.tablet,
                minHeight: '100vh'
            }
        }

    if (isPracticeListingPage(post))
        return {
            ...mainContentStyle,
            mobile: {
                ...mainContentStyle.mobile,
                padding: 0
            },
            tablet: {
                ...mainContentStyle.tablet,
                padding: '260px 45px 70px',
                backgroundColor: globals.colors.black,
                color: white,
                minHeight: '100vh'
            },
            small: {
                ...mainContentStyle.small,
                padding: '295px 65px 80px',
            },
            large: {
                ...mainContentStyle.large,
                padding: '330px 90px 90px',
            },
            print: {
                paddingTop: 150
            }
        }

    if (isPracticeSearch(post))
        return {
            ...mainContentStyle,
            mobile: {
                ...mainContentStyle.mobile,
                padding: 0
            },
            print: {
                paddingTop: 150
            }
        }

    if (isPersonMicrositeMainPage(post))
        return {
            ...mainContentStyle,
            mobile: {
                ...mainContentStyle.mobile,
                marginTop: 20
            }
        }

    if (isPracticeMicrosite(post) || isPersonMicrosite(post) || isIndustryMicrosite(post))
        return {
            ...mainContentStyle,
            mobile: {
                ...mainContentStyle.mobile,
                padding: 0
            },
            tablet: {
                ...mainContentStyle.tablet,
            },
            small: {
                ...mainContentStyle.small
            },
            large: {
                ...mainContentStyle.large
            }
        }

    if (isPersonMicrosite(post)) return {
        ...mainContentStyle,
        mobile: {
            ...mainContentStyle.mobile,
            padding: 0,
        },
        tablet: {
            ...mainContentStyle.tablet,
            position: relative,
        },
        small: {
            ...mainContentStyle.small
        },
        large: {
            ...mainContentStyle.large
        }
    }

    if (isIndustryListingPage(post))
        return {
            ...mainContentStyle,
            mobile: {
                padding: 0
            },
            tablet: {
                ...mainContentStyle.tablet,
                width: '100%',
                maxWidth: '100%',
                backgroundColor: globals.colors.black,
            },
            small: {
                ...mainContentStyle.small,
                width: '100%',
                maxWidth: '100%',
            },
            large: {
                ...mainContentStyle.large,
                padding: '90px 80px',
                width: '100%',
                maxWidth: 1920,
                margin: '0 auto'
            },
            print: {
                backgroundColor: none
            }
        }

    if (isPeopleSearch(post))
        return {
            ...mainContentStyle,
            mobile: {
                ...mainContentStyle.mobile,
                padding: '0 0 50px 0'
            },
            tablet: {
                ...mainContentStyle.tablet,
                paddingBottom: 75,
                paddingTop: 12,
                child: [
                    {
                        selector: '> div',
                        display: block,
                        print: {
                            display: block
                        }
                    }
                ]
            },
            small: {
                ...mainContentStyle.small,
                paddingBottom: 85,
                paddingTop: 18
            },
            large: {
                ...mainContentStyle.large,
                paddingBottom: 125,
                paddingTop: 22
            }
        }

    if (isArchiveListing(post))
        return {
            ...mainContentStyle,
            tablet: {
                ...mainContentStyle.tablet,
                paddingTop: 0
            },
            small: {
                ...mainContentStyle.small,
                paddingTop: 0
            },
            large: {
                ...mainContentStyle.large,
                paddingTop: 0
            }
        }

    if (!hasRightSidebar(post))
        return {
            ...mainContentStyle,
            paddingRight: 150
        }

    return mainContentStyle
}

export const postContentStyle = {
    ...innerContainerDefaultStyle,
    flexDirection: column,
}

export const genericPageStyle = {
    mobile: {
        padding: '0 0 0 0'
    }
}

export const overlayStyle = {
    position: fixed,
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(255,255,255,0.2)',
    zIndex: 9,
    cursor: pointer,
}

export const mainSectionStyle = {
    position: relative,
    minHeight: '100vh',
    overflow: hidden,
    display: flex,
    flexDirection: column,
    flexGrow: 1,
    mobile: {
        backgroundColor: globals.colors.black
    }
}

export const contentFrame = {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: white,
    zIndex: 1,
    flexGrow: 1,
    position: relative,
    print: {
        display: block
    }
}

export const richTextParagraphStyle = {
    size: 18,
    lineHeight: '30px',
    tablet: {
        lineHeight: '26px',
        size: 15
    },
    small: {
        lineHeight: '28px',
        size: 16
    },
    large: {
        lineHeight: '35px',
        size: 20
    },
}

export const richTextFirstParagraphStyle = {
    weight: 300,
    size: 22,
    lineHeight: '30px',
    tablet: {
        size: 24,
        lineHeight: '32px'
    },
    small: {
        size: 28,
        lineHeight: '38px'
    },
    large: {
        size: 35,
        lineHeight: '47px'
    }
}

export const customPageDescription = {
    child: [
        {
            selector: 'p',
            ...richTextParagraphStyle
        },
        {
            selector: '> p:first-child',
            ...richTextFirstParagraphStyle
        }
    ]
}
