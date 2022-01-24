import idx                 from 'idx'
import PropTypes           from 'prop-types'
import React, {
    memo,
    useEffect,
    useMemo,
    useRef,
    useState
}                          from 'react'
import Autosuggest         from 'react-autosuggest'
import Div                 from '../Basic/Div'
import {datalistItemStyle} from '../themes/datalists'
import {decodeEntities}    from '../utils/helpers'
import useMeasure          from '../utils/useMeasure'
import {
    angleUp,
    closeOut,
}                          from '../variables/iconLibrary'
import {globals}           from '../variables/styles'
import SmartInputField     from './SmartInputField'

const DatalistField = memo(({name, placeholder, theme, value, datalist, setFieldValue}) => {
    const [hasSections, setHasSections] = useState(false)
    const [isFocusedInputLabel, setIsFocusedInputLabel] = useState(false)
    const [legendWidth, setLegendWidth] = useState(0)
    const inputLabelWidthRef = useRef(null)
    const inputLabelWidth = useMeasure(inputLabelWidthRef).width * globals.style.inputLabelShrinkRatio

    const customIcon = () => {
        if ((!theme.prefix || !theme.iconName)) {
            return angleUp
        } else {
            return {
                prefix: theme.prefix,
                iconName: theme.iconName,
                icon: theme.icon
            }
        }
    }

    const options = useMemo(() => {
        /**
         * we're going to build the options array from the datalist source. In most cases, it is straightforward
         * because the list is flat. However, practice often have a taxonomy structure, so need to be treated
         * differently.
         */

        let newArray = []

        datalist.forEach(item => {
            if (item.children) {
                /* Item has children, so we trigger the multiSection flag on Autosuggest. */
                setHasSections(true)

                /**
                 * If the section has a child that is flagged as a main practice, then we add a flag to the section
                 * parent that will prevent the section title component from being rendered. Instead, we give the
                 * main practice a class that will make it look like it is the section title. It will be clickable,
                 * unlike an actual section title.
                 *
                 * If the section does not have a child flagged as main practice, then it will behave normally,
                 * with the section title component being rendered.
                 */
                if (item.children.find(child => child.display_as_main_practice)) {
                    newArray.push({
                        ...item,
                        hideParent: true,
                        children: item.children.map(child => ({
                            ...child,
                            className: child.display_as_main_practice ? 'parent' : ''
                        }))
                    })
                } else {
                    newArray.push({...item, className: 'parent disabled'})
                }
            } else
                newArray.push({...item, className: 'parent', children: [item]})
        })

        return newArray
    }, [datalist])
    const getInitialLabel = useMemo(() => {
        let label = ''

        if (value) {
            let realValue = datalist.find(item => {
                if (idx(item, _ => _.children.find(child =>
                    child.id === parseInt(value)
                )))
                    return true

                return item.id === parseInt(value)
            })

            if (idx(realValue, _ => _.children) && realValue.id !== value)
                realValue = realValue.children.find(item => item.id === parseInt(value))

            label = realValue ? realValue.title : ''
        }

        return decodeEntities(label)
    }, [datalist, value])
    const [label, setLabel] = useState(getInitialLabel)
    const [suggestions, setSuggestions] = useState(options)

    useEffect(() => {
        if (!value)
            setLabel('')
    }, [value])

    const handleChange = useMemo(() => e => setLabel(e.target.value), [])

    const handleClear = useMemo(
        () => () => {
            setFieldValue(name, null)
            setLabel('')
            setIsFocusedInputLabel(false)
            setLegendWidth(0)
        },
        [setFieldValue, name]
    )

    const handleSelection = useMemo(() => (e, {suggestion}) => {
        e && e.preventDefault()
        if (suggestion) {
            setFieldValue(name, suggestion.id || null)
            setLabel(decodeEntities(suggestion.title))
        }
    }, [setFieldValue, name])

    const handleFocus = () => {
        setIsFocusedInputLabel(true)
        setLegendWidth(inputLabelWidth)
    }

    const handleBlur = () => {
        if (!value)
            handleClear()
    }

    useEffect(() => {
        if (!!value) {
            setIsFocusedInputLabel(true)
            setLegendWidth(inputLabelWidth)
        } else {
            handleClear()
        }
    }, [value, inputLabelWidth, handleClear])

    const getSuggestions = useMemo(() => value => {
        const inputValue = value.trim().toLowerCase()
        const inputLength = inputValue.length

        return inputLength === 0
            ? options
            : options.filter(item => {
                return (item.children && item.children.find(child =>
                        child.title.toLowerCase().includes(value.toLowerCase())
                    ))
                    || item.title.toLowerCase().includes(inputValue)
            })
    }, [options])

    const onSuggestionsFetchRequested = useMemo(
        () => ({value}) => setSuggestions(getSuggestions(value)),
        [getSuggestions]
    )

    const onSuggestionsClearRequested = useMemo(
        () => () => setSuggestions(options),
        [options]
    )

    return (
        <Autosuggest
            id={name}
            name={name}
            inputProps={{
                value: label,
                name,
                onChange: handleChange,
                onFocus: handleFocus,
                onBlur: handleBlur,
            }}
            suggestions={suggestions}
            getSuggestionValue={item => item.title}
            getSectionSuggestions={section => section.children}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={handleSelection}
            onSuggestionHighlighted={() => null}
            shouldRenderSuggestions={() => true}
            multiSection={hasSections}
            renderInputComponent={props =>
                <SmartInputField
                    name={name}
                    placeholder={placeholder}
                    theme={theme}
                    label={label}
                    handleChange={handleChange}
                    handleFocus={() => handleFocus()}
                    handleBlur={() => handleBlur()}
                    handleClear={() => handleClear()}
                    isFocusedInputLabel={isFocusedInputLabel}
                    legendWidth={legendWidth}
                    inputLabelWidthRef={inputLabelWidthRef}
                    ref={inputLabelWidthRef}
                    inputIcon={props.value.length > 0 ? closeOut : customIcon()}
                    isIconToggle={true}
                    {...props}
                />
            }
            renderSuggestion={(item, {isHighlighted}) =>
                <Div
                    className={`${item.className} ${isHighlighted ? 'active' : ''} datalist-item`}
                    children={decodeEntities(item.title)}
                    theme={datalistItemStyle}
                />
            }
            renderSectionTitle={section => !section.hideParent && (
                <Div
                    children={decodeEntities(section.title)}
                    theme={datalistItemStyle}
                    className={section.className || 'parent'}
                />
            )}
        />
    )
})

DatalistField.displayName = 'DatalistField'

DatalistField.propTypes = {
    datalist: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    setFieldValue: PropTypes.func.isRequired,
    theme: PropTypes.object
}

DatalistField.defaultProps = {
    theme: {}
}

export default DatalistField