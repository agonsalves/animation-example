import PropTypes            from 'prop-types'
import React                from 'react'
import {connect}            from 'react-redux'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton
}                           from 'react-share'
import Div                  from '../Basic/Div'
import Icon                 from '../Basic/Icon'
import {socialSharingStyle} from '../themes/elements'
import {
    envelope,
    facebook,
    linkedinIn,
    twitter
}                           from '../variables/iconLibrary'

const SocialSharing = ({url, theme}) =>
    <Div theme={{...socialSharingStyle, ...theme}}>
        <Div theme={{...socialSharingStyle.shareText}}>
            Share This Page:
        </Div>
        <EmailShareButton url={url}>
            <Icon icon={envelope} theme={{...socialSharingStyle.icon, ...theme.icon}}/>
        </EmailShareButton>
        <TwitterShareButton url={url}>
            <Icon icon={twitter} theme={{...socialSharingStyle.icon, ...theme.icon}}/>
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
            <Icon icon={linkedinIn} theme={{...socialSharingStyle.icon, ...theme.icon}}/>
        </LinkedinShareButton>
        <FacebookShareButton url={url}>
            <Icon icon={facebook} theme={{...socialSharingStyle.icon, ...theme.icon}}/>
        </FacebookShareButton>
    </Div>

SocialSharing.propTypes = {
    theme: PropTypes.object,
    url: PropTypes.string.isRequired
}

SocialSharing.defaultProps = {
    theme: {},
}

const mapStateToProps = ({router}) => ({
    url: `${process.env.REACT_APP_SITE_URL}${router.location.pathname}`
})

export default connect(mapStateToProps)(SocialSharing)