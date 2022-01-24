import {
    useCallback,
    useEffect
}                       from 'react'
import {useSelector}    from 'react-redux'
import {WINDOW_RESIZE}  from '../redux/reducers'
import {layoutSelector} from '../redux/selectors'
import {configureStore} from '../redux/store'
import {getLayout}      from '../utils/getLayout'

const LayoutSwitch = ({children}) => {
    let layout = useSelector(layoutSelector)

    const checkMobile = useCallback(() => {
        if (getLayout() !== layout)
            configureStore.dispatch({
                type: WINDOW_RESIZE,
                layout: getLayout()
            })
    }, [layout])

    useEffect(() => {
        window.addEventListener('resize', checkMobile)
        checkMobile()

        return () => window.removeEventListener('resize', checkMobile)
    })

    return children
}

export default LayoutSwitch