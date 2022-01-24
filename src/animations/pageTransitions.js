/**
 * Page transitions
 */
import {
    isHomepage,
    isIndustryListingPage,
    isPeoplePage,
    isPeopleSearch,
    isPracticeListingPage
} from '../utils/flags'

export const pageVariants = {
    defaultInitial: {
        top: '110vh',
        opacity: 1,
    },
    defaultEnter: {
        top: '0vh',
        transition: {
            duration: .6,
            ease: 'easeOut'
        },
    },

    homepageInitial: {
        opacity: 0
    },
    homepageEnter: {
        opacity: 1,
        transition: {
            duration: .1
        }
    },

    peopleInitial: {
        x: '-100%',
        opacity: 1,
        transition: {
            duration: .3,
            ease: 'easeOut'
        }
    },
    peopleEnter: {
        x: '0%',
        top: '0vh',
        transition: {
            duration: .6,
            ease: 'easeOut'
        }
    },

    practiceInitial: {
        x: '110%',
        opacity: 1,
        transition: {
            duration: .6,
            ease: 'easeOut'
        }
    },
    practiceEnter: {
        x: '0%',
        transition: {
            duration: .6,
            ease: 'easeOut'
        }
    },
    practiceExit: {
        x: '100%',
        transition: {
            duration: .3,
            ease: 'easeOut'
        }
    },

    marqueeEnter: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: 1,
            ease: 'easeOut'
        }
    },
    marqueeExit: {
        opacity: 0,
        transition: {
            delay: .5,
            duration: .3
        }
    },
}

/**
 * Intra-section transition
 */
export const intraSectionVariants = {
    resting: {
        marginRight: '0%'
    },
    exit: {
        marginRight: '-100%',
        transition: {
            duration: .5
        }
    }
}

export const getVariant = (post, stage = '') => {
    if (isHomepage(post) || isIndustryListingPage(post)) {
        if (stage === 'enter')
            return 'homepageEnter'

        return 'homepageInitial'
    }

    if (isIndustryListingPage(post) && stage === 'exit')
        return 'homepageInitial'

    if (isPeoplePage(post) && !isPeopleSearch(post)) {
        if (stage === 'enter')
            return 'peopleEnter'

        return 'peopleInitial'
    }

    if (isPracticeListingPage(post)) {
        if (stage === 'initial')
            return 'practiceInitial'

        if (stage === 'enter')
            return 'practiceEnter'

        return 'practiceExit'
    }

    if (stage === 'initial')
        return 'defaultInitial'

    if (stage === 'enter')
        return 'defaultEnter'

    return 'defaultExit'
}