import idx        from 'idx'
import React, {
    useEffect,
    useMemo,
    useState
}                 from 'react'
import {history}  from '../redux/store'
import {isString} from '../utils/helpers'

export const PanelToggle = React.createContext({})

const isNavigationLinkItem = item =>
    isString(item.target.className)
    && item.target.className.includes('NavigationLink')
const hasCloseClass = item => idx(item, _ => _.target.classList) && idx(item, _ => _.target.classList).contains('close-panels')
const isParentExpandable = item =>
    isString(idx(item, _ => _.target.parentElement.className))
    && item.target.parentElement.className.includes('expandable')
const shouldCloseNavigationPanel = item => !isParentExpandable(item)
    && (isNavigationLinkItem(item) || hasCloseClass(item))
const isPanelChildClicked = item => (
    isString(item.target.className)
    && (item.target.className.includes('Span')
    || item.target.className.includes('Field'))
    && item.target.type !== 'submit')

/**
 * This is a wrapper component that manages the opening and closing of panels.
 * It assumes that only one panel can be open at a time.
 * The context provider passes up the addPanel function to the withToggle HOC
 * The withToggle HOC sends back the ref of the component that it is wrapping, which is added to panelList.
 * This means panelList is an index of all the toggleable components.
 * We then use this list to detect whether a click is inside or outside a toggleable component.
 *
 * @param props
 * @returns {*}
 * @constructor
 */

const PanelSwitch = props => {
    const [currentPanel, setCurrentPanel] = useState('')
    const [panelList, setPanelList] = useState([])

    /**
     * This function gets passed up through the context and is used to register a panel or toggle.
     */
    const registerPanel = useMemo(() => (panel, props) => {
        let interimList = panelList
        let panelInfo = {panelRef: panel, panelProps: props}
        interimList.push(panelInfo)
        setPanelList(interimList)
    }, [panelList])

    useEffect(() => {
        const handleClick = e => {
            const currentRef = panelList.find(i => i.panelRef.current && i.panelRef.current.contains(e.target))
            const exemptClasses = ['datalist-item', 'reset']
            const targetClassList = e.target.classList ? Object.keys(e.target.classList).map((k) => e.target.classList[k]) : []

            // Let's start analyzing the click.
            // The logic here may seem convoluted, but it is a process of elimination.
            // We start with non-ambiguous conditions, then whittle away at other possibilities.
            if (shouldCloseNavigationPanel(e) || currentPanel === 'close-panels') {
                // Click was on an element that is intentionally supposed to close the panel
                setCurrentPanel('')

            } else if (currentRef) {
                // click was on a an object registered within panelList
                let panelClass = currentRef.panelRef.current.classList[0].substr(6)

                // was the click on a toggle?
                if (!!currentRef.panelProps.isToggle) {
                    if (currentPanel === panelClass) {
                        // click was on a toggle for the currently open panel - close the panel
                        setCurrentPanel('')

                    } else {
                        // click was on a toggle for another panel - switch to that panel
                        setCurrentPanel(panelClass)
                    }
                } else {
                    if(!!currentPanel && (currentPanel !== panelClass)) {
                        setCurrentPanel(panelClass)

                    } else if (currentRef.panelProps.panelName === 'header') {
                        // Clicking on the header will switch to it in any case
                        setCurrentPanel(panelClass)

                    } else if (isPanelChildClicked(e) || isParentExpandable(e)) {
                        // Do nothing since a child element was clicked inside the panel

                    } else if (currentPanel === '') {
                        // Open the desired panel
                        setCurrentPanel(panelClass)

                    } else if (!idx(e, _ => _.target.parentElement.className)
                        || (isString(e.target.parentElement.className)
                            && !e.target.parentElement.className.includes(panelClass)
                            && !!e.target.type)) {

                        // Close the panel only if the immediate parent is not a panel class or if the clicked element
                        // has a type
                        setCurrentPanel('')
                    }
                }
            } else if (exemptClasses.filter(eC => targetClassList.includes(eC)).length > 0) {
                // This is an exception; clicks that meet these criteria are not detected as valid when they should
                // be. do nothing
            } else {
                // click wasn't on a panel or a toggle, so any open panels should close
                setCurrentPanel('')
            }
        }

        document.addEventListener('click', handleClick, false)

        // close panel on any navigation
        history.listen(() => setCurrentPanel(''))

        return () => document.removeEventListener('click', handleClick, false)

    }, [currentPanel, panelList])

    return (
        <PanelToggle.Provider
            value={{
                currentPanel,
                registerPanel,
                closePanels: () => setCurrentPanel('')
            }}
            {...props}
        />
    )
}

export default PanelSwitch