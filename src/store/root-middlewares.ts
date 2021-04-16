import { History } from 'history'
import { Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'connected-react-router'
import { RootState } from './index'
import RootEpics from './root-epics'
import { isProd } from '../utils'
import * as services from '../services'
import type Services from '../types/Services'
import type RootAction from '../types/RootAction'

const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
})

const createMiddlewares = (history: History): Array<Middleware> => {
  const middleware: Array<Middleware> = []
  if (!isProd) {
    middleware.push(createLogger({ collapsed: true }))
  }
  middleware.push(epicMiddleware)
  middleware.push(routerMiddleware(history))
  return middleware
}

const bootstrapEpics = (): void => {
  epicMiddleware.run(RootEpics)
}

export { createMiddlewares, bootstrapEpics }
