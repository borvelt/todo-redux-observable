import { connect } from 'react-redux'
import { RootState } from '../../../store'
import { doneTodoSelector } from '../selectors'
import ViewDoneListComponent from './ViewDoneList'

const mapStateToProps = (state: RootState) => ({
  doneList: doneTodoSelector(state),
})

const mapDispatchToProps = {}

export type ViewToDoComponentTypes = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const ViewToDoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewDoneListComponent)

export default ViewToDoContainer
