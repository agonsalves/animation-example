import React        from 'react'
import BulletedList from '../Basic/BulletedList'

const BarAdmissions = ({children}) =>
    <BulletedList>
        {children.map((item, index) =>
            <li key={index}>
                {item.bar_admission[0].term}
                {item.year && `, ${item.year}`}
            </li>
        )}
    </BulletedList>

export default BarAdmissions