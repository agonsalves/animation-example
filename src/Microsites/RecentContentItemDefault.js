import PropTypes  from 'prop-types'
import React      from 'react'
import Div        from '../Basic/Div'
import H3         from '../Basic/H3'
import Img        from '../Basic/Img'
import RichText   from '../Basic/RichText'
import LinkSwitch from '../Elements/LinkSwitch'
import {excerpt}  from '../utils/helpers'

const RecentContentItemDefault = ({post, theme, slug}) =>
    <Div theme={theme}>
        {post.thumbnail_teaser && (
            <Div>
                <LinkSwitch url={slug}>
                    <Img image={post.thumbnail_teaser} theme={theme.image} />
                </LinkSwitch>
            </Div>
        )}
        <LinkSwitch url={slug}>
            <H3 theme={theme.title}>{post.post_title}</H3>
        </LinkSwitch>
        {!post.thumbnail_teaser && post.full_content && (
            <RichText theme={theme.postContent}>{excerpt(post.full_content, 30) + '...'}</RichText>
        )}
    </Div>

RecentContentItemDefault.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
    slug: PropTypes.string
}

export default RecentContentItemDefault