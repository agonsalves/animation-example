import {motion}  from 'framer-motion'
import PropTypes from 'prop-types'
import styled    from 'styled-components'
import {themer}  from '../utils/themer'

const MotionImg = styled(motion.img)`${props => themer(props.theme)}`

MotionImg.propTypes = {
    theme: PropTypes.object,
}

export default MotionImg