import PropTypes                  from 'prop-types'
import React                      from 'react'
import Div                        from '../Basic/Div'
import ButtonLarge                from '../Elements/ButtonLarge'
import FeaturedCaseStudy          from '../Elements/FeaturedCaseStudy'
import {featuredCaseStudiesStyle} from '../themes/archives'
import {postContentStyle}         from '../themes/layout'
import {plural}                   from '../utils/helpers'

const CaseStudiesListing = ({post}) =>
    <Div theme={postContentStyle}>
        <Div theme={featuredCaseStudiesStyle}>
            {post.featured_case_studies.map(item =>
                <FeaturedCaseStudy key={item.slug} post={item}/>
            )}
        </Div>
        <ButtonLarge
            url={`${post.slug}?search[post_type]=case-study`}
            label={`View All ${plural('case-study')}`}
        />
    </Div>

CaseStudiesListing.propTypes = {
    post: PropTypes.object.isRequired
}

export default CaseStudiesListing