import PropTypes       from 'prop-types'
import React, {memo}   from 'react'
import Div             from '../Basic/Div'
import H3              from '../Basic/H3'
import RichText        from '../Basic/RichText'
import {
    bioInfoStyle,
    bioInfoSubheadStyle,
    bioInfoWrapperStyle
}                      from '../themes/microsites'
import {plural}        from '../utils/helpers'
import AssociationList from './AssociationList'
import BarAdmissions   from './BarAdmissions'
import CourtAdmissions from './CourtAdmissions'
import Education       from './Education'
import Languages       from './Languages'

const subheads = [
    {
        heading: plural('practice-area'),
        key: 'practice_area',
        component: AssociationList,
    },
    {
        heading: 'Industries',
        key: 'industry',
        component: AssociationList,
    },
    {
        heading: 'Education',
        key: 'education_fieldset',
        component: Education
    },
    {
        heading: 'Bar Admissions',
        key: 'bar_memberships_fieldset',
        component: BarAdmissions
    },
    {
        heading: 'Court Admissions',
        key: 'court_admissions',
        component: CourtAdmissions
    },
    {
        heading: 'Charitable & Civic Involvement',
        key: 'charitable_civic_involvement',
        component: RichText
    },
    {
        heading: 'Special Honors',
        key: 'special_honors',
        component: RichText
    },
    {
        heading: 'Professional Affiliations',
        key: 'professional_affiliations',
        component: RichText
    },
    {
        heading: 'Work Experience',
        key: 'work_experience',
        component: RichText
    },
    {
        heading: 'Reported Cases',
        key: 'reported_cases',
        component: RichText
    },
    {
        heading: 'Languages',
        key: 'languages_fieldset',
        component: Languages
    },
]

const BioInfoSubHeads = memo(({post}) => {
    let finalSubheads = post.info_arrangement.map(key => {
        if (post.custom_categories && key.includes('custom_categories')) {
            const catIndex = parseInt(key.split('_').pop())
            return {
                key: key,
                heading: post.custom_categories[catIndex].heading,
                content: post.custom_categories[catIndex].text_content,
                Component: RichText,
            }
        }

        let subhead = subheads.find(item => item.key === key)
        if (subhead)
            return {
                key,
                heading: subhead.heading,
                content: post[key],
                Component: subhead.component,
                theme: subhead.theme
            }

        return {}
    })

    return (
        <Div theme={bioInfoWrapperStyle}>
            {finalSubheads.map((item, i) => item.content &&
                <Div key={item.key} theme={bioInfoStyle}>
                    <H3 theme={bioInfoSubheadStyle}>{item.heading}</H3>
                    <item.Component theme={item.theme}>{item.content}</item.Component>
                </Div>
            )}
        </Div>
    )
})

BioInfoSubHeads.displayName = 'BioInfoSubHeads'

BioInfoSubHeads.propTypes = {
    post: PropTypes.object.isRequired,
}

export default BioInfoSubHeads