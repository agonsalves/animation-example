import PropTypes               from 'prop-types'
import React                   from 'react'
import {connect}               from 'react-redux'
import Div                     from '../Basic/Div'
import Icon                    from '../Basic/Icon'
import {socialMediaLinksStyle} from '../themes/footer'
import {
    facebook,
    instagram,
    linkedinIn,
    twitter,
} from '../variables/iconLibrary'
import LinkSwitch              from './LinkSwitch'

const SocialMediaLinks = ({socialLinks, theme}) =>
    <Div theme={{...socialMediaLinksStyle, ...theme}}>
        <Div theme={socialMediaLinksStyle.linkWrapper}>
            {Object.keys(socialLinks).map(item => {
                let socialIcon = false
                switch (item) {
                    case 'linkedin':
                        socialIcon = linkedinIn
                        break
                    case 'twitter':
                        socialIcon = twitter
                        break
                    case 'facebook':
                        socialIcon = facebook
                        break
                    case 'instagram':
                        socialIcon = instagram
                        break
                    default:
                        break
                }
                return (
                    <LinkSwitch
                        theme={socialMediaLinksStyle.link}
                        key={item}
                        url={socialLinks[item].url || socialLinks[item]}
                        title={socialLinks[item].title}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon icon={socialIcon}/>
                    </LinkSwitch>
                )

            })}
        </Div>
    </Div>

SocialMediaLinks.propTypes = {
    socialLinks: PropTypes.object.isRequired,
    theme: PropTypes.object
}

SocialMediaLinks.defaultProps = {
    socialLinks: {},
    theme: {
        linkWrapper: {},
        link: {}
    }
}

const mapStateToProps = ({site}) => ({
    socialLinks: site.config.socialUrls,
})

export default connect(mapStateToProps)(SocialMediaLinks)