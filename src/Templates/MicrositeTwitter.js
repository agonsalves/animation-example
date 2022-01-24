import PropTypes              from 'prop-types'
import React                  from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
import Div                    from '../Basic/Div'
import H2                     from '../Basic/H2'
import RichText               from '../Basic/RichText'
import {postContentStyle}     from '../themes/layout'
import {
    micrositePageTitleStyle,
    twitterEmbedStyle
}                             from '../themes/microsites'

const getTwitterHandle = code => !!code && code.split('https://twitter.com/')[1].split('?')[0]

const MicrositeTwitter = ({post}) =>
    <Div theme={postContentStyle}>
        <H2 theme={micrositePageTitleStyle}>{post.post_title}</H2>
        {post.intro_text && (
            <RichText children={post.intro_text}/>
        )}
        {(post.twitter_widget_code && (
            <Div theme={twitterEmbedStyle}>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={getTwitterHandle(post.twitter_widget_code)}
                />
            </Div>
        ))}
    </Div>

MicrositeTwitter.propTypes = {
    post: PropTypes.object.isRequired,
}

export default MicrositeTwitter