import PropTypes                from 'prop-types'
import React                    from 'react'
import Div                      from '../Basic/Div'
import {predictiveHeadingStyle} from '../themes/predictive'

const PredictiveSectionHeading = ({section, theme}) =>
    <Div
        theme={{...predictiveHeadingStyle, ...theme}}
        children={section.title}
    />

PredictiveSectionHeading.propTypes = {
    section: PropTypes.object.isRequired,
    theme: PropTypes.object
}

PredictiveSectionHeading.defaultProps = {
    theme: {}
}

export default PredictiveSectionHeading