import { Switch, Route, useLocation } from 'react-router-dom'
import {
  ToDoContainer,
  AddToDoFormContainer,
  ViewToDoContainer,
  ViewDoneToDoListContainer,
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
          <Route path="/done-todos" children={<ViewDoneToDoListContainer />} />
        </>
      )}
    </>
  )
}

export default Routes
