import PropTypes                   from 'prop-types'
import React                       from 'react'
import Div                         from '../Basic/Div'
import Span                        from '../Basic/Span'
import {blogPostRelatedItemsStyle} from '../themes/blogs'
import {intersperse}               from '../utils/helpers'
import LinkSwitch                  from './LinkSwitch'

const BlogPostCategories = ({post}) => {
    const currentPostCategories = post.hasOwnProperty('bp_categories') && post.bp_categories
    const micrositeCategoryPages = post.parentPost.microsite_pages.filter(page => page.page_template === 'blog_category')

    return (
        <Div theme={blogPostRelatedItemsStyle}>
            <Span theme={blogPostRelatedItemsStyle.title}>File under: </Span>
            {intersperse(currentPostCategories.map(item =>
                <Span key={item.id}>
                    <LinkSwitch
                        key={item.id}
                        url={micrositeCategoryPages.find(page => page.associated_blog_category && page.associated_blog_category[0].id === item.id)?.slug ?? ''}
                        children={item.term}
                    /> {item.hasOwnProperty('children') && (
                    <>
                        ({intersperse(item.children.map(item =>
                        <LinkSwitch
                            key={item.id}
                            url=""
                            children={item.term}
                        />
                    ), ', ')})
                    </>
                )}
                </Span>
            ), ', ')}
        </Div>
    )
}


BlogPostCategories.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object
}

BlogPostCategories.defaultProps = {
    theme: {}
}

export default BlogPostCategories