import { History } from 'history'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import type { RootState } from './index'
import * as ToDoReducers from '../containers/ToDo/reducers'

const createRootReducers = (history: History): RootState => {
  return combineReducers<RootState>({
    router: connectRouter(history),
    ...ToDoReducers,
  })
}

export default createRootReducers
