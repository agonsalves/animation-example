import {
    absolute,
    auto,
    black,
    block,
    center,
    hidden,
    none,
    pointer,
    relative,
    transparent,
    white
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const datalistFieldStyle = {
    cursor: pointer,
    placeholder: {
        color: transparent
    }
}

export const datalistFieldIconStyle = {
    position: absolute,
    right: 20,
    top: 0,
    height: '100%',
    size: 36,
    margin: 0,
    padding: 0,
    pointerEvents: none,
    color: globals.colors.darkGray,
}

export const datalistPersonFieldIconStyle = {
    ...datalistFieldIconStyle,
    color: white,
    transform: 'rotate(180deg)',
    transformOrigin: center,
    size: 8,
    mobile: {
        color: globals.colors.darkGray
    }
}

export const datalistClearIconStyle = {
    ...datalistFieldIconStyle,
    pointerEvents: auto,
    cursor: pointer,
    size: 25,
    zIndex: 2,
    color: globals.colors.green
}

export const datalistItemStyle = {
    display: block,
    padding: '5px 26px 5px 70px',
    color: globals.colors.textColor,
    size: 14,
    lineHeight: 1.3,
    backgroundColor: white,
    cursor: pointer,
    position: relative,
    before: {
        content: '" "',
        height: 1,
        width: 8,
        background: black,
        display: block,
        position: absolute,
        top: 14,
        left: 50
    },
    class: [
        {
            name: 'child',
        },
        {
            name: 'parent',
            padding: '9px 26px',
            lineHeight: 1.5,
            borderLeft: '1px solid #e5e5e5',
            size: 15,
            before: {
                content: none,
            }
        },
        {
            name: 'active',
            backgroundColor: globals.colors.lightGray,
            before: {
                backgroundColor: white
            }
        },
        {
            name: 'disabled',
            color: globals.colors.gray
        }
    ]
}

/**
 * These are styles for the autosuggest component. They are imported via the pageframe style object
 * because it's not possible to attach them directly to the component through our theming system.
 *
 * New classes can be passed to the autosuggest component, which can then be referenced here.
 * Details: https://github.com/moroshko/react-autosuggest#theme-optional
 *
 * The field and datalist items are implemented via stylable components, so their styles are handled elsewhere.
 */
export const autosuggestStyles = {
    child: [
        {
            selector: '.react-autosuggest__suggestions-list',
            padding: 0,
            margin: 0,
            listStyle: none
        },
        {
            selector: '.react-autosuggest__suggestions-container',
            position: absolute,
            width: '100%',
            zIndex: 9,
            maxHeight: 355,
            overflowX: hidden,
            display: none,
            borderBottom: `1px solid ${globals.colors.borderColor}`
        },
        {
            selector: '#react-autowhatever-job-openings-location, #react-autowhatever-job-openings-position',
            width: '100%'
        },
        {
            selector: '.react-autosuggest__suggestions-container--open',
            display: block
        },
        {
            selector: '#react-autowhatever-practice_area',
            child: {
                selector: '.heading',
                paddingLeft: 26
            }
        },
        {
            selector: '.react-autosuggest__container',
            position: relative,
            alignItems: center
        },
        {

            selector: '.react-autosuggest__container--open',
            child: {
                selector: '> svg',
                transform: 'rotate(0)'
            }
        },
        {
            position: relative,
            selector: '.react-autosuggest__suggestion',
            border: `1px solid #e5e5e5`,
            borderTop: 0,
            borderBottom: 0,
        },
        {
            selector: '.react-autosuggest__suggestion--highlighted',
            borderColor: globals.colors.darkGreen,
            child: {
                selector: 'div',
                backgroundColor: globals.colors.darkGreen,
                borderColor: globals.colors.darkGreen,
                color: white
            },
            hover: {
                borderColor: globals.colors.darkGreen,
                child: {
                    selector: 'div',
                    backgroundColor: globals.colors.darkGreen,
                    borderColor: globals.colors.darkGreen,
                    color: white
                }
            },
        }
    ]
}