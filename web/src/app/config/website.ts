const website = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Violaine & Jérémy", // Navigation and Site Title
  titleAlt: "V&J", // Title for JSONLD
  description:
    "is a multidisciplinary creative studio believing in beauty, refinement, delicacy and timelessness.",
  headline: "", // Headline for schema.org JSONLD
  url: "https://violaineetjeremy.fr", // Domain of your site. No trailing slash!
  image:
    "https://images.ctfassets.net/8f90vj3zrs3l/2WCHI4r60DLWeF7OnYxfXv/59348f7d97bca1a6b677e373f1bfd854/violaine-et-jeremy-logo.svg", // Used for SEO
  ogLanguage: "fr_FR", // Facebook Language

  // JSONLD / Manifest
  faviconLetter: "B",
  favicon: "src/images/logo.png", // Used for manifest favicon generation
  shortName: "aeai", // shortname for manifest. MUST be shorter than 12 characters
  author: "aeai", // Author for schemaORGJSONLD
  themeColor: "#000000",
  backgroundColor: "#000000",

  instagram: "",
  twitter: "", // Twitter Username
  facebook: "", // Facebook Site Name
  googleAnalyticsID: "",

  skipNavId: "reach-skip-nav", // ID for the "Skip to content" a11y feature
}

export default website
