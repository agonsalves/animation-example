import PropTypes                   from 'prop-types'
import React, {useState}           from 'react'
import Div                         from '../Basic/Div'
import H3                          from '../Basic/H3'
import Icon                        from '../Basic/Icon'
import BlogSearchForm              from '../Forms/BlogSearchForm'
import {mobileBlogCategoriesStyle} from '../themes/blogs'
import {widgetTitleStyle}          from '../themes/sidebars'
import {angleDown, angleUp}        from '../variables/iconLibrary'
import BlogCategories              from './BlogCategories'

const MobileBlogCategories = ({post}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Div>
            <Div
                onClick={() => setIsOpen(isOpen => !isOpen)}
                theme={mobileBlogCategoriesStyle}
            >
                {'Search & Categories'}
                <Icon icon={isOpen ? angleUp : angleDown} theme={mobileBlogCategoriesStyle.icon}/>
            </Div>
            {isOpen && (
                <>
                    <H3 theme={widgetTitleStyle}>Search Blog</H3>
                    <BlogSearchForm post={post}/>
                    {!!post.parentPost.related_categories && (
                        <BlogCategories categories={post.parentPost.related_categories}/>
                    )}
                </>
            )}
        </Div>
    )
}

MobileBlogCategories.propTypes = {
    post: PropTypes.object.isRequired
}

export default MobileBlogCategories