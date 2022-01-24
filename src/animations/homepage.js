import {
    LAYOUT_LARGE,
    LAYOUT_SMALL,
    LAYOUT_TABLET
}                             from '../utils/getLayout'
import {absolute}             from '../utils/themer'
import {breakpointUpperLimit} from '../variables/styles'

const cdnLocation = process.env.REACT_APP_CDN_LOCATION

/**
 * The homepage animation consists of 3 groups of 3 items. Each group has 1 video and 2 images.
 * Every time the homepage is loaded, the order of the groups within the animation is randomized.
 * The first group always begins with a full-screen video that then is clipped down.
 * The last group always stops while still on screen.
 * Because of this behavior we have to define, for each element, the properties for each condition.
 *
 * Since this animation also has to be responsive, we can dynamically scale the sizes and positions.
 * Also, the vertical positioning of each element is based on a percentage of the screen height,
 * not a set pixel value. This means we don't have to define responsive values for that.
 */

/**
 * Define standard transition values of moving elements
 */
const enterTransition = {
    duration: .6,
    ease: [.3, 0, .3, 1]
}
const slowTransition = {
    duration: 7.17,
    ease: [.37, .47, .42, .15]
}
const exitTransition = {
    duration: .67,
    ease: [.6, 0, 1, .7]
}

/**
 * The vertical positioning of each element is a percentage of the height of the screen. This can cause issues when
 * the screen is more vertical, as elements will appear too spaced out. So, we constrain the height of the stage.
 */
const constrainedStageHeight = Math.min(window.innerHeight, window.innerWidth * .7)

/**
 * This function applies the animation variants to each moving element on the screen.
 * Values are relative to the top of the element.
 *
 * The `enter` and `slow` arguments represent the target position for each of these transitions.
 * The value is the distance from the top of the page, given as a fraction of the viewport.
 * Example: `enter` = .3, `slow` = .15 -- This means that the `enter` animation will end when the element reaches 30%
 * from the top of the screen. Then, the `slow` animation will occur until the element reaches 15%.
 *
 * The `exit` argument represents the distance above the viewport, in pixels, where the top of the element will stop.
 *
 * Since each animation lasts for a set amount of time, the distance traveled between transitions affects its speed.
 * Setting different distances between these points for each element gives the effect of staggered movement.
 *
 * @param {number} enter
 * @param {number} slow
 * @param {number|boolean} exit
 * @returns {object}
 */
const imgVariants = (enter, slow, exit = false) => ({
    initial: {
        y: 10000
    },
    ready: {
        y: window.innerHeight
    },
    enter: {
        y: constrainedStageHeight * enter,
        transition: enterTransition
    },
    slow: {
        y: constrainedStageHeight * slow,
        transition: slowTransition
    },
    exit: {
        y: (exit && -exit) || null,
        transition: exitTransition
    }
})

/**
 * This theme is reused for each video.
 */
const firstVideoTheme = {
    position: absolute,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    child: {
        selector: 'video',
        objectFit: 'fill'
    },
    inner: {
        position: absolute,
        left: 0,
        width: 1920,
        height: 1024
    },
    fallback: {
        width: 0,
        height: constrainedStageHeight,
        background: 'black',
        position: absolute,
        right: 0
    }
}

/**
 * This is the max width of the stage when viewing at large desktop.
 * All of the base values are based on this layout.
 * The responsive values for tablet and small desktop are scaled according to this.
 */
const stageMaxWidth = 1680

/**
 * This function is used to scale a given value based on the layout.
 * This can be used anywhere within the homepage animation for a pixel value.
 *
 * @param {number} val
 * @param {string|null} layout
 * @returns {number}
 */
export const adaptResponsive = (val, layout = null) => {
    let scale = 1

    if (layout === LAYOUT_TABLET)
        scale = breakpointUpperLimit.mobile / stageMaxWidth
    else if (layout === LAYOUT_SMALL)
        scale = breakpointUpperLimit.tablet / stageMaxWidth

    return Math.round(val * scale)
}

/**
 * Defining the constants used to identify the elements within the animation.
 */
const SWIMMER = 'SWIMMER',
    LION = 'LION',
    HURDLE = 'HURDLE',
    HORSE = 'HORSE',
    GIRL = 'GIRL',
    FLEX = 'FLEX',
    FIREBREATHER = 'FIREBREATHER',
    MOON = 'MOON',
    RACECAR = 'RACECAR'

/**
 * Defining the groups of elements that will appear together.
 */
