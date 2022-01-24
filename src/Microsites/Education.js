import React           from 'react'
import ReactHtmlParser from 'react-html-parser'
import BulletedList    from '../Basic/BulletedList'

const Education = ({children}) =>
    <BulletedList>
        {children.map((item, index) => {
            let school = (item.school && item.school[0].term) || false,
                parenthesis = []

            if (item.degree) parenthesis.push(item.degree[0].term)
            if (item.honor) parenthesis.push(`<em>${item.honor[0].term}</em>`)
            if (item.year) parenthesis.push(item.year)

            return (
                <li key={index}>
                    {school}
                    {parenthesis.length > 0 && ReactHtmlParser(` (${parenthesis.join(', ')})`)}
                    {item.text1 && (
                        <ul>
                            {item.text1 && <li>{ReactHtmlParser(item.text1)}</li>}
                            {item.text2 && <li>{ReactHtmlParser(item.text2)}</li>}
                            {item.text3 && <li>{ReactHtmlParser(item.text3)}</li>}
                            {item.text4 && <li>{ReactHtmlParser(item.text4)}</li>}
                            {item.text5 && <li>{ReactHtmlParser(item.text5)}</li>}
                            {item.text6 && <li>{ReactHtmlParser(item.text6)}</li>}
                        </ul>
                    )}
                </li>
            )
        })}
    </BulletedList>

export default Education