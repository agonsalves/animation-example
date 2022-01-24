import React            from 'react'
import {useSelector}    from 'react-redux'
import {getCurrentPost} from '../redux/selectors'

/**
 * Higher-Order Component that puts the current post into the component's props as 'post'
 *
 * @param Component
 */
const withPost = Component => props => {
    const post = useSelector(getCurrentPost)
    return <Component {...props} post={post}/>
}

export default withPost