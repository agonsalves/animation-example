import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H1                        from '../Basic/H1'
import H3                        from '../Basic/H3'
import Img                       from '../Basic/Img'
import RichText                  from '../Basic/RichText'
import ButtonSmall               from '../Elements/ButtonSmall'
import {pageTitleInContentStyle} from '../themes/elements'
import {postContentStyle}        from '../themes/layout'
import {socialImpactStyle}       from '../themes/pageSocialImpact'
import {triangle}                from '../variables/iconLibrary'

const SocialImpactTemplate = ({post}) =>
    <Div theme={{...postContentStyle, ...socialImpactStyle}}>
        <Div>
            <H1 theme={pageTitleInContentStyle}>{post.post_title}</H1>
            <RichText theme={socialImpactStyle.description}>{post.description}</RichText>
        </Div>
        <Div>
            <H3 theme={socialImpactStyle.proBono}>{post.pro_bono_heading}</H3>
            <RichText>{post.pro_bono_description}</RichText>
        </Div>
        {post.recent_cases && (
            <Div theme={socialImpactStyle.recentCasesWrapper}>
                <h4>Recent Cases</h4>
                <Div theme={socialImpactStyle.recentCases}>
                    {post.recent_cases.map((recentCase, index) =>
                        <Div key={`recent_case-${index}`} theme={socialImpactStyle.recentCase}>
                            {recentCase.image && (
                                <Img image={recentCase.image} theme={socialImpactStyle.recentCase.image}/>
                            )}
                            {recentCase.title && (
                                <Div theme={socialImpactStyle.recentCase.title}>{recentCase.title}</Div>
                            )}
                            {recentCase.link && (
                                <ButtonSmall
                                    url={recentCase.link}
                                    icon={triangle} children="View"
                                    theme={socialImpactStyle.recentCase.button}/>
                            )}
                        </Div>
                    )}
                </Div>
            </Div>
        )}
        {post.community_service_heading && post.community_service_description && (
            <Div theme={socialImpactStyle.communityService}>
                <Div>
                    <H3 theme={socialImpactStyle.communityService.heading}>{post.community_service_heading}</H3>
                    <RichText>{post.community_service_description}</RichText>
                </Div>
                {post.community_photos && (
                    <Div theme={socialImpactStyle.communityService.photos}>
                        {post.community_photos.map((photo, index) =>
                            <Div key={`community_photo${index}`} theme={socialImpactStyle.communityService.item}>
                                <Img image={photo.image} theme={socialImpactStyle.communityService.image}/>
                                <RichText
                                    theme={socialImpactStyle.communityService.description}
                                    children={photo.caption}
                                />
                            </Div>
                        )}
                    </Div>
                )}
            </Div>
        )}
    </Div>

SocialImpactTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default SocialImpactTemplate