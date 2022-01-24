import PropTypes              from 'prop-types'
import React                  from 'react'
import Div                    from '../Basic/Div'
import ButtonSmall            from '../Elements/ButtonSmall'
import {getGoogleMapUrl}      from '../Templates/OfficeDetail'
import {officeDetailTopStyle} from '../themes/archives'
import {triangle}             from '../variables/iconLibrary'
import Widget                 from './Widget'

const OfficeAddressWidget = ({post}) =>
    <Widget>
        <Div theme={officeDetailTopStyle.name}>Address</Div>
        <Div theme={officeDetailTopStyle.address}>
            <address>
                <div>{post.street_address}</div>
                {post.extended_address && (
                    <div>{post.extended_address}</div>
                )}
                <div>
                    {`${!!post.address_locality ? post.address_locality : ''},
                    ${!!post.address_region ? post.address_region : ''} ${!!post.postal_code ? post.postal_code : ''}`}
                </div>
            </address>
        </Div>
        <Div theme={officeDetailTopStyle.phone} children={post.telephone}/>
        <ButtonSmall
            url={`https://maps.google.com/?q=${getGoogleMapUrl(post)}`}
            label="View Google Map"
            theme={officeDetailTopStyle.button}
            icon={triangle}
        />
    </Widget>

OfficeAddressWidget.propTypes = {
    post: PropTypes.object.isRequired
}

export default OfficeAddressWidget