import produce from 'immer'
import { append, findIndex, propEq } from 'ramda'
import { ActionType, createReducer } from 'typesafe-actions'
import * as actions from './actions'
import { toDoDraftInitialState, toDoListInitialState } from './index'
import type { ToDoDraftStateShape, ToDoListStateShape } from './types'

const toDoListReducers = createReducer<
  ToDoListStateShape,
  ActionType<
    | typeof actions.fetchToDoList
    | typeof actions.addTodo
    | typeof actions.doneTodo
  >
>(toDoListInitialState)

export const todoList = toDoListReducers
  .handleAction(actions.fetchToDoList.request, (state) =>
    produce(state, (draft) => {
      draft.isLoading = true
    })
  )
  .handleAction(actions.fetchToDoList.success, (state, { payload }) =>
    produce(state, (draft) => {
      draft.isLoading = false
      draft.error = null
      draft.message = ''
      draft.payload = payload.data
    })
  )
  .handleAction(actions.addTodo.success, (state, { payload }) =>
    produce(state, (draft) => {
      draft.payload = null
      draft.isLoading = false
      draft.message = ''
      draft.payload = append(payload.data, state.payload || [])
    })
  )
  .handleAction(actions.doneTodo, (state, { payload }) =>
    produce(state, (draft) => {
      const currentTodoIndex = findIndex(propEq('id', payload.id))(
        state.payload || []
      )
      if (draft.payload?.[currentTodoIndex]) {
        draft.payload[currentTodoIndex].isDone = payload.isDone
      }
    })
  )

const todoDraftReducers = createReducer<
  ToDoDraftStateShape,
  ActionType<typeof actions.addTodo>
>(toDoDraftInitialState)

export const todoDraft = todoDraftReducers
  .handleAction(actions.addTodo.request, (state, { payload }) =>
    produce(state, (draft) => {
      draft.error = null
      draft.message = ''
      draft.payload = { ...payload, isDone: false, id: 0 }
    })
  )
  // cleaning draft state.
  .handleAction(actions.addTodo.success, (state) =>
    produce(state, (draft) => {
      draft.error = null
      draft.message = ''
      draft.payload = null
    })
  )
  .handleAction(actions.addTodo.failure, (state, { payload }) =>
    produce(state, (draft) => {
      draft.error = payload.error
      draft.message = payload.message
      draft.payload = state.payload
    })
  )
