import PropTypes            from 'prop-types'
import React                from 'react'
import Div                  from '../Basic/Div'
import Icon                 from '../Basic/Icon'
import Span                 from '../Basic/Span'
import LinkSwitch           from '../Elements/LinkSwitch'
import SquareHeadshot       from '../Elements/SquareHeadshot'
import {moreButtonStyle}    from '../themes/buttons'
import {personListingStyle} from '../themes/microsites'
import {composePersonTitle} from '../utils/helpers'
import {triangle}           from '../variables/iconLibrary'

const PersonListing = ({person, theme}) =>
    <LinkSwitch url={person.slug} theme={{...personListingStyle, ...theme}}>
        <Div theme={{...personListingStyle.col1, ...theme.col1}}>
            <SquareHeadshot
                name={person.post_title}
                headshot={person.headshot_photo || person.thumbnail_teaser}
                size={80}
                theme={{...personListingStyle.headshot, ...theme.headshot}}
            />
        </Div>
        <Div theme={{...personListingStyle.col2, ...theme.col2}}>
            <Div theme={{...personListingStyle.name, ...theme.name}}>
                {person.post_title}
            </Div>
            <Div theme={{...personListingStyle.title, ...theme.title}}>
                {composePersonTitle(person)}
            </Div>
        </Div>
        <Div theme={{...personListingStyle.col3, ...theme.col3}}>
            {person.office_location && (
                <Span theme={{...personListingStyle.phone, ...theme.phone}}>
                    {(person.office_location[0].office_phone && (
                        person.office_location[0].office_phone
                    ))}
                </Span>
            )}
        </Div>
        <Span theme={{...moreButtonStyle, ...personListingStyle.button, ...theme.button}}>
            More
            <Icon theme={{...moreButtonStyle.icon, ...theme.icon}} icon={triangle}/>
        </Span>
    </LinkSwitch>

PersonListing.propTypes = {
    person: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

PersonListing.defaultProps = {
    theme: {
        headshot: {},
        name: {},
        title: {},
        phone: {},
        email: {},
        button: {},
    },
}

export default PersonListing