import idx                     from 'idx'
import PropTypes               from 'prop-types'
import React                   from 'react'
import LinkSwitch              from '../Elements/LinkSwitch'
import {absoluteToRelativeUrl} from '../utils/url'
import Widget                  from './Widget'

const buildMenu = items =>
    <ul>
        {items.map(item =>
            <li key={item.ID}>
                <LinkSwitch
                    type="nav"
                    url={absoluteToRelativeUrl(item.url)}
                    children={item.title}
                />
                {item.items && buildMenu(item.items)}
            </li>
        )}
    </ul>

const MenuWidget = ({post}) =>
    <Widget>
        <nav>
            {idx(post, _ => buildMenu(_.menu_primary_sidebar.items))}
        </nav>
    </Widget>

MenuWidget.propTypes = {
    post: PropTypes.object.isRequired,
}

export default MenuWidget