import {
    absolute,
    block,
    borderBox,
    center,
    flex,
    hidden,
    none,
    pointer,
    uppercase,
    white,
    wrap
}                from '../utils/themer'
import {globals} from '../variables/styles'

/**
 *
 *     PREDICTIVE SEARCH
 *
 */

export const predictiveHeadingStyle = {
    backgroundColor: '#848484',
    color: white,
    cursor: 'default',
    textTransform: uppercase,
    size: 16,
    weight: 500,
    lineHeight: '19px',
    fontFamily: globals.fonts.heading,
    padding: '11px 10px 10px'
}

export const predictivePersonStyle = {
    display: flex,
    padding: '10px 9px',
    overflow: hidden,
    boxSizing: borderBox,
    size: 16,
    lineHeight: 1.3,
    borderBottom: globals.style.dividingBorder,
    backgroundColor: white,
    cursor: pointer,
    alignItems: center,
    class: {
        name: 'active',
        backgroundColor: globals.colors.green,
        color: white,
        child: {
            selector: 'div',
            color: white
        }
    },
    image: {
        marginRight: 10,
        width: 60,
        height: 60,
        flexShrink: 0,
        borderRadius: 30
    },
    content: {
        display: flex,
        flexShrink: 1,
        alignItems: center,
        flexWrap: wrap
    },
    name: {
        color: globals.colors.linkColor,
        width: '100%',
        wordBreak: 'break-word',
        weight: 700
    },
    title: {
        color: globals.colors.textColor
    }
}

export const predictivePracticeStyle = {
    weight: 400,
    color: globals.colors.linkColor,
    backgroundColor: white,
    lineHeight: 1.5,
    display: block,
    padding: '9px 12px',
    borderBottom: globals.style.dividingBorder,
    cursor: pointer,
    size: 15,
    class: {
        name: 'active',
        backgroundColor: globals.colors.lightGray
    },
}

export const predictiveViewAllStyle = {
    ...predictivePracticeStyle,
    background: '#848484',
    color: white,
    height: 80,
    width: '100%',
    border: none,
    padding: '20px 15px',
    boxSizing: borderBox,
    borderBottom: `1px solid ${globals.colors.black}`,
    icon: {
        color: white,
        position: absolute,
        right: 13,
        bottom: 13,
        size: 18
    }
}