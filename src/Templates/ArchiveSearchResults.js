import React               from 'react'
import Div                 from '../Basic/Div'
import SearchResults       from '../Elements/SearchResults'
import {postContentStyle,} from '../themes/layout'


const ArchiveSearchResults = ({post}) =>
    <Div theme={postContentStyle}>
        <SearchResults post={post}/>
    </Div>



export default ArchiveSearchResults