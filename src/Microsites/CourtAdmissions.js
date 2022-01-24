import React        from 'react'
import BulletedList from '../Basic/BulletedList'

const CourtAdmissions = ({children}) =>
    <BulletedList>
        {children.map((item, index) =>
            <li key={index}>
                {item.term}
            </li>
        )}
    </BulletedList>

export default CourtAdmissions