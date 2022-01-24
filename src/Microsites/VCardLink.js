import axios          from 'axios'
import idx            from 'idx'
import PropTypes      from 'prop-types'
import React, {
    memo,
    useEffect,
    useMemo
}                     from 'react'
import {
    connect,
    useSelector
}                     from 'react-redux'
import {
    STORE_VCARD,
    STORE_VCARD_PHOTODATA
}                     from '../redux/reducers'
import {
    getCurrentPost,
    mobileFlag
}                     from '../redux/selectors'
import {
    composePersonTitle,
    dataUriToBlob
}                     from '../utils/helpers'
import {
    stripSlashes
} from '../utils/url'
import vCard          from '../utils/vCard'
import {user}         from '../variables/iconLibrary'
import PersonIconLink from './PersonIconLink'

/**
 * Generates vCard data uri for client-side file download
 * First, it checks if the post object has the vcard already stored
 * If not, we fetch the headshot thumbnail if it exists
 * Once the photo has been resolved, then the vcard is constructed
 * Last, the vcard is added to the redux store so that no requests are repeated
 */
const VCardLink = memo(({parentPost, dispatch, theme, config}) => {
    const isMobile = useSelector(mobileFlag)

    const downloadCardUri = useMemo(() => {
        return !parentPost.vcard || navigator.msSaveBlob ? '#' : parentPost.vcard
    }, [parentPost.vcard, navigator.msSaveBlob])

    const downloadCardFilename = useMemo(() => {
        return parentPost.slug && `${stripSlashes(parentPost.slug)}.vcf`
    }, [parentPost.slug])

    useEffect(() => {
        // Only generate the data-uri once after vcardPhotoData has been processed.
        if (!parentPost.vcard && parentPost.hasOwnProperty('vcardPhotoData')) {
            let vcard = new vCard()

            vcard.addName(parentPost.last_name, parentPost.first_name, parentPost.middle_initial, '', parentPost.suffix)
            vcard.addCompany(config.firmName)
            vcard.addURL(`https://${config.frontendDomain}${parentPost.slug}`, 'WORK')
            vcard.addJobtitle(composePersonTitle(parentPost))

            parentPost.email && vcard.addEmail(parentPost.email)
            parentPost.vcardPhotoData && vcard.setProperty('photo', 'PHOTO;ENCODING=BASE64;TYPE=JPG', parentPost.vcardPhotoData)
            parentPost.vcard_notes && vcard.addNote(parentPost.vcard_notes)

            let office = parentPost.office_location && parentPost.office_location[0]
            if (office) {
                vcard.addPhoneNumber(office.office_phone, 'WORK')
                vcard.addAddress(office.post_title, office.extended_address, office.street_address, office.address_locality, office.address_region, office.postal_code, 'USA')
                if (office.office_fax) {
                    vcard.addPhoneNumber(office.office_fax, 'FAX')
                }
            }

            parentPost.alternate_phone_1 && vcard.addPhoneNumber(parentPost.alternate_phone_1, 'WORK')
            parentPost.is_mobile_public && parentPost.alternate_phone_2 && vcard.addPhoneNumber(parentPost.alternate_phone_2, 'CELL')

            let downloadUrl = navigator.msSaveBlob
                ? dataUriToBlob(vcard.getOutput())
                : `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard.getOutput())}`

            dispatch({
                type: STORE_VCARD,
                slug: parentPost.slug,
                vcard: downloadUrl
            })
        }
    }, [parentPost, config, dispatch])

    useEffect(() => {
        if (!parentPost.hasOwnProperty('vcardPhotoData')) {
            if (parentPost.headshot_photo?.url) {
                axios.get(parentPost.headshot_photo.url, {
                    responseType: 'arraybuffer'
                })
                    .then(response => {
                        let photoData = new Buffer(response.data).toString('base64')

                        dispatch({
                            type: STORE_VCARD_PHOTODATA,
                            slug: parentPost.slug,
                            vcardPhotoData: photoData
                        })
                    })
                    .catch(error => dispatch({
                        type: STORE_VCARD_PHOTODATA,
                        slug: parentPost.slug,
                        vcardPhotoData: false
                    }))
            } else {
                dispatch({
                    type: STORE_VCARD_PHOTODATA,
                    slug: parentPost.slug,
                    vcardPhotoData: false
                })
            }
        }
    }, [parentPost, dispatch])

    return (
        <PersonIconLink
            icon={user}
            url={downloadCardUri} // Used by all browsers except for IE11
            download={downloadCardFilename}
            title="Download My vCard"
            onClick={navigator.msSaveBlob ? () => navigator.msSaveBlob(parentPost.vcard, `${parentPost.slug}.vcf`) : null} // Used by IE11 only
            style={{cursor: 'pointer'}}
            children={isMobile && ('Download My vCard')}
            theme={{...theme}}
        />
    )
})

VCardLink.displayName = 'VCardLink'

VCardLink.propTypes = {
    parentPost: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}

VCardLink.defaultProps = {
    theme: {}
}

const mapStateToProps = state => ({
    parentPost: idx(getCurrentPost(state), _ => _.parentPost),
    config: state.site.config
})

export default connect(mapStateToProps)(VCardLink)