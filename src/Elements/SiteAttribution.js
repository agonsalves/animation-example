import React         from 'react'
import Span          from '../Basic/Span'
import PropTypes     from 'prop-types'
import {footerStyle} from '../themes/footer'

const SiteAttribution = ({theme}) =>
    <Span theme={{...footerStyle.attribution, ...theme}}>
        Attorney Advertising. The description of any individual representative matter does not imply that the same or similar results can be obtained for other clients in similar matters. Results will depend on the specific factual and legal circumstances of each client’s case.
    </Span>

SiteAttribution.propTypes = {
    theme: PropTypes.object
}

SiteAttribution.defaultProps = {
    theme: {}
}

export default SiteAttribution