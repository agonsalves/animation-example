import {
    articlize,
    singular
} from '../utils/helpers'
import {
    angleDown,
    search
} from './iconLibrary'

/**
 *    Field declarations at the top of the file.
 *    Form configurations at the bottom.
 */

/**
 *    Archive Search Fields
 */
const keywordField = {
        name: 'keyword',
        placeholder: 'Search by Keyword',
        icon: search,
    },
    personField = {
        name: 'people',
        placeholder: `Filter by ${singular('person')}`,
        icon: angleDown,
        label: singular('person')
    },
    practiceField = {
        name: 'practice_area',
        placeholder: `Filter by ${singular('practice-area')}`,
        icon: angleDown,
        label: singular('practice-area')
    },
    yearField = {
        name: 'date',
        placeholder: 'Filter by Year',
        icon: angleDown,
        label: 'Year'
    },
    newsTypeField = {
        name: 'news_item_type',
        placeholder: `Filter by ${singular('news-item')} Type`,
        icon: angleDown,
        label: `${singular('news-item')} Type`
    },
    publicationTypeField = {
        name: 'publication_type',
        placeholder: `Filter by ${singular('publication')} Type`,
        icon: angleDown,
        label: `${singular('publication')} Type`
    },
    practiceNameField = {
        name: 'keyword',
        placeholder: `Type in ${articlize(singular('practice-area'))}`,
        icon: search,
        predictive: ['practice-area'],
    },
    industryField = {
        name: 'industry',
        placeholder: `Filter by ${singular('industry')}`,
        icon: angleDown,
        label: singular('industry')
    }

/**
 *    People Search Fields
 */
const personNameField = {
        name: 'keyword',
        placeholder: 'Type a name or keyword',
        icon: search,
        predictive: ['person']
    },
    personPositionField = {
        name: 'position',
        placeholder: 'Select a position',
        icon: angleDown,
        label: 'Position'
    },
    personPracticeField = {
        name: 'practice_area',
        placeholder: `Select ${articlize(singular('practice-area').toLowerCase())}`,
        icon: angleDown,
        label: singular('practice-area')
    },
    personOfficeField = {
        name: 'office_location',
        placeholder: `Select a location`,
        icon: angleDown,
        label: singular('office')
    },
    personBarAdmissionField = {
        name: 'bar_memberships_fieldset',
        placeholder: 'Select a bar admission',
        icon: angleDown,
        label: 'Bar Admission'
    },
    personIndustryField = {
        name: 'industry',
        placeholder: `Select ${articlize(singular('industry').toLowerCase())}`,
        icon: angleDown,
        label: singular('industry')
    }//,
// personLanguageField = {
//     name: 'languages_fieldset',
//     placeholder: 'Select a language',
//     icon: angleDown,
//     label: 'Language'
// }

/**
 *    FORM CONFIGURATION
 */

export const searchForms = {
    'news-item': {
        fields: [
            keywordField,
            personField,
            practiceField,
            industryField,
            yearField,
            newsTypeField
        ]
    },
    publication: {
        fields: [
            keywordField,
            personField,
            practiceField,
            industryField,
            yearField,
            publicationTypeField
        ]
    },
    event: {
        fields: [
            keywordField,
            personField,
            practiceField,
            industryField,
            yearField
        ]
    },
    'case-study': {
        fields: [
            keywordField,
            personField,
            practiceField,
            industryField
        ]
    },
    person: {
        fields: [
            personNameField,
            personPositionField,
            personPracticeField,
            personIndustryField,
            personOfficeField,
            personBarAdmissionField,
        ]
    },
    'practice-area': {
        fields: [
            practiceNameField
        ]
    }
}

