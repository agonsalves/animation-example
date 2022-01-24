import PropTypes            from 'prop-types'
import React                from 'react'
import Div                  from '../Basic/Div'
import H3                   from '../Basic/H3'
import {jobListingStyle}    from '../themes/pages'
import ExpandingDescription from './ExpandingDescription'

const JobListing = ({post, theme}) =>
    <Div theme={{...jobListingStyle, ...theme}}>
        <H3 theme={{...jobListingStyle.title, ...theme.title}}>{post.post_title}</H3>
        {post.current_openings_position_category && (
            <Div theme={{...jobListingStyle.category, ...theme.category}}>
                {post.current_openings_position_category[0].term}
            </Div>
        )}
        {post.office_locations && (
            <Div theme={{...jobListingStyle.offices, ...theme.offices}}>
                {post.office_locations.map((item, index) =>
                    <React.Fragment key={item.slug}>
                        {index > 0 && ', '}
                        {item.post_title}
                    </React.Fragment>
                )}
            </Div>
        )}
        <ExpandingDescription
            description={post.full_content}
            continued={post.full_content_continued}
            theme={{...jobListingStyle, ...theme.expandingDescription}}
            applyUrl={post.url}
            contactEmail={post.contact_email}
        />
    </Div>

JobListing.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

JobListing.defaultProps = {
    theme: {
        title: {},
        offices: {},
        description: {},
        expandButton: {},
        applyOnline: {},
        email: {}
    },
}

export default JobListing