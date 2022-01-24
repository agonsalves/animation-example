import PropTypes             from 'prop-types'
import React                 from 'react'
import {archiveListingStyle} from '../themes/archives'
import Article               from '../Basic/Article'

const ArchiveListingWrapper = ({theme, children}) =>
	<Article theme={{...archiveListingStyle, ...theme}}>
		{children}
	</Article>

ArchiveListingWrapper.propTypes = {
	theme: PropTypes.object,
}

ArchiveListingWrapper.defaultProps = {
	theme: {},
}

export default ArchiveListingWrapper