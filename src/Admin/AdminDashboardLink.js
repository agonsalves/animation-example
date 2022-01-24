import PropTypes        from 'prop-types'
import React            from 'react'
import Icon             from '../Basic/Icon'
import Ul               from '../Basic/Ul'
import LinkSwitch       from '../Elements/LinkSwitch'
import {adminBarStyles} from '../themes/admin'
import {caretDownSolid} from '../variables/iconLibrary'
import {clientName}     from '../variables/generalPosts'

const AdminDashboardLink = (adminUrl) => {
    const fullAdminUrl = adminUrl + '/cms/wp-admin/'

    return (
        <LinkSwitch
            url=""
            target="_self"
            onClick={(() => null)}
            theme={adminBarStyles.link}
        >
            <span>{clientName}</span>
            <Icon icon={caretDownSolid} theme={adminBarStyles.icon}/>
            <Ul theme={adminBarStyles.subMenu}>
                <LinkSwitch
                    theme={adminBarStyles.dashboard}
                    url={fullAdminUrl}
                    target="_self"
                    onClick={(() => null)}
                    children='Back to Admin'
                />
            </Ul>
        </LinkSwitch>
    )
}

AdminDashboardLink.propTypes = {
    adminUrl: PropTypes.string.isRequired,
}


export default AdminDashboardLink