import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { Priority } from '../../containers/ToDo/types'
import Modal from '../CommonModal'
import AddToDoModalProps from './types'

const AddToDoModal = ({
  open,
  handleClose,
  draft,
  errors,
  submitTodoForm,
}: AddToDoModalProps) => {
  const [priority, setPriority] = useState<Priority>(Priority.MEDIUM)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [gift, setGift] = useState<string>('')
  useEffect(() => {
    if (!draft || !!errors) {
      return
    }
    setPriority(draft.priority)
    setTitle(draft.title)
    setDescription(draft.description)
    setGift(draft.gift)
  }, [draft, errors])

  return (
    <Modal
      title={`Add new Todo`}
      description={`Please fill the blanks`}
      open={open}
      handleClose={handleClose}
      action={
        <Button
          onClick={() => submitTodoForm({ priority, title, description, gift })}
          color="secondary"
          variant="contained"
        >
          Create a new ToDo
        </Button>
      }
      body={
        <>
          <FormControl fullWidth>
            <TextField
              label="Title"
              aria-describedby="my-helper-text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormHelperText id="my-helper-text" error={!!errors?.title}>
              {errors?.title || `The Title of your task`}
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Description"
              multiline
              rows={3}
              aria-describedby="my-helper-text"
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormHelperText error={!!errors?.description} id="my-helper-text">
              {errors?.description || `The description`}
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Gift"
              aria-describedby="my-helper-text"
              onChange={(e) => setGift(e.target.value)}
            />
            <FormHelperText error={!!errors?.gift} id="my-helper-text">
              {errors?.gift || `The Gifts or KPIs`}
            </FormHelperText>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Priority</FormLabel>
            <RadioGroup
              row
              aria-label="priority"
              name="priority"
              value={priority}
              onChange={(e) => setPriority(parseInt(e.target.value))}
            >
              <FormControlLabel
                value={Priority.LOW}
                control={<Radio />}
                label="Low"
              />
              <FormControlLabel
                value={Priority.MEDIUM}
                control={<Radio />}
                label="Medium"
              />
              <FormControlLabel
                value={Priority.HIGH}
                control={<Radio />}
                label="High"
              />
            </RadioGroup>
          </FormControl>
        </>
      }
    />
  )
}

export default AddToDoModal
