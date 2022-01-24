import PropTypes                         from 'prop-types'
import React, {useMemo}                  from 'react'
import H1                                from '../Basic/H1'
import {getPostType}                     from '../redux/selectors'
import {pageTitleStyleSwitch}            from '../themes/elements'
import {practiceSearchResultsTitleStyle} from '../themes/microsites'
import {
    isBlog,
    isIndustryMicrosite,
    isPracticeMicrosite,
    isPracticeSearch,
    isSubPage
}                                        from '../utils/flags'
import LinkSwitch                        from './LinkSwitch'

const Title = ({theme, post}) => {
    const title = useMemo(() => {
        if (!post.parentPost.microsite_pages
            && getPostType('name', post.post_type).type === 'archive'
            && !isBlog(post))
            return getPostType('name', post.post_type).title

        return post.parentPost.post_title
    }, [post])

    return (
        <H1
            className="page-title"
            theme={pageTitleStyleSwitch(theme, isPracticeMicrosite(post), isIndustryMicrosite(post), isSubPage(post))}
        >
            <LinkSwitch
                url={post.slug !== post.parentPost.slug ? post.parentPost.slug : ''}
                theme={isPracticeSearch(post) ? practiceSearchResultsTitleStyle : {}}
            >
                {title}
            </LinkSwitch>
        </H1>
    )
}

Title.propTypes = {
    theme: PropTypes.object,
    post: PropTypes.object.isRequired
}

Title.defaultProps = {
    theme: {},
}

export default Title