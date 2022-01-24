import PropTypes                  from 'prop-types'
import React, {memo, useState}              from 'react'
import Div                        from '../Basic/Div'
import H3                         from '../Basic/H3'
import Icon                       from '../Basic/Icon'
import Li                         from '../Basic/Li'
import MotionDiv                  from '../Basic/MotionDiv'
import Ul                         from '../Basic/Ul'
import LinkSwitch                 from '../Elements/LinkSwitch'
import {mobileBlogMicrositeMenu}  from '../themes/menus'
import {hidden}                   from '../utils/themer'
import withToggle                 from '../utils/withToggle'
import {triangle}                 from '../variables/iconLibrary'
import MobileBlogMicrositeSubMenu from './MobileBlogMicrositeSubMenu'

const MobileBlogMicrositeMenu = memo(({post, isOpen}) => {
    const blogMicrositePages = post.parentPost.microsite_pages
    const categoryPages = post.parentPost.microsite_pages.filter(page => page.page_template === 'blog_category').slice(0, 6)
    const categoryPagesDropDown = post.parentPost.microsite_pages.filter(page => page.page_template === 'blog_category').slice(6)
    const customPages = post.parentPost.microsite_pages.filter(page => page.page_template === 'custom')
    const [isSubMenuOpen, setSubMenuOpen] = useState(false)
    const subMenuVariants = {
        initial: {
            height: 0,
            transition: {
                duration: .5,
                ease: 'easeIn'
            }
        },
        animate: {
            height: 'auto',
            transition: {
                duration: .5,
                ease: 'easeOut'
            }
        }
    }

    return (
        <MotionDiv
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={{
                open: {height: 'auto', overflow: 'visible'},
                closed: {height: 50, overflow: hidden}
            }}
            transition={{ease: 'easeOut'}}
            theme={mobileBlogMicrositeMenu.navigate}
        >
            <Div theme={!isOpen
                ? {...mobileBlogMicrositeMenu.toggle}
                : {...mobileBlogMicrositeMenu.toggle, ...mobileBlogMicrositeMenu.toggle.open}}
            >
                <Icon icon={triangle} theme={!isOpen
                    ? {...mobileBlogMicrositeMenu.icon}
                    : {...mobileBlogMicrositeMenu.icon, ...mobileBlogMicrositeMenu.icon.open}}
                />
                <span>Navigate</span>
            </Div>
            {!!blogMicrositePages && (
                <Div theme={mobileBlogMicrositeMenu.navigate.menu}>
                    {!!categoryPages && (
                        <Div theme={mobileBlogMicrositeMenu.topics}>
                            <H3 theme={mobileBlogMicrositeMenu.heading}>Topics</H3>
                            <Ul theme={mobileBlogMicrositeMenu.list}>
                                {categoryPages.map(page =>
                                    <Li key={page.id} theme={mobileBlogMicrositeMenu.listItem}>
                                        {(!!page.hasOwnProperty('associated_blog_category') && (
                                            <MobileBlogMicrositeSubMenu
                                                post={post}
                                                page={page}
                                                panelName="mobile-blog-microsite-submenu"
                                            />
                                        )) || (
                                            <LinkSwitch url={page.slug}
                                                        children={page.post_title}
                                                        theme={mobileBlogMicrositeMenu.linkItem}/>
                                        )}
                                    </Li>
                                )}
                                {categoryPagesDropDown.length > 0 && (
                                    <>
                                        <Li theme={{...mobileBlogMicrositeMenu.listItem, ...mobileBlogMicrositeMenu.moreButton}}>
                                            <LinkSwitch
                                                url=""
                                                children={'More'}
                                                theme={{...mobileBlogMicrositeMenu.linkItem}}
                                                onClick={() => setSubMenuOpen(!isSubMenuOpen)}
                                            />
                                            <Icon
                                                icon={triangle}
                                                theme={{
                                                    ...mobileBlogMicrositeMenu.subListIcon,
                                                    transform: isSubMenuOpen ? 'rotate(180deg)' : 'rotate(0)'
                                                }}
                                            />
                                        </Li>
                                        <MotionDiv
                                            variants={subMenuVariants}
                                            initial="initial"
                                            animate={isSubMenuOpen ? 'animate' : 'initial'}
                                            theme={{overflow: 'hidden'}}
                                        >
                                            {categoryPagesDropDown.map(page =>
                                                <Li key={page.id} theme={mobileBlogMicrositeMenu.listItem}>
                                                    {(!!page.hasOwnProperty('associated_blog_category') && (
                                                        <MobileBlogMicrositeSubMenu
                                                            post={post}
                                                            page={page}
                                                            panelName="mobile-blog-microsite-submenu"
                                                        />
                                                    )) || (
                                                        <LinkSwitch url={page.slug}
                                                                    children={page.post_title}
                                                                    theme={mobileBlogMicrositeMenu.linkItem}/>
                                                    )}
                                                </Li>
                                            )}
                                        </MotionDiv>

                                    </>
                                )}

                            </Ul>
                        </Div>
                    )}
                    {customPages.length > 0 && (
                        <Div theme={mobileBlogMicrositeMenu.pages}>
                            <H3 theme={mobileBlogMicrositeMenu.heading}>Pages</H3>
                            <Ul theme={mobileBlogMicrositeMenu.list}>
                                {customPages.map(page =>
                                    <Li key={page.id} theme={mobileBlogMicrositeMenu.listItem}>
                                        <LinkSwitch
                                            url={page.slug}
                                            children={page.post_title}
                                            theme={mobileBlogMicrositeMenu.linkItem}/>
                                    </Li>
                                )}
                            </Ul>
                        </Div>
                    )}
                </Div>
            )}
        </MotionDiv>
    )
})

MobileBlogMicrositeMenu.propTypes = {
    post: PropTypes.object.isRequired,
    panelName: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired
}

MobileBlogMicrositeMenu.displayName = 'MobileBlogMicrositeMenu'

export default withToggle(MobileBlogMicrositeMenu)