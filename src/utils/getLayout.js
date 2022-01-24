import {breakpointUpperLimit} from '../variables/styles'

export const LAYOUT_MOBILE = 'isMobile',
    LAYOUT_TABLET = 'isTablet',
    LAYOUT_SMALL = 'isSmallDesktop',
    LAYOUT_LARGE = 'isLargeDesktop',
    LAYOUT_XLARGE = 'isXLargeDesktop'

export const getLayout = () => {
    if (window.innerWidth < breakpointUpperLimit.mobile)
        return LAYOUT_MOBILE
    else if (window.innerWidth < breakpointUpperLimit.tablet)
        return LAYOUT_TABLET
    else if (window.innerWidth < breakpointUpperLimit.small)
        return LAYOUT_SMALL
    else if (window.innerWidth <= breakpointUpperLimit.large)
        return LAYOUT_LARGE

    return LAYOUT_XLARGE
}