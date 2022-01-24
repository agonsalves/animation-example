import PropTypes         from 'prop-types'
import React             from 'react'
import Div               from '../Basic/Div'
import EmailLink         from '../Basic/EmailLink'
import PhoneLink         from '../Basic/PhoneLink'
import {departmentStyle} from '../themes/pages'

const DepartmentalContact = ({department}) =>
    <Div theme={departmentStyle.contact}>
        {department.contact_type && (
            <Div theme={departmentStyle.contactType}>{department.contact_type}</Div>
        )}
        {department.person && (
            <Div theme={departmentStyle.person}>{department.person}</Div>
        )}
        {department.tel && (
            <PhoneLink theme={departmentStyle.phone} phone={department.tel}/>
        )}
        {department.email && (
            <EmailLink
                theme={departmentStyle.email}
                email={department.email}
                title={`Send an email to ${department.email}`}
            />
        )}
    </Div>

DepartmentalContact.propTypes = {
    department: PropTypes.object.isRequired
}

export default DepartmentalContact