import PropTypes                 from 'prop-types'
import React, {memo}             from 'react'
import withToggle                from '../utils/withToggle'
import MobileMenu                from './MobileMenu'
import MobileMicrositeMenuToggle from './MobileMicrositeMenuToggle'

const MobileMicrositeMenu = memo(({parentPost, ...props}) => {
    const composeMenu = () => {
        let menu = []
        if (parentPost && parentPost.microsite_pages) {
            menu.push({
                ID: parentPost.id,
                title: parentPost.post_type === 'person' ? 'Biography' : 'Overview',
                url: parentPost.slug
            })
            parentPost.microsite_pages.map(item => {
                menu.push({
                    ID: item.id,
                    title: item.post_title,
                    url: item.slug
                })
                return null
            })
        }
        return menu
    }

    return (
        <>
            <MobileMicrositeMenuToggle {...props}/>
            <MobileMenu {...props} menu={composeMenu()}/>
        </>
    )
})

MobileMicrositeMenu.propTypes = {
    parentPost: PropTypes.object.isRequired,
    panelName: PropTypes.string.isRequired
}

MobileMicrositeMenu.displayName = 'MobileMicrositeMenu'

export default withToggle(MobileMicrositeMenu)