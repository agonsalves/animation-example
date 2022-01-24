import PropTypes                   from 'prop-types'
import React                       from 'react'
import Div                         from '../Basic/Div'
import Span                        from '../Basic/Span'
import {blogPostRelatedItemsStyle} from '../themes/blogs'
import {intersperse}               from '../utils/helpers'
import LinkSwitch                  from './LinkSwitch'

const BlogPostRelatedItems = ({posts, title}) =>
    <Div theme={blogPostRelatedItemsStyle}>
        <Span theme={blogPostRelatedItemsStyle.title}>{title}: </Span>
        {intersperse(posts.map((post, index) =>
            <LinkSwitch
                key={`related_content_${index}`}
                url={post.slug}
                theme={blogPostRelatedItemsStyle.link}
                children={post.post_title}>
            </LinkSwitch>), ', ')}
    </Div>

BlogPostRelatedItems.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default BlogPostRelatedItems