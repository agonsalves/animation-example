import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H1                        from '../Basic/H1'
import RichText                  from '../Basic/RichText'
import {pageTitleInContentStyle} from '../themes/elements'
import {
    customPageDescription,
    postContentStyle
}                                from '../themes/layout'
import {isSubPage}               from '../utils/flags'

const GenericPageTemplate = ({post}) =>
    <Div theme={postContentStyle}>
        {isSubPage(post) && (
            <H1 theme={pageTitleInContentStyle}>{post.post_title}</H1>
        )}
        <RichText
            theme={post.parentPost.post_name === 'diversity' ? customPageDescription : {}}
            children={post.full_content}
        />
    </Div>

GenericPageTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default GenericPageTemplate