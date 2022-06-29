import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './routes'
import GlobalStyle from './styles'
import theme from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
)
