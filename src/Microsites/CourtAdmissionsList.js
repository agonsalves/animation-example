import React                     from 'react'
import BulletedList              from '../Basic/BulletedList'

const CourtAdmissionsList = ({children}) =>
    <BulletedList>
        {children.map((item, index) =>
            <li key={`court-admissions-${index}`}>
                {item.term}
            </li>
        )}
    </BulletedList>

export default CourtAdmissionsList