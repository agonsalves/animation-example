import PropTypes           from 'prop-types'
import React               from 'react'
import {
    Marker,
    StaticGoogleMap
}                          from 'react-static-google-map'
import styled              from 'styled-components/macro'
import Div                 from '../Basic/Div'
import H1                  from '../Basic/H1'
import RichText            from '../Basic/RichText'
import NoCookiePlaceholder from '../Elements/NoCookiePlaceholder'
import {
    archiveDetailTitleStyle,
    officeDetailTitleStyle,
    officeDetailTopStyle
} from '../themes/archives'
import {postContentStyle}  from '../themes/layout'
import {themer}            from '../utils/themer'

const GoogleMap = styled(StaticGoogleMap)`${props => themer(props.theme)}`

export const getGoogleMapUrl = post => (`${post.street_address ? post.street_address : ''}
+${post.extended_address ? post.extended_address : ''}
+${post.address_locality ? post.address_locality : ''}
+${post.address_region ? post.address_region : ''}
+${post.postal_code ? post.address_region : ''}`).replace(/\s/g, "+");

const OfficeDetail = ({post}) =>
    <Div theme={postContentStyle}>
        <H1 theme={{...archiveDetailTitleStyle, ...officeDetailTitleStyle}}>{post.post_title}</H1>
        <Div theme={officeDetailTopStyle}>
            <NoCookiePlaceholder>
                <GoogleMap
                    theme={officeDetailTopStyle.googleMap}
                    size="640x400"
                    zoom={16}
                    apiKey="AIzaSyDaeBJgG1cLSilSaB7S5uMSQTpskoCkA1w"
                    width={640}
                    height={400}
                >
                    <Marker
                        location={getGoogleMapUrl(post)}
                    />
                </GoogleMap>
            </NoCookiePlaceholder>
        </Div>
        <RichText>{post.full_content}</RichText>
    </Div>

OfficeDetail.propTypes = {
    post: PropTypes.object.isRequired,
}

export default OfficeDetail