require('dotenv').config()

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
        siteName: 'Insites UI',
        subtitle: 'Documentation',
        description: 'An opinionated UI components library for React.',
        githubRepo: 'insites-co/insites-ui-docs',
        algoliaApiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        algoliaIndexName: process.env.GATSBY_ALGOLIA_INDEX,
        sidebarCategories: {
          null: [
            'index',
            'getting-started',
            'customization'
          ],
          'Framework Specific': [
            'framework-specific/gatsby',
            'framework-specific/next'
          ],
          Components: [
            'components/box',
            'components/button',
            'components/container',
            'components/tooltip'
          ],
          Form: [
            'form/input'
          ]
        }
      }
    }
  ]
}
