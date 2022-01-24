import idx              from 'idx'
import PropTypes        from 'prop-types'
import React            from 'react'
import {connect}        from 'react-redux'
import {decodeEntities} from '../utils/helpers'
import {searchForms}    from '../variables/fields'
import SearchQuery      from './SearchQuery'

const ArchiveSearchQuery = ({query, theme, datalist}) => {
    const {search} = query
    let queryString = search.keyword ? [search.keyword] : []

    const getValue = (value, field) => {
        if (!datalist[field.name])
            return value

        if (!datalist[field.name][0].children)
            return datalist[field.name].find(item =>
                item.id === parseInt(value)
            ).title

        let childValue

        for (let i in datalist[field.name]) {
            if (!datalist[field.name][i].children) {
                childValue = datalist[field.name].find(item =>
                    item.id === parseInt(value)
                )
            } else {
                childValue = datalist[field.name][i].children.find(item => item.id === parseInt(value))
            }

            if (childValue) {
                return decodeEntities(childValue.title)
            }

        }
    }

    for (let i of Object.keys(search)) {
        if (search.hasOwnProperty(i) && !['post_type', 'keyword', 'letter'].includes(i)) {
            let field = searchForms[search.post_type].fields.find(item => item.name === i)

            let value = getValue(search[i], field)

            queryString.push(`${field.label}: ${decodeEntities(value)}`)
        }

        if (i === 'letter')
            queryString.push(search[i])
    }

    return <SearchQuery query={queryString.join('; ')} total={query.total} theme={theme}/>
}

ArchiveSearchQuery.propTypes = {
    query: PropTypes.object.isRequired,
    theme: PropTypes.object,
    datalist: PropTypes.object.isRequired
}

ArchiveSearchQuery.defaultProps = {
    theme: {},
    datalist: {},
    query: {}
}

const mapStateToProps = ({site}, {query}) => ({
    datalist: site.datalists[idx(query, _ => _.search.post_type)],
})

export default connect(mapStateToProps)(ArchiveSearchQuery)