import {
    LAYOUT_SMALL,
    LAYOUT_TABLET
} from '../utils/getLayout'

/**
 * Background
 */

export const backgroundVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    personIn: {
        opacity: 1,
        transition: {
            duration: 0
        }
    },
    out: {
        opacity: 0.99,
        transition: {
            duration: 1.5
        }
    },
    instantOut: {
        opacity: 0,
        transition: {
            duration: 0
        }
    },
    personSub: layout => {
        if (layout === LAYOUT_TABLET)
            return {
                width: 1747 * .67,
                height: 1092 * .67,
                y: -30,
                x: 20,
                transition: {
                    duration: .5
                }
            }
        if (layout === LAYOUT_SMALL)
            return {
                width: 1747 * .85,
                height: 1092 * .85,
                y: -32,
                x: 50,
                transition: {
                    duration: .5
                }
            }
        else {
            return {
                width: 1747,
                height: 1092,
                y: 0,
                x: 120,
                transition: {
                    duration: .5
                }
            }
        }

    },
    personMain: layout => {
        if (layout === LAYOUT_TABLET)
            return {
                width: 1978 * .63,
                height: 1236 * .63,
                x: -85,
                y: 0,
                transition: {
                    duration: .5
                }
            }
        if (layout === LAYOUT_SMALL)
            return {
                width: 1978 * .8,
                height: 1236 * .8,
                x: -35,
                y: 0,
                transition: {
                    duration: .5
                }
            }
        else
            return {
                width: 1978,
                height: 1236,
                x: 0,
                y: 0,
                transition: {
                    duration: .5
                }
            }
    },
    default: {
        width: '100%',
        height: 'auto',
    }
}
