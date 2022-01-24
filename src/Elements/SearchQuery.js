import PropTypes          from 'prop-types'
import React              from 'react'
import {searchQueryStyle} from '../themes/elements'
import Div                from '../Basic/Div'
import Span               from '../Basic/Span'

const SearchQuery = ({query, total, theme}) =>
    <Div theme={{...searchQueryStyle, ...theme}}>
        <em>
            {!isNaN(total) ? `${total} ` : ''}
            {!!query && 'Search'} Result{total !== 1 ? 's' : ''}
            {' '}
            {!!query && 'for:'}
        </em>
        {' '}
        <Span as="strong" theme={theme.query}>{query}</Span>
    </Div>

SearchQuery.propTypes = {
    query: PropTypes.string.isRequired,
    total: PropTypes.number,
    theme: PropTypes.object
}

SearchQuery.defaultProps = {
    theme: {},
}

export default SearchQuery