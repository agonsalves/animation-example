import PropTypes from 'prop-types'
import React from 'react'
import BulletedList from '../Basic/BulletedList'
import Div from '../Basic/Div'
import H3 from '../Basic/H3'
import Icon from '../Basic/Icon'
import Li from '../Basic/Li'
import {resourcesStyle} from '../themes/archives'
import {getFilenameFromUrl} from '../utils/url'
import {file, globe} from '../variables/iconLibrary'
import LinkSwitch from './LinkSwitch'

const Resources = ({documents, links, theme}) =>
    <Div theme={{...resourcesStyle, ...theme}}>
        <H3 theme={{...resourcesStyle.heading, ...theme.heading}}>Resources</H3>
        <BulletedList theme={{...resourcesStyle.list, ...theme.list}}>
            {documents && documents.map((item, index) =>
                item.upload_doc && (
                    <Li key={index}>
                        <Icon icon={file} theme={{...resourcesStyle.icon, ...theme.icon}}/>
                        <LinkSwitch
                            url={item.upload_doc}
                            children={item.label_for_doc || getFilenameFromUrl(item.upload_doc)}
                        />
                    </Li>
                )
            )}
            {links && links.map((item, index) =>
                item.website_link && (
                    <Li key={index}>
                        <Icon icon={globe} theme={{...resourcesStyle.icon, ...resourcesStyle.icon.globe}}/>
                        <LinkSwitch
                            url={item.website_link}
                            children={item.label_for_link || item.website_link}
                        />
                    </Li>
                )
            )}
        </BulletedList>
    </Div>

Resources.propTypes = {
    documents: PropTypes.array,
    links: PropTypes.array,
    theme: PropTypes.object,
}

Resources.defaultProps = {
    theme: {
        heading: {}
    },
}

export default Resources