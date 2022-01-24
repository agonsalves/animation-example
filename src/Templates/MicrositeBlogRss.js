import idx                from 'idx'
import PropTypes          from 'prop-types'
import React, {
    useEffect,
    useState
}                         from 'react'
import Parser             from 'rss-parser'
import Div                from '../Basic/Div'
import H2                 from '../Basic/H2'
import H3                 from '../Basic/H3'
import RichText           from '../Basic/RichText'
import ArchiveDateAndType from '../Elements/ArchiveDateAndType'
import ButtonLarge        from '../Elements/ButtonLarge'
import LinkSwitch         from '../Elements/LinkSwitch'
import {queryApi}         from '../redux/sagas'
import {postContentStyle} from '../themes/layout'
import {
    micrositePageTitleStyle,
    micrositeRssBlogListingStyle
}                         from '../themes/microsites'
import {decodeEntities}   from '../utils/helpers'

const MicrositeBlogRss = ({post}) => {
    const [feed, setFeed] = useState(null)

    async function parseRss(url) {
        try {
            let xml = await queryApi('/?proxy=' + encodeURIComponent(url))

            if (xml.content && xml.content.length > 0) {
                const parser = new Parser()

                parser.parseString(xml.content, (error, feed) => {
                    setFeed(feed)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        parseRss(post.feed_url)
    })

    return (
        <Div theme={postContentStyle}>
            <H2 theme={micrositePageTitleStyle}>{post.post_title}</H2>
            {post.blog_url && (
                <ButtonLarge
                    url={post.blog_url}
                    label={post.blog_url}
                    theme={micrositeRssBlogListingStyle.button}
                />
            )}
            {post.intro_text && (
                <RichText children={post.intro_text} theme={micrositeRssBlogListingStyle.introText}/>
            )}
            {(idx(feed, _ => _.items.map(item =>
                post.author_name && !item['dc:creator'].includes(post.author_name)
                    ? null
                    : (
                        <Div key={item.guid} theme={micrositeRssBlogListingStyle.item}>
                            <ArchiveDateAndType
                                date={item.isoDate}
                            />
                            <LinkSwitch url={item.link} theme={micrositeRssBlogListingStyle.itemInner}>
                                <H3 theme={micrositeRssBlogListingStyle.title}>{item.title}</H3>
                            </LinkSwitch>
                            <Div theme={micrositeRssBlogListingStyle.excerpt}>{decodeEntities(item.contentSnippet)}</Div>
                        </Div>
                    )
            ))) || <Div>Loading</Div>}
        </Div>
    )
}

MicrositeBlogRss.propTypes = {
    post: PropTypes.object.isRequired
}

export default MicrositeBlogRss