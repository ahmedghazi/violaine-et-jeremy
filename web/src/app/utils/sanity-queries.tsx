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

// const clientFetch = cache(client.fetch.bind(client))
// Add cachedClient export
export const cachedClient = cache(client.fetch.bind(client))

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

export async function getHome(): Promise<Home> {
  return cachedClient(
    groq`*[_type == "home"][0]{
      ...,
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
          }
        }
    }`,
    {}
  )
}

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

export async function getWorks(slug: string): Promise<Work> {
  return cachedClient(
    groq`*[_type == "work" && slug.current == $slug][0]{
      ...,
      worksImages[]->{
        _type,
        title,
        industry,
        slug,
        imageCover {
          ...,
          asset->
        },
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

export async function getAllWorks(type: string): Promise<(Project | Space)[]> {
  return cachedClient(
    groq`*[_type == $type ]{
      ...,
      imageCover {
        ...,
        asset->
      },
      content[]{
        ...,
        items[]{
          ...,
          image{
            asset->
          }
        }
      }
    }`,
    { type: type }
  )
}

export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  ...,
  imageCover {
    ...,
    asset->
  },
  content[]{
    ...,
    items[]{
      ...,
      image{
        asset->
      }
    }
  },
  related[]->{
    ...,
    _type,
    slug,
    title,
    job,
    imageCover {
      ...,
      asset->
    },
  },
  'prev': *[
    _type == 'project' && !(_id in path('drafts.**')) && _createdAt < ^._createdAt
  ]{_type, slug, title} | order(_createdAt desc)[0],
  'next': *[
    _type == 'project' && !(_id in path('drafts.**')) && _createdAt > ^._createdAt
  ]{_type, slug, title} | order(_createdAt desc)[0]
}`

export async function getProject(slug: string): Promise<Project> {
  return cachedClient(projectQuery, { slug: slug })
}

export async function getSpace(slug: string): Promise<Space> {
  return cachedClient(
    groq`*[_type == "space" && slug.current == $slug][0]{
      ...,
      imageCover {
        ...,
        asset->
      }
    }`,
    { slug: slug }
  )
}

export async function getPageModulaire(slug: string): Promise<PageModulaire> {
  return cachedClient(
    groq`*[_type == "pageModulaire" && slug.current == $slug][0]{
      ...,
      content[]{
        ...,
        items[]{
          ...,
          image{
            asset->
          }
        }
      },
    }`,
    { slug: slug }
  )
}

// Get all post slugs
export const postPathsQuery = groq`*[_type == "project" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`
