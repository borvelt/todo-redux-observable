import { ActionType } from 'typesafe-actions'
import * as actions from '../store/root-actions'

type RootAction = ActionType<typeof actions>

export default RootAction
