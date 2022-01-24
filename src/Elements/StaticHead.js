import React, {memo}   from 'react'
import {Helmet}        from 'react-helmet-async'
import appleTouchIcon  from '../assets/apple-touch-icon.png'
import favicon16       from '../assets/favicon-16x16.png'
import favicon32       from '../assets/favicon-32x32.png'
import favicon         from '../assets/favicon.ico'
import safariPinnedTab from '../assets/safari-pinned-tab.svg'

/**
 * Detects the width of the viewport and returns the appropriate string to define the viewport meta tag.
 *
 * @returns {string}
 */
const viewportDetect = () => {
    // May need to use react-getscreen for this, or something similar.
    // https://github.com/calinortan/react-getscreen/blob/master/src/index.tsx
    const fw = window.matchMedia('(orientation: landscape)').matches ? window.innerHeight : window.innerWidth
    return fw < 768 ? 'width=device-width,initial-scale=1' : 'width=1024'
}

const StaticHead = memo(() =>
    <Helmet>
        <meta httpEquiv="x-ua-compatible" content="IE=Edge"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta
            id="viewport"
            name="viewport"
            content={viewportDetect()}
        />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={appleTouchIcon}
        />
        <link
            rel="icon"
            type="image/png"
            href={favicon32}
            sizes="32x32"
        />
        <link
            rel="icon"
            type="image/png"
            href={favicon16}
            sizes="16x16"
        />
        <link
            rel="mask-icon"
            href={safariPinnedTab}
            color="#858585"
        />
        <link
            rel="shortcut icon"
            href={favicon}
            type="image/x-icon"
        />
    </Helmet>
)

StaticHead.displayName = 'StaticHead'

export default StaticHead