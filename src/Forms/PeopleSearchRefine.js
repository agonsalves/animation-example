import PropTypes           from 'prop-types'
import React, {useContext} from 'react'
import Div                 from '../Basic/Div'
import Icon                from '../Basic/Icon'
import MotionDiv           from '../Basic/MotionDiv'
import {PanelToggle}       from '../Containers/PanelSwitch'
import withToggle          from '../utils/withToggle'
import {triangle}          from '../variables/iconLibrary'
import PeopleSearchForm    from './PeopleSearchForm'

const variants = {
    open: {
        height: 'auto',
        overflow: 'hidden',
        marginBottom: 20,
        marginTop: 45,
        transition: {
            duration: .25
        },
        transitionEnd: {
            overflow: 'visible',
        }
    },
    closed: {
        height: 0,
        overflow: 'hidden',
        marginTop: 0,
        marginBottom: 0,
        transition: {
            duration: .25
        },
    }
}

const PeopleSearchRefine = ({post, theme, isOpen}) => {
    const {closePanels} = useContext(PanelToggle)

    return (
        <Div theme={{...theme}}>
            <Div onClick={isOpen ? () => closePanels() : null} theme={theme.text}>
                Revise Search
                <Icon
                    icon={triangle}
                    theme={{...theme.icon, transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)'}}
                />
            </Div>
            <MotionDiv
                variants={variants}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                theme={theme.formContainer}
            >
                <PeopleSearchForm post={post} isAdvanced={true} theme={theme}/>
            </MotionDiv>
        </Div>
    )
}

PeopleSearchRefine.propTypes = {
    post: PropTypes.object.isRequired
}

export default withToggle(PeopleSearchRefine)