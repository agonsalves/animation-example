import PropTypes               from 'prop-types'
import React, {memo}           from 'react'
import Div                     from '../Basic/Div'
import EmailLink               from '../Basic/EmailLink'
import PersonIconLinks         from '../Microsites/PersonIconLinks'
import PersonPhoneList         from '../Microsites/PersonPhoneList'
import {personInfoWidgetStyle} from '../themes/sidebars'
import {composePersonTitle}    from '../utils/helpers'
import Widget                  from './Widget'

const PersonInfoWidget = memo(({post}) =>
    <Widget theme={personInfoWidgetStyle}>
        <Div theme={personInfoWidgetStyle.name}>{post.post_title}</Div>
        <Div theme={personInfoWidgetStyle.title}>{composePersonTitle(post)}</Div>
        <EmailLink
            theme={personInfoWidgetStyle.email}
            email={post.email}
            title={`Send an email to ${post.post_title}`}
        />
        {post.office_location && (
            <PersonPhoneList post={post}/>
        )}
        <PersonIconLinks
            linkedInUrl={post.linkedin_url}
            twitterUrl={post.twitter_url}
            resume={post.resume}
        />
    </Widget>
)

PersonInfoWidget.displayName = 'PersonInfoWidget'

PersonInfoWidget.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PersonInfoWidget