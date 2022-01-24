import PropTypes             from 'prop-types'
import React                 from 'react'
import Img                   from '../Basic/Img'
import LinkSwitch            from './LinkSwitch'
import {archiveListingStyle} from '../themes/archives'

const ArchiveListingTeaserThumbnail = ({url, img, theme}) =>
    <LinkSwitch url={url} theme={{...theme.wrapper}}>
        <Img
            image={img}
            theme={{...archiveListingStyle.thumbnail, ...theme}}
        />
    </LinkSwitch>

ArchiveListingTeaserThumbnail.propTypes = {
    url: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

ArchiveListingTeaserThumbnail.defaultProps = {
    theme: {},
}

export default ArchiveListingTeaserThumbnail