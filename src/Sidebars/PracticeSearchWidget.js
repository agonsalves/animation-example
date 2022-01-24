import PropTypes                   from 'prop-types'
import React                       from 'react'
import PracticeSearchForm          from '../Forms/PracticeSearchForm'
import {practiceSearchWidgetStyle} from '../themes/sidebars'
import Widget                      from './Widget'

const PracticeSearchWidget = ({theme}) =>
	<Widget theme={{...practiceSearchWidgetStyle, ...theme}}>
		<PracticeSearchForm hasButton={true} theme={{...practiceSearchWidgetStyle}}/>
	</Widget>

PracticeSearchWidget.propTypes = {
	theme: PropTypes.object
}

PracticeSearchWidget.defaultProps = {
	theme: {
		field: {
			icon: {},
			fieldOuter: {}
		},
		button: {},
	}
}

export default PracticeSearchWidget