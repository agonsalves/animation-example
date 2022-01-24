import PropTypes          from 'prop-types'
import React              from 'react'
import H3                 from '../Basic/H3'
import RichText           from '../Basic/RichText'
import {widgetTitleStyle} from '../themes/sidebars'

const BlogDescriptionWidget = ({blogDescription}) =>
    <aside>
        <H3 theme={widgetTitleStyle}>About Our Blog</H3>
        <RichText>{blogDescription}</RichText>
    </aside>


BlogDescriptionWidget.propTypes = {
    blogDescription: PropTypes.string.isRequired,
}

export default BlogDescriptionWidget