import idx                     from 'idx'
import {absoluteToRelativeUrl} from './url'

/**
 * This function contains the logic used to determine whether a nav/menu item should be marked as 'active' or not.
 *
 * @param {object} item
 * @param {object} post
 * @returns {boolean}
 */
export const isNavItemActive = (item, post) => {
    let cpt = idx(item, _ => _.customFields.current_if_post_type_matches) || ''
    let cid = idx(item, _ => _.customFields.current_if_page_id_matches) || ''

    cpt = cpt.split(',')
    cid = cid.split(',')

    let current = post.microsite && post.parentPost ? post.parentPost : post

    return cpt.includes(current.post_type) || cid.includes(current.id) || post.slug === absoluteToRelativeUrl(item.url)
}