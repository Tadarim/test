/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import './assets/css/index.less'
import App from '@/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)
