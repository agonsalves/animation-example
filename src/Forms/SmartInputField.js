import PropTypes                    from 'prop-types'
import React, {useImperativeHandle} from 'react'
import Fieldset                     from '../Basic/Fieldset'
import InputLabel                   from '../Basic/InputLabel'
import Legend                       from '../Basic/Legend'
import {focusedInputLabelStyle}     from '../themes/forms'
import Field                        from './Field'
import InputIconToggle              from './InputIconToggle'

const SmartInputField = React.forwardRef((props, ref) => {

    /// prevents Autosuggest from throwing error
    useImperativeHandle(ref, () => ({
        focus: () => {
            props.inputLabelWidthRef.current.focus()
        }
    }))

    return (
        <Fieldset theme={props.theme.fieldset}>
            <Field
                theme={props.theme}
                onChange={props.handleChange}
                onFocus={props.handleFocus}
                onBlur={props.handleBlur}
                value={props.label}
                name={props.name}
                {...props}
            />
            <InputLabel
                children={props.placeholder}
                theme={props.isFocusedInputLabel
                    ? {...focusedInputLabelStyle, ...props.theme.focusedInputLabelStyle}
                    : {...props.theme.inputLabel}}
                ref={props.inputLabelWidthRef}
            />
            <Legend theme={{
                width: props.legendWidth,
                padding: props.isFocusedInputLabel ? '0 5px' : 0, ...props.theme.legend
            }}/>
            <InputIconToggle {...props}/>
        </Fieldset>
    )
})

SmartInputField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    theme: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleFocus: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleClear: PropTypes.func,
    isFocusedInputLabel: PropTypes.bool.isRequired,
    legendWidth: PropTypes.number.isRequired,
    inputLabelWidthRef: PropTypes.object,
    inputIcon: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    isIconFade: PropTypes.bool,
    isIconToggle: PropTypes.bool
}

SmartInputField.defaultProps = {
    isOpen: false,
    isIconFade: false,
    isIconToggle: false,
    handleClear: null
}

export default SmartInputField
