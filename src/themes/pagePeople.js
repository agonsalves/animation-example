import {
    absolute,
    block,
    borderBox,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    none,
    pointer,
    relative,
    transparent,
    uppercase,
    white,
    wrap
}                           from '../utils/themer'
import {globals}            from '../variables/styles'
import {searchButton}       from './buttons'
import {defaultLegendStyle} from './forms'

/**
 *
 *     PEOPLE SEARCH INTERFACE
 *
 */

export const peopleSearchForm = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: globals.colors.black,
        position: relative,
        minHeight: 'calc(100vh - 80px)',
        mobile: {
            backgroundColor: white,
        },
        tablet: {
            justifyContent: flexEnd
        },
        print: {
            display: none
        }
    },
    inner: {
        display: flex,
        flexDirection: column,
        tablet: {
            maxWidth: 380
        },
        small: {
            maxWidth: 500
        },
        large: {
            maxWidth: 606
        },
        child: [
            {
                selector: '> h3',
                order: 1
            },
            {
                selector: '> div',
                order: 2,
                tablet: {
                    order: 4
                }
            },
            {
                selector: '> form',
                order: 3,
                tablet: {
                    flexDirection: column
                },
                small: {
                    flexDirection: 'row'
                }
            },
        ],
    },
    form: {
        width: '100%',
        display: flex,
        alignItems: flexStart,
        position: relative,
        mobile: {
            border: none,
            flexDirection: column,
            marginTop: 30,
            paddingTop: 40,
        },
        tablet: {},
        before: {
            mobile: {
                content: '\' \'',
                width: '100%',
                height: 1,
                backgroundColor: globals.colors.borderColor,
                left: 0,
                top: 0,
                position: absolute
            }
        },

    },
    formInner: {
        flexGrow: 1,
        boxSizing: borderBox,
        mobile: {
            width: '100%',
        },
        tablet: {
            width: '100%'
        },
        child: {
            selector: '> div:last-child > div',
            marginBottom: 0
        }
    },
    firstField: {
        tablet: {
            backgroundColor: transparent,
            color: white
        },
        placeholder: {
            color: transparent
        },
        icon: {
            size: 18,
            tablet: {
                display: none
            },
        }
    },
    field: {
        border: none,
        height: 60,
        size: 18,
        weight: 400,
        tablet: {
            border: none,
            backgroundColor: transparent,
            color: white,
        },
        lastChild: {
            marginBottom: 0
        },
        clearIcon: {
            fontSize: 24,
            right: 18,
            color: globals.colors.lightGreen,
        },
        placeholder: {
            color: transparent,
            weight: 400,
            size: 18,
        },
        focusedInputLabelStyle: {
            tablet: {
                color: white
            }
        },
        inputLabel: {
            transform: 'translate(0,21px) scale(1)',
            size: 18,
            tablet: {
                color: white
            },
        },
        legend: {
            ie: {
                ...defaultLegendStyle.ie,
                backgroundColor: globals.colors.black
            }
        }
    },
    buttonWrapper: {
        flexDirection: 'row',
        small: {
            flexDirection: column,
        },
    },
    reset: {
        marginTop: 0,
        marginLeft: 19,
        alignItems: center,
        justifyContent: center,
        minWidth: 157,
        small: {
            marginTop: 18,
        }
    },
    button: {
        ...searchButton,
        mobile: {
            marginLeft: 0,
            marginBottom: 70,
            marginTop: 0
        },
        tablet: {
            ...searchButton.tablet,
            height: 64
        },
        small: {
            ...searchButton.small,
            marginLeft: 19,
        }
    },
    toggle: {
        icon: {}
    },
    alphabet: {
        mobile: {
            marginTop: 22
        },
        tablet: {
            borderTop: '1px solid #4E4E4E',
            paddingTop: 40,
            marginTop: 27,
            marginBottom: 10
        },
        small: {
            paddingTop: 55,
            marginTop: 42,
            marginBottom: 25
        },
        large: {
            paddingTop: 60,
            marginTop: 47,
            marginBottom: 30
        },
        viewAll: {
            textTransform: uppercase,
            icon: {
                display: none
            }
        },
        child: [
            {
                selector: '> span',
                opacity: .5,
                hover: {
                    opacity: .5,
                    after: {
                        content: none
                    }
                }
            }
        ]
    },
    subHeader: {
        display: none,
        margin: 0,
        mobile: {
            display: block,
            marginTop: 33,
            size: 30,
            lineHeight: '37px'
        }
    },
    header: {
        color: white,
        backgroundColor: globals.colors.black,
        margin: 0,
        size: 42,
        weight: 900,
        lineHeight: '42px',
        height: 100,
        display: flex,
        flexDirection: column,
        alignItems: flexStart,
        position: relative,
        flexShrink: 0,
        mobile: {
            display: none,
            paddingLeft: 25,
            justifyContent: center,
            zIndex: 0
        },
        tablet: {
            size: 42,
            marginBottom: -16,
            marginTop: 70
        },
        small: {
            size: 48,
            marginBottom: -13,
            marginTop: 80
        },
        large: {
            marginBottom: 0,
            size: 54,
            lineHeight: '65px',
            marginTop: 100
        },
        print: {
            color: globals.colors.black
        }
    },
    headerOverlay: {
        position: absolute,
        top: 0,
        background: 'linear-gradient(0deg,#222222 76%,rgba(34,34,34,0.27) 90%,rgba(34,34,34,0) 100%)',
        transform: 'rotate(180deg)',
        transformOrigin: center,
        width: '100%',
        height: 80,
        zIndex: 2,
        mobile: {
            display: none
        },
        small: {
            height: 90,
        },
        large: {
            height: 100,
        }
    },
    advancedSearch: {
        color: white,
        display: flex,
        alignItems: center,
        weight: 300,
        cursor: pointer,
        large: {
            size: 20,
            lineHeight: '35px'
        },
        hover: {
            color: globals.colors.lightGreen,
            child: {
                selector: 'svg',
                color: globals.colors.lightGreen
            }
        },
        icon: {
            color: globals.colors.lightGreen,
            tablet: {
                size: 25,
                marginRight: 7
            },
            small: {
                size: 30,
                marginRight: 10
            },
            large: {
                size: 35,
                marginRight: 13
            },
        }
    }
}

