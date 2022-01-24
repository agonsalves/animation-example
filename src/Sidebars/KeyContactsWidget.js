import PropTypes           from 'prop-types'
import React               from 'react'
import placeholderHeadshot from '../assets/square-headshot-placeholder.png'
import Div                 from '../Basic/Div'
import H3                  from '../Basic/H3'
import Img                 from '../Basic/Img'
import PhoneLink           from '../Basic/PhoneLink'
import LinkSwitch          from '../Elements/LinkSwitch'
import SquareHeadshot      from '../Elements/SquareHeadshot'
import {
    keyContactsWidgetStyle,
    widgetTitleStyle
}                          from '../themes/sidebars'
import Widget              from './Widget'

const KeyContactsWidget = ({widget, theme}) => {
    const buildSystemContacts = contacts =>
        contacts.map(contact =>
            <Div key={contact.id} theme={{...keyContactsWidgetStyle.contact, ...theme.contact}}>
                {(contact.thumbnail_teaser && (
                    <LinkSwitch
                        url={contact.slug}
                        theme={{...keyContactsWidgetStyle.imageWrapper, ...theme.imageWrapper}}
                    >
                        <Img
                            theme={{...keyContactsWidgetStyle.image, ...theme.image}}
                            image={contact.thumbnail_teaser}
                        />
                    </LinkSwitch>
                )) || (
                    <SquareHeadshot
                        name={contact.post_title}
                        theme={keyContactsWidgetStyle.image}
                        placeholder={placeholderHeadshot}
                    />
                )}
                <Div>
                    {contact.post_title && (
                        <LinkSwitch
                            url={contact.slug}
                            theme={{...keyContactsWidgetStyle.name, ...theme.name}}
                            children={contact.post_title}
                        />
                    )}
                    {contact.phone && (
                        <Div theme={{...keyContactsWidgetStyle.phone, ...theme.phone}}>
                            <PhoneLink phone={contact.phone}/>
                        </Div>
                    )}
                    {contact.email && (
                        <LinkSwitch
                            theme={{...keyContactsWidgetStyle.email, ...theme.email}}
                            url={`mailto:${contact.email}`}
                            children="Email"
                        />
                    )}
                </Div>
            </Div>
        )


    const buildManualContacts = contacts =>
        contacts.map((contact, index) =>
            <Div key={index} theme={{...keyContactsWidgetStyle.contact, ...theme.contact}}>
                {contact.headshot && (
                    <LinkSwitch
                        url={contact.url}
                        theme={{...keyContactsWidgetStyle.imageWrapper, ...theme.imageWrapper}}
                    >
                        <Img
                            theme={{...keyContactsWidgetStyle.image, ...theme.image}}
                            image={contact.headshot}
                        />
                    </LinkSwitch>
                )}
                <Div>
                    {contact.name && (
                        <LinkSwitch
                            url={contact.url}
                            theme={{...keyContactsWidgetStyle.name, ...theme.name}}
                            children={contact.name}
                        />
                    )}
                    {contact.position && (
                        <Div
                            theme={{...keyContactsWidgetStyle.title, ...theme.title}}
                            children={contact.position}
                        />
                    )}
                    {contact.phone && (
                        <Div theme={{...keyContactsWidgetStyle.phone, ...theme.phone}}>
                            <PhoneLink phone={contact.phone}/>
                        </Div>
                    )}
                    {contact.email && (
                        <LinkSwitch
                            theme={{...keyContactsWidgetStyle.email, ...theme.email}}
                            url={`mailto:${contact.email}`}
                            children="Email"
                        />
                    )}
                </Div>
            </Div>
        )

    return (
        <Widget theme={{...keyContactsWidgetStyle, ...theme}}>
            <H3 theme={{...widgetTitleStyle, ...keyContactsWidgetStyle.heading, ...theme.heading}}>
                {widget.widget_title || 'Key Contacts'}
            </H3>
            {(widget.widget_key_contacts && buildSystemContacts(widget.widget_key_contacts))
            || (widget.widget_key_contacts_manual && buildManualContacts(widget.widget_key_contacts_manual))}
        </Widget>
    )
}


KeyContactsWidget.propTypes = {
    widget: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

KeyContactsWidget.defaultProps = {
    theme: {
        heading: {},
        contact: {},
        imageWrapper: {},
        image: {},
        name: {},
        title: {},
        phone: {},
        email: {}
    },
}

export default KeyContactsWidget