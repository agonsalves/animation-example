import PropTypes  from 'prop-types'
import React      from 'react'
import Div        from '../Basic/Div'
import H2         from '../Basic/H2'
import Icon       from '../Basic/Icon'
import LinkSwitch from '../Elements/LinkSwitch'
import {
    recentContentStyles,
    recentContentStylesCommon
}                 from '../themes/microsites'
import {triangle} from '../variables/iconLibrary'

const RecentContentSection = ({posts, title, type, theme}) => {
    const micrositeSlug = posts[0].microsite_slug
    const postTheme = (type === 'publication'
        ? recentContentStyles.contentPublications
        : recentContentStyles.contentDefault)

    return (
        <Div theme={recentContentStylesCommon}>
            <Div theme={{...recentContentStylesCommon.titleContainer, ...theme.titleContainer}}>
                <H2 theme={recentContentStylesCommon.titleContainer.title}>{title}</H2>
                <LinkSwitch theme={recentContentStylesCommon.titleContainer.viewAllLink} url={micrositeSlug}>
                    View All <Icon icon={triangle} theme={recentContentStylesCommon.titleContainer.viewAllLink.icon}/>
                </LinkSwitch>
            </Div>
            <Div theme={postTheme.postsContainer}>
                {posts.map(item =>
                    <item.component
                        key={item.post.id + item.post_type}
                        post={item.post}
                        theme={postTheme}
                        slug={(item.post_type === 'case-study' ? micrositeSlug : item.post.slug)}
                    />
                )}
            </Div>
        </Div>
    )
}

RecentContentSection.propTypes = {
    posts: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

RecentContentSection.defaultProps = {
    theme: {}
}

export default RecentContentSection