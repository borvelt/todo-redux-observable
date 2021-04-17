import { Location } from 'history'
import { LOCATION_CHANGE, RouterActionType } from 'connected-react-router'
import RouterStateType from '../types/RouterState'

export const onLocationChanged = (
  location: Location,
  action: RouterActionType,
  isFirstRendering = false
): RouterStateType => ({
  type: LOCATION_CHANGE,
  payload: {
    location,
    action,
    isFirstRendering,
  },
})
onLocationChanged.getType = () => LOCATION_CHANGE

export { onLocationChanged as changeRoute }
