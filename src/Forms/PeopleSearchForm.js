import {Formik}             from 'formik'
import {AnimatePresence}    from 'framer-motion'
import idx                  from 'idx'
import PropTypes            from 'prop-types'
import React, {useMemo}     from 'react'
import {connect}            from 'react-redux'
import Div                  from '../Basic/Div'
import MotionDiv            from '../Basic/MotionDiv'
import ButtonLarge          from '../Elements/ButtonLarge'
import {history}            from '../redux/store'
import {archiveSearchStyle} from '../themes/archives'
import {peopleSearchForm}   from '../themes/pagePeople'
import {searchForms}        from '../variables/fields'
import FieldSwitch          from './FieldSwitch'
import Form                 from './Form'

const PeopleSearchForm = ({handleSubmit, isAdvanced, theme, listingPage, query, datalist}) => {
    const submitForm = useMemo(() => values => {
        let query = ''
        for (let i in searchForms.person.fields) {
            if (values.hasOwnProperty(searchForms.person.fields[i].name) && values[searchForms.person.fields[i].name])
                query += `&search[${searchForms.person.fields[i].name}]=${encodeURIComponent(values[searchForms.person.fields[i].name])}`
        }

        history.push(`${listingPage}?search[post_type]=person${query}`)
    }, [listingPage])


    const handleRender = useMemo(() => props => (
        <Form
            theme={theme.form}
            onSubmit={props.handleSubmit}
        >
            <Div theme={theme.formInner}>
                <AnimatePresence>
                    {idx(searchForms, _ => _.person.fields.map(item => (item.name === 'keyword' || isAdvanced) &&
                        <MotionDiv
                            key={item.name}
                            initial={{
                                height: isAdvanced ? 0 : 60,
                                overflow: 'hidden'
                            }}
                            animate={{
                                height: 60,
                                paddingBottom: 18,
                                transition: {
                                    ease: 'easeOut',
                                },
                                transitionEnd: {
                                    overflow: 'visible'
                                }
                            }}
                            exit={{
                                height: 0,
                                paddingBottom: 0,
                                overflow: 'hidden',
                                transition: {
                                    ease: 'easeOut'
                                }
                            }}
                        >
                            <FieldSwitch
                                name={item.name}
                                placeholder={item.placeholder}
                                theme={item.name === 'keyword' ? {...theme.field, ...theme.firstField} : {...theme.field, ...theme.triangle}}
                                datalist={datalist[item.name]}
                                predictive={item.predictive}
                                {...props}
                            />
                        </MotionDiv>
                    ))}
                </AnimatePresence>
            </Div>
            <Div
                theme={{...archiveSearchStyle.buttonWrapper, ...peopleSearchForm.buttonWrapper, ...theme.buttonWrapper}}>
                <ButtonLarge
                    as="button"
                    label="Search"
                    onClick={handleSubmit}
                    theme={theme.button}
                    type="submit"
                    url=""
                />
                {!Object.values(props.values).every(v => !v) && isAdvanced && (
                    <ButtonLarge
                        url=""
                        as="button"
                        type="reset"
                        label="Reset Form"
                        className="reset"
                        icon={{}}
                        onClick={() => props.resetForm({})}
                        theme={{...archiveSearchStyle.resetButton, ...peopleSearchForm.reset, ...theme.reset}}
                    />
                )}
            </Div>
        </Form>
    ), [handleSubmit, datalist, isAdvanced, theme])

    return (
        <Formik
            initialValues={(idx(query, _ => _.search.post_type) && query.search.post_type === 'person') && query.search}
            onSubmit={submitForm}
            render={handleRender}
        />
    )
}

PeopleSearchForm.propTypes = {
    handleSubmit: PropTypes.func,
    isAdvanced: PropTypes.bool,
    listingPage: PropTypes.string.isRequired,
    theme: PropTypes.object,
    query: PropTypes.object,
    post: PropTypes.object.isRequired,
    datalist: PropTypes.object
}

PeopleSearchForm.defaultProps = {
    isAdvanced: false,
    theme: {
        toggle: {},
        field: {}
    },
    post: {},
    datalist: {}
}

const mapStateToProps = ({site}, {post}) => ({
    listingPage: site.config.listingPages.person.slug,
    query: idx(post, _ => _.search.query),
    datalist: site.datalists['person']
})

export default connect(mapStateToProps)(PeopleSearchForm)