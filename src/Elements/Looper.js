import {AnimatePresence} from 'framer-motion'
import PropTypes         from 'prop-types'
import React, {useState} from 'react'
import Div               from '../Basic/Div'
import MotionDiv         from '../Basic/MotionDiv'
import Swiper            from '../utils/Swiper'

const Looper = ({sourceArray, theme}) => {
    const numVisible = 4
    const [visibleArray, setVisibleArray] = useState([sourceArray.slice(0, numVisible)])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isActive, setIsActive] = useState(true)

    const inc = () => {
        if (isActive) {
            if (currentIndex === sourceArray.length - 1) {
                setVisibleArray([...visibleArray, sourceArray[numVisible - 1]])
                setCurrentIndex(0)
            } else {
                if (currentIndex + numVisible >= sourceArray.length) {
                    let numOver = currentIndex + numVisible - sourceArray.length + 1
                    setVisibleArray([...visibleArray, sourceArray[numOver - 1]])
                } else {
                    setVisibleArray([...visibleArray, sourceArray[currentIndex + numVisible]])
                }
                setCurrentIndex(index => index + 1)
            }
        }
    }

    const dec = () => {
        if (isActive) {
            if (currentIndex === 0) {
                setVisibleArray([sourceArray[sourceArray.length - 1], ...visibleArray])
                setCurrentIndex(sourceArray.length - 1)
            } else {
                setVisibleArray([sourceArray[currentIndex - 1], ...visibleArray])
                setCurrentIndex(index => index - 1)
            }
        }
    }

    return (
        <Div
            className="outer"
        >
            <Div onClick={() => inc()} theme={{size: 30, cursor: 'pointer'}}>+</Div>
            <Div onClick={() => dec()} theme={{size: 30, cursor: 'pointer'}}>-</Div>
            <Swiper
                onSwipeLeft={() => inc()}
                onSwipeRight={() => dec()}
            >
                <Div
                    className="track"
                    theme={{
                        width: '100%',
                        height: 200,
                        overflow: 'hidden',
                        display: 'flex',
                        position: 'relative'
                    }}
                >
                    <AnimatePresence onExitComplete={() => setIsActive(true)}>
                        {visibleArray.map((item, index) =>
                            <MotionDiv
                                id={item}
                                key={item}
                                theme={{
                                    height: 200,
                                    flexShrink: 0,
                                    display: 'inline-flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    width: `${100 / numVisible}%`,
                                    maxWidth: `${100 / numVisible}%`
                                }}
                                positionTransition
                                initial={index === 0 ? {
                                    marginLeft: `-${100 / numVisible}%`,
                                    marginRight: '0%',
                                } : {
                                    marginRight: `-${100 / numVisible}%`,
                                    marginLeft: '0%',
                                }}
                                animate={{
                                    marginLeft: '0%',
                                    marginRight: '0%',
                                    transition: {
                                        ease: 'easeOut',
                                        duration: index === 0 ? .4 : 0
                                    }
                                }}
                                exit={index === 0 ? {
                                    marginLeft: `-${100 / numVisible}%`,
                                    marginRight: '0%',
                                    transition: {
                                        ease: 'easeOut',
                                        duration: .4
                                    }
                                } : {
                                    marginRight: `-${100 / numVisible}%`,
                                    marginLeft: '0%',
                                    transition: {
                                        ease: 'easeOut',
                                        duration: .4
                                    }
                                }}
                                onAnimationComplete={() => {
                                    if (currentIndex + numVisible > sourceArray.length) {
                                        let numOver = currentIndex + numVisible - sourceArray.length
                                        setVisibleArray([...sourceArray.slice(currentIndex), ...sourceArray.slice(0, numOver)])
                                    } else {
                                        setVisibleArray(sourceArray.slice(currentIndex, currentIndex + numVisible))
                                    }
                                }}
                                onAnimationStart={() => setIsActive(false)}
                            >
                                <Div
                                    className="slide-replace-me"
                                    theme={{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        width: '100%',
                                        marginRight: 5,
                                        height: '100%'
                                    }}
                                >
                                    {item}
                                </Div>
                            </MotionDiv>
                        )}
                    </AnimatePresence>
                </Div>
            </Swiper>
        </Div>
    )
}

Looper.propTypes = {
    sourceArray: PropTypes.array.isRequired
}

export default Looper