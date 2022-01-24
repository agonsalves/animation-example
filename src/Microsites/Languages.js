import React        from 'react'
import BulletedList from '../Basic/BulletedList'

const Languages = ({children}) =>
    <BulletedList>
        {children.map((item) =>
            <li key={item.id}>{item.term}</li>
        )}
    </BulletedList>

export default Languages