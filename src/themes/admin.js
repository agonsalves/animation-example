import {
    absolute,
    borderBox,
    column,
    flex,
    hidden,
    none,
    pointer,
    relative,
    row
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const adminBarStyles = {
    size: 13,
    weight: 400,
    lineHeight: '32px',
    width: '100%',
    height: 32,
    color: '#ccc',
    backgroundColor: '#23282d',
    display: flex,
    flexDirection: row,
    position: 'fixed',
    zIndex: 9999,
    child: [
        {
            selector: 'a',
            color: '#ccc',
            padding: '0 8px 0 7px',
            hover: {
                color: '#00a0d2',
                backgroundColor: '#32373c'
            }
        },
        {
            selector: '~ .page-frame .floating-logo img',
            tablet: {
                marginTop: 18
            },
            small: {},
            large: {
                marginTop: 36
            },
            ieTablet: {
                marginTop: -32,
            },
            ieSmall: {
                marginTop: -32,
            },
            ieLarge: {
                marginTop: -32,
            }
        }
    ],
    spacer: {
        height: 32,
        width: '100%',
        print: {
            display: none
        }
    },
    logOut: {
        marginLeft: 'auto',
        marginRight: 20,
        hover: {
            cursor: pointer
        }
    },
    dashboard: {
        minWidth: 180
    },
    subMenu: {
        position: absolute,
        display: none,
        flexDirection: column,
        backgroundColor: globals.colors.adminBarColor,
        marginTop: 0,
        padding: 0
    },
    subMenuContainer: {
        position: relative,
        overflow: hidden,
    },
    link: {
        marginRight: 10,
        paddingRight: 5,
        hover: {
            background: '#32373c',
            color: '#00b9eb',
            cursor: pointer,
            child: {
                selector: '> ul',
                display: flex
            }
        },
        child: {
            selector: '> span',
            padding: 5,
            boxSizing: borderBox,
        }
    },
    icon: {
        size: 16,
        marginLeft: 5,
        color: '#87898C'
    },
    print: {
        display: none
    }
}