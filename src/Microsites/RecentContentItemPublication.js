import PropTypes     from 'prop-types'
import React         from 'react'
import Div           from '../Basic/Div'
import H3            from '../Basic/H3'
import Img           from '../Basic/Img'
import LinkSwitch    from '../Elements/LinkSwitch'
import FormattedDate from '../utils/date'

const RecentContentItemPublication = ({post, theme, slug}) =>
    <Div theme={theme}>
        {post.thumbnail_teaser && (
            <Div>
                <LinkSwitch url={slug}>
                    <Img theme={theme.image} src={post.thumbnail_teaser.url}/>
                </LinkSwitch>
            </Div>
        )}
        <Div>
            <LinkSwitch url={slug}>
                <H3 theme={theme.title}>{post.post_title}</H3>
            </LinkSwitch>
            {post.full_content && (
                <Div theme={theme.postContent}><FormattedDate date={post.date}/></Div>
            )}
        </Div>
    </Div>

RecentContentItemPublication.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
    slug: PropTypes.string
}

export default RecentContentItemPublication