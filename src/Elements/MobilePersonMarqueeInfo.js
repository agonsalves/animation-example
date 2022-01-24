import PropTypes            from 'prop-types'
import React                from 'react'
import Div                  from '../Basic/Div'
import EmailLink            from '../Basic/EmailLink'
import H1                   from '../Basic/H1'
import Icon                 from '../Basic/Icon'
import PersonIconLinks      from '../Microsites/PersonIconLinks'
import PersonPhoneList      from '../Microsites/PersonPhoneList'
import {globalPageTitle}    from '../themes/elements'
import {
    micrositePersonStyle,
    mobilePersonMarqueeStyle,
}                           from '../themes/microsites'
import {composePersonTitle} from '../utils/helpers'
import {envelope}           from '../variables/iconLibrary'

const MobilePersonMarqueeInfo = ({theme, post}) =>
    <>
        <H1 theme={{...globalPageTitle, ...mobilePersonMarqueeStyle.title}}>
            {post.parentPost.post_title}
        </H1>
        <Div theme={{...micrositePersonStyle.personTitle, ...mobilePersonMarqueeStyle.personTitle}}>
            {composePersonTitle(post.parentPost)}
        </Div>
        <Div theme={mobilePersonMarqueeStyle.contact}>
            <Icon icon={envelope} theme={{...mobilePersonMarqueeStyle.emailLink.icon}}/>
            <EmailLink
                theme={{...micrositePersonStyle.emailLink, ...mobilePersonMarqueeStyle.emailLink}}
                email={post.parentPost.email}
                title={`Send an email to ${post.parentPost.post_title}`}
            />
            <PersonPhoneList post={post.parentPost} theme={mobilePersonMarqueeStyle.phoneList}/>
        </Div>
        <PersonIconLinks parentPost={post.parentPost} theme={mobilePersonMarqueeStyle.personIconLinks}/>
    </>

MobilePersonMarqueeInfo.propTypes = {
    theme: PropTypes.object,
    post: PropTypes.object.isRequired
}

MobilePersonMarqueeInfo.defaultProps = {
    theme: {},
}

export default MobilePersonMarqueeInfo