import PropTypes                 from 'prop-types'
import React, {
    memo,
    useContext,
    useState
}                                from 'react'
import Icon                      from '../Basic/Icon'
import Li                        from '../Basic/Li'
import MotionDiv                 from '../Basic/MotionDiv'
import Ul                        from '../Basic/Ul'
import {PostsFilterContext}      from '../Containers/BlogPostsFilter'
import LinkSwitch                from '../Elements/LinkSwitch'
import {mobileBlogMicrositeMenu} from '../themes/menus'
import {
    hidden,
    relative
}                                from '../utils/themer'
import {triangle}                from '../variables/iconLibrary'

const MobileBlogMicrositeSubMenu = memo(({post, page}) => {
    const categoryPages = post.parentPost.microsite_pages.filter(p => p.page_template === "blog_category")
    const categoryPagesWithChildren = categoryPages.filter(p => p.associated_blog_category && p.associated_blog_category[0].hasOwnProperty('children'))
    const subCategories = page.associated_blog_category[0].hasOwnProperty('children') && page.associated_blog_category[0].children
    const {applyPostsFilter} = useContext(PostsFilterContext)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <MotionDiv
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={{
                open: {height: 'auto', overflow: 'visible'},
                closed: {height: 30, overflow: hidden, position: relative,}
            }}
            transition={{ease: 'easeOut'}}
        >
            <LinkSwitch
                url=""
                children={page.post_title}
                theme={mobileBlogMicrositeMenu.linkItem}
                onClick={() => setIsOpen(!isOpen)}
            />
            <Icon
                icon={triangle}
                theme={{
                    ...mobileBlogMicrositeMenu.subListIcon,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
                }}
            />
            <Ul theme={mobileBlogMicrositeMenu.subList}>
                <Li key="" theme={mobileBlogMicrositeMenu.subListItem}>
                    <LinkSwitch
                        type="nav"
                        url={page.slug}
                        onClick={() => applyPostsFilter(0)}
                        children="All"
                        theme={mobileBlogMicrositeMenu.subListLink}
                    />
                </Li>
                {!!subCategories && subCategories.map((category, index) =>
                    <Li key={index} theme={mobileBlogMicrositeMenu.subListItem}>
                        <LinkSwitch
                            type="nav"
                            url={categoryPagesWithChildren.find(p => p.associated_blog_category[0]
                                .children
                                .find(c => c.id === category.id))
                                .slug + `#${category.id}`
                            }
                            children={category.term}
                            theme={mobileBlogMicrositeMenu.subListLink}
                        />
                    </Li>
                )}
            </Ul>
        </MotionDiv>
    )
})

MobileBlogMicrositeSubMenu.propTypes = {
    post: PropTypes.object.isRequired,
    page: PropTypes.object.isRequired
}

export default MobileBlogMicrositeSubMenu