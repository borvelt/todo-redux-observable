import { Switch, Route } from 'react-router-dom'
import ToDoContainer from './containers/ToDo'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ToDoContainer} />
  </Switch>
)

export default Routes
