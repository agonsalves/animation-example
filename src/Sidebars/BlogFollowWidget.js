import PropTypes          from 'prop-types'
import React              from 'react'
import Div                from '../Basic/Div'
import H3                 from '../Basic/H3'
import Icon               from '../Basic/Icon'
import LinkSwitch         from '../Elements/LinkSwitch'
import {
    blogFollowLinkStyle,
    blogSearchWidgetStyle
}                         from '../themes/blogs'
import {widgetTitleStyle} from '../themes/sidebars'
import {
    linkedinIn,
    twitter
}                         from '../variables/iconLibrary'

const BlogFollowWidget = ({twitterLink, linkedinLink}) => (
    <>
    {(twitterLink || linkedinLink) && (
        <Div as="aside" theme={blogSearchWidgetStyle.aside}>
            <H3 theme={{...widgetTitleStyle, ...blogSearchWidgetStyle.heading}}>Follow Us</H3>
            {twitterLink && (
                <Div>
                    <LinkSwitch theme={blogFollowLinkStyle} url={twitterLink} title="Follow us on Twitter">
                        <Icon icon={twitter} theme={blogFollowLinkStyle.icon}/>
                        {' '}Twitter
                    </LinkSwitch>
                </Div>
            )}
            {linkedinLink && (
                <Div>
                    <LinkSwitch theme={blogFollowLinkStyle} url={linkedinLink} title="Join our LinkedIn Network">
                        <Icon icon={linkedinIn} theme={blogFollowLinkStyle.icon}/>
                        {' '}LinkedIn
                    </LinkSwitch>
                </Div>
            )}
        </Div>
    )}
    </>
)
BlogFollowWidget.propTypes = {
    twitterLink: PropTypes.string,
    linkedinLink: PropTypes.string,
}
export default BlogFollowWidget