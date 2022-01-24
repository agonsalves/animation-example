import PropTypes                 from 'prop-types'
import React, {memo}             from 'react'
import Div                       from '../Basic/Div'
import Icon                      from '../Basic/Icon'
import MotionDiv                 from '../Basic/MotionDiv'
import BlogSearchForm            from '../Forms/BlogSearchForm'
import {mobileBlogMicrositeMenu} from '../themes/menus'
import {hidden}                  from '../utils/themer'
import withToggle                from '../utils/withToggle'
import {triangle}                from '../variables/iconLibrary'

const MobileBlogMicrositeSearch = memo(({theme, post, isOpen}) =>
    <MotionDiv
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
            open: {height: 'auto', overflow: 'visible'},
            closed: {height: 50, overflow: hidden}
        }}
        transition={{ease: 'easeOut'}}
        theme={mobileBlogMicrositeMenu.navigate}
    >
        <Div theme={!isOpen
            ? {...mobileBlogMicrositeMenu.toggle}
            : {...mobileBlogMicrositeMenu.toggle, ...mobileBlogMicrositeMenu.toggle.open}}
        >
            <Icon icon={triangle} theme={!isOpen
                ? {...mobileBlogMicrositeMenu.icon}
                : {...mobileBlogMicrositeMenu.icon, ...mobileBlogMicrositeMenu.icon.open}}
            />
            <span>Search</span>
            <BlogSearchForm post={post} theme={mobileBlogMicrositeMenu.searchForm}/>
        </Div>
    </MotionDiv>
)

MobileBlogMicrositeSearch.propTypes = {
    theme: PropTypes.object,
    post: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
}

MobileBlogMicrositeSearch.defaultProps = {
    theme: {},
}

export default withToggle(MobileBlogMicrositeSearch)