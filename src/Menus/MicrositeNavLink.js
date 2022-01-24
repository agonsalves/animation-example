import PropTypes               from 'prop-types'
import React                   from 'react'
import {connect}               from 'react-redux'
import LinkSwitch              from '../Elements/LinkSwitch'
import {micrositeMenuStyle}    from '../themes/menus'
import {isCurrentBlogCategory} from '../utils/flags'
import slugify                 from '../utils/slugify'

const MicrositeNavLink = ({children, post, pathname, item, microsite, url, theme}) => {
    let match
    if(!!item) {
        if(item.hasOwnProperty('associated_blog_category')) {
            match = slugify(item.associated_blog_category[0].term)
        }
    }

    const isActive = pathname === url
        || (pathname.includes(url) && pathname.replace(url, '').startsWith('/') && url !== microsite)
        || isCurrentBlogCategory(post, pathname, item, microsite, url)
        || match === pathname.split("/").pop()

    return (
        <LinkSwitch
            theme={{...micrositeMenuStyle.link, ...theme}}
            url={url}
            type="nav"
            isActive={isActive}
            children={children}
        />
    )
}


MicrositeNavLink.propTypes = {
    url: PropTypes.string.isRequired,
    microsite: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    theme: PropTypes.object,
}

MicrositeNavLink.defaultProps = {
    theme: {},
}

const mapStateToProps = ({router}) => ({
    pathname: router.location.pathname
})

export default connect(mapStateToProps)(MicrositeNavLink)