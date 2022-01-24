import PropTypes        from 'prop-types'
import React            from 'react'
import Icon             from '../Basic/Icon'
import Li               from '../Basic/Li'
import MotionDiv        from '../Basic/MotionDiv'
import Ul               from '../Basic/Ul'
import {practicesStyle} from '../themes/microsites'
import {decodeEntities} from '../utils/helpers'
import {triangle}       from '../variables/iconLibrary'
import LinkSwitch       from './LinkSwitch'

const ExpandingPracticeListing = ({isOpen, practice, onClick}) =>
    <>
        <LinkSwitch
            onClick={onClick}
            data={practice.object.term_id}
            theme={practicesStyle.parent}
            className={isOpen ? 'expanded' : null}
        >
            {decodeEntities(practice.title)}
            <Icon
                icon={triangle}
                theme={practicesStyle.icon}
                style={{transform: isOpen ? 'rotate(0)' : null}}
            />
        </LinkSwitch>
        <MotionDiv
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={{
                open: {height: 'auto'},
                closed: {height: 0}
            }}
            transition={{ease: 'easeOut'}}
            theme={{overflow: 'hidden'}}
        >
            <Ul theme={practicesStyle.children}>
                {practice.children.map(child =>
                    <Li key={child.object.ID} theme={practicesStyle.childLi}>
                        <LinkSwitch
                            url={child.slug}
                            children={`${decodeEntities(child.title)}${child.display_as_main_practice
                                ? ' Overview'
                                : ''}`}
                            theme={practicesStyle.childItem}
                        />
                    </Li>
                )}
            </Ul>
        </MotionDiv>
    </>

ExpandingPracticeListing.propTypes = {
    theme: PropTypes.object,
    isOpen: PropTypes.bool.isRequired,
    practice: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

ExpandingPracticeListing.defaultProps = {
    theme: {},
}

export default ExpandingPracticeListing