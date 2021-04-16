import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './App'
import theme from './theme'
import { ConnectedRouter } from 'connected-react-router'
import { history, useStore } from './store'
import { Provider } from 'react-redux'

function Index(): JSX.Element {
  const store = useStore({})
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Index />, document.querySelector('#root'))
