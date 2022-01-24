import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H2                        from '../Basic/H2'
import H3                        from '../Basic/H3'
import RichText                  from '../Basic/RichText'
import MicrositeCaseStudyListing from '../Microsites/MicrositeCaseStudyListing'
import {postContentStyle}        from '../themes/layout'
import {micrositePageTitleStyle} from '../themes/microsites'
import {plural}                  from '../utils/helpers'

const MicrositePage = ({post}) =>
    <Div theme={postContentStyle}>
        <H2 theme={micrositePageTitleStyle}>{post.post_title}</H2>
        <RichText>{post.full_content}</RichText>
        {post.case_studies && (
            <>
                <H3>{plural('case-study')}</H3>
                {post.case_studies.map(item =>
                    <MicrositeCaseStudyListing key={item.id} post={item}/>
                )}
            </>
        )}
    </Div>

MicrositePage.propTypes = {
    post: PropTypes.object.isRequired,
}

export default MicrositePage