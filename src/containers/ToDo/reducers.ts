import { append } from 'ramda'
import { ActionType, createReducer } from 'typesafe-actions'
import * as actions from './actions'
import { toDoDraftInitialState, toDoListInitialState } from './index'
import type { ToDoDraftStateShape, ToDoListStateShape } from './types'

const toDoListReducers = createReducer<
  ToDoListStateShape,
  ActionType<typeof actions.fetchToDoList | typeof actions.addTodo>
>(toDoListInitialState)

export const todoList = toDoListReducers
  .handleAction(actions.fetchToDoList.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(actions.fetchToDoList.success, (state, { payload }) => ({
    ...state,
    loading: false,
    error: null,
    message: payload.message,
    payload: [...payload.data],
  }))
  .handleAction(actions.addTodo.success, (state, { payload }) => ({
    ...state,
    loading: false,
    error: null,
    message: payload.message,
    payload: append(payload.data, state.payload || []),
  }))

const todoDraftReducers = createReducer<
  ToDoDraftStateShape,
  ActionType<typeof actions.addTodo>
>(toDoDraftInitialState)

export const todoDraft = todoDraftReducers
  .handleAction(actions.addTodo.request, (state, { payload }) => ({
    error: null,
    message: '',
    payload: { ...payload, isDone: false, id: 0 },
  }))
  // cleaning draft state.
  .handleAction(actions.addTodo.success, () => ({
    error: null,
    message: '',
    payload: null,
  }))
  .handleAction(actions.addTodo.failure, (state, { payload }) => ({
    error: { ...payload.error },
    message: payload.message,
    payload: state.payload,
  }))
