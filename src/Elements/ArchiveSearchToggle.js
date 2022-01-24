import PropTypes           from 'prop-types'
import React, {useContext} from 'react'
import Div                 from '../Basic/Div'
import Icon                from '../Basic/Icon'
import {PanelToggle}       from '../Containers/PanelSwitch'
import {plural}            from '../utils/helpers'
import {triangle}          from '../variables/iconLibrary'

const ArchiveSearchToggle = ({isOpen, theme, postType}) => {
    const {closePanels} = useContext(PanelToggle)

    return (
        <Div theme={{...theme}}>
            <Div theme={{...theme.inner}} onClick={isOpen ? () => closePanels() : null}>
                <Icon
                    icon={triangle}
                    theme={{...theme.icon, transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)'}}
                />
                {`Search ${plural(postType)}`}
            </Div>
        </Div>
    )
}

ArchiveSearchToggle.propTypes = {
    isOpen: PropTypes.bool,
    postType: PropTypes.string.isRequired,
    theme: PropTypes.object,
}

ArchiveSearchToggle.defaultProps = {
    theme: {
        icon: {}
    }
}

export default ArchiveSearchToggle