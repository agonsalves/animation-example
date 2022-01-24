import PropTypes                 from 'prop-types'
import React, {useMemo}          from 'react'
import {Helmet}                  from 'react-helmet-async'
import {connect}                 from 'react-redux'
import defaultSocialSharingImage from '../assets/miles-social-sharing.png'
import {
    isHomepage,
    isMicrosite,
    isMicrositeSubpage
}                                from '../utils/flags'
import headerJsonLd              from '../utils/headerJsonLd'

const DocumentHead = ({post, config, action}) => {

    const buildOgImage = useMemo(() => {
        if (post.social_sharing_image)
            return {
                ogImage: post.social_sharing_image.url,
                ogImageType: `image/${post.social_sharing_image.url.split('.').slice(-1)[0]}`,
                ogImageWidth: post.social_sharing_image.width,
                ogImageHeight: post.social_sharing_image.height
            }

        if (post.thumbnail_teaser)
            return {
                ogImage: post.thumbnail_teaser.url,
                ogImageType: `image/${post.thumbnail_teaser.url.split('.').slice(-1)[0]}`,
                ogImageWidth: post.thumbnail_teaser.width,
                ogImageHeight: post.thumbnail_teaser.height
            }

        return {
            // og:image must be a valid, absolute URL
            ogImage: window.location.origin + defaultSocialSharingImage,
            ogImageType: 'image/png',
            ogImageWidth: 600,
            ogImageHeight: 314
        }
    }, [post])

    const {ogImage, ogImageType, ogImageWidth, ogImageHeight} = buildOgImage

    const getPageTitle = () => {
        if (isHomepage(post)) {
            return `${post.seo_page_title || config.firmName}`
        }

        if (isMicrosite(post) && isMicrositeSubpage(post)) {
            return `${post.parentPost.post_title} - ${post.seo_page_title || post.post_title}`
        }

        return post.seo_page_title || post.post_title
    }

    const pageTitle = getPageTitle()

    return (
        <Helmet>
            {post.template.includes('error404') && (
                <meta name="prerender-status-code" content="404"/>
            )}
            {action === 'REPLACE' && (
                <meta name="prerender-status-code" content="301"/>
            )}
            {action === 'REPLACE' && (
                <meta name="prerender-header" content={`Location: ${process.env.REACT_APP_SITE_URL + post.key}`}/>
            )}
            {post.seo_exclude_page && (
                <meta name="robots" content="noindex,follow"/>
            )}
            <title>{pageTitle}</title>
            {post.seo_meta_description && (
                <meta name="description" content={post.seo_meta_description}/>
            )}
            {post.canonical && (
                <link rel="canonical" href={`https://${config.frontendDomain}${post.canonical}`}/>
            )}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="twitter:image" content={ogImage}/>
            <meta property="og:site_name" content={config.firmName}/>
            <meta property="og:title" content={pageTitle}/>
            <meta property="og:url" content={`https://${config.frontendDomain}${post.slug}`}/>
            <meta property="og:type" content="article"/>
            <meta property="og:image" content={ogImage}/>
            <meta property="og:image:type" content={ogImageType}/>
            <meta property="og:image:width" content={ogImageWidth}/>
            <meta property="og:image:height" content={ogImageHeight}/>
            {post.social_sharing_description && (
                <meta property="og:description" content={post.social_sharing_description}/>
            )}
            <script type="application/ld+json">{headerJsonLd(post, config)}</script>
        </Helmet>
    )
}

DocumentHead.propTypes = {
    post: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    action: PropTypes.string.isRequired
}

const mapStateToProps = ({site, router}) => ({
    config: site.config,
    action: router.action
})

export default connect(mapStateToProps)(DocumentHead)