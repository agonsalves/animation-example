import PropTypes         from 'prop-types'
import React             from 'react'
import {connect}         from 'react-redux'
import Div               from '../Basic/Div'
import Icon              from '../Basic/Icon'
import {paginationStyle} from '../themes/elements'
import {flex}            from '../utils/themer'
import {
    longArrowAltLeftReg,
    longArrowAltRightReg
}                        from '../variables/iconLibrary'
import LinkSwitch        from './LinkSwitch'

const Pagination = ({post, theme, postsPerPage}) => {
    const {total} = post
    const page = parseInt(post.page)

    const baseSlug = post.hasOwnProperty('base_slug') ? post.base_slug : post.slug;
    const getNextUrl = () => `${baseSlug}/page/${page + 1}`
    const getPrevUrl = () => page === 2 ? baseSlug : `${baseSlug}/page/${page - 1}`
    const pageCount = () => Math.ceil(total / postsPerPage)
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

Pagination.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
    postsPerPage: PropTypes.number
}

Pagination.defaultProps = {
    theme: {}
}

const mapStateToProps = ({site}) => ({
    postsPerPage: site.config.postsPerPage
})

export default connect(mapStateToProps)(Pagination)