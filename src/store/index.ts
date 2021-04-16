import { useMemo } from 'react'
import type { Store } from 'redux'
import { StateType } from 'typesafe-actions'
import { createBrowserHistory, History } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createReducers from './root-reducers'
import { createMiddlewares, bootstrapEpics } from './root-middlewares'
import { isProd } from '../utils'

export type RootState = StateType<ReturnType<typeof store.getState>>

let store: Store

export const history: History = createBrowserHistory()

export const rootState: RootState = {}

let composeEnhancers = compose

if (!isProd) {
  composeEnhancers = composeWithDevTools({})
}

const initStore = (preloadedState = rootState): Store => {
  const store = createStore(
    createReducers(history),
    preloadedState,
    composeEnhancers(...[applyMiddleware(...createMiddlewares(history))])
  )
  bootstrapEpics()
  return store
}

export const useStore = (initialState: RootState): Store => {
  const store = useMemo(() => initStore(initialState), [initialState])
  return store
}
