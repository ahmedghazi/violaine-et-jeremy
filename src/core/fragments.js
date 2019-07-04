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
        fluid(maxWidth: 1500, quality: 80) {
            ...GatsbyContentfulFluid
        }
    }

    fragment sharpM on ContentfulAsset {
        fluid(maxWidth: 600, quality: 80) {
            ...GatsbyContentfulFluid
        }
    }

    fragment projet on ContentfulProject {
        title
        slug
        date(formatString: "YYYY")
        credits
        color
        tags
        texte {
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
