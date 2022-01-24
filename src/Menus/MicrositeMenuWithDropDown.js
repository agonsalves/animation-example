import PropTypes from 'prop-types'
import React, {memo, useState} from 'react'
import Div from '../Basic/Div'
import Li from '../Basic/Li'
import Ul from '../Basic/Ul'
import {blogMicrositeMenuStyle, micrositeMenuStyle} from '../themes/menus'
import MicrositeNavLink from './MicrositeNavLink'
import LinkSwitch from "../Elements/LinkSwitch";
import {triangle} from "../variables/iconLibrary";
import Icon from "../Basic/Icon";
import MicrositeMenuDropDown from "./MicrositeMenuDropDown";

const MicrositeMenuWithDropDown = memo(({post, theme}) => {
        let blogMicrositeMenu = post.microsite_pages && post.microsite_pages.slice(0, 6)
        let blogDropDown = post.microsite_pages && post.microsite_pages.slice(6)
        const [isExpanded, setIsExpanded] = useState(false)

        return (
            <Div theme={{...micrositeMenuStyle, ...blogMicrositeMenuStyle}}>
                <Ul theme={{...micrositeMenuStyle.list, ...blogMicrositeMenuStyle.list, ...theme.list}}>
                    <Li theme={{...micrositeMenuStyle.item, ...blogMicrositeMenuStyle.item, ...theme.item}}>
                        <MicrositeNavLink url={post.slug} microsite={post.slug}>
                            All
                        </MicrositeNavLink>
                    </Li>
                    {blogMicrositeMenu && blogMicrositeMenu.map(item =>
                        !item.hasOwnProperty('hide_from_navigation') && (
                            <Li key={item.id}
                                theme={{...micrositeMenuStyle.item, ...blogMicrositeMenuStyle.item, ...theme.item}}>
                                <MicrositeNavLink
                                    url={item.slug}
                                    microsite={post.slug}
                                    post={post}
                                    item={item}
                                >
                                    {item.post_title}
                                </MicrositeNavLink>
                            </Li>
                        )
                    )}
                    {(blogDropDown && blogDropDown.length > 0) && (
                        <>
                            <Li
                                theme={{...micrositeMenuStyle.item, ...blogMicrositeMenuStyle.item, ...theme.item}}
                                onClick={() => setIsExpanded(flag => !flag)}
                            >
                                <LinkSwitch
                                    theme={{...micrositeMenuStyle.link, ...blogMicrositeMenuStyle.link((isExpanded))}}
                                    url=""
                                >
                                    More <Icon icon={triangle} theme={{...micrositeMenuStyle.dropDownIcon(isExpanded)}}/>
                                </LinkSwitch>
                                <MicrositeMenuDropDown
                                    isExpanded={isExpanded}
                                    blogDropDown={blogDropDown}
                                    theme={theme}
                                    post={post}
                                />
                            </Li>
                        </>
                    )}
                </Ul>
            </Div>
        )
    }
)

MicrositeMenuWithDropDown.displayName = 'MicrositeMenuWithDropDown'

MicrositeMenuWithDropDown.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

MicrositeMenuWithDropDown.defaultProps = {
    theme: {},
}

export default MicrositeMenuWithDropDown