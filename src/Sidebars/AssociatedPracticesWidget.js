import PropTypes  from 'prop-types'
import React      from 'react'
import H3         from '../Basic/H3'
import Icon       from '../Basic/Icon'
import Li         from '../Basic/Li'
import Ul         from '../Basic/Ul'
import LinkSwitch from '../Elements/LinkSwitch'
import {
    associatedPracticeItemStyle,
    associatedPracticeList,
    associatedPracticeNameStyle,
    widgetTitleStyle
}                 from '../themes/sidebars'
import {plural}   from '../utils/helpers'
import {circle}   from '../variables/iconLibrary'
import Widget     from './Widget'

const AssociatedPracticesWidget = ({practices}) =>
    <Widget>
        <H3 theme={widgetTitleStyle}>Related {plural('practice-area')}</H3>
        <Ul theme={associatedPracticeList}>
            {practices.map((item, index) =>
                <Li key={index} theme={associatedPracticeItemStyle}>
                    <Icon icon={circle} theme={associatedPracticeItemStyle.icon}/>
                    <LinkSwitch
                        theme={associatedPracticeNameStyle}
                        url={item.slug}
                        children={item.post_title}
                    />
                </Li>
            )}
        </Ul>
    </Widget>

AssociatedPracticesWidget.propTypes = {
    practices: PropTypes.array.isRequired,
}

export default AssociatedPracticesWidget