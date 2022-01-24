import PropTypes               from 'prop-types'
import styled                  from 'styled-components/macro'
import {archiveDetailTopStyle} from '../themes/archives'
import {themer}                from '../utils/themer'

const ArchiveDetailTopSection = styled.header`${props => themer({...archiveDetailTopStyle, ...props.theme})}`

ArchiveDetailTopSection.propTypes = {
    theme: PropTypes.object,
}

export default ArchiveDetailTopSection