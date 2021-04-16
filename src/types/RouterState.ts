import type { RouterActionType } from 'connected-react-router'
import type { Location } from 'history'

type RouterStateType = {
  type: string
  payload: {
    location: Location
    action: RouterActionType
    isFirstRendering: boolean
  }
}

export default RouterStateType
