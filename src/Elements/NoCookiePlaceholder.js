import React                from 'react'
import Div                  from '../Basic/Div'
import {connect}            from 'react-redux'
import {COOKIE_CONSENT}     from '../redux/reducers'
import {cookieConsentStyle} from '../themes/elements'
import ButtonLarge          from './ButtonLarge'
import LinkSwitch           from './LinkSwitch'

/**
 * When the user has not approved cookies, this component should replace any content that would otherwise set
 * a tracking cookie or
 *
 * Usage: This component can appear by itself, in place of,
 * or be wrapped around a component that loads data from a remote site.
 * Do not use this for code snippets that the client requests that we add. Just simply hide those.
 */
const NoCookiePlaceholder = ({cookieConsent, dispatch, children}) =>
    (cookieConsent && children) || (
        <Div theme={cookieConsentStyle}>
            <Div theme={cookieConsentStyle.text}>
                This content has been blocked because you have not consented to third-party cookies.
                {' '}<LinkSwitch url="/privacy-policy">Read our cookie policy.</LinkSwitch>
            </Div>
            <ButtonLarge
                url="#"
                label="Accept Cookies"
                onClick={() => dispatch({type: COOKIE_CONSENT})}
                theme={cookieConsentStyle.button}
            />
        </Div>
    )

const mapStateToProps = ({site}) => ({
    cookieConsent: site.cookieConsent
})

export default connect(mapStateToProps)(NoCookiePlaceholder)