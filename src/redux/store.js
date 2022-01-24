import {routerMiddleware}     from 'connected-react-router'
import {createBrowserHistory} from 'history'
import {
    applyMiddleware,
    compose,
    createStore
}                             from 'redux'
import {createLogger}         from 'redux-logger'
import createSagaMiddleware   from 'redux-saga'
import site                   from './reducers'

export const
    history = createBrowserHistory(),
    sagaMiddleware = createSagaMiddleware()

let middleware = [
    routerMiddleware(history),
    sagaMiddleware
]

if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger()
    middleware = [
        ...middleware,
        loggerMiddleware
    ]
}

export const configureStore = createStore(
    site(history),
    compose(
        applyMiddleware(...middleware)
    )
)