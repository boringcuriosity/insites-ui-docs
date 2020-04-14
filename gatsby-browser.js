const React = require('react')
const { ThemeProvider, theme } = require('insites-ui')

export const wrapPageElement = ({ element, props }) => {
  return <ThemeProvider theme={theme} {...props}>{element}</ThemeProvider>
}
