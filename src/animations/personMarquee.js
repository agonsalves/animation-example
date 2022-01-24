/**
 * Person Marquee
 */
export const personMarqueeVariants = {
    personInitial: {
        y: '-20%',
        opacity: 0,
    },
    personEnter: {
        y: '0%',
        opacity: 1,
        transition: {
            ease: 'easeOut',

            duration: .5,
            staggerChildren: .2
        }
    },
    personExit: {
        y: '0%',
        opacity: 0,
        transition: {
            duration: .5,
            staggerChildren: .2
        }
    },
    subItemInitial: {
        opacity: 0,
        height: 0
    },

    emailEnter: {
        height: 'auto',
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: .5,
            opacity: {
                delay: .4
            }
        }
    },
    iconsEnter: {
        height: 'auto',
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: .5,
            opacity: {
                delay: .5
            }
        }
    },
    phonesEnter: {
        height: 'auto',
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: .5,
            opacity: {
                delay: .6
            }
        }
    },

    subItemExit: {
        height: 0,
        opacity: 0,
        transition: {
            ease: 'easeOut',
            duration: .5,

        }
    }
}