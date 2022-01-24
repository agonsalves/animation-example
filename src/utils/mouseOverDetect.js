import debounce      from 'debounce'
import {preloadPost} from '../redux/sagas'

const mouseOverDetect = debounce(preloadPost, 500)

export default mouseOverDetect