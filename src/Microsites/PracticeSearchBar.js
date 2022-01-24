import PropTypes                from 'prop-types'
import React                    from 'react'
import Div                      from '../Basic/Div'
import {practiceSearchBarStyle} from '../themes/microsites'
import PracticeSearchForm       from '../Forms/PracticeSearchForm'

const PracticeSearchBar = ({theme}) =>
    <Div theme={{...practiceSearchBarStyle, ...theme}}>
        <Div theme={{...practiceSearchBarStyle.inner, ...theme.inner}}>
            <PracticeSearchForm hasButton={true} theme={practiceSearchBarStyle}/>
        </Div>
    </Div>

PracticeSearchBar.propTypes = {
    theme: PropTypes.object,
}

PracticeSearchBar.defaultProps = {
    theme: {},
}

export default PracticeSearchBar