import {Formik}            from 'formik'
import PropTypes           from 'prop-types'
import React, {memo}       from 'react'
import {connect}           from 'react-redux'
import Div                 from '../Basic/Div'
import Icon                from '../Basic/Icon'
import MotionDiv           from '../Basic/MotionDiv'
import Overlay             from '../Elements/Overlay'
import {history}           from '../redux/store'
import {mobileSearchStyle} from '../themes/header'
import withToggle          from '../utils/withToggle'
import {
    angleRight,
    search
}                          from '../variables/iconLibrary'
import FieldSwitch         from './FieldSwitch'
import Form                from './Form'

const MobileSearch = memo(({isOpen, theme, query}) =>
    <Div theme={{...mobileSearchStyle, ...theme}}>
        <Overlay isOpen={isOpen}/>
        <Div
            className={isOpen ? 'active' : null}
            theme={{...mobileSearchStyle.toggle, ...theme.toggle}}
        >
            <Icon
                theme={{...mobileSearchStyle.toggle.icon, ...theme.toggle.icon}}
                icon={search}
            />
        </Div>
        <MotionDiv
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={{
                open: {height: 'auto'},
                closed: {height: 0}
            }}
            transition={{ease: 'easeOut'}}
            theme={{...mobileSearchStyle.panel, ...theme.panel}}
        >
            <Formik
                initialValues={{
                    s: query.split('?s=')[1] ? decodeURIComponent(query.split('?s=')[1]) : ''
                }}
                onSubmit={values => history.push(`/?s=${encodeURIComponent(values['s'])}`)}
                render={props => (
                    <Form
                        theme={{...mobileSearchStyle.inner, ...theme.inner}}
                        onSubmit={props.handleSubmit}
                    >
                        <FieldSwitch
                            id="mobile-search"
                            name="s"
                            placeholder="Search"
                            theme={{...mobileSearchStyle.field, ...theme.field}}
                            isClearable={false}
                            {...props}
                        />
                        <Div
                            as="button"
                            type="submit"
                            theme={{...mobileSearchStyle.button, ...theme.button}}
                        >
                            <Icon icon={angleRight}/>
                        </Div>
                    </Form>
                )}
            />
        </MotionDiv>
    </Div>
)

MobileSearch.displayName = 'MobileSearch'

MobileSearch.propTypes = {
    panelName: PropTypes.string.isRequired,
    theme: PropTypes.object,
    query: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired
}

MobileSearch.defaultProps = {
    theme: {
        toggle: {...mobileSearchStyle.toggle}
    },
}

const mapStateToProps = ({router}) => ({
    query: router.location.search
})

export default withToggle(connect(mapStateToProps)(MobileSearch))