const groupConfig = [
    {
        video: SWIMMER,
        image1: LION,
        image2: HURDLE
    },
    {
        video: HORSE,
        image1: FLEX,
        image2: MOON
    },
    {
        video: RACECAR,
        image1: GIRL,
        image2: FIREBREATHER
    }
]

/**
 * Defining all of the individualized configuration values for each element.
 * These contain general values that are consistent with all instances, as well as values that change depending
 * on where in the sequence each element's group appears.
 */
const valueConfig = {
    [SWIMMER]: {
        filename: 'video_swimmer.mp4',
        filenameLarge: 'video_swimmer_full.mp4',
        width: 1064,
        height: 764,
        group1: {
            rightClip: 1525,
            leftClip: 460
        },
        group2: {
            left: 470,
            variants: imgVariants(.00, -.15, 765),
        },
        group3: {
            left: 470,
            variants: imgVariants(.15, -.1),
        }
    },

    [LION]: {
        filename: 'home-lion.jpg',
        width: 585,
        height: 450,
        group1: {
            left: 1095,
            variants: imgVariants(.40, .21, 450),
        },
        group2: {
            left: 1095,
            variants: imgVariants(.40, .21, 450),
        },
        group3: {
            left: 1095,
            variants: imgVariants(.45, .18)
        }
    },

    [HURDLE]: {
        filename: 'home-man-jumping.jpg',
        width: 700,
        height: 450,
        group1: {
            left: 590,
            variants: imgVariants(.71, .41, 450),
        },
        group2: {
            left: 590,
            variants: imgVariants(.71, .41, 450),
        },
        group3: {
            left: 590,
            variants: imgVariants(.8, .48)
        }
    },

    [RACECAR]: {
        filename: 'video_car.mp4',
        filenameLarge: 'video_car_full.mp4',
        width: 895,
        height: 666,
        group1: {
            rightClip: 1680,
            leftClip: 640
        },
        group2: {
            left: 785,
            variants: imgVariants(.10, -.10, 774)
        },
        group3: {
            left: 785,
            variants: imgVariants(.1, -.05)
        }
    },

    [GIRL]: {
        filename: 'home-girl.jpg',
        width: 470,
        height: 700,
        group1: {
            left: 470,
            variants: imgVariants(.34, .07, 700),
        },
        group2: {
            left: 470,
            variants: imgVariants(.24, -.03, 700),
        },
        group3: {
            left: 470,
            variants: imgVariants(.32, .06)
        }
    },

    [FIREBREATHER]: {
        filename: 'home-fire-breather.jpg',
        width: 660,
        height: 425,
        group1: {
            left: 825,
            variants: imgVariants(.6, .33, 425)
        },
        group2: {
            left: 825,
            variants: imgVariants(.7, .47, 425)
        },
        group3: {
            left: 825,
            variants: imgVariants(.5, .27)
        }
    },

    [HORSE]: {
        filename: 'video_horse.mp4',
        filenameLarge: 'video_horse_full.mp4',
        width: 940,
        height: 568,
        group1: {
            rightClip: 1525,
            leftClip: 460
        },
        group2: {
            left: 740,
            variants: imgVariants(.15, -.05, 643),
        },
        group3: {
            left: 740,
            variants: imgVariants(.2, 0),
        }
    },

    [MOON]: {
        filename: 'home-astrounaut.jpg',
        width: 585,
        height: 425,
        group1: {
            left: 1095,
            variants: imgVariants(.36, .14, 425),
        },
        group2: {
            left: 970,
            variants: imgVariants(.67, .29, 425),
        },
        group3: {
            left: 970,
            variants: imgVariants(.75, .38)
        }
    },

    [FLEX]: {
        filename: 'home-woman-flex.jpg',
        width: 550,
        height: 640,
        group1: {
            left: 605,
            variants: imgVariants(.65, .44, 640),
        },
        group2: {
            left: 500,
            variants: imgVariants(.31, .1, 640),
        },
        group3: {
            left: 465,
            variants: imgVariants(.29, -.02)
        }
    }
}

/**
 * These are variants for non-dynamic animated elements on the page.
 */
export const variantConfig = {
    description: {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 2.85,
                ease: 'easeOut',
                duration: .8
            }
        }
    },
    button: {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 3.1,
                ease: 'easeOut',
                duration: .8
            }
        }
    }
}

/**
 * This function uses the configured values of a given element to dynamically populate the theme object
 * which is then passed to the element. This is all-purpose for both videos and images, so not all theme
 * values are used for a given element.
 *
 * @param {string} element
 * @returns {object}
 */
