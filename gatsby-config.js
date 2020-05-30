require('dotenv').config()

module.exports = {
  pathPrefix: '',
  siteMetadata: {
    title: `Nokode - Nocode case studies`,
    author: `@mrcnk`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'Nokode',
        subtitle: 'Nokode - Nocode case studies',
        description: 'Nokode - Nocode case studies helpful to understand what is fooling and helping people across the internet.',
        githubRepo: 'insites-co/insites-ui-docs',
        algoliaApiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        algoliaIndexName: process.env.GATSBY_ALGOLIA_INDEX,
        segmentApiKey: process.env.GATSBY_SEGMENT_API_KEY,
        sidebarCategories: {
          null: [
            'index',
            'getting-started',
            'customization',
            'principles',
            'design-system'
          ],
          'Tools': [
            'tools/gatsby',
            'tools/next'
          ],
          Components: [
            'components/box',
            'components/button',
            'components/container',
            'components/dropdown',
            'components/heading',
            'components/modal',
            'components/spinner',
            'components/table',
            'components/text',
            'components/tooltip'
          ],
          Form: [
            'form/checkbox',
            'form/form-control',
            'form/input',
            'form/radio',
            'form/select',
            'form/textarea',
            'form/toggle'
          ],
          Recipes: [
            'recipes/react-table',
            'recipes/react-hook-form'
          ],
          What ever: [
            'recipes/react-table',
            'recipes/react-hook-form'
          ]
        }
      }
    }
  ]
}
