import PropTypes          from 'prop-types'
import React              from 'react'
import Div                from '../Basic/Div'
import RichText           from '../Basic/RichText'
import OfficeListing      from '../Elements/OfficeListing'
import {postContentStyle} from '../themes/layout'
import {contactUsStyle}   from '../themes/pages'

const ContactUsTemplate = ({post}) =>
    <Div theme={postContentStyle}>
        <RichText theme={contactUsStyle.description}>{post.full_content}</RichText>
        {post.office_locations && (
            <Div theme={contactUsStyle.wrapper}>
                {post.office_locations.map(office =>
                    <OfficeListing key={office.id} office={office} theme={contactUsStyle.officeListing}/>
                )}
            </Div>
        )}
    </Div>

ContactUsTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default ContactUsTemplate