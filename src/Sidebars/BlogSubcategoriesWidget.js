import idx                  from 'idx'
import PropTypes            from 'prop-types'
import React, {
    memo,
    useContext
}                           from 'react'
import H3                   from '../Basic/H3'
import Icon                 from '../Basic/Icon'
import Li                   from '../Basic/Li'
import Ul                   from '../Basic/Ul'
import {PostsFilterContext} from '../Containers/BlogPostsFilter'
import LinkSwitch           from '../Elements/LinkSwitch'
import {
    blogSubCategoryItemStyle,
    blogSubCategoryStyle
}                           from '../themes/blogs'
import {widgetTitleStyle}   from '../themes/sidebars'
import {circle}             from '../variables/iconLibrary'
import Widget               from './Widget'

const BlogSubcategoriesWidget = memo(({post}) => {
    const {postsFilter} = useContext(PostsFilterContext)
    const mainCategory = idx(post, _ => _.associated_blog_category)[0]
    const subCategories = mainCategory.children

    return (
        !!subCategories && (
            <Widget>
                <H3 theme={widgetTitleStyle}>{`${post.post_title} Subcategories`}</H3>
                <Ul theme={blogSubCategoryStyle}>
                    {subCategories.map((category, index) =>
                        <Li key={index} theme={blogSubCategoryItemStyle}>
                            <Icon icon={circle} theme={blogSubCategoryItemStyle.icon}/>
                            <LinkSwitch
                                type="nav"
                                theme={blogSubCategoryItemStyle.name}
                                className={category.id === postsFilter ? 'active' : ''}
                                url={post.key + `#${category.id}`}
                                children={category.term}
                            />
                        </Li>
                    )}
                </Ul>
            </Widget>
        )
    )
})

BlogSubcategoriesWidget.displayName = 'BlogSubcategoriesWidget'

BlogSubcategoriesWidget.propTypes = {
    post: PropTypes.object.isRequired,
}


export default BlogSubcategoriesWidget
