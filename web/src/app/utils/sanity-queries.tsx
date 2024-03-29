import { groq } from "next-sanity"
import { client } from "./sanity-client"
import {
  Home,
  Infos,
  PageModulaire,
  Project,
  Settings,
  Space,
  Work,
} from "../types/schema"
import { cache } from "react"
import { content, projectCard, spaceCard } from "./fragments"

// const clientFetch = cache(client.fetch.bind(client))
// Add cachedClient export
export const cachedClient = cache(client.fetch.bind(client))

/***************************************************************************************/
export async function getSettings(): Promise<Settings> {
  return cachedClient(
    groq`*[_type == "settings"][0]{
      ...,
      linkLegals->,
      navWorks[]{..., link->},
      navStudio[]{
        ...,
        _type == 'linkExternal' => {
          ...
        },
        _type == 'linkInternal' => {
          ...,
          link->
        }
      },
      logos[]{
        ...,
        items[]{
          asset->
        }
      }
    }`
  )
}

/***************************************************************************************/
export async function getHome(): Promise<Home> {
  return cachedClient(
    groq`*[_type == "home"][0]{
      ...,
      seo{
        ...,
        metaImage{
          asset->
        }
      },
      projects[]->{
        _type,
        slug,
        title,
        industry,
        job,
        description,
        imageHome {
          ...,
          asset->
        },
        imageHomeMobile {
          ...,
          asset->
        }
      }
    }`,
    {}
  )
}

/***************************************************************************************/
export async function getInfos(): Promise<Infos> {
  return cachedClient(
    groq`*[_type == "infos"][0]{...,
      image {
        ...,
        asset->
      }
    }`,
    {}
  )
}

/***************************************************************************************/
export async function getWorks(slug: string): Promise<Work> {
  return cachedClient(
    groq`*[_type == "work" && slug.current == $slug][0]{
      ...,
      seo{
        ...,
        metaImage{
          asset->
        }
      },
      worksImages[]->{
        ${projectCard}
      },
      worksTexts[]{
        hasLink,
        work->{
          _type,
          title,
          industry,
          year,
          client,
          slug,
          location,
          title,
          imagesLength,
          content[]{
          items[]{
            ...,
            image{
              asset->
            }
          }
        }
        }
      }
    }`,
    { slug: slug }
  )
}

/***************************************************************************************/
// pagination sanity
// 'prev': *[
//   _type == 'space' && !(_id in path('drafts.**')) && _createdAt < ^._createdAt
// ]{ ${spaceCard}} | order(_createdAt desc)[0],
// 'next': *[
//   _type == 'space' && !(_id in path('drafts.**')) && _createdAt > ^._createdAt
// ]{ ${spaceCard}} | order(_createdAt desc)[0]

export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  ...,
  seo{
    ...,
    metaImage{
      asset->
    }
  },
  imageCover {
    ...,
    asset->
  },
  imageIntro {
    ...,
    asset->
  },
  content[]{
    ${content}
  },
  related[]->{
    ${projectCard}
  },
  'works':*[_type == "work" && slug.current == "design"][0]{
    worksImages[]->{
      _id,
      _type,
      slug,
      title,
      job,
      imageCover {
        ...,
        asset->
      },
    }
  }
}`

export async function getProject(slug: string): Promise<Project> {
  return cachedClient(projectQuery, { slug: slug })
}

/***************************************************************************************/
export const spaceQuery = groq`*[_type == "space" && slug.current == $slug][0]{
  ...,
  seo{
    ...,
    metaImage{
      asset->
    }
  },
  imageCover {
    ...,
    asset->
  },
  imageIntro {
    ...,
    asset->
  },
  content[]{
    ${content}
  },
  related[]->{
    ${spaceCard}
  },

  'works':*[_type == "work" && slug.current == "space"][0]{
    worksImages[]->{
      _id,
      _type,
      slug,
      title,
      job,
      imageCover {
        ...,
        asset->
      },
    }
  }
}`

export async function getSpace(slug: string): Promise<Space> {
  return cachedClient(spaceQuery, { slug: slug })
}
// export async function getSpace(slug: string): Promise<Space> {
//   return cachedClient(
//     groq`*[_type == "space" && slug.current == $slug][0]{
//       ...,
//       imageCover {
//         ...,
//         asset->
//       }
//     }`,
//     { slug: slug }
//   )
// }

export const pageModulaireQuery = groq`*[_type == "pageModulaire" && slug.current == $slug][0]{
  ...,
  seo{
    ...,
    metaImage{
      asset->
    }
  },
  seo{
    ...,
    metaImage{
      ...,
      asset->
    }
  },
  content[]{
    ${content}
  },
}`
export async function getPageModulaire(slug: string): Promise<PageModulaire> {
  return cachedClient(pageModulaireQuery, { slug: slug })
}

// Get all post slugs
export const postPathsQuery = groq`*[_type == "project" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`
