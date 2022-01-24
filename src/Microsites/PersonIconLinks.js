import PropTypes              from 'prop-types'
import React, {memo}          from 'react'
import {useSelector}          from 'react-redux'
import Div                    from '../Basic/Div'
import {mobileFlag}           from '../redux/selectors'
import {personIconLinksStyle} from '../themes/microsites'
import {
    fileSolid,
    linkedinIn,
    twitter
}                             from '../variables/iconLibrary'
import PersonIconLink         from './PersonIconLink'
import VCardLink              from './VCardLink'

const PersonIconLinks = memo(({parentPost, theme}) => {
        const isMobile = useSelector(mobileFlag)

        return (
            <Div theme={{...personIconLinksStyle, ...theme}}>
                {parentPost.twitter_url && (
                    <PersonIconLink
                        theme={{...theme}}
                        icon={twitter}
                        url={parentPost.twitter_url}
                        title="Follow Me on Twitter"
                        children={isMobile && 'Follow Me On Twitter'}
                    />
                )}
                {parentPost.linkedin_url && (
                    <PersonIconLink
                        theme={{...theme}}
                        icon={linkedinIn}
                        url={parentPost.linkedin_url}
                        title="Join My LinkedIn Network"
                        children={isMobile && 'Join My LinkedIn Network'}
                    />
                )}
                <VCardLink parentPost={parentPost} theme={{...theme}}/>
                {parentPost.resume && (
                    <PersonIconLink
                        theme={{...theme}}
                        icon={fileSolid}
                        url={parentPost.resume}
                        title="Download My Bio"
                        children={isMobile && 'Download My Bio'}
                    />
                )}
            </Div>
        )
    }
)

PersonIconLinks.displayName = 'PersonIconLinks'

PersonIconLinks.propTypes = {
    parentPost: PropTypes.object.isRequired
}

PersonIconLinks.default = {
    theme: {}
}

export default PersonIconLinks