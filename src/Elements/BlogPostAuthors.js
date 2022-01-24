import PropTypes             from 'prop-types'
import React                 from 'react'
import placeholderHeadshot   from '../assets/square-headshot-placeholder.png'
import Div                   from '../Basic/Div'
import EmailLink             from '../Basic/EmailLink'
import Img                   from '../Basic/Img'
import {blogPostAuthorStyle} from '../themes/blogs'
import {composePersonTitle}  from '../utils/helpers'
import LinkSwitch            from './LinkSwitch'

const BlogPostAuthors = ({authors}) =>
    <Div theme={blogPostAuthorStyle}>
        {authors.map(item => (
            <Div key={item.id} theme={blogPostAuthorStyle.inner}>
                <Div theme={blogPostAuthorStyle.image}>
                    <Img
                        image={item.thumbnail_teaser}
                        placeholder={placeholderHeadshot}
                    />
                </Div>
                <Div theme={blogPostAuthorStyle.details}>
                    <Div theme={blogPostAuthorStyle.name}>
                        <LinkSwitch url={item.slug}>{item.post_title}</LinkSwitch>
                    </Div>
                    <Div theme={blogPostAuthorStyle.title}>{composePersonTitle(item)}</Div>
                    <Div theme={blogPostAuthorStyle.phone}>{item.phone}</Div>
                    <EmailLink
                        email={item.email}
                        children={'Email'}
                        theme={blogPostAuthorStyle.email}
                    />
                </Div>
            </Div>
        ))}
    </Div>

BlogPostAuthors.propTypes = {
    authors: PropTypes.array.isRequired
}

export default BlogPostAuthors