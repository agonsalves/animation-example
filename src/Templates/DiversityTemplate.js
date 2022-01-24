import PropTypes          from 'prop-types'
import React              from 'react'
import Div                from '../Basic/Div'
import Img                from '../Basic/Img'
import RichText           from '../Basic/RichText'
import {postContentStyle} from '../themes/layout'
import {diversityStyle}   from '../themes/pages'

const DiversityTemplate = ({post}) =>
    <Div theme={{...postContentStyle, ...diversityStyle.wrapper}}>
        {post.diversity_description && (
            <RichText theme={diversityStyle.description}>{post.diversity_description}</RichText>
        )}
        {post.diversity_testimonial_image && post.diversity_testimonial_attribution && post.diversity_testimonial_quote && (
            <Div theme={diversityStyle.testimonial}>
                <Img image={post.diversity_testimonial_image} theme={diversityStyle.image}/>
                <Div theme={diversityStyle.quoteWrapper}>
                    <Div theme={diversityStyle.quote}>{post.diversity_testimonial_quote}</Div>
                    <Div theme={diversityStyle.attribution}>{post.diversity_testimonial_attribution}</Div>
                </Div>
            </Div>
        )}
        {post.diversity_description_continued && (
            <RichText theme={diversityStyle.continuedDescription}>{post.diversity_description_continued}</RichText>
        )}
    </Div>

DiversityTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default DiversityTemplate