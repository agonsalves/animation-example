import PropTypes           from 'prop-types'
import React               from 'react'
import Div                 from '../Basic/Div'
import GlobalSearchSection from '../Elements/GlobalSearchSection'
import SearchQuery         from '../Elements/SearchQuery'
import {globalSearchStyle} from '../themes/elements'
import {postContentStyle}  from '../themes/layout'
import {isEmpty}           from '../utils/helpers'
import {postTypeConfig}    from '../variables/postTypes'

const isContentSection = (results, section) => results.hasOwnProperty(section) && section === 'categories'

const GlobalSearchResults = ({post}) => {
    const {results, query: queryObject} = post.search
    const {s: query} = queryObject
    return (
        <Div theme={postContentStyle}>
            {(results && !isEmpty(results) && (
                <>
                    <SearchQuery query={query} theme={globalSearchStyle.query}/>
                    <Div theme={globalSearchStyle.container}>
                        {postTypeConfig.map(({name, plural}) =>
                            (results.hasOwnProperty(name) && name !== 'categories' && (
                                <GlobalSearchSection
                                    key={name}
                                    title={plural}
                                    results={results[name]}
                                    section={name}
                                />
                            ))
                            || (isContentSection(results, name) && Object.keys(results[name]).map(key =>
                                <GlobalSearchSection
                                    key={key}
                                    title={key}
                                    results={results[name][key]}
                                    section="page"
                                />
                            ))
                        )}
                    </Div>
                </>

            ))
            || (results && isEmpty(results) && (
                <>
                    There are no results for: {query}
                                              {query.length <= 2 && (
                                                  <div>Your query must be at least 3 characters long.</div>
                                              )}
                </>
            ))
            || <Div>Loading</Div>
            }
        </Div>
    )
}

GlobalSearchResults.propTypes = {
    post: PropTypes.object.isRequired
}

export default GlobalSearchResults