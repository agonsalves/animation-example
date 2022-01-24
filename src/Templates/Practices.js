import PropTypes                from 'prop-types'
import React, {useState}        from 'react'
import {useSelector}            from 'react-redux'
import Div                      from '../Basic/Div'
import H1                       from '../Basic/H1'
import Li                       from '../Basic/Li'
import Ul                       from '../Basic/Ul'
import ExpandingPracticeListing from '../Elements/ExpandingPracticeListing'
import LinkSwitch               from '../Elements/LinkSwitch'
import PracticeSearchBar        from '../Microsites/PracticeSearchBar'
import {mobileFlag}             from '../redux/selectors'
import {postContentStyle}       from '../themes/layout'
import {practicesStyle}         from '../themes/microsites'
import {isInternetExplorer}     from '../utils/flags'
import {
    decodeEntities,
    singular
}                               from '../utils/helpers'

const Practices = ({post}) => {
    const isMobile = useSelector(mobileFlag)
    const [open, setOpen] = useState(null)
    const [printing, setPrinting] = useState(false)

    const printListener = () => {
        let before = () => {
            isInternetExplorer() ? setPrinting(true) : setTimeout(() => {
                setPrinting(true)
            }, 200)
        }
        let after = () => {
            setPrinting(false)
        }
        if (window.matchMedia) {
            window.matchMedia('print').addListener(function (mq) {
                mq.matches ? before() : after()
            })
        }
        window.onbeforeprint = before
        window.onafterprint = after
    }
    printListener()

    const columnCount = 2,
        perCol = post.hierarchy && Math.ceil(post.hierarchy.length / columnCount),
        cols = []
    for (let x = 1; x <= columnCount; x++) {
        cols.push(
            <Ul theme={practicesStyle} key={x}>
                {post.hierarchy && post.hierarchy.map((parent, index) =>
                    index < x * perCol && index >= (x - 1) * perCol && (
                        <Li
                            key={parent.object.term_id}
                            theme={practicesStyle.listItem}
                            className={open === parent.object.term_id ? 'expanded' : null}
                        >
                            {parent.children && parent.children.length === 1 && (
                                <LinkSwitch
                                    url={parent.children[0].slug}
                                    children={decodeEntities(parent.title)}
                                    theme={practicesStyle.parent}
                                />
                            )}
                            {parent.children && parent.children.length > 1 && (
                                <ExpandingPracticeListing
                                    practice={parent}
                                    isOpen={open === parent.object.term_id}
                                    onClick={() => setOpen(open === parent.object.term_id ? null : parent.object.term_id)}
                                />
                            )}
                        </Li>
                    )
                )}
            </Ul>
        )
    }

    return (
        <Div theme={postContentStyle}>
            {!isMobile && (
                <H1 theme={practicesStyle.heading}>
                    {(!printing && (
                        <>Find a {singular('practice-area').toLowerCase()}</>
                    )) || (
                        <>{post.post_title}</>
                    )}
                </H1>
            )}
            <PracticeSearchBar/>
            <Div
                theme={practicesStyle.wrapper}
                children={cols}
            />
        </Div>
    )
}

Practices.propTypes = {
    post: PropTypes.object.isRequired
}

export default Practices