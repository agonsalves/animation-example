import PropTypes              from 'prop-types'
import React                  from 'react'
import Div                    from '../Basic/Div'
import Icon                   from '../Basic/Icon'
import {
    blogPaginationStyle,
    paginationStyle
}                             from '../themes/elements'
import {flex}                 from '../utils/themer'
import {longArrowAltRightReg} from '../variables/iconLibrary'
import LinkSwitch             from './LinkSwitch'

const BlogPagination = ({post, theme}) => {
    return (
        <Div theme={{...paginationStyle, ...blogPaginationStyle, ...theme}}>
            <Div theme={{display: flex, ...blogPaginationStyle.inner}}>
                <LinkSwitch
                    url=""
                    theme={{...paginationStyle.next, ...blogPaginationStyle.next, ...theme.next}}
                    children="Next"
                >
                    <Icon icon={longArrowAltRightReg} theme={{...paginationStyle.icon, ...theme.icon}}/>
                </LinkSwitch>
            </Div>
        </Div>
    )
}

BlogPagination.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

BlogPagination.defaultProps = {
    theme: {}
}

export default BlogPagination