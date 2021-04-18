import { matchPath } from 'react-router'
import { ActionType } from 'typesafe-actions'
import { ValidationResponse } from '../../types/Response'
import RouterStateType from '../../types/RouterState'
import { addTodo as addTodoAction, editTodo as editTodoAction } from './actions'
import { AddToDoRequest } from './types'

const validateProps = (props: AddToDoRequest): ValidationResponse => {
  const error: Partial<AddToDoRequest> = {} // we need a partial data
  if (!props.title.length) {
    error.title = 'title is required'
  }
  if (!props.description) {
    error.description = 'description is required'
  }
  if (!props.gift.length) {
    error.gift = 'gift is required'
  }
  const errorLength = Object.keys(error).length
  return {
    data: props,
    error: errorLength ? error : null,
    message: !!errorLength ? 'form data is invalid' : '',
  }
}

export const validateRequest = (
  action: ActionType<
    typeof addTodoAction.request | typeof editTodoAction.request
  >
): ReturnType<typeof validateProps> => {
  return validateProps(action.payload)
}

export const isModalOpen = (action: RouterStateType): boolean =>
  !!matchPath(action.payload.location.pathname, {
    path: '/add-todo',
  })
