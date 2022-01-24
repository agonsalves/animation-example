import PropTypes         from 'prop-types'
import React, {useState} from 'react'
import BulletedList      from '../Basic/BulletedList'
import Div               from '../Basic/Div'
import MotionDiv         from '../Basic/MotionDiv'
import RichText          from '../Basic/RichText'
import {jobListingStyle} from '../themes/pages'
import {triangle}        from '../variables/iconLibrary'
import ButtonSmall       from './ButtonSmall'
import LinkSwitch        from './LinkSwitch'

const ExpandingDescription = ({description, continued, theme, applyUrl, contactEmail}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Div>
            {description && (
                <RichText theme={theme.description} children={description}/>
            )}
            {continued && (
                <>
                    <MotionDiv
                        initial="closed"
                        animate={isExpanded ? 'open' : 'closed'}
                        variants={{
                            open: {height: 'auto', paddingBottom: 2},
                            closed: {height: 0}
                        }}
                        transition={{ease: 'easeOut'}}
                        theme={{overflow: 'hidden'}}
                    >
                        <RichText children={continued} theme={{...jobListingStyle.continued, ...theme.continued}}/>
                        {(applyUrl || contactEmail) && (
                            <BulletedList theme={{...jobListingStyle.applyLinks}}>
                                {applyUrl && (
                                    <li>
                                        <LinkSwitch
                                            theme={{...jobListingStyle.applyOnline, ...theme.applyOnline}}
                                            url={applyUrl}
                                            children={'Click here'}
                                        />
                                        <span> to apply</span>
                                    </li>
                                )}
                                {contactEmail && (
                                    <li>
                                        <span>For more information: Please email </span>
                                        <LinkSwitch
                                            theme={{...jobListingStyle.email, ...theme.email}}
                                            url={`mailto:${contactEmail}`}
                                            children={`${contactEmail}`}
                                        />
                                    </li>
                                )}
                            </BulletedList>
                        )}
                    </MotionDiv>
                    <ButtonSmall
                        icon={triangle}
                        label={isExpanded ? 'Read Less' : 'Read More'}
                        onClick={() => setIsExpanded(!isExpanded)}
                        theme={isExpanded ? theme.expandButton : theme.collapseButton}
                        url={''}
                    />
                </>
            )}
        </Div>
    )
}

ExpandingDescription.propTypes = {
    description: PropTypes.string,
    continued: PropTypes.string,
    theme: PropTypes.object
}

ExpandingDescription.defaultProps = {
    theme: {}
}

export default ExpandingDescription