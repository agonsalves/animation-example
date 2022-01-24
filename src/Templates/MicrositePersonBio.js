import PropTypes               from 'prop-types'
import React                   from 'react'
import {useSelector}           from 'react-redux'
import Div                     from '../Basic/Div'
import H2                      from '../Basic/H2'
import ExpandingDescription    from '../Elements/ExpandingDescription'
import MobilePersonMarqueeInfo from '../Elements/MobilePersonMarqueeInfo'
import BioInfoSubheads         from '../Microsites/BioInfoSubheads'
import RecentContent           from '../Microsites/RecentContent'
import {mobileFlag}            from '../redux/selectors'
import {postContentStyle}      from '../themes/layout'
import {
    bioDescriptionStyle,
    micrositePersonStyle,
    personRecentPostTypesStyle
}                              from '../themes/microsites'
import {hidden}                from '../utils/themer'

const MicrositePersonBio = ({post}) => {
    const isMobile = useSelector(mobileFlag)

    return (
        <Div theme={{...postContentStyle, overflow: hidden}}>
            {isMobile && (
                <MobilePersonMarqueeInfo post={post}/>
            )}
            <H2 theme={micrositePersonStyle.descriptionHeading}>Biography</H2>
            <ExpandingDescription
                description={post.full_content}
                continued={post.full_content_continued}
                theme={bioDescriptionStyle}
            />
            <BioInfoSubheads post={post}/>
            <RecentContent post={post} theme={personRecentPostTypesStyle}/>
        </Div>
    )
}

MicrositePersonBio.propTypes = {
    post: PropTypes.object.isRequired,
}

export default MicrositePersonBio