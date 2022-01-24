import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import EmailLink                 from '../Basic/EmailLink'
import H1                        from '../Basic/H1'
import Img                       from '../Basic/Img'
import LinkSwitch                from '../Elements/LinkSwitch'
import {pageTitleInContentStyle} from '../themes/elements'
import {postContentStyle}        from '../themes/layout'
import {leadershipStyle}         from '../themes/pageLeadership'

const LeadershipTemplate = ({post}) =>
    <Div theme={postContentStyle}>
        <H1 theme={pageTitleInContentStyle}>{post.post_title}</H1>
        {post.executives && (
            <Div theme={leadershipStyle.executives}>
                {post.executives.map((executive, index) =>
                    <LinkSwitch
                        key={`executiveLink-${index}`}
                        url={executive.link}
                        theme={leadershipStyle.executives.item}
                    >
                        <Div key={`executive-${index}`}>
                            {executive.image && (
                                <Img theme={leadershipStyle.executives.image} image={executive.image}/>
                            )}
                            <Div theme={leadershipStyle.executives.name}>{executive.name}</Div>
                            <Div theme={leadershipStyle.executives.title}>{executive.title}</Div>
                        </Div>
                    </LinkSwitch>
                )}
            </Div>
        )}
        {post.members && (
            <Div theme={leadershipStyle.members}>
                {post.members.map((member, index) =>
                    <Div key={`member-${index}`} theme={leadershipStyle.members.item} className="item">
                        {member.image && (
                            <Img image={member.image} theme={leadershipStyle.members.image} />
                        )}
                        <Div theme={leadershipStyle.members.name}>{member.name}</Div>
                        <Div theme={leadershipStyle.members.title}>{member.title}</Div>
                        <EmailLink email={member.email_link} theme={leadershipStyle.members.email}>Email</EmailLink>
                    </Div>
                )}
            </Div>
        )}
    </Div>

LeadershipTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default LeadershipTemplate