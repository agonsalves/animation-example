import idx                    from 'idx'
import Carousel               from 'nuka-carousel'
import PropTypes              from 'prop-types'
import React, {
    useEffect,
    useMemo,
    useState
}                             from 'react'
import {
    connect,
    useSelector
}                             from 'react-redux'
import Div                    from '../Basic/Div'
import Icon                   from '../Basic/Icon'
import {REQUEST_HIGHLIGHTS}   from '../redux/reducers'
import {
    getPostType,
    layoutSelector,
    mobileFlag
}                             from '../redux/selectors'
import {
    firmHighlightsStyle,
    firmHighlightsStyleItem,
    firmHighlightsStyleItemWithImage
}                             from '../themes/highlights'
import {layoutInnerStyle}     from '../themes/layout'
import {
    LAYOUT_LARGE,
    LAYOUT_MOBILE,
    LAYOUT_SMALL,
    LAYOUT_TABLET,
    LAYOUT_XLARGE
}                             from '../utils/getLayout'
import {shuffle}              from '../utils/helpers'
import {longArrowAltRightReg} from '../variables/iconLibrary'
import HighlightItem          from './HighlightItem'

const FirmHighlights = ({post, firmHighlightsMode, firmHighlights, dispatch}) => {
    const isMobile = useSelector(mobileFlag)
    const [highlights, setHighlights] = useState([])
    const [highlightIndex, setHighlightIndex] = useState(3)
    const [init, setInit] = useState(true)
    const maxSlides = isMobile ? 1 : 4
    const layout = useSelector(layoutSelector)

    const carouselWidth = {
        [LAYOUT_MOBILE]: `${262 * maxSlides}px`,
        [LAYOUT_TABLET]: `${285 * maxSlides}px`,
        [LAYOUT_SMALL]: `${380 * maxSlides}px`,
        [LAYOUT_LARGE]: `${468 * maxSlides}px`,
        [LAYOUT_XLARGE]: `${468 * maxSlides}px`
    }

    const slideWidth = {
        [LAYOUT_MOBILE]: '262px',
        [LAYOUT_TABLET]: '280px',
        [LAYOUT_SMALL]: '372px',
        [LAYOUT_LARGE]: '460px',
        [LAYOUT_XLARGE]: '460px',
    }

    const cellSpacing = {
        [LAYOUT_MOBILE]: 50,
        [LAYOUT_TABLET]: 23,
        [LAYOUT_SMALL]: 30,
        [LAYOUT_LARGE]: 38,
        [LAYOUT_XLARGE]: 38
    }

    const framePadding = {
        [LAYOUT_MOBILE]: '0',
        [LAYOUT_TABLET]: '0 0 0 95px',
        [LAYOUT_SMALL]: '0 0 0 120px',
        [LAYOUT_LARGE]: '0 0 0 150px',
        [LAYOUT_XLARGE]: '0 0 0 150px'
    }

    const requestHighlights = useMemo(() => async () => {
        await dispatch({
            type: REQUEST_HIGHLIGHTS,
            slug: post.slug
        })
    }, [dispatch, post.slug])

    useEffect(() => {
        if (init) {
            setInit(false)
            const sourcePost = ['microsite-page', 'blog-post'].includes(post.post_type) ? post.parentPost : post;
            if (sourcePost.highlights && firmHighlightsMode === 'auto')
                if (sourcePost.highlights.length)
                    setHighlights(sourcePost.highlights)
                else
                    setHighlights(firmHighlights)

            else if (getPostType('name', sourcePost.post_type).type === 'archive'
                && firmHighlightsMode === 'auto'
                && sourcePost.post_type !== 'office'
            )
                requestHighlights()

            else if (firmHighlights)
                setHighlights(firmHighlights)
        }
    }, [post, requestHighlights, firmHighlightsMode, firmHighlights, setHighlights, init])

    let randomizedHighlights = useMemo(
        () => highlights && shuffle(highlights),
        [highlights]
    )

    const lastItemValue = (index, value, defaultValue) => {
        if (!isMobile && highlights.length > maxSlides) {
            if (index === highlightIndex
                || (index === highlightIndex + 1
                    || (index === 0 && (highlightIndex === highlights.length - 1)))) {
                return value
            }
        } else if (!isMobile && highlights.length >= maxSlides) {
            if (index === highlightIndex
                || (index === 0 && (highlightIndex === highlights.length - 1) && highlights.length > maxSlides)) {
                return value
            }
        } else {
            return defaultValue
        }
    }

    return idx(randomizedHighlights, _ => _.length) ? (
        <Div theme={firmHighlightsStyle}>
            <Div theme={firmHighlightsStyle.headingBar}>
                <Div theme={layoutInnerStyle}>
                    <Div theme={firmHighlightsStyle.heading}>Highlights</Div>
                </Div>
            </Div>
            <Div theme={firmHighlightsStyle.wrapper}>
                <Carousel
                    width={carouselWidth[layout]}
                    slideWidth={slideWidth[layout]}
                    cellSpacing={cellSpacing[layout]}
                    autoplay={false}
                    dragging={false}
                    slidesToShow={maxSlides}
                    framePadding={framePadding[layout]}
                    wrapAround={true}
                    heightMode="max"
                    enableKeyboardControls={false}
                    easing="easePolyOut"
                    cellAlign="left"
                    frameOverflow={isMobile ? 'hidden' : 'visible'}
                    afterSlide={() => setHighlightIndex(highlightIndex =>
                        highlightIndex === highlights.length - 1
                            ? 0
                            : highlightIndex + 1
                    )}
                    renderCenterRightControls={({nextSlide}) => highlights.length >= maxSlides && (
                        <Div onClick={nextSlide} theme={firmHighlightsStyle.nextButtonWrapper}>
                            <Icon
                                onClick={nextSlide}
                                theme={firmHighlightsStyle.nextButton}
                                icon={longArrowAltRightReg}
                            />
                        </Div>
                    )}
                    renderCenterLeftControls={null}
                    renderBottomCenterControls={null}
                >
                    {randomizedHighlights.map((item, index) =>
                        <HighlightItem
                            key={item.id}
                            item={item}
                            theme={item.thumbnail_teaser
                                ? {
                                    ...firmHighlightsStyleItemWithImage,
                                    pointerEvents: lastItemValue(index, 'none', 'pointer')
                                }
                                : {
                                    ...firmHighlightsStyleItem,
                                    pointerEvents: lastItemValue(index, 'none', 'pointer')
                                }
                            }
                            opacity={lastItemValue(index, .2, 1)}
                        />
                    )}
                </Carousel>
            </Div>
        </Div>
    ) : null
}

FirmHighlights.propTypes = {
    post: PropTypes.object.isRequired,
    firmHighlightsMode: PropTypes.string,
    firmHighlights: PropTypes.array,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({site}) => ({
    firmHighlightsMode: site.config.firmHighlightsMode,
    firmHighlights: site.config.firmHighlights
})

export default connect(mapStateToProps)(FirmHighlights)