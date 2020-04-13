module.exports = {
  pathPrefix: '',
  siteMetadata: {
    title: `Insites UI Docs`,
    author: `@mrcnk`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'Insites UI Docs',
        subtitle: 'Documentation',
        description: 'An opinionated UI components library for React.',
        githubRepo: 'insites-co/insites-ui-docs',
        sidebarCategories: {
          null: [
            'index'
          ],
          Components: [
            'components/button'
          ]
        }
      }
    }
  ]
}
