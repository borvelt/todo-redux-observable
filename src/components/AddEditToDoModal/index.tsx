import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
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
  title,
}: AddToDoModalProps) => {
  const [priority, setPriority] = useState<Priority>(Priority.MEDIUM)
  const [todoTitle, setTodoTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [gift, setGift] = useState<string>('')
  const [isDone, setIsDone] = useState<boolean>(false)
  const [id, setId] = useState<number>(0)
  useEffect(() => {
    if (!draft || !!errors) {
      return
    }
    console.log('add edit component', draft)
    setPriority(draft.priority)
    setTodoTitle(draft.title)
    setDescription(draft.description)
    setGift(draft.gift)
    setIsDone(draft.isDone)
    setId(draft.id)
  }, [draft, errors])

  return (
    <Modal
      title={title}
      description={`Please fill the blanks`}
      open={open}
      handleClose={handleClose}
      action={
        <Button
          onClick={() =>
            submitTodoForm({
              priority,
              title: todoTitle,
              description,
              gift,
              isDone,
              id,
            })
          }
          color="secondary"
          variant="contained"
        >
          Submit
        </Button>
      }
      body={
        <Grid container direction={'column'}>
          <FormControl fullWidth>
            <TextField
              label="Title"
              defaultValue={todoTitle}
              value={todoTitle}
              aria-describedby="my-helper-text"
              onChange={(e) => setTodoTitle(e.target.value)}
            />
            <FormHelperText id="my-helper-text" error={!!errors?.title}>
              {errors?.title || `The Title of your task`}
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              defaultValue={description}
              value={description}
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
              defaultValue={gift}
              value={gift}
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
        </Grid>
      }
    />
  )
}

export default AddToDoModal
