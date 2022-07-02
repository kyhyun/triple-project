import { createGlobalStyle } from 'styled-components'

import reset from './base/reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  button {
    user-select: none;
    border-style: none;
    &:hover {
      opacity: 0.9;
    }
  }

  ol, ul, dl {
    padding: 0;
    list-style: none;
  }
`

export default GlobalStyle
