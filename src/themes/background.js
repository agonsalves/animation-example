import {
    isPeoplePage,
    isPersonMicrosite,
    isPersonMicrositeMainPage,
    isPracticeListingPage
}                from '../utils/flags'
import {
    absolute,
    center,
    fixed,
    flex,
    hidden,
    none
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const backgroundStyleSwitch = post => {
    let baseStyle = {
        position: absolute,
        maxWidth: none,
        maxHeight: none,
        width: 1920,
        opacity: 0,
        tablet: {
            width: '100%'
        },
        small: {
            width: 1630
        },
        large: {
            width: 1920
        }
    }

    if (isPersonMicrosite(post)) {
        if (!isPersonMicrositeMainPage(post)) {
            return {
                maxWidth: none,
                maxHeight: none,
                transition: 'all 500ms ease-out',
                tablet: {
                    width: 1280,
                    minWidth: 1280,
                    height: 800,
                    minHeight: 800,
                    transform: 'translate(0px,-25px)'
                },
                small: {
                    width: 1631,
                    minWidth: 1631,
                    height: 1015,
                    minHeight: 1015,
                    transform: 'translate(5px,-30px)'
                },
                large: {
                    width: 1920,
                    minWidth: 1920,
                    height: 1200,
                    minHeight: 1200,
                    transform: 'translate(0px, -40px)'
                },
            }
        }
        return {
            ...baseStyle,
            maxWidth: none,
            maxHeight: none,
            position: 'static',
            transition: 'all 500ms ease-out',
            tablet: {
                width: 1417,
                minWidth: 1417,
                height: 886,
                minHeight: 886,
                transform: 'translate(-70px, 0)',
            },
            small: {
                width: 1805,
                minWidth: 1805,
                height: 1128,
                minHeight: 1128,
                transform: 'translate(-90px,-25px)'
            },
            large: {
                width: 2150,
                minWidth: 2150,
                height: 1344,
                minHeight: 1344,
                transform: 'translate(0px, 0)'
            },
        }
    }

    if (isPeoplePage(post) || isPracticeListingPage(post))
        return {
            ...baseStyle
        }
    return baseStyle
}

export const backgroundContainerStyle = {
    width: '100%',
    height: '100vh',
    maxWidth: 1920,
    margin: '0 auto',
    position: fixed,
    display: flex,
    zIndex: -1,
    print: {
        display: none
    }
}


export const personBackgroundContainerStyle = {
    ...backgroundContainerStyle,
    backgroundColor: globals.colors.black,
    justifyContent: center,
    overflow: hidden,
    tablet: {
        width: 1280,
    },
    small: {
        width: 1630
    },
    large: {
        width: 1920
    }
}
