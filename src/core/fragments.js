import { graphql } from "gatsby"

//https://github.com/gatsbyjs/gatsby/blob/26582d31ab14f7bac6d5738e4245ceca2e6d411d/packages/gatsby-transformer-sharp/src/fragments.js#L6

export const query = graphql`
    fragment options on ContentfulOptions {
        title
        description
        banner {
            file {
                url
            }
        }
    }

    fragment sharpL on ContentfulAsset {
        fluid(maxWidth: 1400) {
            ...GatsbyContentfulFluid_withWebp
        }
    }

    fragment sharpM on ContentfulAsset {
        fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid_withWebp
        }
    }

    fragment projet on ContentfulProject {
        title
        titleFormated{
            childMarkdownRemark {
                rawMarkdownBody
                html
            }
        }
        slug
        date(formatString: "YYYY")
        color
        tags
        texte {
            childMarkdownRemark {
                excerpt
                html
            }
        }
        texteAlt {
            childMarkdownRemark {
                excerpt
                html
            }
        }
        featuredImage {
            file {
                url
            }
            ...sharpL
        }
        images {
            ...sharpL
        }
    }
`
