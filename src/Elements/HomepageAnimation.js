import debounce             from 'debounce'
import {useAnimation}       from 'framer-motion'
import PropTypes            from 'prop-types'
import React, {
    useEffect,
    useState
}                           from 'react'
import FilePlayer           from 'react-player/lib/players/FilePlayer'
import {useSelector}        from 'react-redux'
import {
    adaptResponsive,
    assetConfig,
    sequencer,
    variantConfig
}                           from '../animations/homepage'
import Div                  from '../Basic/Div'
import MotionDiv            from '../Basic/MotionDiv'
import MotionImg            from '../Basic/MotionImg'
import RichText             from '../Basic/RichText'
import {layoutSelector}     from '../redux/selectors'
import {homepageStyles}     from '../themes/pageHomepage'
import {delay}              from '../utils/delay'
import {isInternetExplorer} from '../utils/flags'
import {shuffle}            from '../utils/helpers'
import ButtonLarge          from './ButtonLarge'

// Randomize the assets from the assetConfig array.
const assetGroup = shuffle([0, 1, 2])

const HomepageAnimation = ({post}) => {
    const layout = useSelector(layoutSelector)

    // track loaded state of the first group. Animation won't start until first group is loaded.
    const [loaded, setLoaded] = useState({
        video: false,
        image1: false,
        image2: false
    })

    // track whether each group is mounted. Groups are unmounted after they exit the stage to conserve memory.
    const [mounted, setMounted] = useState({
        video: true,
        set1: true,
        set2: false,
        set3: false,
        loader: false
    })

    // used to trigger the playing state of the videos.
    const [playing, setPlaying] = useState({
        video2: false,
        video3: false
    })

    const animationG1Video = useAnimation()
    const animationG1Image1 = useAnimation()
    const animationG1Image2 = useAnimation()
    const animationG2Image1 = useAnimation()
    const animationG2Video = useAnimation()
    const animationG2Image2 = useAnimation()
    const animationG3Video = useAnimation()
    const animationG3Image1 = useAnimation()
    const animationG3Image2 = useAnimation()

    // Trigger the start of the animation once the initial assets are loaded.
    const isReady = loaded.video && loaded.image1 && loaded.image2

    useEffect(() => {
        // Triggers the visibility of the loader if assets haven't been loaded in a given amount of time.
        const showLoader = debounce(() => setMounted(displayed => ({...displayed, loader: true})), 1500)

        /**
         * This is the master orchestrator of the animation. It is responsible for triggering the start of
         * each element's animation, spacing the animations out, and toggling the visibility of elements as
         * they are needed.
         *
         * @returns {Promise<void>}
         */
        const sequence = async () => {
            // Cancel the loader debounce and hide the loader once we begin the animation.
            showLoader.clear()
            setMounted(displayed => ({...displayed, loader: false}))
            await animationG1Video.set('initial')
            await animationG1Video.start('fade')
            sequencer(animationG1Video)
            await delay(850)
            sequencer(animationG1Image1)
            await delay(350)
            sequencer(animationG1Image2)
            await delay(4000)
            setMounted(displayed => ({...displayed, set2: true}))
            await delay(4000)
            setPlaying(playing => ({...playing, video2: true}))
            sequencer(animationG2Video)
            await delay(350)
            sequencer(animationG2Image1)
            await delay(350)
            sequencer(animationG2Image2)
            await delay(4000)
            setMounted(displayed => ({...displayed, video: false, set1: false, set3: true}))
            await delay(4000)
            setPlaying(playing => ({...playing, video3: true}))
            sequencer(animationG3Video, true)
            await delay(350)
            sequencer(animationG3Image1, true)
            await delay(350)
            sequencer(animationG3Image2, true)
            setMounted(displayed => ({...displayed, set2: false}))
        }

        // Show a loader animation if the animation isn't ready yet.
        !isReady && showLoader()

        // Launch the animation when ready
        isReady && sequence()

        return () => {
            animationG1Video.stop()
            animationG1Image1.stop()
            animationG1Image2.stop()
            animationG2Video.stop()
            animationG2Image1.stop()
            animationG2Image2.stop()
            animationG3Video.stop()
            animationG3Image1.stop()
            animationG3Image2.stop()
        }
    }, [
        animationG1Video,
        animationG1Image1,
        animationG1Image2,
        animationG2Video,
        animationG2Image1,
        animationG2Image2,
        animationG3Video,
        animationG3Image1,
        animationG3Image2,
        isReady
    ])

    return (
        <>
            <Div className="homepage-content" theme={homepageStyles.content.panel}>
                <MotionDiv
                    className="homepage-description"
                    variants={variantConfig.description}
                    initial="initial"
                    animate="animate"
                    custom={layout}
                >
                    <RichText theme={homepageStyles.content.description}>{post.client_homepage_content}</RichText>
                </MotionDiv>
                <MotionDiv
                    className="homepage-button"
                    theme={homepageStyles.content.buttonWrap}
                    variants={variantConfig.button}
                    initial="initial"
                    animate="animate"
                    custom={layout}
                >
                    <ButtonLarge
                        url={post.client_homepage_button_link ? post.client_homepage_button_link : ''}
                        children={post.client_homepage_button}
                        theme={homepageStyles.content.button}
                    />
                </MotionDiv>
            </Div>
            <Div className="stage" theme={homepageStyles.videoStage}>
                {mounted.video && (
                    <MotionDiv
                        key="group-1-video"
                        theme={assetConfig(assetGroup[0]).video.theme.first}
                        variants={assetConfig(assetGroup[0]).video.variants.group1}
                        initial="initial"
                        animate={animationG1Video}
                        custom={layout}
                    >
                        <FilePlayer
                            className="video-1"
                            url={assetConfig(assetGroup[0]).video.srcFullscreen}
                            muted
                            playing
                            controls={false}
                            width="100%"
                            height="auto"
                            playsinline
                            style={homepageStyles.group1.video.inner}
                            onReady={() => setLoaded(loaded => ({...loaded, video: true}))}
                        />
                        {isInternetExplorer() && (
                            <MotionDiv
                                // This is used to simulate the masking effect on the homepage video for browsers that
                                // cannot use the clip property.
                                className="fallback-overlay"
                                theme={homepageStyles.group1.video.fallback}
                                animate={isReady ? 'fallback' : {}}
                            />
                        )}
                    </MotionDiv>
                )}
                <Div className="image-stage" theme={homepageStyles.imageStage}>
                    {mounted.set1 && (
                        <>
                            <MotionImg
                                key="group-1-image-1"
                                className="first-group"
                                theme={assetConfig(assetGroup[0]).image1.theme}
                                variants={assetConfig(assetGroup[0]).image1.variants.group1}
                                initial="initial"
                                animate={animationG1Image1}
                                src={assetConfig(assetGroup[0]).image1.src}
                                onLoad={() => setLoaded(loaded => ({...loaded, image1: true}))}
                                custom={layout}
                            />
                            <MotionImg
                                key="group-1-image-2"
                                className="first-group"
                                theme={assetConfig(assetGroup[0]).image2.theme}
                                variants={assetConfig(assetGroup[0]).image2.variants.group1}
                                initial="initial"
                                animate={animationG1Image2}
                                src={assetConfig(assetGroup[0]).image2.src}
                                onLoad={() => setLoaded(loaded => ({...loaded, image2: true}))}
                                custom={layout}
                            />
                        </>
                    )}
                    {mounted.set2 && (
                        <>
                            <MotionDiv
                                key="group-2-video"
                                className="second-group"
                                theme={assetConfig(assetGroup[1]).video.theme}
                                variants={assetConfig(assetGroup[1]).video.variants.group2}
                                initial="initial"
                                animate={animationG2Video}
                                custom={layout}
                            >
                                <FilePlayer
                                    className="video-2"
                                    url={assetConfig(assetGroup[1]).video.src}
                                    muted
                                    playing={playing.video2}
                                    controls={false}
                                    width={adaptResponsive(assetConfig(assetGroup[1]).video.width, layout)}
                                    height={adaptResponsive(assetConfig(assetGroup[1]).video.height, layout)}
                                    playsinline
                                />
                            </MotionDiv>
                            <MotionImg
                                key="group-2-image-1"
                                className="second-group"
                                theme={assetConfig(assetGroup[1]).image1.theme}
                                variants={assetConfig(assetGroup[1]).image1.variants.group2}
                                initial="initial"
                                animate={animationG2Image1}
                                src={assetConfig(assetGroup[1]).image1.src}
                                custom={layout}
                            />
                            <MotionImg
                                key="group-2-image-2"
                                className="second-group"
                                theme={assetConfig(assetGroup[1]).image2.theme}
                                variants={assetConfig(assetGroup[1]).image2.variants.group2}
                                initial="initial"
                                animate={animationG2Image2}
                                src={assetConfig(assetGroup[1]).image2.src}
                                custom={layout}
                            />
                        </>
                    )}
                    {mounted.set3 && (
                        <>
                            <MotionDiv
                                key="group-3-video"
                                className="third-group"
                                theme={assetConfig(assetGroup[2]).video.theme}
                                variants={assetConfig(assetGroup[2]).video.variants.group3}
                                initial="initial"
                                animate={animationG3Video}
                                custom={layout}
                            >
                                <FilePlayer
                                    className="video-3"
                                    style={{height: '100%'}}
                                    url={assetConfig(assetGroup[2]).video.src}
                                    muted
                                    playing={playing.video3}
                                    controls={false}
                                    width={adaptResponsive(assetConfig(assetGroup[2]).video.width, layout)}
                                    height={adaptResponsive(assetConfig(assetGroup[2]).video.height, layout)}
                                    playsinline
                                />
                            </MotionDiv>
                            <MotionImg
                                key="group-3-image-1"
                                className="third-group"
                                theme={assetConfig(assetGroup[2]).image1.theme}
                                variants={assetConfig(assetGroup[2]).image1.variants.group3}
                                animate={animationG3Image1}
                                initial="initial"
                                src={assetConfig(assetGroup[2]).image1.src}
                                custom={layout}
                            />
                            <MotionImg
                                key="group-3-image-2"
                                className="third-group"
                                theme={assetConfig(assetGroup[2]).image2.theme}
                                variants={assetConfig(assetGroup[2]).image2.variants.group3}
                                initial="initial"
                                animate={animationG3Image2}
                                src={assetConfig(assetGroup[2]).image2.src}
                                custom={layout}
                            />
                        </>
                    )}
                </Div>
            </Div>
        </>
    )
}

HomepageAnimation.propTypes = {
    post: PropTypes.object.isRequired,
}

export default HomepageAnimation