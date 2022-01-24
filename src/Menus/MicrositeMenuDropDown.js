import {blogMicrositeMenuStyle, micrositeMenuStyle} from "../themes/menus";
import MicrositeNavLink from "./MicrositeNavLink";
import MotionDiv from "../Basic/MotionDiv";
import React from "react";
import Overlay from "../Elements/Overlay";
import Div from "../Basic/Div";

const MicrositeMenuDropDown = ({blogDropDown, isExpanded, post, theme}) => {
    const dropDownVariants = {
        initial: {
            height: '0',
            opacity: .3,
            transition: {
                duration: .5,
                ease: 'easeIn',
            }
        },
        animate: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: .5,
                ease: 'easeOut'
            }
        }
    }

    return (
        <MotionDiv
            variants={dropDownVariants}
            initial="initial"
            animate={isExpanded ? 'animate' : 'initial'}
            theme={blogMicrositeMenuStyle.subMenu}
        >
            {blogDropDown.map(item =>
                !item.hasOwnProperty('hide_from_navigation') && (
                    <Div
                        key={item.id}
                        theme={{...micrositeMenuStyle.item, ...blogMicrositeMenuStyle.subItem, ...theme.item}}
                    >
                        <MicrositeNavLink
                            url={item.slug}
                            microsite={post.slug}
                            post={post}
                            item={item}
                            theme={blogMicrositeMenuStyle.subMenuLink}
                        >
                            {item.post_title}
                        </MicrositeNavLink>
                        <Overlay isOpen={isExpanded} theme={{backgroundColor: 'rgba(255,255,255,0)', zIndex: -1}}/>
                    </Div>
                )
            )}
        </MotionDiv>
    )
}

export default MicrositeMenuDropDown