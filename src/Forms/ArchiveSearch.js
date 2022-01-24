import {Formik}             from 'formik'
import idx                  from 'idx'
import PropTypes            from 'prop-types'
import React, {
    memo,
    useMemo
}                           from 'react'
import {connect}            from 'react-redux'
import Div                  from '../Basic/Div'
import MotionDiv            from '../Basic/MotionDiv'
import ArchiveSearchToggle  from '../Elements/ArchiveSearchToggle'
import ButtonLarge          from '../Elements/ButtonLarge'
import {getPostType}        from '../redux/selectors'
import {history}            from '../redux/store'
import {archiveSearchStyle} from '../themes/archives'
import {hasArchiveSearch}   from '../utils/flags'
import withToggle           from '../utils/withToggle'
import {searchForms}        from '../variables/fields'
import FieldSwitch          from './FieldSwitch'
import Form                 from './Form'

const ArchiveSearch = memo(({pageType, theme, datalist, handleSubmit, isOpen, query, ...props}) => {
    const postType = getPostType('page', pageType).name
    const {listingPage} = props

    const submitForm = useMemo(() => values => {
        const postType = getPostType('page', pageType).name
        let query = ''
        for (let i in searchForms[postType].fields) {
            if (values.hasOwnProperty(searchForms[postType].fields[i].name) && values[searchForms[postType].fields[i].name])
                query += `&search[${searchForms[postType].fields[i].name}]=${encodeURIComponent(values[searchForms[postType].fields[i].name])}`
        }

        history.push(`${listingPage}?search[post_type]=${postType}${query}`)
    }, [listingPage, pageType])

    const handleRender = useMemo(() => props => (
        <Form
            onSubmit={props.handleSubmit}
            theme={{...archiveSearchStyle.container, ...theme.container}}
        >
            {idx(searchForms, _ => _[postType].fields.map(item =>
                <FieldSwitch
                    key={item.name}
                    theme={{...archiveSearchStyle.field, ...theme.field}}
                    name={item.name}
                    placeholder={item.placeholder}
                    icon={item.icon}
                    datalist={datalist && datalist[item.name]}
                    {...props}
                />
            ))}
            <Div theme={{...archiveSearchStyle.buttonWrapper}}>
                <ButtonLarge
                    as="button"
                    type="submit"
                    theme={{...archiveSearchStyle.button, ...theme.button}}
                    url=""
                    label="Search"
                    onClick={handleSubmit}
                />
                {!Object.values(props.values).every(v => !v) && (
                    <ButtonLarge
                        url=""
                        as="button"
                        type="reset"
                        label="Reset Form"
                        className="reset"
                        icon={{}}
                        onClick={() => props.resetForm({})}
                        theme={{...archiveSearchStyle.resetButton}}
                    />
                )}
            </Div>
        </Form>
    ), [datalist, handleSubmit, postType, theme])

    return (postType && (
        <>
            <ArchiveSearchToggle
                isOpen={isOpen}
                postType={postType}
                theme={{...archiveSearchStyle.toggle, ...theme.toggle}}
            />
            <MotionDiv
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                    open: {height: 'auto'},
                    closed: {height: 0}
                }}
                transition={{ease: 'easeOut'}}
                theme={{...archiveSearchStyle.panel, ...theme}}
            >
                <Formik
                    initialValues={idx(query, _ => _.search.post_type) === postType && query.search}
                    onSubmit={submitForm}
                    render={handleRender}
                />
            </MotionDiv>
        </>
    )) || null
})

ArchiveSearch.displayName = 'ArchiveSearch'

ArchiveSearch.propTypes = {
    postType: PropTypes.string.isRequired,
    theme: PropTypes.object,
    listingPage: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func,
    panelName: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    post: PropTypes.object.isRequired,
    query: PropTypes.object
}

ArchiveSearch.defaultProps = {
    postType: '',
    theme: {
        toggle: {},
        panel: {},
        container: {},
        field: {},
        button: {}
    },
    listingPage: '',
    pageType: ''
}

const mapStateToProps = ({site}, {post}) => {
    const listingPage = hasArchiveSearch(post) && site.config.listingPages[getPostType('page', post.page_type).name]

    return {
        datalist: site.datalists[getPostType('page', post.page_type).name],
        listingPage: listingPage.slug,
        query: idx(post, _ => _.search.query),
        pageType: post.parentPost.page_type
    }
}

export default connect(mapStateToProps)(withToggle(ArchiveSearch))