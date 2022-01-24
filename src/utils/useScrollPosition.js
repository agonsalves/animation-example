/* eslint-disable react-hooks/exhaustive-deps */
import {useRef}                    from 'react'
import {useIsomorphicLayoutEffect} from './useIsomorphicLayoutEffect'

const isBrowser = typeof window !== `undefined`

function getScrollPosition(element) {
    if (!isBrowser) return {x: 0, y: 0}

    const target = element ? element.current : document.body
    const position = target.getBoundingClientRect()

    return {x: position.left, y: position.top}
}

export function useScrollPosition(effect, deps, element) {
    const position = useRef(getScrollPosition())

    const callBack = () => {
        const currPos = getScrollPosition(element)
        effect({prevPos: position.current, currPos})
        position.current = currPos
    }

    useIsomorphicLayoutEffect(() => {
        if (!isBrowser) {
            return
        }

        window.addEventListener('scroll', callBack)

        return () => window.removeEventListener('scroll', callBack)
    }, deps)
}

useScrollPosition.defaultProps = {
    deps: [],
    element: false
}