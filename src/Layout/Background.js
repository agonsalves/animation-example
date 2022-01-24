import React, {useContext}  from 'react'
import {backgroundVariants} from '../animations/background'
import Div                  from '../Basic/Div'
import MotionImg            from '../Basic/MotionImg'
import {Transitions}        from '../Containers/TransitionController'
import {
    backgroundContainerStyle,
    backgroundStyleSwitch,
    personBackgroundContainerStyle
}                           from '../themes/background'
import {isPersonMicrosite}  from '../utils/flags'
import {getCurrentBg}       from '../utils/getCurrentBg'
import {stripPagination}    from '../utils/url'

const Background = () => {
    const {post, bgAnimation, resolve} = useContext(Transitions)

    return (
        <Div theme={isPersonMicrosite(post)
            ? personBackgroundContainerStyle
            : backgroundContainerStyle}
             className="background"
        >
            <MotionImg
                key={stripPagination(post.parentPost.key)}
                variants={backgroundVariants}
                animate={bgAnimation}
                theme={backgroundStyleSwitch(post)}
                src={getCurrentBg(post)}
                onLoad={() => resolve()}
            />
        </Div>
    )
}

export default Background