const path = require("path")
// const locales = require('./config/i18n')
// const {
//     replaceTrailing,
//     localizedSlug,
//     replaceBoth,
//     wrapper
// } = require('./src/core/gatsby-node-helpers')


exports.createPages = async ({
    graphql,
    actions
}) => {
    const {
        createPage
    } = actions

    // const home = await graphql(`{
    //     contentfulHomePage{
    //         title
    //     }
    // }`)

    const templateHome = path.resolve("src/templates/page-home.js")
    const templateAbout = path.resolve("src/templates/page-about.js")
    const templateProject = path.resolve("src/templates/page-project.js")

    createPage({
        path: '/',
        component: templateHome,
        context: {
            template: 'home'
        },
    })

    createPage({
        path: '/about',
        component: templateAbout,
        context: {
            template: 'about'
        },
    })

    //////////////////////////////////
    const allContentfulProject = await graphql(`
    {
        allContentfulProject {
            edges {
              node {
                slug
                title
              }
            }
          }
    }
    `)
    const projects = allContentfulProject.data.allContentfulProject.edges
    projects.forEach((edge, index) => {
        const path = `/project/${edge.node.slug}`

        const previous = index === 0 ? projects[projects.length - 1].node : projects[index - 1].node
        const next = index === projects.length - 1 ? projects[0].node : projects[index + 1].node
console.log(edge.node.slug)
        createPage({
            path: path,
            component: templateProject,
            context: {
                slug: edge.node.slug,
                template: 'project',
                previous,
                next
            },
        })
    })


}

// exports.onCreatePage = ({
//     page,
//     actions
// }) => {
//     const {
//         createPage,
//         deletePage
//     } = actions

//     // Only create one 404 page at /404.html
//     if (page.path.includes('404')) {
//         return
//     }

//     // First delete the pages so we can re-create them
//     deletePage(page)

//     Object.keys(locales).map(lang => {
//         // Remove the trailing slash from the path, e.g. --> /categories
//         page.path = replaceTrailing(page.path)

//         // Remove the leading AND traling slash from path, e.g. --> categories
//         const name = replaceBoth(page.path)

//         // Create the "slugs" for the pages. Unless default language, add prefix àla "/en"
//         const localizedPath = locales[lang].default ? page.path : `${locales[lang].path}${page.path}`
//         console.log(name)
//         return createPage({
//             ...page,
//             path: localizedPath,
//             context: {
//                 locale: lang,
//                 name,
//                 //template: name
//             },
//         })
//     })
// }