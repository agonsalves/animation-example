import dayjs         from 'dayjs'
import PropTypes     from 'prop-types'
import React         from 'react'
import {connect}     from 'react-redux'
import Div           from '../Basic/Div'
import {footerStyle} from '../themes/footer'

const Copyright = ({theme, firmName}) =>
    <Div theme={{...footerStyle.copyright, ...theme}}>
        {`\u00A9 ${dayjs().format('YYYY')} ${firmName}`}
    </Div>

Copyright.propTypes = {
    theme: PropTypes.object,
}

Copyright.defaultProps = {
    theme: {},
}

const mapStatetoProps = ({site}) => ({
    firmName: site.config.firmName
})

export default connect(mapStatetoProps)(Copyright)