export const alphabetFilterStyle = {
    display: flex,
    flexWrap: wrap,
    letter: {
        display: flex,
        justifyContent: center,
        alignItems: center,
        height: 35,
        width: 35,
        margin: 5,
        boxSizing: borderBox,
        font: globals.fonts.heading,
        fontSize: 17,
        color: white,
        textDecoration: none,
        backgroundColor: globals.colors.green,
        position: relative,
        zIndex: 0,
        hover: {
            color: white,
            after: {
                tablet: {
                    content: '\' \''
                },
            }
        },
        after: {
            content: none,
            backgroundColor: globals.colors.lightGreen,
            position: absolute,
            zIndex: -1,

            tablet: {
                height: 24,
                width: 24,
                borderRadius: 12,
                top: -5,
                left: -5,
            },
            small: {
                height: 33,
                width: 33,
                borderRadius: 17,
                top: -6,
                left: -6,
            },
            large: {
                height: 44,
                width: 44,
                borderRadius: 22,
                top: -9,
                left: -9,
            }
        },
        tablet: {
            height: 15,
            width: 15,
            size: 13,
            margin: '7px 15px 7px 0',
            backgroundColor: transparent
        },
        small: {
            height: 20,
            width: 20,
            size: 14,
            margin: '7px 20px 7px 0',
        },
        large: {
            height: 25,
            width: 25,
            size: 15,
            margin: '9px 23px 9px 0',
        },
        nthChild: {
            param: '13n',
            tablet: {
                marginRight: 0
            },
            small: {
                marginRight: 0
            },
            large: {
                marginRight: 0
            }
        },
    },
    viewAll: {
        mobile: {
            size: 11,
            textTransform: uppercase,
            lineHeight: '15px',
            letterSpacing: '.3px',
            padding: '0 15px',
            backgroundColor: globals.colors.green,
        },
        tablet: {
            size: 16,
            backgroundColor: transparent
        },
        small: {
            size: 18
        },
        large: {
            size: 20,
            lineHeight: '35px'
        },
        hover: {
            color: white,
            tablet: {
                color: globals.colors.lightGreen
            },
            after: {
                content: none
            }
        },
        icon: {
            tablet: {
                transform: 'rotate(90deg)',
                size: 8,
                marginLeft: 30
            }
        }
    }
}