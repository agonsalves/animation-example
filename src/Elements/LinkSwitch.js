import PropTypes       from 'prop-types'
import React, {memo}   from 'react'
import Anchor          from '../Basic/Anchor'
import NavigationLink  from '../Basic/NavigationLink'
import Span            from '../Basic/Span'
import StyledLink      from '../Basic/StyledLink'
import mouseOverDetect from '../utils/mouseOverDetect'
import {
    getPathnameFromUrl,
    getQueryStringFromUrl
}                      from '../utils/url'
import validURL        from '../utils/validURL'
import ExternalLink    from './ExternalLink'

/**
 * LinkSwitch determines if a provided URL is an internal or external link.
 * The Link component supplied by react-router is not designed to handle external links.
 * If the link is external, LinkSwitch returns a normal anchor tag instead of the router Link component
 */

const LinkSwitch = memo(({children, className, data, onClick, theme, title, type, url, target, download, ...props}) => {

    if (!url || url === '#')
        return <Span
            children={children}
            className={`${className} ${props.isActive ? 'active' : ''}`}
            onClick={onClick ? e => onClick(data, e) : null}
            theme={theme}
            title={title}
            type={type}
            {...props}
        />

    url = url.trim()

    // Convert local absolute URLs to relative URLs
    if (url && url.indexOf(process.env.REACT_APP_SITE_URL) === 0) {
        url = url.slice(process.env.REACT_APP_SITE_URL.length)
        if (!url.length)
            url = '/'
    }

    // Display normal anchor tag for external URL
    if (validURL.test(url) || download)
        return <ExternalLink
            children={children}
            className={className}
            url={url}
            theme={theme}
            title={title}
            onClick={onClick}
            target={target}
            download={download}
        />

    // Handle mail and tel links
    if (/mailto:.*/.test(url) || /tel:.*/.test(url))
        return <Anchor
            children={children}
            href={url}
            theme={theme}
            title={title}
        />

    // Use NavLink when linking a menu item
    if (type === 'nav')
        return <NavigationLink
            children={children}
            className={className}
            data={data}
            mouseOverDetect={mouseOverDetect}
            onClick={onClick}
            theme={theme}
            title={title}
            url={url}
            {...props}
        />

    // All relative URLs use the Link component
    return <StyledLink
        children={children}
        className={className}
        onMouseOut={() => mouseOverDetect.clear()}
        onMouseOver={() => mouseOverDetect(getPathnameFromUrl(url), getQueryStringFromUrl(url))}
        theme={theme}
        title={title}
        to={url}
    />
})

LinkSwitch.displayName = 'LinkSwitch'

LinkSwitch.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
    download: PropTypes.string
}

LinkSwitch.defaultProps = {
    theme: {},
    type: '',
}

export default LinkSwitch