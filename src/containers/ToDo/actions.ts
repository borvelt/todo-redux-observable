import { createAction, createAsyncAction } from 'typesafe-actions'
import { ApiResponse } from '../../types/Response'
import {
  FETCH_TODO_LIST_FAILURE,
  FETCH_TODO_LIST_REQUEST,
  FETCH_TODO_LIST_SUCCESS,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED,
  PERSIST_TODO_LIST_REQUEST,
  PERSIST_TODO_LIST_SUCCESS,
  PERSIST_TODO_LIST_FAILED,
  DONE_TODO,
} from './constants'
import {
  AddToDoRequest,
  DoneTodoRequest,
  FetchToDoListRequest,
  PersistTodoListRequest,
} from './types'

export const fetchToDoList = createAsyncAction(
  FETCH_TODO_LIST_REQUEST,
  FETCH_TODO_LIST_SUCCESS,
  FETCH_TODO_LIST_FAILURE
)<FetchToDoListRequest, ApiResponse, ApiResponse>()

export const addTodo = createAsyncAction(
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED
)<AddToDoRequest, ApiResponse, ApiResponse>()

export const persistTodoList = createAsyncAction(
  PERSIST_TODO_LIST_REQUEST,
  PERSIST_TODO_LIST_SUCCESS,
  PERSIST_TODO_LIST_FAILED
)<PersistTodoListRequest, ApiResponse, ApiResponse>()

export const doneTodo = createAction(DONE_TODO)<DoneTodoRequest>()
