import PropTypes          from 'prop-types'
import React              from 'react'
import Div                from '../Basic/Div'
import H1                 from '../Basic/H1'
import Img                from '../Basic/Img'
import MotionDiv          from '../Basic/MotionDiv'
import LinkSwitch         from '../Elements/LinkSwitch'
import {postContentStyle} from '../themes/layout'
import {industriesStyle}  from '../themes/microsites'
import {plural}           from '../utils/helpers'

const industriesVariants = {
    initial: {
        y: 60,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .6,
            duration: .3,
            staggerChildren: .2,
            when: 'beforeChildren'
        }
    }
}

const childrenVariants = {
    initial: {
        y: 60,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .3,
        }
    }
}

const Industries = ({post}) =>
    <MotionDiv
        theme={postContentStyle}
        variants={industriesVariants}
        initial="initial"
        animate="enter"
    >
        <MotionDiv variants={childrenVariants}>
            <H1 theme={industriesStyle.heading}>Key {plural('industry')}</H1>
        </MotionDiv>
        <Div theme={industriesStyle}>
            {post.industries_listing && post.industries_listing.map((industry, index) => industry.industry_listing_thumbnail && (
                    <MotionDiv
                        key={`industry-${index}`}
                        variants={childrenVariants}
                        theme={industriesStyle.image}
                    >
                        <LinkSwitch
                            url={industry.slug}
                            title={industry.post_title}
                            theme={industriesStyle.inner}
                        >
                            <Img image={industry.industry_listing_thumbnail} theme={{width: '100%'}}/>
                            <Div theme={industriesStyle.title}>{industry.post_title}</Div>
                        </LinkSwitch>
                    </MotionDiv>
                )
            )}
        </Div>
    </MotionDiv>

Industries.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Industries