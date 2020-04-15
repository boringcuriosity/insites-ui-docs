require('typeface-inter')
const React = require('react')
const { createGlobalStyle } = require('styled-components')
const { ThemeProvider, theme } = require('insites-ui')

const GlobalStyle = createGlobalStyle`
  code.language-text {
    color: ${theme.colors.white} !important;
    background-color: #2b3857 !important;
  }
`

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  )
}
