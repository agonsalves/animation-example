import PropTypes                  from 'prop-types'
import React                      from 'react'
import {personMarqueeVariants}    from '../animations/personMarquee'
import Div                        from '../Basic/Div'
import Icon                       from '../Basic/Icon'
import MotionDiv                  from '../Basic/MotionDiv'
import PhoneLink                  from '../Basic/PhoneLink'
import LinkSwitch                 from '../Elements/LinkSwitch'
import {personOfficeWrapperStyle} from '../themes/microsites'
import {
    mapMarker,
    phone
}                                 from '../variables/iconLibrary'

const PersonPhoneList = ({post, theme}) => {
    let numbers = []

    if (post.office_location)
        post.office_location.forEach(item => {
            if (numbers.length < 4) {
                numbers.push({
                    type: 'type-office',
                    url: item.slug,
                    label: item.post_title,
                    number: item.office_phone
                })
            }
        })

    if (post.alternate_phone_2 && post.is_mobile_public && numbers.length < 4)
        numbers.push({
            type: 'type-phone',
            label: 'Mobile',
            number: post.alternate_phone_2
        })

    if (post.has_alternate_phone && post.alternate_phone_1 && numbers.length < 4)
        numbers.push({
            type: 'type-phone',
            label: post.alternate_phone_1_label,
            number: post.alternate_phone_1
        })

    return (
        <Div theme={{...personOfficeWrapperStyle, display: 'table', ...theme.wrapper}}>
            {numbers.map(item =>
                <MotionDiv
                    key={item.label}
                    variants={personMarqueeVariants}
                    className={item.type}
                    theme={{display: 'table-row'}}
                >
                    <Icon
                        icon={item.type === 'type-office' ? mapMarker : phone}
                        theme={{...personOfficeWrapperStyle.icon, ...theme.icon}}
                    />
                    <LinkSwitch
                        url={item.url}
                        theme={{...personOfficeWrapperStyle.nameLink, ...theme.nameLink}}
                    >
                        {item.label + (item.number ? ': ' : '')}
                    </LinkSwitch>
                    {item.number && (
                        <PhoneLink
                            phone={item.number}
                            theme={{...personOfficeWrapperStyle.phoneLink, ...theme.phoneLink}}
                        />
                    )}
                </MotionDiv>
            )}
        </Div>
    )
}

PersonPhoneList.propTypes = {
    post: PropTypes.object.isRequired,
}

PersonPhoneList.defaultProps = {
    theme: {}
}

export default PersonPhoneList