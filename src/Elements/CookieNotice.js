import {AnimatePresence}      from 'framer-motion'
import PropTypes              from 'prop-types'
import React, {useState}      from 'react'
import {connect, useSelector} from 'react-redux'
import {cookieNoticeVariants} from '../animations/cookieNotice'
import {cookieNoticeMobileVariants}    from '../animations/cookieNotice'
import Div                    from '../Basic/Div'
import MotionDiv              from '../Basic/MotionDiv'
import {COOKIE_CONSENT}       from '../redux/reducers'
import {cookieNoticeStyle}    from '../themes/elements'
import ButtonLarge            from './ButtonLarge'
import LinkSwitch             from './LinkSwitch'
import {mobileFlag} from "../redux/selectors";

/**
 * When the visitor first arrives at the site, we detect if they have the cookieConsent cookie (in sagas.js)
 * That value gets saved to the site store and then is accessed in this component.
 *
 * The notice will appear if they have not given their consent. Once they do, the notice disappears
 * and the store is updated.
 *
 * If the user has not given consent, then any third-party content is replaced with a notice.
 * Google Analytics will still be in play, but the GA property has to be configured to not track demographic info.
 */

const CookieNotice = ({cookieConsent, dispatch}) => {
    const [visible, setVisible] = useState(!cookieConsent)
    const isMobile = useSelector(mobileFlag)

    const handleClick = () => {
        dispatch({
            type: COOKIE_CONSENT
        })
        setVisible(false)
    }

    return (
        <AnimatePresence>
            {visible && (
                <MotionDiv
                    key="notice-block"
                    theme={{
                        position: 'fixed',
                        width: '100%',
                        overflow: 'hidden',
                        bottom: 0,
                        zIndex: 99,
                    }}
                    variants={isMobile ? cookieNoticeMobileVariants : cookieNoticeVariants}
                    initial="initial"
                    animate="enter"
                    exit="initial"
                >
                    <Div theme={cookieNoticeStyle}>
                        <Div theme={cookieNoticeStyle.text}>
                            This website does not track your personal or demographic information, only anonymous usage
                            statistics. To ensure that you are not tracked, we have blocked all embedded content from
                            third party sources like YouTube and SlideShare. Click "Accept Cookies" to enable third-party content.
                            To learn more about our cookie policy, <LinkSwitch url="/disclaimer">click
                            here</LinkSwitch>.
                        </Div>
                        <ButtonLarge
                            theme={{...cookieNoticeStyle.button, flexShrink: 0}}
                            url={'#'}
                            label="Accept Cookies"
                            onClick={() => handleClick()}
                        />
                        <ButtonLarge
                            theme={{...cookieNoticeStyle.button, flexShrink: 0}}
                            url={'#'}
                            label="No Thanks"
                            onClick={() => setVisible(false)}
                        />
                    </Div>
                </MotionDiv>
            )}
        </AnimatePresence>
    )
}

CookieNotice.propTypes = {
    cookieConsent: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({site}) => ({
    cookieConsent: site.cookieConsent
})

export default connect(mapStateToProps)(CookieNotice)