import PropTypes           from 'prop-types'
import React, {
    memo,
    useEffect,
    useRef,
    useState
}                          from 'react'
import Autosuggest         from 'react-autosuggest'
import Div                 from '../Basic/Div'
import {datalistItemStyle} from '../themes/datalists'
import {filterFieldStyle}  from '../themes/forms'
import useMeasure          from '../utils/useMeasure'
import {angleDown}         from '../variables/iconLibrary'
import {globals}           from '../variables/styles'
import SmartInputField     from './SmartInputField'

const FilterField = memo(({items, name, value: initialValue, onSelect, placeholder}) => {
    const [value, setValue] = useState(initialValue)
    const [isFocusedInputLabel, setIsFocusedInputLabel] = useState(false)
    const [legendWidth, setLegendWidth] = useState(0)
    const inputLabelWidthRef = useRef(null)
    const inputLabelWidth = useMeasure(inputLabelWidthRef).width * globals.style.inputLabelShrinkRatio

    useEffect(() => {
        if (!!value) {
            setIsFocusedInputLabel(true)
            setLegendWidth(inputLabelWidth)
        }
    }, [value, inputLabelWidth])

    const onSuggestionSelected = (e, {suggestion}) => {
        setValue(suggestion.title)
        onSelect(suggestion.title, suggestion)
    }

    const handleFocus = () => {
        setIsFocusedInputLabel(true)
        setLegendWidth(inputLabelWidth)
    }

    const handleBlur = () => {
        if (!value) {
            setIsFocusedInputLabel(false)
            setLegendWidth(0)
        }
    }

    return (
        <Div theme={filterFieldStyle.wrapper}>
            <Autosuggest
                id={name}
                getSuggestionValue={item => item.title}
                inputProps={{
                    value,
                    placeholder,
                    name,
                    onChange: onSelect,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                }}
                suggestions={items}
                onSuggestionsFetchRequested={() => null}
                onSuggestionsClearRequested={() => null}
                onSuggestionSelected={onSuggestionSelected}
                shouldRenderSuggestions={() => true}
                renderInputComponent={props =>
                    <SmartInputField
                        name={name}
                        placeholder={placeholder}
                        theme={filterFieldStyle}
                        label={value}
                        handleChange={onSelect}
                        handleFocus={() => handleFocus()}
                        handleBlur={() => handleBlur()}
                        isFocusedInputLabel={isFocusedInputLabel}
                        legendWidth={legendWidth}
                        inputLabelWidthRef={inputLabelWidthRef}
                        inputIcon={angleDown}
                        {...props}
                    />
                }
                renderSuggestion={(item, {isHighlighted}) =>
                    <Div
                        theme={datalistItemStyle}
                        className={isHighlighted ? 'active' : ''}
                        children={item.title}
                    />
                }
            />
        </Div>
    )
})

FilterField.displayName = 'FilterField'

FilterField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    items: PropTypes.array.isRequired
}

export default FilterField