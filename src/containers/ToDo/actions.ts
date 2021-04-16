import { createAsyncAction } from 'typesafe-actions'
import { ApiResponse } from '../../types/Response'
import {
  FETCH_TODO_LIST_FAILURE,
  FETCH_TODO_LIST_REQUEST,
  FETCH_TODO_LIST_SUCCESS,
} from './constants'
import { FetchToDoListRequest } from './types'

export const fetchToDoList = createAsyncAction(
  FETCH_TODO_LIST_REQUEST,
  FETCH_TODO_LIST_SUCCESS,
  FETCH_TODO_LIST_FAILURE
)<FetchToDoListRequest, ApiResponse, ApiResponse>()
