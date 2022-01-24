import {
    absolute,
    borderBox,
    inlineBlock,
    none,
    pointer,
    relative,
    transparent,
    white
}                from '../utils/themer'
import {globals} from '../variables/styles'

/**
 *
 *     FORMS & FIELDS
 *
 */
export const defaultFieldStyle = {
    display: inlineBlock,
    position: relative,
    border: none,
    height: 50,
    width: '100%',
    padding: '0 35px 0 23px',
    margin: 0,
    font: globals.fonts.heading,
    fontSize: 15,
    fontWeight: 600,
    textOverflow: 'ellipsis',
    backgroundColor: transparent,
    color: globals.colors.black,
    boxSizing: borderBox,
    webkitAppearance: none,
    letterSpacing: none,
    zIndex: 1,
    placeholder: {
        color: transparent,
        textTransform: none,
    },
    icon: {
        color: globals.colors.darkGray,
        position: absolute,
        top: 0,
        right: 20,
        height: '100%',
        marginRight: 0,

    },
    fieldOuter: {
        position: relative
    }
}

export const defaultInputLabelStyle = {
    position: absolute,
    left: 23,
    zIndex: 0,
    transform: 'translate(0, 22px) scale(1)',
    color: globals.colors.placeholderColor,
    weight: 300,
    transition: 'color 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms, ' +
        'transform 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms',
    transformOrigin: 'top left',
    pointerEvents: none,
    size: 18,
    tablet: {
        size: 18,
    },
    small: {
        size: 18,
    },
    large: {
        size: 18,
        left: 22,
    },
    ie: {
        zIndex: 1
    }
}

export const defaultLegendStyle = {
    marginLeft: 17,
    padding: 0,
    transition: 'width 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms',
    ie: {
        position: absolute,
        height: 20,
        top: -11,
        zIndex: 0,
        backgroundColor: white
    }
}

export const focusedInputLabelStyle = {
    transform: `translate(0, -4px) scale(${globals.style.inputLabelShrinkRatio})`,
    color: globals.colors.black,
    top: -3,
    tablet: {},
    small: {},
    large: {
        top: -3
    }
}

export const defaultFieldsetStyle = {
    position: relative,
    padding: 0,
    margin: 0,
    border: `2px solid ${globals.colors.borderColor}`,
    transition: 'padding-left 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms, ' +
        'border-width 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms'
}

export const filterFieldStyle = {
    cursor: pointer,
    height: 60,
    weight: 300,
    backgroundColor: transparent,
    width: 300,
    size: 18,
    placeholder: {
        color: transparent,
    },
    tablet: {
        size: 16,
        height: 50,
        width: 171
    },
    small: {
        width: 254,
        size: 17,
        height: 55
    },
    large: {
        width: 317,
        size: 18,
        lineHeight: '22px',
        height: 60
    },
    icon: {
        color: globals.colors.black,
        height: '100%',
        marginRight: 20,
        pointerEvents: none,
        position: absolute,
        right: 0,
        top: 0,
        size: 32,
        zIndex: 1,
        tablet: {},
        small: {},
        large: {
            size: 40
        }
    },
    wrapper: {
        position: relative,
        display: inlineBlock,
        mobile: {
            marginBottom: 10
        },
        print: {
            display: none
        },
        firstOfType: {
            tablet: {
                marginRight: 18
            },
            small: {
                marginRight: 20
            },
            large: {
                marginRight: 24
            }
        }
    },
    datalistItemStyle: {
        width: '100%',
        tablet: {
            width: '100%'
        },
        small: {
            width: '100%'
        },
        large: {
            width: '100%'
        },
    },
    inputLabel: {
        transform: 'translate(0,21px) scale(1)',
        size: 18,
        tablet: {
            transform: 'translate(0,17px) scale(1)',
            size: 16
        },
        small: {
            transform: 'translate(0,19px) scale(1)',
            size: 17
        },
        large: {
            transform: 'translate(0,21px) scale(1)',
            size: 18
        }
    }
}