import { ActionType, createReducer } from 'typesafe-actions'
import * as actions from './actions'
import { toDoListInitialState } from './index'
import { ToDoListStateShape } from './types'

const toDoListReducers = createReducer<
  ToDoListStateShape,
  ActionType<typeof actions.fetchToDoList>
>(toDoListInitialState)

export const todoList = toDoListReducers
  .handleAction(actions.fetchToDoList.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(actions.fetchToDoList.success, (state, { payload }) => ({
    ...state,
    error: false,
    message: payload.message,
    payload: [...payload.data],
  }))
