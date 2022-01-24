import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H1                        from '../Basic/H1'
import Img                       from '../Basic/Img'
import RichText                  from '../Basic/RichText'
import ButtonSmall               from '../Elements/ButtonSmall'
import {pageTitleInContentStyle} from '../themes/elements'
import {postContentStyle}        from '../themes/layout'
import {careersStyle}            from '../themes/pages'
import {isSubPage}               from '../utils/flags'
import {triangle}                from '../variables/iconLibrary'

const CareersTemplate = ({post}) =>
    <Div theme={postContentStyle}>
        {isSubPage(post) && (
            <H1 theme={pageTitleInContentStyle}>{post.post_title}</H1>
        )}
        {post.description && (
            <RichText
                theme={isSubPage(post) ? careersStyle.description : careersStyle.mainDescription}
                children={post.description}
            />
        )}
        <Div theme={careersStyle.features}>
            {post.left_feature_image && post.left_feature_description && (
                <Div theme={careersStyle.feature}>
                    <Img image={post.left_feature_image} theme={careersStyle.feature.image}/>
                    <Div theme={careersStyle.feature.heading}>{post.left_feature_heading}</Div>
                    <Div theme={careersStyle.feature.description}>{post.left_feature_description}</Div>
                    {post.left_feature_link_url && (
                        <ButtonSmall
                            url={post.left_feature_link_url}
                            icon={triangle} children="Read More"
                            theme={careersStyle.feature.button}
                        />)
                    }
                </Div>
            )}
            {post.right_feature_image && post.right_feature_description && (
                <Div theme={careersStyle.feature}>
                    <Img image={post.right_feature_image} theme={careersStyle.feature.image}/>
                    <Div theme={careersStyle.feature.heading}>{post.right_feature_heading}</Div>
                    <Div theme={careersStyle.feature.description}>{post.right_feature_description}</Div>
                    {post.right_feature_link_url && (
                        <ButtonSmall
                            url={post.left_feature_link_url}
                            icon={triangle} children="Read More"
                            theme={careersStyle.feature.button}
                        />
                    )}
                </Div>
            )}
        </Div>
    </Div>

CareersTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CareersTemplate