const getElementTheme = element => ({
    position: absolute,
    width: adaptResponsive(valueConfig[element].width, LAYOUT_TABLET),
    height: adaptResponsive(valueConfig[element].height, LAYOUT_TABLET),
    class: [
        {
            name: 'first-group',
            left: adaptResponsive(valueConfig[element].group1.left, LAYOUT_TABLET),
            small: {
                left: adaptResponsive(valueConfig[element].group1.left, LAYOUT_SMALL)
            },
            large: {
                left: adaptResponsive(valueConfig[element].group1.left, LAYOUT_LARGE)
            }
        },
        {
            name: 'second-group',
            left: adaptResponsive(valueConfig[element].group2.left, LAYOUT_TABLET),
            small: {
                left: adaptResponsive(valueConfig[element].group2.left, LAYOUT_SMALL)
            },
            large: {
                left: adaptResponsive(valueConfig[element].group2.left)
            }
        },
        {
            name: 'third-group',
            left: adaptResponsive(valueConfig[element].group3.left, LAYOUT_TABLET),
            small: {
                left: adaptResponsive(valueConfig[element].group3.left, LAYOUT_SMALL)
            },
            large: {
                left: adaptResponsive(valueConfig[element].group3.left)
            }
        }
    ],
    small: {
        width: adaptResponsive(valueConfig[element].width, LAYOUT_SMALL),
        height: adaptResponsive(valueConfig[element].height, LAYOUT_SMALL),
    },
    large: {
        width: adaptResponsive(valueConfig[element].width),
        height: adaptResponsive(valueConfig[element].height),
    },
    child: {
        selector: 'div',
        height: '100%'
    },
    first: firstVideoTheme
})

/**
 * This function generates the animation variants for a given video element when it appears within the first group.
 *
 * @param {string} element
 * @returns {object}
 */
const getVideoVariants = element => ({
    initial: {
        opacity: 0,
        clip: `rect(auto, ${window.innerWidth}px, auto, 0px)`
    },
    fade: {
        opacity: 1,
        transition: {
            duration: 2,
            ease: 'easeIn'
        }
    },
    enter: layout => ({
        y: constrainedStageHeight * -.15,
        clip: `rect(auto, ${adaptResponsive(valueConfig[element].group1.rightClip, layout)}px, auto, ${adaptResponsive(valueConfig[element].group1.leftClip, layout)}px)`,
        transition: {
            duration: 1.16
        }
    }),
    slow: {
        y: constrainedStageHeight * -.30,
        transition: slowTransition
    },
    exit: {
        y: constrainedStageHeight * -1,
        transition: exitTransition
    },
    fallback: layout => ({
        width: window.innerWidth - adaptResponsive(valueConfig[element].group1.rightClip, layout),
        transition: {
            delay: 2,
            duration: 1.16,
        }
    })
})

/**
 * This function collects all of the computed values for each group into a standardized object.
 */
export const assetConfig = index => ({
    video: {
        src: cdnLocation + valueConfig[groupConfig[index].video].filename,
        srcFullscreen: cdnLocation + valueConfig[groupConfig[index].video].filenameLarge,
        width: valueConfig[groupConfig[index].video].width,
        height: valueConfig[groupConfig[index].video].height,
        theme: getElementTheme(groupConfig[index].video),
        variants: {
            group1: getVideoVariants(groupConfig[index].video),
            group2: valueConfig[groupConfig[index].video].group2.variants,
            group3: valueConfig[groupConfig[index].video].group3.variants,
        }
    },
    image1: {
        src: cdnLocation + valueConfig[groupConfig[index].image1].filename,
        theme: getElementTheme(groupConfig[index].image1),
        variants: {
            group1: valueConfig[groupConfig[index].image1].group1.variants,
            group2: valueConfig[groupConfig[index].image1].group2.variants,
            group3: valueConfig[groupConfig[index].image1].group3.variants
        }
    },
    image2: {
        src: cdnLocation + valueConfig[groupConfig[index].image2].filename,
        theme: getElementTheme(groupConfig[index].image2),
        variants: {
            group1: valueConfig[groupConfig[index].image2].group1.variants,
            group2: valueConfig[groupConfig[index].image2].group2.variants,
            group3: valueConfig[groupConfig[index].image2].group3.variants
        }
    }
})

/**
 * Sequences the trigger of each animated object's standard variants
 *
 * @param {function} control
 * @param {boolean} isLast
 * @returns {Promise<void>}
 */
export const sequencer = async (control, isLast = false) => {
    await control.set('ready')
    await control.start('enter')
    await control.start('slow')
    !isLast && await control.start('exit')
}