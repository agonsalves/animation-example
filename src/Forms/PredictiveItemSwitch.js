import PropTypes              from 'prop-types'
import React                  from 'react'
import Div                    from '../Basic/Div'
import Icon                   from '../Basic/Icon'
import {
    predictiveHeadingStyle,
    predictiveViewAllStyle
}                             from '../themes/predictive'
import {search}               from '../variables/iconLibrary'
import {globals}              from '../variables/styles'
import PredictivePersonItem   from './PredictivePersonItem'
import PredictivePracticeItem from './PredictivePracticeItem'

const PredictiveItemSwitch = ({item, ...props}) => {
    if (item.postType === 'person')
        return (
            <PredictivePersonItem
                name={item.title}
                photo={item.photo}
                position={item.position}
                slug={item.slug}
                {...props}
            />
        )

    if (item.postType === 'practice-area' || item.postType === 'industry')
        return (
            <PredictivePracticeItem
                name={item.title}
                slug={item.slug}
                {...props}
            />
        )

    if (item.postType === undefined)
        return (
            <>
                <PredictivePracticeItem
                    name={item.title}
                    slug={item.slug}
                    theme={{...predictiveViewAllStyle}}
                    {...props}
                />
                <Icon
                    icon={search}
                    theme={{...predictiveViewAllStyle.icon}}
                />
            </>
        )

    if (item.heading)
        return (
            <Div
                {...props}
                theme={predictiveHeadingStyle}
                children={item.title}
            />
        )

    return (
        <Div
            style={props.isHighlighted ? {backgroundColor: globals.colors.green} : {}}
            children={item.title}
        />
    )
}

PredictiveItemSwitch.propTypes = {
    item: PropTypes.object.isRequired
}

export default PredictiveItemSwitch