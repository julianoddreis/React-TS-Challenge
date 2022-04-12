import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  main {
    display: flex;
    justify-content: center;
  }

  main section {
    width: 100%;
    max-width: 1200px;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
