import PropTypes         from 'prop-types'
import React             from 'react'
import Div               from '../Basic/Div'
import Icon              from '../Basic/Icon'
import {paginationStyle} from '../themes/elements'
import {flex}            from '../utils/themer'
import {
    longArrowAltLeftReg,
    longArrowAltRightReg
}                        from '../variables/iconLibrary'
import LinkSwitch        from './LinkSwitch'

const SearchPagination = ({post, theme}) => {
    const {slug, search: results} = post
    const {from, total, size, search} = results.query

    const page = Math.ceil(from / size) + 1

    const buildQuery = () => {
        let queryString = []
        Object.keys(search).map(item => {
            if (search.hasOwnProperty(item))
                queryString.push(`search[${item}]=${search[item]}`)

            return null
        })
        return queryString.join('&')
    }

    const getNextUrl = () => `${slug}?${buildQuery()}&from=${from + size}`
    const getPrevUrl = () => `${slug}?${buildQuery()}&from=${(page - 2) * size}`
    const pageCount = () => Math.ceil(total / size)
    const hasNext = () => page < pageCount()
    const hasPrev = () => page > 1

    return (
        <Div theme={{...paginationStyle, ...theme}}>
            <Div theme={{...paginationStyle.pageNumber, ...theme.pageNumber}}>Page {page} of {pageCount()}</Div>
            {(hasPrev() || hasNext()) && (
                <Div theme={{display: flex}}>
                    {hasPrev() && (
                        <LinkSwitch
                            url={getPrevUrl()}
                            theme={{...paginationStyle.prev, ...theme.prev}}
                            children="Previous"
                        >
                            <Icon icon={longArrowAltLeftReg} theme={{...paginationStyle.icon, ...theme.icon}}/>
                        </LinkSwitch>
                    )}
                    {hasNext() && (
                        <LinkSwitch
                            url={getNextUrl()}
                            theme={{...paginationStyle.next, ...theme.next}}
                            children="Next"
                        >
                            <Icon icon={longArrowAltRightReg} theme={{...paginationStyle.icon, ...theme.icon}}/>
                        </LinkSwitch>
                    )}
                </Div>
            )}
        </Div>
    )
}

SearchPagination.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

SearchPagination.defaultProps = {
    theme: {}
}

export default SearchPagination