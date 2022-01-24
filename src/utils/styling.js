/**
 * Converts a Font Awesome icon object into a url string that can be used to populate before & after pseudo-elements
 *
 * @param {object} icon
 * @param {string} color
 * @returns {string}
 */
export const iconToData = ({icon}, color = 'currentColor') =>
    `url("data:image/svg+xml,${encodeURIComponent(`<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${icon[0]} ${icon[1]}"><path fill="${color}" d="${icon[4]}"></path></svg>`)}")`

/**
 * Helper function for iconInSolidCircle and iconInCircle.
 * Iterates through a config object and builds the style object for all declared breakpoints
 *
 * @param {object} config
 * @param {function} common
 * @returns {object}
 */
const breakpointStyles = (config, common) => {
    const breakPoints = [
        'mobile',
        'tablet',
        'small',
        'large',
        'print'
    ]
    let output = {}
    for (let i in breakPoints) {
        if (config.hasOwnProperty(breakPoints[i])) {
            output = {
                ...output,
                [breakPoints[i]]: {
                    ...common(config[breakPoints[i]]),
                },
            }
        }
    }

    return output
}

/**
 * Creates a style object that will add a solid circle around an icon
 * Remember to add the color and backgroundColor properties to the icon style
 *
 * @param {object} config
 * @returns {object}
 */
export const iconInSolidCircle = (config = {
    iconSize: 20,
    circleSize: 40,
    tablet: {
        iconSize: 13,
        circleSize: 33,
    },
}) => {

    const commonStyles = breakpoint => {
        return {
            width: `${breakpoint.iconSize}px !important`,
            height: `${breakpoint.iconSize}px`,
            padding: `${(breakpoint.circleSize - breakpoint.iconSize) / 2}px`,
        }
    }

    return {
        borderRadius: '100px',
        ...commonStyles(config),
        ...breakpointStyles(config, commonStyles),
    }
}

/**
 * This does the same thing as iconInSolidCircle, except it puts the icon in a hollow circle.
 *
 * @param {object} config
 * @returns {object}
 */
export const iconInCircle = (config = {
    iconSize: 20,
    circleSize: 40,
    circleThickness: 2,
    circleColor: 'black',
    tablet: {
        iconSize: 13,
        circleSize: 33,
        circleThickness: 2,
    },
}) => {
    const commonStyles = breakpoint => {
        return {
            width: `${breakpoint.iconSize}px !important`,
            height: `${breakpoint.iconSize}px`,
            padding: `${(breakpoint.circleSize - breakpoint.iconSize) / 2 - breakpoint.circleThickness}px`,
            borderWidth: `${breakpoint.circleThickness}px`,
        }
    }

    return {
        borderRadius: '100px',
        border: `${config.circleThickness}px solid ${config.circleColor}`,
        ...commonStyles(config),
        ...breakpointStyles(config, commonStyles),
    }
}