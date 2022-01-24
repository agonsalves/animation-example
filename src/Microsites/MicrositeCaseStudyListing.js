import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H3                        from '../Basic/H3'
import Icon                      from '../Basic/Icon'
import Img                       from '../Basic/Img'
import Span                      from '../Basic/Span'
import ArchiveListingWrapper     from '../Elements/ArchiveListingWrapper'
import LinkSwitch                from '../Elements/LinkSwitch'
import {archiveListingStyle}     from '../themes/archives'
import {micrositeCaseStudyStyle} from '../themes/microsites'
import {excerpt}                 from '../utils/helpers'
import {userCircle}              from '../variables/iconLibrary'

const MicrositeCaseStudyListing = ({post, theme}) =>
    <ArchiveListingWrapper theme={{...micrositeCaseStudyStyle, ...theme}}>
        {post.thumbnail_teaser && (
            <Img
                image={post.thumbnail_teaser}
                theme={{...archiveListingStyle.thumbnail, ...theme}}
            />
        )}
        <Div theme={{...micrositeCaseStudyStyle.textWrapper, ...theme}}>
            <H3 theme={{...micrositeCaseStudyStyle.title, ...theme.title}}>
                {post.post_title}
            </H3>
            <Div theme={{...micrositeCaseStudyStyle.excerpt, ...theme.excerpt}}>
                {excerpt(post.full_content, Infinity)}
            </Div>
            {!!post.people && (
                <Div theme={{...micrositeCaseStudyStyle.people, ...theme.people}}>
                    <Icon icon={userCircle} theme={{...micrositeCaseStudyStyle.icon}}/>
                    {post.people.map(person =>
                        <Span theme={{...micrositeCaseStudyStyle.personWrapper}} key={person.id}>
                            <LinkSwitch
                                theme={{...micrositeCaseStudyStyle.person}}
                                url={person.slug}
                                children={person.post_title}
                            />
                            <span>, </span>
                        </Span>
                    )}
                </Div>
            )}
        </Div>
    </ArchiveListingWrapper>

MicrositeCaseStudyListing.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

MicrositeCaseStudyListing.defaultProps = {
    theme: {}
}

export default MicrositeCaseStudyListing