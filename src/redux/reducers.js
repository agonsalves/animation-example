import {connectRouter}   from 'connected-react-router'
import Cookies           from 'js-cookie'
import {combineReducers} from 'redux'
import {getLayout}       from '../utils/getLayout'

/**
 * These are names of redux action types
 */
export const REQUEST_DATA = 'REQUEST_DATA',
    LOAD_CONFIG = 'LOAD_CONFIG',
    STORE_POSTS = 'STORE_POSTS',
    LOAD_ADMIN = 'LOAD_ADMIN',
    WINDOW_RESIZE = 'WINDOW_RESIZE',
    STORE_VCARD = 'STORE_VCARD',
    STORE_VCARD_PHOTODATA = 'STORE_VCARD_PHOTODATA',
    REQUEST_HIGHLIGHTS = 'REQUEST_HIGHLIGHTS',
    STORE_HIGHLIGHTS = 'STORE_HIGHLIGHTS',
    COOKIE_CONSENT = 'COOKIE_CONSENT'

/**
 * The site reducer is used for global configuration information.
 */
const site = (
    state = {
        isInitialized: false,
        config: {},
        menus: {},
        datalists: {},
        cookieConsent: false,
        layout: getLayout()
    }, action
) => {
    switch (action.type) {
        case LOAD_CONFIG:
            return {
                ...state,
                menus: action.menus,
                datalists: action.datalists,
                config: action.config,
                isInitialized: true,
                cookieConsent: action.cookieConsent
            }
        case WINDOW_RESIZE:
            return {
                ...state,
                layout: action.layout
            }
        case LOAD_ADMIN:
            return {
                ...state,
                adminUrl: action.adminUrl
            }
        case COOKIE_CONSENT:
            Cookies.set('cookieConsent', true, {expires: 30})
            return {
                ...state,
                cookieConsent: true
            }
        default:
            return state
    }
}

/**
 * The posts reducer is used for actions relating to post data storage.
 */
const posts = (state = {}, action) => {
    switch (action.type) {
        case STORE_POSTS:
            return {
                ...state,
                ...action.posts
            }
        case STORE_VCARD:
            return {
                ...state,
                [action.slug]: {
                    ...state[action.slug],
                    vcard: action.vcard
                }
            }
        case STORE_VCARD_PHOTODATA:
            return {
                ...state,
                [action.slug]: {
                    ...state[action.slug],
                    vcardPhotoData: action.vcardPhotoData
                }
            }
        case STORE_HIGHLIGHTS:
            return {
                ...state,
                [action.slug]: {
                    ...state[action.slug],
                    highlights: action.highlights
                }
            }
        default:
            return state
    }
}

export default history => combineReducers({
    site,
    posts,
    router: connectRouter(history)
})