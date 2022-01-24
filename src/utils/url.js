/**
 * This file is for pure functions which handle URL strings.
 */

/**
 * Strips the leading and trailing slashes from a string (usually a pathname)
 *
 * @param {string} pathname
 * @returns {string}
 */
export const stripSlashes = pathname => pathname.replace(/^\/|\/$/g, '')

/**
 * Strips the trailing slash from a string (usually a pathname)
 *
 * @param {string} pathname
 * @returns {string}
 */
export const stripTrailingSlash = pathname => pathname !== '/' ? pathname.replace(/\/+$/, '') : pathname

/**
 * Converts a pathname to an array for parsing.
 *
 * @param {string} pathname
 * @returns {array}
 */
export const pathnameToArray = (pathname = '') => stripSlashes(pathname).split('/')

/**
 * Strips the domain and protocol from an absolute URL to make it relative
 *
 * @param {string} url
 * @returns {string}
 */
export const absoluteToRelativeUrl = url => stripTrailingSlash(url.replace(/^.*\/\/[^/]+/, ''))

/**
 * Returns the last segment of a URL (assumed to be the filename)
 *
 * @param {string} url
 * @returns {string}
 */
export const getFilenameFromUrl = url => {
    let fileName = url.indexOf('://') !== -1 && url.split('/').length === 3
        ? ''
        : url.split('//').pop().split('#').shift().split('?').shift().split('/').pop()

    return fileName.indexOf('.') !== -1 ? fileName : ''
}

/**
 * Return the pathname of a given relative URL
 *
 * @param {string} url
 * @returns {string}
 */
export const getPathnameFromUrl = url => url.split('?')[0]

/**
 * Return the query string of a given relative URL
 *
 * @param {string} url
 * @returns {string}
 */
export const getQueryStringFromUrl = url => url.split('?')[1]

/**
 * Strips the last segment from a given URL
 *
 * @param {string} url
 * @returns {string}
 */
export const stripLastSlug = url => {
    let slugArray = url.split('/')
    slugArray.pop()
    return slugArray.join('/')
}

/**
 * Removes the protocol from a given string
 *
 * @param {string} url
 * @returns {*}
 */
export const stripProtocol = url => url?.replace(/(^\w+:|^)\/\//, '//')

/**
 * If the given URL has pagination, remove it.
 *
 * @param {string} url
 * @returns {string}
 */
export const stripPagination = url => {
    let tempArray = pathnameToArray(url)
    if (tempArray.includes('page')) {
        tempArray.pop()
        tempArray.pop()
        return '/' + tempArray.join('/')
    }

    return url
}