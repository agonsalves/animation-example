import PropTypes          from 'prop-types'
import React              from 'react'
import Div                from '../Basic/Div'
import H2                 from '../Basic/H2'
import PersonListing      from '../Microsites/PersonListing'
import {postContentStyle} from '../themes/layout'
import {
    micrositePageTitleStyle,
    micrositePeopleListingStyle
}                         from '../themes/microsites'

const MicrositePeople = ({post}) =>
    <Div theme={postContentStyle}>
        <H2 theme={micrositePageTitleStyle}>{post.post_title}</H2>
        {post.related_people && (
            <Div theme={micrositePeopleListingStyle}>
                {post.related_people.map(person =>
                    <PersonListing key={person.id} person={person} />
                )}
            </Div>
        )}
    </Div>

MicrositePeople.propTypes = {
    post: PropTypes.object.isRequired,
}

export default MicrositePeople