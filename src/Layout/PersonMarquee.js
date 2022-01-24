import {AnimatePresence}       from 'framer-motion'
import PropTypes               from 'prop-types'
import React                   from 'react'
import {personMarqueeVariants} from '../animations/personMarquee'
import Div                     from '../Basic/Div'
import EmailLink               from '../Basic/EmailLink'
import MotionDiv               from '../Basic/MotionDiv'
import MicrositeTitle          from '../Microsites/MicrositeTitle'
import PersonIconLinks         from '../Microsites/PersonIconLinks'
import PersonPhoneList         from '../Microsites/PersonPhoneList'
import {
    micrositePersonStyle,
    personMarqueeStyle
}                              from '../themes/microsites'
import {isMicrositeSubpage}    from '../utils/flags'
import {composePersonTitle}    from '../utils/helpers'

const PersonMarquee = ({post}) =>
    <MotionDiv
        variants={personMarqueeVariants}
        initial="personInitial"
        animate="personEnter"
    >
        <MotionDiv key="person-name" variants={personMarqueeVariants}>
            <MicrositeTitle post={post} theme={personMarqueeStyle.title}/>
        </MotionDiv>
        <Div theme={micrositePersonStyle.marqueeInfo}>
            <Div theme={micrositePersonStyle.marqueeInfoInner}>
                <MotionDiv
                    key="person-title"
                    variants={personMarqueeVariants}
                    theme={micrositePersonStyle.personTitle}
                >
                    {composePersonTitle(post.parentPost)}
                </MotionDiv>
                <AnimatePresence>
                    {!isMicrositeSubpage(post) && (
                        <MotionDiv
                            key="person-email"
                            variants={personMarqueeVariants}
                            initial="subItemInitial"
                            animate="emailEnter"
                            exit="subItemExit"
                            theme={{overflow: 'hidden'}}
                        >
                            <EmailLink
                                theme={micrositePersonStyle.emailLink}
                                email={post.parentPost.email}
                                title={`Send an email to ${post.parentPost.post_title}`}
                            />
                        </MotionDiv>
                    )}
                </AnimatePresence>
            </Div>
            <AnimatePresence>
                {!isMicrositeSubpage(post) && (
                    <MotionDiv
                        key="iconLinks"
                        theme={{width: '50%', flexShrink: 0, overflow: 'hidden'}}
                        variants={personMarqueeVariants}
                        initial="subItemInitial"
                        animate="iconsEnter"
                        exit="subItemExit"
                    >
                        <PersonIconLinks parentPost={post.parentPost}/>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </Div>
        <AnimatePresence>
            {!isMicrositeSubpage(post) && (
                <MotionDiv
                    theme={{overflow: 'hidden'}}
                    variants={personMarqueeVariants}
                    initial="subItemInitial"
                    animate="phonesEnter"
                    exit="subItemExit"
                >
                    {post.parentPost.office_location && (
                        <PersonPhoneList post={post.parentPost}/>
                    )}
                </MotionDiv>
            )}
        </AnimatePresence>
    </MotionDiv>

PersonMarquee.propTypes = {
    post: PropTypes.object.isRequired
}

export default PersonMarquee