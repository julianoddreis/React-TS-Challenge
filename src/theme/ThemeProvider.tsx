import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import theme from './theme'

interface Props {
  children: any
}

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme
