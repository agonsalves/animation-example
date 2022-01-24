import PropTypes                  from 'prop-types'
import React                      from 'react'
import placeholder                from '../assets/featured-case-study-placeholder.png'
import Div                        from '../Basic/Div'
import Img                        from '../Basic/Img'
import {featuredCaseStudiesStyle} from '../themes/archives'
import LinkSwitch                 from './LinkSwitch'

const FeaturedCaseStudy = ({post, theme}) =>
    <LinkSwitch url={post.slug} theme={{...featuredCaseStudiesStyle.item, ...theme}}>
        <Img
            image={post.photo}
            theme={{...featuredCaseStudiesStyle.image, ...theme.image}}
            placeholder={placeholder}
            className="case-study-image"
        />
        <Div
            theme={{...featuredCaseStudiesStyle.title, ...theme.title}}
            className="case-study-title"
            children={post.post_title}
        />
        {post.practice_area && (
            <Div theme={{...featuredCaseStudiesStyle.practiceAreas}}>
                {post.practice_area.map((item, key) =>
                    <Div key={key} theme={{...featuredCaseStudiesStyle.practiceArea}}>{item.post_title}</Div>
                )}
            </Div>
        )}
        <Div theme={{...featuredCaseStudiesStyle.rollover}} className="rollover">
            <Div
                theme={{...featuredCaseStudiesStyle.rolloverTitle, ...theme.title}}
                className="case-study-title"
                children={post.post_title}
            />
            {post.practice_area && (
                <Div theme={{...featuredCaseStudiesStyle.rolloverPracticeAreas}}>
                    {post.practice_area.map((item, key) =>
                        <Div
                            key={key}
                            theme={{...featuredCaseStudiesStyle.rolloverPracticeArea}}
                            children={item.post_title}
                        />
                    )}
                </Div>
            )}
        </Div>
    </LinkSwitch>


FeaturedCaseStudy.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

FeaturedCaseStudy.defaultProps = {
    theme: {
        image: {},
        title: {}
    },
}

export default FeaturedCaseStudy