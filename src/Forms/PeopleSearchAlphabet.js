import PropTypes             from 'prop-types'
import React                 from 'react'
import {
    connect,
    useSelector
}                            from 'react-redux'
import Div                   from '../Basic/Div'
import LinkSwitch            from '../Elements/LinkSwitch'
import {mobileFlag}          from '../redux/selectors'
import {alphabetFilterStyle} from '../themes/pagePeople'

const PeopleSearchAlphabet = ({alphabet, listingPage, theme, post}) => {
    const isMobile = useSelector(mobileFlag)

    return (
        <Div theme={{...alphabetFilterStyle, ...theme}}>
            {alphabet.map(item =>
                <LinkSwitch
                    theme={{...alphabetFilterStyle.letter, ...theme.letter}}
                    key={item.letter}
                    url={(item.active
                        && `${listingPage}?search[post_type]=person&search[letter]=${item.letter}`) || null}
                    children={item.letter}
                />
            )}
            {isMobile && (
                <LinkSwitch
                    theme={{
                        ...alphabetFilterStyle.letter,
                        ...alphabetFilterStyle.viewAll,
                        width: 'auto !important',
                    }}
                    url={`${post.slug}?search[post_type]=person`}
                    children="View All"
                />
            )}
        </Div>
    )
}


PeopleSearchAlphabet.propTypes = {
    alphabet: PropTypes.array.isRequired,
    listingPage: PropTypes.string.isRequired,
    theme: PropTypes.object
}

PeopleSearchAlphabet.defaultProps = {
    theme: {}
}

const mapStateToProps = ({site}) => ({
    alphabet: site.config.person.alphabet
})

export default connect(mapStateToProps)(PeopleSearchAlphabet)