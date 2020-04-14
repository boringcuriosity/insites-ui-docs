const { colors } = require('@apollo/space-kit/colors')
const { theme } = require('insites-ui')

exports.colors = {
  primary: theme.colors.primary,
  primaryLight: theme.colors.primary,
  secondary: colors.pink.base,
  tertiary: colors.teal.dark,
  tertiaryLight: colors.teal.base,
  divider: colors.silver.dark,
  background: colors.silver.light,
  background2: colors.silver.base,
  text1: colors.black.lighter,
  text2: colors.grey.dark,
  text3: colors.grey.light,
  text4: colors.silver.darker,
  warning: colors.yellow.base,
  shadow: colors.black.darker,
  highlight: colors.blue.base,
  highlight2: colors.blue.lighter,
  highlight3: colors.blue.lightest,
  hoverOpacity: 0.8
}
