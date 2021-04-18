import { Epic } from 'redux-observable'
import { filter, map, switchMap } from 'rxjs/operators'
import { ActionType, isActionOf } from 'typesafe-actions'
import { history } from '../../store'
import { RootState } from '../../store'
import RootAction from '../../types/RootAction'
import GlobalServices from '../../types/Services'
import {
  addTodo as addTodoAction,
  fetchToDoList as fetchToDoListAction,
  persistTodoList as persistTodoListAction,
  doneTodo as doneTodoAction,
  editTodo as editTodoAction,
} from './actions'
import { changeRoute } from '../../store/router-actions'
import { TODO_STORAGE_KEY } from './constants'

export const fetchToDoList: Epic<
  RootAction,
  ActionType<typeof fetchToDoListAction>,
  RootState,
  GlobalServices
> = (action$, _state$, { storageApi }) =>
  action$.pipe(
    filter(isActionOf(fetchToDoListAction.request)),
    switchMap(
      (): Promise<
        | ReturnType<typeof fetchToDoListAction.success>
        | ReturnType<typeof fetchToDoListAction.failure>
      > =>
        new Promise((resolve, reject) => {
          try {
            const todosList = JSON.parse(
              storageApi.getItem(TODO_STORAGE_KEY) || '[]'
            )
            resolve(
              fetchToDoListAction.success({
                error: null,
                data: todosList,
                message: 'success',
              })
            )
          } catch (e) {
            reject(
              fetchToDoListAction.failure({
                error: {},
                data: [],
                message: e.toString(),
              })
            )
          }
        })
    )
  )

export const validateAddToDo: Epic<
  RootAction,
  ActionType<typeof addTodoAction>,
  RootState,
  GlobalServices
> = (action$, _state$, { todo }) =>
  action$.pipe(
    filter(isActionOf(addTodoAction.request)),
    map(todo.validateRequest),
    map((validation) => {
      if (validation.error) {
        return addTodoAction.failure({
          data: validation.data,
          error: validation.error,
          message: validation.message,
        })
      }
      return addTodoAction.success({
        data: { ...validation.data, isDone: false, id: Date.now() },
        message: validation.message,
        error: null,
      })
    })
  )

export const closeAddToDoModal: Epic<
  RootAction,
  ActionType<typeof History>,
  RootState,
  GlobalServices
> = (action$, _state$) =>
  action$.pipe(
    filter(isActionOf([addTodoAction.success, editTodoAction.success])),
    map(() => {
      return changeRoute(
        //@ts-ignore
        history.location?.state?.background,
        'PUSH'
      )
    })
  )

export const dispatchPersistTodoListAction: Epic<
  RootAction,
  ActionType<typeof persistTodoListAction>,
  RootState,
  GlobalServices
> = (action$, _state$) =>
  action$.pipe(
    filter(
      isActionOf([
        addTodoAction.success,
        doneTodoAction,
        editTodoAction.success,
      ])
    ),
    map(() => persistTodoListAction.request())
  )

export const persistTodoList: Epic<
  RootAction,
  ActionType<typeof persistTodoListAction>,
  RootState,
  GlobalServices
> = (action$, state$, { storageApi }) =>
  action$.pipe(
    filter(isActionOf(persistTodoListAction.request)),
    switchMap(
      (): Promise<
        | ReturnType<typeof persistTodoListAction.success>
        | ReturnType<typeof persistTodoListAction.failure>
      > =>
        new Promise((resolve, reject) => {
          try {
            storageApi.setItem(
              TODO_STORAGE_KEY,
              JSON.stringify(state$.value?.todoList?.payload)
            )
            resolve(
              persistTodoListAction.success({
                error: null,
                data: [],
                message: 'success',
              })
            )
          } catch (e) {
            reject(
              persistTodoListAction.failure({
                error: {},
                data: [],
                message: e.toString(),
              })
            )
          }
        })
    )
  )

export const validateEditToDo: Epic<
  RootAction,
  ActionType<typeof editTodoAction>,
  RootState,
  GlobalServices
> = (action$, _state$, { todo }) =>
  action$.pipe(
    filter(isActionOf(editTodoAction.request)),
    map(todo.validateRequest),
    map((validation) => {
      if (validation.error) {
        return editTodoAction.failure({
          data: validation.data,
          error: validation.error,
          message: validation.message,
        })
      }
      return editTodoAction.success({
        data: validation.data,
        message: validation.message,
        error: null,
      })
    })
  )
