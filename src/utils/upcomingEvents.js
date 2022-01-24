import dayjs from 'dayjs'
import idx   from 'idx'

/**
 * Returns true if the given date is in the future
 *
 * @param {string} date
 * @returns {boolean}
 */
export const isUpcoming = date => dayjs(date).isAfter(dayjs().subtract(1, 'day'))

export const personUpcomingEvents = post => {
    let upcoming = []
    let page = idx(post, _ => _.microsite_pages.find(item =>
        item.page_template === 'events'
    ))

    idx(page, _ => _.related_posts.map(item =>
        isUpcoming(item.date) && upcoming.push(item)
    ))

    upcoming.length > 0 && upcoming.reverse()

    return {isVisible: upcoming.length > 0, events: upcoming}
}

export const upcomingEvents = page => {
    let upcoming = []
    idx(page, _ => _.related_posts.map(item =>
        isUpcoming(item.date) && upcoming.push(item)
    ))

    upcoming.length > 0 && upcoming.reverse()

    return {isVisible: upcoming.length > 0, events: upcoming}
}