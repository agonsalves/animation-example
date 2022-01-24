import idx                   from 'idx'
import PropTypes             from 'prop-types'
import React                 from 'react'
import {connect}             from 'react-redux'
import {archiveListingStyle} from '../themes/archives'
import {isPeopleSearch}      from '../utils/flags'
import {
    isEmpty,
    plural
}                            from '../utils/helpers'
import ArchiveSearchQuery    from './ArchiveSearchQuery'
import LinkSwitch            from './LinkSwitch'
import SearchListing         from './SearchListing'
import SearchPagination      from './SearchPagination'

const SearchResults = ({query, results, theme, pathname, hasClearResults, post, postsPerPage}) =>
    <>
        {!isEmpty(query.search) && !isPeopleSearch(post) && (
            <ArchiveSearchQuery query={query} theme={{...archiveListingStyle.query}}/>
        )}
        {hasClearResults && (
            <LinkSwitch
                theme={{...archiveListingStyle.clearButton, ...theme.clear}}
                url={pathname}
                children={!isPeopleSearch(post) ? `View all ${plural(query.search.post_type)}` : 'Search Again'}
            />
        )}
        {idx(results, _ => _[query.search.post_type].hits.map(({_source: result}) =>
            <SearchListing
                key={result.slug}
                theme={theme}
                item={result}
                postType={query.search.post_type}
            />
        ))}
        {query.total > postsPerPage && (
            <SearchPagination post={post} theme={theme}/>
        )}
    </>

SearchResults.propTypes = {
    theme: PropTypes.object,
    results: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    hasClearResults: PropTypes.bool,
    post: PropTypes.object.isRequired,
    postsPerPage: PropTypes.number.isRequired
}

SearchResults.defaultProps = {
    theme: {},
    hasClearResults: true,
}

const mapStateToProps = ({router, site}, {post}) => ({
    query: idx(post, _ => _.search.query) || {},
    results: idx(post, _ => _.search.results) || {},
    pathname: router.location.pathname,
    postsPerPage: site.config.postsPerPage
})

export default connect(mapStateToProps)(SearchResults)