import PropTypes          from 'prop-types'
import React, {memo}      from 'react'
import Div                from '../Basic/Div'
import {mainSectionStyle} from '../themes/layout'
import MobileContent      from './MobileContent'
import PageTransitions    from './PageTransitions'

const Page = memo(({post, isMobile}) =>
    <Div
        theme={mainSectionStyle}
        id="main"
        role="main"
        className="page"
    >
        {(!isMobile && (
            <PageTransitions/>
        )) || (
            <MobileContent post={post}/>
        )}
    </Div>
)

Page.displayName = 'Page'

Page.propTypes = {
    post: PropTypes.object.isRequired,
    isMobile: PropTypes.bool
}

export default Page