import PropTypes           from 'prop-types'
import React               from 'react'
import Div                 from '../Basic/Div'
import Icon                from '../Basic/Icon'
import {headerToggleStyle} from '../themes/header'
import withToggle          from '../utils/withToggle'
import {hamburgerThin}     from '../variables/iconLibrary'

const HeaderPanelToggle = ({theme}) =>
    <Div theme={headerToggleStyle}>
        <Icon icon={hamburgerThin} theme={headerToggleStyle.icon}/>
    </Div>

HeaderPanelToggle.propTypes = {
    theme: PropTypes.object,
}

HeaderPanelToggle.defaultProps = {
    theme: {},
}

export default withToggle(HeaderPanelToggle)