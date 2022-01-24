import PropTypes         from 'prop-types'
import React, {memo}     from 'react'
import americanLawyer    from '../assets/footer/2018_American_Lawyer_Miles_Logo_gray.svg'
import bestLawyers       from '../assets/footer/BLF-2021-Silver-Standard-gray.svg'
import leadershipCouncil from '../assets/footer/LCLDLogoRev2014-gray.svg'
import terraLex          from '../assets/footer/RGB_Primary Logo_Terralex_gray.svg'
import registeredFirm    from '../assets/footer/UL_Registered Firm_M&S-vertical-gray.svg'
import Div               from '../Basic/Div'
import Img               from '../Basic/Img'
import {accoladeBadges}  from '../themes/footer'

const AccoladeBadge = memo(() =>
    <Div theme={accoladeBadges}>
        <Div theme={accoladeBadges.inner}>
            <Div theme={accoladeBadges.bestLawyers}>
                <Img
                    src={bestLawyers}
                />
            </Div>
            <Div theme={accoladeBadges.innerRight}>
                <Div theme={accoladeBadges.leadershipCouncil}>
                    <Img
                        src={leadershipCouncil}
                    />
                </Div>
                <Div theme={accoladeBadges.terraLex}>
                    <Img
                        src={terraLex}
                    />
                </Div>
            </Div>
            <Div theme={accoladeBadges.americanLawyer}>
                <Img
                    src={americanLawyer}
                />
            </Div>
            <Div theme={accoladeBadges.registeredFirm}>
                <Img
                    src={registeredFirm}
                />
            </Div>
        </Div>
    </Div>
)

AccoladeBadge.displayName = 'AccoladeBadge'

AccoladeBadge.propTypes = {
    theme: PropTypes.object
}

AccoladeBadge.defaultProps = {
    theme: {}
}

export default AccoladeBadge