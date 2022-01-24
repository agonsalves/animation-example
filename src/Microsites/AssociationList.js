import PropTypes                 from 'prop-types'
import React                     from 'react'
import BulletedList              from '../Basic/BulletedList'
import LinkSwitch                from '../Elements/LinkSwitch'
import {
    bioInfoStyle,
    personAssociationsStyle
} from '../themes/microsites'

const AssociationList = ({children}) =>
    <BulletedList>
        {children.map(item =>
            <li key={item.id}>
                <LinkSwitch
                    url={item.slug}
                    theme={{...personAssociationsStyle, ...bioInfoStyle.listItem}}
                    children={item.post_title}
                />
            </li>
        )}
    </BulletedList>


AssociationList.propTypes = {
    theme: PropTypes.object
}

export default AssociationList