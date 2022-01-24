import PropTypes            from 'prop-types'
import React, {memo}        from 'react'
import Div                  from '../Basic/Div'
import Li                   from '../Basic/Li'
import Ul                   from '../Basic/Ul'
import {micrositeMenuStyle} from '../themes/menus'
import {decodeEntities}     from '../utils/helpers'
import MicrositeNavLink     from './MicrositeNavLink'

const MicrositeMenu = memo(({post, theme}) =>
    <Div theme={micrositeMenuStyle}>
        <Ul theme={{...micrositeMenuStyle.list, ...theme.list}}>
            <Li theme={{...micrositeMenuStyle.item, ...theme.item}}>
                <MicrositeNavLink url={post.slug} microsite={post.slug}>
                    {post.post_type === 'person'
                        ? 'Biography'
                        : post.post_type === 'blogs'
                            ? 'All'
                            : 'Overview'
                    }
                </MicrositeNavLink>
            </Li>
            {post.microsite_pages && post.microsite_pages.map(item =>
                !item.hasOwnProperty('hide_from_navigation') &&
                (!item.hasOwnProperty('page') || parseInt(item.page) === 1) && (
                    <Li key={item.id} theme={{...micrositeMenuStyle.item, ...theme.item}}>
                        <MicrositeNavLink
                            url={item.slug}
                            microsite={post.slug}
                            post={post}
                            item={item}
                        >
                            {decodeEntities(item.post_title)}
                        </MicrositeNavLink>
                    </Li>
                )
            )}
        </Ul>
    </Div>
)

MicrositeMenu.displayName = 'MicrositeMenu'

MicrositeMenu.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

MicrositeMenu.defaultProps = {
    theme: {},
}

export default MicrositeMenu