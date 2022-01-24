import PropTypes     from 'prop-types'
import React         from 'react'
import Div           from '../Basic/Div'
import FormattedDate from '../utils/date'
import {intersperse} from '../utils/helpers'
import LinkSwitch    from './LinkSwitch'

const BlogPostByline = ({authors, guestAuthors, outsideAuthors, date, theme}) => {
    const hasAuthor = authors.length > 0 || guestAuthors.length > 0 || outsideAuthors.length > 0

    return (
        <Div theme={{...theme}}>
            {hasAuthor ? 'by ' : ''}
            {intersperse([...authors, ...guestAuthors, ...outsideAuthors].map((item, index) =>
                <LinkSwitch key={index} url={item.slug} theme={{...theme.name}}>
                    {item.post_title || item.outside_author_name}
                </LinkSwitch>
            ), ', ')}
            {hasAuthor ? ' on ' : ''}
            <FormattedDate date={date}/>
        </Div>
    )
}


BlogPostByline.propTypes = {
    authors: PropTypes.array,
    guestAuthors: PropTypes.array,
    outsideAuthors: PropTypes.array,
    date: PropTypes.string,
    theme: PropTypes.object
}

BlogPostByline.defaultProps = {
    theme: {},
    authors: [],
    guestAuthors: [],
    outsideAuthors: []
}

export default BlogPostByline