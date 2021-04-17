import { Switch, Route, useLocation } from 'react-router-dom'
import {
  ToDoContainer,
  AddToDoFormContainer,
  ViewToDoContainer,
} from './containers/ToDo'

const Routes = () => {
  const location = useLocation<any>()
  const background = location.state && location.state.background

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/" component={ToDoContainer} />
      </Switch>
      {background && (
        <>
          <Route path="/add-todo" children={<AddToDoFormContainer />} />
          <Route path="/view-todo/:todoId" children={<ViewToDoContainer />} />
        </>
      )}
    </>
  )
}

export default Routes
