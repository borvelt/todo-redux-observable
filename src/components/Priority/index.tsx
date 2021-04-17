import { Badge, makeStyles, Typography } from '@material-ui/core'
import { PriorityComponentProps } from './types'

const colorsPriority: Array<'error' | 'secondary' | 'primary'> = [
  'error',
  'secondary',
  'primary',
]

const textPriority: Array<'High' | 'Medium' | 'Low'> = ['High', 'Medium', 'Low']

const useStyle = makeStyles((theme) => ({
  priorityName: {
    marginLeft: theme.spacing(1),
  },
}))

const PriorityComponent = ({ number }: PriorityComponentProps) => {
  const classes = useStyle()
  return (
    <>
      <Badge color={colorsPriority[number]} badgeContent=" " />
      <Typography component="span" className={classes.priorityName}>
        {' '}
        {textPriority[number]}{' '}
      </Typography>
    </>
  )
}

export default PriorityComponent
