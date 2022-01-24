import PropTypes           from 'prop-types'
import React               from 'react'
import placeholderHeadshot from '../assets/square-headshot-placeholder.png'
import Div                 from '../Basic/Div'
import H3                  from '../Basic/H3'
import Li                  from '../Basic/Li'
import LinkSwitch          from '../Elements/LinkSwitch'
import SquareHeadshot      from '../Elements/SquareHeadshot'
import {
    associatedPersonStyle,
    widgetTitleStyle
}                          from '../themes/sidebars'
import {plural}            from '../utils/helpers'
import Widget              from './Widget'

const AssociatedPeopleWidget = ({people}) => (
    <Widget>
        <H3 theme={widgetTitleStyle}>Related {plural('person')}</H3>
        {people.map((item, index) =>
            (people.length <= 2 &&
                <Div key={index} theme={associatedPersonStyle.container}>
                    <LinkSwitch url={item.slug} theme={associatedPersonStyle}>
                        <SquareHeadshot
                            name={item.post_title}
                            headshot={item.thumbnail_teaser}
                            theme={associatedPersonStyle.image}
                            size={185}
                            placeholder={placeholderHeadshot}
                        />
                        <Div theme={associatedPersonStyle.name}>{item.post_title}</Div>
                    </LinkSwitch>
                </Div>
            ) || (
                <Li key={index}>
                    <LinkSwitch
                        theme={{...associatedPersonStyle.name, ...associatedPersonStyle.noImageName}}
                        url={item.slug}
                        children={item.post_title}
                    />
                </Li>
            )
        )}
    </Widget>
)

AssociatedPeopleWidget.propTypes = {
    people: PropTypes.array.isRequired,
}

export default AssociatedPeopleWidget