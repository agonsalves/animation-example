import PropTypes                  from 'prop-types'
import React, {useState}          from 'react'
import Div                        from '../Basic/Div'
import H2                         from '../Basic/H2'
import PersonListing              from '../Microsites/PersonListing'
import {
    globalArchiveListingStyle,
    globalResultJustTitleStyle,
    globalSearchStyle
}                                 from '../themes/elements'
import {globalPersonListingStyle} from '../themes/microsites'
import ButtonSmall                from './ButtonSmall'
import CaseStudyListing           from './CaseStudyListing'
import EventListing               from './EventListing'
import LinkSwitch                 from './LinkSwitch'
import NewsListing                from './NewsListing'
import PublicationListing         from './PublicationListing'

const GlobalSearchSection = ({results, section, theme, title}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Div as="section" theme={globalSearchStyle.section}>
            <Div theme={globalSearchStyle.sectionHeader}>
                <H2 theme={globalSearchStyle.heading}>
                    {title}
                </H2>
            </Div>
            <Div theme={globalSearchStyle.results}>
                {results.map(({_source: item}, index) => {
                    if (isOpen || index < 3) {
                        switch (section) {
                            case 'person':
                                return <PersonListing
                                    key={item.slug}
                                    person={item}
                                    theme={globalPersonListingStyle}
                                />
                            case 'publication':
                                return <PublicationListing
                                    key={item.slug}
                                    post={item}
                                    theme={globalArchiveListingStyle}
                                />
                            case 'case-study':
                                return <CaseStudyListing
                                    key={item.slug}
                                    post={item}
                                    theme={globalArchiveListingStyle}
                                />
                            case 'event':
                                return <EventListing
                                    key={item.slug}
                                    post={item}
                                    theme={globalArchiveListingStyle}
                                />
                            case 'news-item':
                                return <NewsListing
                                    key={item.slug}
                                    post={item}
                                    theme={globalArchiveListingStyle}
                                />
                            case 'practice-area':
                            case 'office':
                            case 'page':
                            default:
                                return <LinkSwitch
                                    key={item.slug}
                                    theme={globalResultJustTitleStyle}
                                    url={item.slug}
                                    children={item.post_title}
                                />
                        }
                    }
                    return null
                })}
                {!isOpen && results.length > 3 && (
                    <ButtonSmall
                        url=""
                        label="View More"
                        onClick={() => setIsOpen(!isOpen)}
                        theme={globalSearchStyle.button}
                    />
                )}
            </Div>
        </Div>
    )
}

GlobalSearchSection.propTypes = {
    theme: PropTypes.object,
    title: PropTypes.string.isRequired,
    results: PropTypes.array.isRequired,
    section: PropTypes.string.isRequired
}

GlobalSearchSection.defaultProps = {
    theme: {},
}

export default GlobalSearchSection