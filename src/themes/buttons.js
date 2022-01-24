import {
    absolute,
    auto,
    borderBox,
    center,
    flexStart,
    inlineFlex,
    none,
    pointer,
    relative,
    uppercase,
    white
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const largeButtonStyle = {
    color: globals.colors.textColor,
    padding: '16px 20px',
    backgroundColor: '#DCDCDC',
    font: globals.fonts.heading,
    fontWeight: 700,
    fontSize: 15,
    textTransform: uppercase,
    textDecoration: none,
    border: none,
    cursor: pointer,
    lineHeight: 1,
    display: inlineFlex,
    width: 'fit-content',
    hover: {
        color: globals.colors.textColor,
        backgroundColor: white,
    },
}

export const smallButtonStyle = {
    font: globals.fonts.heading,
    color: globals.colors.green,
    fontSize: 13,
    fontWeight: 500,
    textDecoration: none,
    textTransform: uppercase,
    border: 0,
    cursor: pointer,
    lineHeight: 1,
    display: inlineFlex,
    alignItems: center,
    letterSpacing: globals.style.headingLetterSpacing,
    tablet: {
        fontSize: 12,
    },
    small: {
        fontSize: 13,
    },
    large: {
        fontSize: 14
    },
    hover: {
        color: globals.colors.black,
        child: {
            selector: '> svg',
            color: globals.colors.black
        }
    },
    icon: {
        size: 8,
        marginLeft: 17,
        marginTop: -1,
        color: globals.colors.green,
        backgroundColor: white,
        transform: 'rotate(90deg)',
        mobile: {
            marginLeft: 22,
            marginTop: -2,
        },
        tablet: {
            size: 5,
            marginLeft: 12
        },
        small: {
            size: 6,
            marginTop: -2,
        },
        large: {
            size: 7,
            marginLeft: 17,
            marginTop: -1,
        }
    },
}

export const moreButtonStyle = {
    position: relative,
    alignSelf: flexStart,
    justifyContent: center,
    alignItems: center,
    color: globals.colors.green,
    weight: 400,
    textTransform: uppercase,
    size: 13,
    letterSpacing: 3,
    background: none,
    margin: 0,
    padding: 0,
    tablet: {
        fontSize: 10
    },
    small: {
        fontSize: 11,
    },
    large: {
        fontSize: 13,
    },
    hover: {
        background: none
    },
    icon: {
        position: absolute,
        top: 2,
        transform: 'rotate(90deg)',
        size: 8,
        marginLeft: 22,
        tablet: {
            size: 6,
            top: 1,
            marginLeft: 14,
        },
        small: {
            size: 6,
            top: 2,
            marginLeft: 18,
        },
        large: {
            size: 8,
            marginLeft: 22,
            top: 2
        }
    }
}

export const searchButton = {
    backgroundColor: globals.colors.darkGreen,
    color: white,
    weight: 400,
    lineHeight: '13px',
    letterSpacing: '3px',
    size: 13,
    height: 60,
    minWidth: 137,
    width: auto,
    display: inlineFlex,
    alignItems: center,
    justifyContent: center,
    alignSelf: flexStart,
    padding: '0 25px',
    marginTop: 20,
    boxSizing: borderBox,
    tablet: {
        marginTop: 0,
        minWidth: 157,
        width: auto,
        alignSelf: flexStart,
        padding: '0 30px',
        height: 60
    },
    icon: {
        display: none
    },
    hover: {
        backgroundColor: globals.colors.lightGreen,
        color: white,
    }

}