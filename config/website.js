module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Site Name', // Navigation and Site Title
  titleAlt: 'Site Alt', // Title for JSONLD
  description: 'desc here',
  headline: '', // Headline for schema.org JSONLD
  url: 'https://violaineetjeremy.fr', // Domain of your site. No trailing slash!
  logo: '/src/images/logo.png', // Used for SEO
  ogLanguage: 'fr_FR', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/images/icons/favicon.png', // Used for manifest favicon generation
  shortName: 'violaineetjeremy', // shortname for manifest. MUST be shorter than 12 characters
  author: 'violaine et jeremy', // Author for schemaORGJSONLD
  themeColor: '#F8E0D9',
  backgroundColor: '#F8E0D9',

  instagram: '',
  twitter: '', // Twitter Username
  facebook: '', // Facebook Site Name
  googleAnalyticsID: 'UA-53929919-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
