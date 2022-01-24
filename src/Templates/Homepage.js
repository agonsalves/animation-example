    import PropTypes           from 'prop-types'
import React               from 'react'
import {useSelector}       from 'react-redux'
import mobileHomepageImage from '../assets/homepage-mobile.jpg'
import Div                 from '../Basic/Div'
import Img                 from '../Basic/Img'
import RichText            from '../Basic/RichText'
import ButtonLarge         from '../Elements/ButtonLarge'
import HomepageAnimation   from '../Elements/HomepageAnimation'
import {layoutSelector}    from '../redux/selectors'
import {homepageStyles}    from '../themes/pageHomepage'
import {LAYOUT_MOBILE}     from '../utils/getLayout'

const Homepage = ({post}) => {
    const layout = useSelector(layoutSelector)
    const isMobile = layout === LAYOUT_MOBILE

    return (!isMobile && (
        <HomepageAnimation post={post}/>
    )) || (
        <Div>
            <Img src={mobileHomepageImage} theme={homepageStyles.content.mobileImage}/>
            <RichText theme={homepageStyles.content.description}>{post.client_homepage_content}</RichText>
            <ButtonLarge
                url={post.client_homepage_button_link ? post.client_homepage_button_link : ''}
                children={post.client_homepage_button}
                theme={homepageStyles.content.button}
            />
        </Div>
    )
}

Homepage.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Homepage