import React                 from 'react'
import H1                    from '../Basic/H1'
import LinkSwitch            from '../Elements/LinkSwitch'
import {micrositeTitleStyle} from '../themes/microsites'

const MicrositeTitle = ({post, theme}) =>
    <H1 className="page-title" theme={{...micrositeTitleStyle, ...theme}}>
        <LinkSwitch url={post.slug !== post.parentPost.slug ? post.parentPost.slug : ''}>
            {post.parentPost.post_title}
        </LinkSwitch>
    </H1>

MicrositeTitle.defaultProps = {
    theme: {}
}

export default MicrositeTitle