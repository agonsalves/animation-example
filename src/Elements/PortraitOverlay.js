import PropTypes  from 'prop-types'
import React, {memo}      from 'react'
import Div        from '../Basic/Div'
import {absolute} from '../utils/themer'

const PortraitOverlay = memo(({theme}) =>
    <Div
        theme={{
            background: 'linear-gradient(160deg, rgba(34,34,34,0) 0%, rgba(34,34,34,0) 20%, rgba(34,34,34,1) 50%)',
            position: absolute,
            width: 400,
            height: 600,
            left: '100%',
            after: {
                content: '""',
                width: 400,
                backgroundColor: '#222',
                display: 'block',
                position: absolute,
                top: '100%',
                height: '10000%'
            }
        }}
    />
)

PortraitOverlay.displayName = 'PortraitOverlay'

PortraitOverlay.propTypes = {
    theme: PropTypes.object,
}

PortraitOverlay.defaultProps = {
    theme: {},
}

export default PortraitOverlay