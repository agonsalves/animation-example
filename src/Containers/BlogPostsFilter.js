import React, {
    useContext,
    useEffect,
    useState
}                    from 'react'
import connect       from 'react-redux/es/connect/connect'
import {Transitions} from './TransitionController'

export const PostsFilterContext = React.createContext({})

const BlogPostsFilter = ({hash, ...props}) => {
    const [postsFilter, setPostsFilter] = useState('')
    const {post} = useContext(Transitions)

    useEffect(() => {
        if (!!post)
            setPostsFilter('')

        if (hash)
            setPostsFilter(parseInt(hash.substr(1)))

    }, [post, hash])

    return (
        <PostsFilterContext.Provider
            value={{
                postsFilter,
                applyPostsFilter: newFilter => setPostsFilter(newFilter),
            }}
            {...props}
        />
    )
}

const mapStateToProps = ({router}) => ({
    hash: router.location.hash
})

export default connect(mapStateToProps)(BlogPostsFilter)
