import {useAnimation} from 'framer-motion'
import React, {
    createContext,
    useCallback,
    useEffect,
    useState
}                     from 'react'
import {useSelector}  from 'react-redux'
import {
    getVariant,
    pageVariants
}                     from '../animations/pageTransitions'
import {mobileFlag}   from '../redux/selectors'
import {
    isInternetExplorer,
    isSameSection
}                     from '../utils/flags'
import {getCurrentBg} from '../utils/getCurrentBg'
import withPost       from '../utils/withPost'

/**
 * Animation functions are declared within the context provider and are passed up the tree to components that consume
 * them. Various events trigger the animations.
 *
 * Note: These transitions are possible to execute in this fashion because none of them require the old & new content
 * to be visible at the same time.
 */

const TransitionController = ({children, post}) => {
    const isMobile = useSelector(mobileFlag)
    const [currentPost, setCurrentPost] = useState(post)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isInit, setIsInit] = useState(false)
    const overlayAnimation = useAnimation()
    const bgAnimation = useAnimation()
    const mainAnimation = useAnimation()
    const contentAnimation = useAnimation()
    const footerAnimation = useAnimation()

    /**
     * Default page loading sequence.
     */
    const pageInit = useCallback(async () => {
        footerAnimation.start({opacity: 1})
        await mainAnimation.set(pageVariants[getVariant(post, 'initial')])
        await overlayAnimation.set({opacity: 0})
        isInternetExplorer() ? document.body.scrollTop = 0 : window.scrollTo(0, 0)
        await bgAnimation.start({opacity: 1, transition: {duration: .6, ease: 'linear'}})
        await mainAnimation.start(pageVariants[getVariant(post, 'enter')])
        window.prerenderReady = true
    }, [overlayAnimation, bgAnimation, footerAnimation, mainAnimation, post])

    /**
     * Page exit sequence that occurs when navigating to a new section.
     */
    const newSection = useCallback(async () => {
        await overlayAnimation.start({opacity: 1, transition: {duration: .7, ease: 'linear'}})
        footerAnimation.start({opacity: 0})
        await mainAnimation.set(pageVariants[getVariant(post, 'initial')])
        await bgAnimation.set({opacity: 0})
        await setCurrentPost(post)
    }, [overlayAnimation, bgAnimation, mainAnimation, post, setCurrentPost, footerAnimation])

    /**
     * Page exit sequence for when navigating between two pages that have the same background, but are not necessarily
     * part of the same section. This animation also occurs when navigating within the same section while the page is
     * scrolled past the top of the content.
     */
    const sameBg = useCallback(async () => {
        overlayAnimation.set({opacity: 0})
        footerAnimation.start({opacity: 0})
        await mainAnimation.start({opacity: 0, transition: {duration: .8, ease: 'linear'}})
        if (isInternetExplorer()) document.body.scrollTop = 0
        await setCurrentPost(post)
        pageInit()
    }, [mainAnimation, footerAnimation, post, setCurrentPost, pageInit, overlayAnimation])

    /**
     * Default transition between two pages within the same section. This only occurs when the page is not scrolled, or
     * is scrolled only a little (top of subnav still visible).
     */
    const intraSection = useCallback(async () => {
        overlayAnimation.set({opacity: 0})
        await contentAnimation.start({opacity: 0})
        await setCurrentPost(post)
        await contentAnimation.start({opacity: 1})

        if(isMobile)
            window.scrollTo(0, 0)

    }, [contentAnimation, setCurrentPost, post, overlayAnimation, isMobile])

    useEffect(() => {
        if (!isMobile) {
            // This effect should only occur when the site is first loaded.
            mainAnimation.set(pageVariants[getVariant(post, 'initial')])
            isInit && pageInit()
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [isInit, isMobile])

    useEffect(() => {
        // This effect is called every time the page changes.
        if (post.key !== currentPost.key) {
            if (!isSameSection(post, currentPost) && !isMobile) {
                if (hasSameBackground(post, currentPost))
                    sameBg()
                else
                    newSection()
            } else if (isScrolled || (isInternetExplorer() && document.body.scrollTop > 400))
                sameBg()
            else
                intraSection()
        }
    }, [post, currentPost, isMobile, intraSection, newSection, sameBg])

    return (
        <Transitions.Provider value={{
            post: currentPost,
            overlayAnimation,
            bgAnimation,
            mainAnimation,
            contentAnimation,
            footerAnimation,
            resolve: () => {
                if (!isInit)
                    setIsInit(true)
                else
                    pageInit()
            },
            setScrolledFlag: scrollPosition => setIsScrolled(scrollPosition.y < 0)
        }}>
            {children}
        </Transitions.Provider>
    )
}

export default withPost(TransitionController)

export const Transitions = createContext({})

/**
 * Determines whether two different posts should have the same background image.
 *
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */
const hasSameBackground = (a, b) => getCurrentBg(a) === getCurrentBg(b)