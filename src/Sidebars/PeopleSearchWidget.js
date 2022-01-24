import PropTypes                 from 'prop-types'
import React                     from 'react'
import PeopleSearchForm          from '../Forms/PeopleSearchForm'
import {peopleSearchWidgetStyle} from '../themes/sidebars'
import Widget                    from './Widget'

const PeopleSearchWidget = ({theme, post}) =>
    <Widget theme={{...peopleSearchWidgetStyle, ...theme}}>
        <PeopleSearchForm panelName={'people-search'} isAdvanced={true} theme={peopleSearchWidgetStyle} post={post}/>
    </Widget>

PeopleSearchWidget.propTypes = {
    theme: PropTypes.object,
    post: PropTypes.object.isRequired
}

PeopleSearchWidget.defaultProps = {
    theme: {
        field: {
            icon: {},
            fieldOuter: {}
        },
        button: {},
    }
}

export default PeopleSearchWidget