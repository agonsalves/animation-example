import PropTypes            from 'prop-types'
import React                from 'react'
import Div                  from '../Basic/Div'
import Icon                 from '../Basic/Icon'
import {officeListingStyle} from '../themes/pages'
import {triangle}           from '../variables/iconLibrary'
import LinkSwitch           from './LinkSwitch'

const OfficeListing = ({office, theme}) =>
    <LinkSwitch
        url={office.slug}
        theme={{...officeListingStyle, ...theme}}
    >
        <Div theme={{...officeListingStyle.panelName, ...theme.panelName}}>
            {office.address_locality}, {office.address_region}
        </Div>
        <Div theme={{...officeListingStyle.address, ...theme.address}}>
            <Div children={office.street_address}/>
            <Div children={office.extended_address}/>
            <Div children={`${!!office.address_locality ? office.address_locality : ''},
            ${!!office.address_region ? office.address_region : ''} ${!!office.postal_code ? office.postal_code : ''}`}/>

        </Div>
        <Div
            theme={{...officeListingStyle.phone, ...theme.phone}}
            children={office.telephone}
        />
        <Div theme={{...officeListingStyle.button, ...theme.button}}>
            More
            <Icon theme={{...officeListingStyle.icon, ...theme.icon}} icon={triangle}/>
        </Div>
    </LinkSwitch>

OfficeListing.propTypes = {
    office: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

OfficeListing.defaultProps = {
    theme: {},
}

export default OfficeListing