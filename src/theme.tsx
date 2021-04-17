import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'
import { unstable_createMuiStrictModeTheme } from '@material-ui/core'
import { isProd } from './utils'

const createTheme = isProd ? createMuiTheme : unstable_createMuiStrictModeTheme

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6', // main color in the app
    },
    secondary: {
      main: '#ff8500', // orange for the first main button
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
