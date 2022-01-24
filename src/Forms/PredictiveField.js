import idx                      from 'idx'
import PropTypes                from 'prop-types'
import React, {
    memo,
    useEffect,
    useMemo,
    useRef,
    useState
}                               from 'react'
import Autosuggest              from 'react-autosuggest'
import {queryApi}               from '../redux/sagas'
import {history}                from '../redux/store'
import {
    composePersonTitle,
    plural
}                               from '../utils/helpers'
import useMeasure               from '../utils/useMeasure'
import {search}                 from '../variables/iconLibrary'
import {globals}                from '../variables/styles'
import PredictiveItemSwitch     from './PredictiveItemSwitch'
import PredictiveSectionHeading from './PredictiveSectionHeading'
import SmartInputField          from './SmartInputField'

/**
 * Styles for this component can be found in datalists.js under autosuggestStyles
 * This complication is due to how react-autosuggest receives its styles.
 * Styles for the field and datalist items are handled normally.
 */

const PredictiveField = memo(({name, placeholder, theme, value, predictive, query, setFieldValue, isOpen}) => {
    const [label, setLabel] = useState(value
        || (predictive.includes(idx(query, _ => _.search.post_type)) && idx(query, _ => _.search[name]))
        || '')
    const [suggestions, setSuggestions] = useState([])
    const [isFocusedInputLabel, setIsFocusedInputLabel] = useState(false)
    const inputLabelWidthRef = useRef(null)
    const inputLabelWidth = useMeasure(inputLabelWidthRef).width * globals.style.inputLabelShrinkRatio
    const [legendWidth, setLegendWidth] = useState(0)

    const parseResults = useMemo(() => result => {
        let options
        if (predictive.length > 1) {
            options = predictive.map(postType => {
                let tempOptions = []
                for (let x in result.content.hits[postType]) {
                    let item = result.content.hits[postType][x]

                    tempOptions.push({
                        id: item._id,
                        title: item._source.post_title,
                        slug: item._source.slug,
                        postType: item._type,
                        photo: item._source.headshot_photo,
                        position: composePersonTitle(item._source)
                    })
                }

                if (result.content.hits[postType])
                    return {
                        id: 0,
                        title: plural(postType),
                        suggestions: [...tempOptions]
                    }

                return {suggestions: []}
            })
            options.push({
                id: 0,
                suggestions: [{
                    id: Math.random().toString(),
                    title: `View all results for "${result.content.query.entry}"`,
                    slug: `/?s=${result.content.query.entry}`,
                    postType: undefined
                }],
            })
        } else {
            options = idx(result, _ => _.content.hits[predictive[0]].map(item => ({
                id: item._id,
                title: item._source.post_title,
                slug: item._source.slug,
                postType: item._type,
                photo: item._source.headshot_photo,
                position: composePersonTitle(item._source)
            }))) || []
        }
        setSuggestions(options)
    }, [predictive])

    const loadPredictive = useMemo(
        () => async input => {
            let result = await queryApi(
                '',
                `?entry=${encodeURIComponent(input)}&post_type=${predictive.join(',')}&size=20`
            )
            parseResults(result)
        },
        [predictive, parseResults])

    const onSuggestionsFetchRequested = useMemo(
        () => ({value}) => loadPredictive(value),
        [loadPredictive]
    )

    const onSuggestionsClearRequested = useMemo(
        () => () => setSuggestions([]),
        []
    )

    const onSuggestionSelected = useMemo(
        () => (e, {suggestion}) => {
            e.preventDefault()
            e.target.blur()
            setLabel('')
            setFieldValue(name, null)
            setIsFocusedInputLabel(false)
            setLegendWidth(0)
            history.push(suggestion.slug)
        },
        [setFieldValue, name]
    )

    const handleChange = useMemo(
        () => e => {
            setLabel(e.target.value)
            setFieldValue(name, e.target.value)
        },
        [setFieldValue, name]
    )

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

    useEffect(() => {
        if (!!value) {
            setIsFocusedInputLabel(true)
            setLegendWidth(inputLabelWidth)
        }
    }, [label, inputLabelWidth, value])

    return (
        <Autosuggest
            id={name}
            name={name}
            suggestions={suggestions}
            getSuggestionValue={item => item.id}
            getSectionSuggestions={section => section.suggestions}
            inputProps={{
                value: isFocusedInputLabel ? label : '',
                placeholder,
                name,
                onChange: handleChange,
                onFocus: handleFocus,
                onBlur: handleBlur,
                inputLabelWidthRef: inputLabelWidthRef,
                ref: inputLabelWidthRef,
            }}
            shouldRenderSuggestions={value => isOpen && value && value.trim().length > 1}
            onSuggestionSelected={onSuggestionSelected}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            focusInputOnSuggestionClick={false}
            multiSection={predictive.length > 1}
            renderInputComponent={props =>
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
                    ref={inputLabelWidthRef}
                    inputIcon={search}
                    isIconFade={true}
                    isOpen={isOpen}
                    {...props}
                />
            }
            renderSuggestion={(item, {isHighlighted}) => (
                <>
                    <PredictiveItemSwitch
                        item={item}
                        isHighlighted={isHighlighted}
                    />
                </>
            )}
            renderSectionTitle={section => section.suggestions.length && <PredictiveSectionHeading section={section}/>}
        />
    )
})

PredictiveField.displayName = 'PredictiveField'

PredictiveField.propTypes = {
    isOpen: PropTypes.bool,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    predictive: PropTypes.array.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    theme: PropTypes.object,
}

PredictiveField.defaultProps = {
    className: 'field',
    theme: {},
    isOpen: true,
}

export default PredictiveField