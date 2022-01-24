import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H1                        from '../Basic/H1'
import Img                       from '../Basic/Img'
import RichText                  from '../Basic/RichText'
import {pageTitleInContentStyle} from '../themes/elements'
import {postContentStyle}        from '../themes/layout'
import {communityStyle}          from '../themes/pages'

const CommunityTemplate = ({post}) =>
    <Div theme={postContentStyle}>
        <H1 theme={pageTitleInContentStyle}>{post.post_title}</H1>
        <Div theme={communityStyle.topSection}>
            <RichText>{post.client_description}</RichText>
            {post.client_community_side_image && (
                <Div theme={communityStyle.rightColumn}>
                    <Img
                        theme={communityStyle.image}
                        image={post.client_community_side_image}
                    />
                    {post.client_community_side_image_caption && (
                        <Div theme={communityStyle.caption} children={post.client_community_side_image_caption}/>
                    )}
                </Div>
            )}
        </Div>
        {post.client_community_photos && (
            <Div theme={communityStyle.gallery}>
                {post.client_community_photos.map((photo, index) =>
                    <Div key={index} theme={communityStyle.gallery.item}>
                        <Img
                            theme={communityStyle.gallery.image}
                            image={photo.image}
                        />
                        <Div theme={communityStyle.gallery.caption} children={photo.caption}/>
                    </Div>
                )}
            </Div>
        )}
    </Div>

CommunityTemplate.propTypes = {
    post: PropTypes.object.isRequired
}

export default CommunityTemplate