import React, {useState}    from 'react'
import {useSelector}        from 'react-redux'
import Div                  from '../Basic/Div'
import H2                   from '../Basic/H2'
import H3                   from '../Basic/H3'
import Icon                 from '../Basic/Icon'
import Span                 from '../Basic/Span'
import LinkSwitch           from '../Elements/LinkSwitch'
import PeopleSearchAlphabet from '../Forms/PeopleSearchAlphabet'
import PeopleSearchForm     from '../Forms/PeopleSearchForm'
import {mobileFlag}         from '../redux/selectors'
import {postContentStyle}   from '../themes/layout'
import {
    alphabetFilterStyle,
    peopleSearchForm
}                           from '../themes/pagePeople'
import {singular}           from '../utils/helpers'
import {white}              from '../utils/themer'
import {
    toggleOffThin,
    toggleOnSolid,
    triangle
}                           from '../variables/iconLibrary'
import {globals}            from '../variables/styles'

const PeopleTemplate = ({post}) => {
    const isMobile = useSelector(mobileFlag)
    const [isExpanded, setIsExpanded] = useState(!!isMobile)

    return (
        <Div theme={{...postContentStyle, flexGrow: 1, justifyContent: 'flex-start'}}>
            <Div theme={peopleSearchForm.wrapper}>
                <H2 theme={peopleSearchForm.header}>
                    <Span theme={{zIndex: 2}}>
                        {`Find a ${singular('person').toLowerCase()}`}
                    </Span>
                </H2>
                <Div theme={peopleSearchForm.inner}>
                    <H3 theme={peopleSearchForm.subHeader}>{isMobile ? `Find a ${singular('person')}` : ''}</H3>
                    <PeopleSearchForm
                        panelName={'panel-search'}
                        theme={{...peopleSearchForm, triangle}} post={post}
                        isAdvanced={isExpanded}
                    />
                    <PeopleSearchAlphabet theme={peopleSearchForm.alphabet} listingPage={post.slug} post={post}/>
                    {(!isMobile) && (
                        <Div theme={{display: 'flex', justifyContent: 'space-between'}}>
                            <Span onClick={() => setIsExpanded(!isExpanded)} theme={peopleSearchForm.advancedSearch}>
                                <Icon icon={isExpanded ? toggleOnSolid : toggleOffThin}
                                      theme={{
                                          ...peopleSearchForm.advancedSearch.icon,
                                          color: isExpanded ? globals.colors.lightGreen : white
                                      }}/>
                                {`${isExpanded ? 'Basic' : 'Advanced'} search`}
                            </Span>
                            <LinkSwitch
                                theme={{
                                    ...alphabetFilterStyle.letter,
                                    ...alphabetFilterStyle.viewAll,
                                    width: 'auto !important',
                                    padding: '0 10px',
                                }}
                                url={`${post.slug}?search[post_type]=person`}
                            >
                                View All
                                <Icon icon={triangle} theme={{...alphabetFilterStyle.viewAll.icon}}/>
                            </LinkSwitch>
                        </Div>
                    )}
                </Div>
                <Div theme={peopleSearchForm.headerOverlay}/>
            </Div>
        </Div>
    )
}

export default PeopleTemplate