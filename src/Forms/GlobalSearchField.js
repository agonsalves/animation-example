import {Formik}                 from 'formik'
import PropTypes                from 'prop-types'
import React, {memo}            from 'react'
import {connect}                from 'react-redux'
import {history}                from '../redux/store'
import {globalSearchFieldTheme} from '../themes/header'
import Form                     from './Form'
import PredictiveField          from './PredictiveField'

const GlobalSearchField = memo(({query, isOpen, values, ...props}) =>
    <Formik
        {...props}
        initialValues={{
            s: query.split('?s=')[1] ? decodeURIComponent(query.split('?s=')[1]) : ''
        }}
        onSubmit={values => history.push(`/?s=${encodeURIComponent(values['s'])}`)}
        render={({values, ...props}) => (
            <Form theme={globalSearchFieldTheme} onSubmit={props.handleSubmit}>
                <PredictiveField
                    id="global-search"
                    name="s"
                    placeholder="Search Miles & Stockbridge"
                    predictive={['person', 'practice-area', 'industry']}
                    theme={globalSearchFieldTheme.field}
                    isOpen={isOpen}
                    value={values['s']}
                    {...props}
                />
            </Form>
        )}
    />
)

GlobalSearchField.displayName = 'GlobalSearchField'

GlobalSearchField.propTypes = {
    isOpen: PropTypes.bool,
    query: PropTypes.string.isRequired,
    values: PropTypes.object
}

const mapStateToProps = ({router}) => ({
    query: router.location.search
})

export default connect(mapStateToProps)(GlobalSearchField)