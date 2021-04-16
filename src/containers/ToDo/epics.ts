import { Epic } from 'redux-observable'
import { switchMap, filter, map } from 'rxjs/operators'
import { ActionType, isActionOf } from 'typesafe-actions'

import { RootState } from '../../store'
import RootAction from '../../types/RootAction'
import GlobalServices from '../../types/Services'
import { fetchToDoList as fetchToDoListAction } from './actions'

export const fetchToDoListList: Epic<
  RootAction,
  ActionType<typeof fetchToDoListAction>,
  RootState,
  GlobalServices
> = (action$, _state$) =>
  action$.pipe(
    filter(isActionOf(fetchToDoListAction.request)),
    map(() =>
      fetchToDoListAction.success({
        success: true,
        message: 'todos.fetch.success', // i18n keyword or maybe some unicodes from api response,
        data: [],
      })
    )
  )
