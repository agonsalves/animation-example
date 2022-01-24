import PropTypes              from 'prop-types'
import React                  from 'react'
import H3                     from '../Basic/H3'
import Img                    from '../Basic/Img'
import LinkSwitch             from '../Elements/LinkSwitch'
import {blogContributorStyle} from '../themes/blogs'
import {widgetTitleStyle}     from '../themes/sidebars'

const BlogAuthorsWidget = ({blogAuthors, widgetTitle}) =>
    <aside>
        <H3 theme={widgetTitleStyle}>{widgetTitle}</H3>
        {blogAuthors.map((item, index) => (
            <LinkSwitch theme={blogContributorStyle} key={index} url={item.slug}>
                <Img
                    theme={blogContributorStyle.image}
                    src="http://baseline.gjtest.com/content/mu-plugins/rainmaker/images/default-headshot-closeup-placeholder.png"
                    alt={item.post_title}
                />
                <span>{item.post_title}</span>
            </LinkSwitch>
        ))}
    </aside>

BlogAuthorsWidget.propTypes = {
    blogAuthors: PropTypes.array.isRequired,
    widgetTitle: PropTypes.string,
}

BlogAuthorsWidget.defaultProps = {
    widgetTitle: 'Blog Authors',
}

export default BlogAuthorsWidget