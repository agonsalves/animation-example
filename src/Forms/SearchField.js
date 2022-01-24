import PropTypes       from 'prop-types'
import React, {
    memo,
    useEffect,
    useRef,
    useState
}                      from 'react'
import useMeasure      from '../utils/useMeasure'
import {search}        from '../variables/iconLibrary'
import {globals}       from '../variables/styles'
import SmartInputField from './SmartInputField'

const SearchField = memo(({name, placeholder, theme, value, handleChange, ...props}) => {
        const [label, setLabel] = useState('')
        const [isFocusedInputLabel, setIsInputFocusedLabel] = useState(false)
        const [legendWidth, setLegendWidth] = useState(0)
        const inputLabelWidthRef = useRef(null)
        const inputLabelWidth = useMeasure(inputLabelWidthRef).width * globals.style.inputLabelShrinkRatio

        const handleFocus = () => {
            setIsInputFocusedLabel(true)
            setLegendWidth(inputLabelWidth)
        }

        const handleBlur = () => {
            if (!value) {
                setIsInputFocusedLabel(false)
                setLegendWidth(0)
            }
        }

        useEffect(() => {
            if (!!value) {
                setIsInputFocusedLabel(true)
                setLegendWidth(inputLabelWidth)
                setLabel(value)
            } else {
                setIsInputFocusedLabel(false)
                setLegendWidth(0)
                setLabel('')
            }
        }, [value, inputLabelWidth])

        return (
            <SmartInputField
                name={name}
                placeholder={placeholder}
                theme={theme}
                label={label}
                handleChange={handleChange}
                handleFocus={() => handleFocus()}
                handleBlur={() => handleBlur()}
                isFocusedInputLabel={isFocusedInputLabel}
                legendWidth={legendWidth}
                inputLabelWidthRef={inputLabelWidthRef}
                inputIcon={search}
                {...props}
            />
        )
    }
)

SearchField.displayName = 'SearchField'

SearchField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    theme: PropTypes.object,
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired
}

SearchField.defaultProps = {
    placeholder: '',
    theme: {
        field: {},
        iconWrapper: {},
        clearSelection: {},
        icon: {}
    },
    value: ''
}

export default SearchField