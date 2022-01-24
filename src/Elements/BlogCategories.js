import PropTypes  from 'prop-types'
import React      from 'react'
import Li         from '../Basic/Li'
import Ul         from '../Basic/Ul'
import LinkSwitch from './LinkSwitch'

const BlogCategories = ({categories}) =>
    <Ul>
        {categories.map(item => (
            <Li key={item.slug}>
                <LinkSwitch url={item.slug} children={item.name}/>
            </Li>
        ))}
    </Ul>

BlogCategories.propTypes = {
    categories: PropTypes.array
}

export default BlogCategories