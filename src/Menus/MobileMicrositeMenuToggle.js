import PropTypes                        from 'prop-types'
import React                            from 'react'
import Div                              from '../Basic/Div'
import Icon                             from '../Basic/Icon'
import {mobileMicrositeMenuToggleStyle} from '../themes/menus'
import {angleDown}                      from '../variables/iconLibrary'

const MobileMicrositeMenuToggle = ({theme}) =>
    <Div
        theme={{...mobileMicrositeMenuToggleStyle, ...theme}}
        className="toggle"
    >
        <Icon theme={{...mobileMicrositeMenuToggleStyle.icon, ...theme.icon}} icon={angleDown}/>
    </Div>

MobileMicrositeMenuToggle.propTypes = {
    theme: PropTypes.object,
}

MobileMicrositeMenuToggle.defaultProps = {
    theme: {},
}

export default MobileMicrositeMenuToggle