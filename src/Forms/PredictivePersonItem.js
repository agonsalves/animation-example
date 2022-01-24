import PropTypes               from 'prop-types'
import React                   from 'react'
import placeholderHeadshot     from '../assets/square-headshot-placeholder.png'
import Div                     from '../Basic/Div'
import Img                     from '../Basic/Img'
import {predictivePersonStyle} from '../themes/predictive'

const PredictivePersonItem = ({isHighlighted, photo, name, position, theme}) =>
    <Div
        theme={{...predictivePersonStyle, ...theme}}
        className={isHighlighted ? 'active' : ''}
    >
        <Img
            image={photo}
            placeholder={placeholderHeadshot}
            theme={{...predictivePersonStyle.image, ...theme.image}}
        />
        <Div theme={{...predictivePersonStyle.content, ...theme.content}}>
            <Div theme={{...predictivePersonStyle.name, ...theme.name}}>
                {name}
            </Div>
            <Div theme={{...predictivePersonStyle.title, ...theme.title}}>
                {position}
            </Div>
        </Div>
    </Div>

PredictivePersonItem.propTypes = {
    isHighlighted: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.object,
    position: PropTypes.string,
    theme: PropTypes.object,
}

PredictivePersonItem.defaultProps = {
    theme: {
        image: {},
        name: {},
        title: {}
    },
}

export default PredictivePersonItem