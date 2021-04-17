import { useHistory } from 'react-router'
import ViewDoneListModal from '../../../components/ViewDoneListModal'
import { ViewToDoComponentTypes } from './index'

const ViewToDoComponent = ({ doneList }: ViewToDoComponentTypes) => {
  const history = useHistory()
  return (
    <>
      <ViewDoneListModal
        open={true}
        handleClose={() => history.goBack()}
        doneList={doneList}
      />
    </>
  )
}

export default ViewToDoComponent
