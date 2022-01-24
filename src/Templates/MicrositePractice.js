import PropTypes            from 'prop-types'
import React                from 'react'
import Div                  from '../Basic/Div'
import ExpandingDescription from '../Elements/ExpandingDescription'
import RecentContent        from '../Microsites/RecentContent'
import {postContentStyle}   from '../themes/layout'
import {
    practiceMicrositeDescription,
    practiceMicrositeStyle
}                           from '../themes/microsites'

const  MicrositePractice = ({post}) =>
    <Div theme={{...postContentStyle, ...practiceMicrositeStyle}}>
        <ExpandingDescription
            description={post.full_content}
            continued={post.full_content_continued}
            theme={practiceMicrositeDescription}
        />
        <RecentContent post={post}/>
    </Div>

MicrositePractice.propTypes = {
    post: PropTypes.object.isRequired,
}

export default MicrositePractice