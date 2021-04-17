import { filter } from 'ramda'
import { createSelector } from 'reselect'

import { RootState } from '../../store'
import { ToDoDraftStateShape, ToDoListStateShape } from './types'

const todoListRootSelector = (state: RootState): ToDoListStateShape =>
  state.todoList

export const todoListSelector = createSelector(
  todoListRootSelector,
  (state) => state.payload
)

const toDoDraftRootSelector = (state: RootState): ToDoDraftStateShape =>
  state.todoDraft

export const toDoDraftSelector = createSelector(
  toDoDraftRootSelector,
  (state) => state.payload
)

export const toDoDraftErrorSelector = createSelector(
  toDoDraftRootSelector,
  (state) => state.error
)

export const doingTodosSelector = createSelector(todoListSelector, (state) =>
  filter((x) => !x.isDone, state || [])
)

export const doneTodoSelector = createSelector(todoListSelector, (state) =>
  filter((x) => x.isDone, state || [])
)
