import React              from 'react'
import Div                from '../Basic/Div'
import {postContentStyle} from '../themes/layout'
import {subscribeStyle}   from '../themes/pages'

const Subscribe = ({post}) => {
    const {subscribe_iframe_url, post_title} = post

    return (
        <Div theme={{...postContentStyle, ...subscribeStyle}}>
            <iframe
                title={post_title}
                src={subscribe_iframe_url}
                height="900"
            />
        </Div>
    )
}


export default Subscribe