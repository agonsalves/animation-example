import PropTypes                    from 'prop-types'
import React                        from 'react'
import Div                          from '../Basic/Div'
import {recentPostTypesStyle}       from '../themes/microsites'
import {plural}                     from '../utils/helpers'
import RecentContentItemDefault     from './RecentContentItemDefault'
import RecentContentItemPublication from './RecentContentItemPublication'
import RecentContentSection         from './RecentContentSection'

const recentPostTypes = [
    {
        key: 'blog-post',
        component: RecentContentItemDefault
    },
    {
        key: 'case-study',
        component: RecentContentItemDefault
    },
    {
        key: 'publication',
        component: RecentContentItemPublication
    }
]

const RecentContent = ({post, theme}) => {
    const getPostsByType = type => {
        let posts = []
        if (post.microsite_pages) {
            post.microsite_pages.map(micrositePage => {
                if (micrositePage.child_type === type &&
                    micrositePage.related_posts) {
                    micrositePage.related_posts.forEach(relatedPost => {
                        if (posts.length < 2) {
                            posts.push({
                                post_type: type,
                                post: relatedPost,
                                component: recentPostTypes.find(item => item.key === type).component,
                                microsite_slug: micrositePage.slug
                            })
                        }
                    })
                }
                return null
            })
        }
        return posts
    }

    return (
        <Div theme={{...recentPostTypesStyle, ...theme}}>
            {recentPostTypes.map(postType => {
                let posts = getPostsByType(postType.key, post)
                if (posts.length > 0) {
                    return (
                        <RecentContentSection
                            key={postType.key}
                            type={postType.key}
                            posts={posts}
                            title={`Recent ${plural(postType.key)}`}
                            theme={theme}
                        />
                    )
                }
                return null
            })}
        </Div>
    )
}

RecentContent.propTypes = {
    post: PropTypes.object.isRequired,
}

RecentContent.defaultProps = {
    theme: {}
}

export default RecentContent