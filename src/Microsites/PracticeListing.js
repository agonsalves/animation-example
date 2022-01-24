import PropTypes                   from 'prop-types'
import React                       from 'react'
import Div                         from '../Basic/Div'
import LinkSwitch                  from '../Elements/LinkSwitch'
import {practiceSearchResultStyle} from '../themes/microsites'
import {excerpt}                   from '../utils/helpers'

const PracticeListing = ({post, theme}) =>
    <Div theme={{...practiceSearchResultStyle, ...theme}}>
        <LinkSwitch
            theme={{...practiceSearchResultStyle.title, ...theme.title}}
            url={post.slug}
            children={post.post_title}
        />
        {post.full_content && (
            <div>{excerpt(post.full_content)}</div>
        )}
    </Div>

PracticeListing.propTypes = {
    theme: PropTypes.object,
    post: PropTypes.object.isRequired
}

PracticeListing.defaultProps = {
    theme: {},
}

export default PracticeListing