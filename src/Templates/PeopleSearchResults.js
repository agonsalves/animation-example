import idx                        from 'idx'
import PropTypes                  from 'prop-types'
import React                      from 'react'
import {useSelector}              from 'react-redux'
import connect                    from 'react-redux/es/connect/connect'
import Div                        from '../Basic/Div'
import SearchResults              from '../Elements/SearchResults'
import {mobileFlag}               from '../redux/selectors'
import {peopleSearchResultsStyle} from '../themes/elements'
import {postContentStyle}         from '../themes/layout'

const PeopleSearchResults = ({post}) => {
    const isMobile = useSelector(mobileFlag)

    return (
        <Div theme={{...postContentStyle, ...peopleSearchResultsStyle.container}}>
            <SearchResults
                hasClearResults={isMobile}
                post={post}
                theme={peopleSearchResultsStyle.pagination}
            />
        </Div>
    )
}

PeopleSearchResults.propTypes = {
    post: PropTypes.object
}

const mapStateToProps = ({router}, {post}) => ({
    query: idx(post, _ => _.search.query) || {}
})

export default connect(mapStateToProps)(PeopleSearchResults)