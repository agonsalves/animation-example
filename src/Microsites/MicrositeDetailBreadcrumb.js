import PropTypes                        from 'prop-types'
import React                            from 'react'
import LinkSwitch                       from '../Elements/LinkSwitch'
import {micrositeDetailBreadcrumbStyle} from '../themes/microsites'
import {pathnameToArray}                from '../utils/url'

const MicrositeDetailBreadcrumb = ({children, slug, theme}) =>
    <LinkSwitch
        url={`/${pathnameToArray(slug)[0]}/${pathnameToArray(slug)[1]}`}
        theme={{...micrositeDetailBreadcrumbStyle, ...theme}}
        children={children || pathnameToArray(slug)[1]}
    />

MicrositeDetailBreadcrumb.propTypes = {
    theme: PropTypes.object,
    slug: PropTypes.string.isRequired
}

MicrositeDetailBreadcrumb.defaultProps = {
    theme: {},
}

export default MicrositeDetailBreadcrumb