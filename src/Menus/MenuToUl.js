import PropTypes     from 'prop-types'
import React, {memo} from 'react'
import Ul            from '../Basic/Ul'
import MenuListItem  from './MenuListItem'

const MenuToUl = memo(({menu, post, theme}) =>
    <Ul theme={theme}>
        {menu.map(item =>
            <MenuListItem
                key={item.ID}
                item={item}
                theme={theme}
                className={item.classes}
                post={post}
            />
        )}
    </Ul>
)

MenuToUl.displayName = 'MenuToUl'

MenuToUl.propTypes = {
    menu: PropTypes.array.isRequired,
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

MenuToUl.defaultProps = {
    theme: {
        listItem: {},
        link: {},
        nextLevel: {},
    },
}

export default MenuToUl