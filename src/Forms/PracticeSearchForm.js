import {Formik}         from 'formik'
import PropTypes        from 'prop-types'
import React, {memo}    from 'react'
import {connect}        from 'react-redux'
import ButtonLarge      from '../Elements/ButtonLarge'
import {getCurrentPost} from '../redux/selectors'
import {history}        from '../redux/store'
import {singular}       from '../utils/helpers'
import FieldSwitch      from './FieldSwitch'
import Form             from './Form'

const PracticeSearchForm = memo(({hasButton, theme, listingPage, query}) =>
    <Formik
        initialValues={{keyword: query && query.search && query.search.post_type === 'practice-area' && query.search.keyword}}
        onSubmit={values => {
            let query = values['keyword'] ? `&search[keyword]=${encodeURIComponent(values['keyword'])}` : ''
            history.push(`${listingPage}?search[post_type]=practice-area${query}`)
        }}
        render={props => (
            <Form theme={theme.form} onSubmit={props.handleSubmit}>
                <FieldSwitch
                    name="keyword"
                    placeholder={`Type a ${singular('practice-area').toLowerCase()} or keyword`}
                    predictive={['practice-area']}
                    theme={theme.field}
                    {...props}
                />
                {hasButton && (
                    <ButtonLarge
                        as="button"
                        label="Search"
                        theme={theme.button}
                        type="submit"
                        url=""
                    />
                )}
            </Form>
        )}
    />
)

PracticeSearchForm.displayName = 'PracticeSearchForm'

PracticeSearchForm.propTypes = {
    listingPage: PropTypes.string.isRequired,
    hasButton: PropTypes.bool,
    query: PropTypes.object,
    theme: PropTypes.object
}

PracticeSearchForm.defaultProps = {
    hasButton: false,
    theme: {}
}

const mapStateToProps = state => ({
    listingPage: state.site.config.listingPages['practice-area'].slug,
    query: getCurrentPost(state).search && getCurrentPost(state).search.query,
    post: getCurrentPost(state)
})

export default connect(mapStateToProps)(PracticeSearchForm)