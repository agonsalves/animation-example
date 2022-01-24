import {Formik}              from 'formik'
import PropTypes             from 'prop-types'
import React                 from 'react'
import Div                   from '../Basic/Div'
import Icon                  from '../Basic/Icon'
import {history}             from '../redux/store'
import {blogSearchFormStyle} from '../themes/blogs'
import {search}              from '../variables/iconLibrary'
import FieldSwitch           from './FieldSwitch'
import Form                  from './Form'

const BlogSearchForm = ({post, theme}) =>
    <Formik
        initialValues={post.search && post.search.query.search}
        onSubmit={values => {
            const {parentPost} = post
            let query = values['keyword'] ? `&search[keyword]=${encodeURIComponent(values['keyword'])}` : ''
            history.push(`${parentPost.slug}?search[post_type]=blog-post${query}`)
        }}
        render={props => (
            <Form
                name="blog-search"
                onSubmit={props.handleSubmit}
                theme={{...blogSearchFormStyle, ...theme}}
            >
                <FieldSwitch {...props} name="keyword" theme={{...blogSearchFormStyle.field, ...theme.field}}/>
                <Div as="button" type="submit" theme={blogSearchFormStyle.button}>
                    <Icon icon={search} theme={{...blogSearchFormStyle.icon, ...theme.icon}}/>
                </Div>
            </Form>
        )}
    />

BlogSearchForm.propTypes = {
    post: PropTypes.object.isRequired
}

BlogSearchForm.defaultProps = {
    theme: {}
}

export default BlogSearchForm