import React               from 'react'
import DepartmentalContact from '../Elements/DepartmentalContact'
import Widget              from './Widget'

const DepartmentContactsWidget = ({post, theme}) =>
    <Widget theme={theme}>
        {post.departmental_contacts.map(department =>
            <DepartmentalContact key={Math.random()} department={department}/>
        )}
    </Widget>

export default DepartmentContactsWidget