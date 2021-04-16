import { combineEpics } from 'redux-observable'

import * as ToDoEpics from '../containers/ToDo/epics'

export default combineEpics(
  ...Object.values({
    ...ToDoEpics,
  })
)
