import PropTypes               from 'prop-types'
import React, {memo}           from 'react'
import Div                     from '../Basic/Div'
import H3                      from '../Basic/H3'
import BlogSearchForm          from '../Forms/BlogSearchForm'
import {blogSearchWidgetStyle} from '../themes/blogs'
import {widgetTitleStyle}      from '../themes/sidebars'

const BlogSearchWidget = memo(({post}) =>
    <Div as="aside" theme={blogSearchWidgetStyle.aside}>
        <H3 theme={{...widgetTitleStyle, ...blogSearchWidgetStyle.heading}}>Search Blog</H3>
        <BlogSearchForm post={post}/>
    </Div>
)

BlogSearchWidget.displayName = 'BlogSearchWidget'

BlogSearchWidget.propTypes = {
    post: PropTypes.object.isRequired
}

export default BlogSearchWidget