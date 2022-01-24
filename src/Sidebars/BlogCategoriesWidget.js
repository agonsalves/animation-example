import PropTypes          from 'prop-types'
import React              from 'react'
import H3                 from '../Basic/H3'
import BlogCategories     from '../Elements/BlogCategories'
import {widgetTitleStyle} from '../themes/sidebars'

const BlogCategoriesWidget = props =>
    <aside>
        <H3 theme={widgetTitleStyle}>Categories</H3>
        <BlogCategories {...props}/>
    </aside>

BlogCategoriesWidget.propTypes = {
    categories: PropTypes.array.isRequired
}

export default BlogCategoriesWidget