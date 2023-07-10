import { groq } from "next-sanity"
import { client } from "./sanity-client"
import { Home, Infos, Project, Settings, Space, Work } from "../types/schema"
import { cache } from "react"

const clientFetch = cache(client.fetch.bind(client))

export async function getSettings(): Promise<Settings> {
  return clientFetch(
    groq`*[_type == "settings"][0]{
      ...,
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
        asset->
      }
    }`
  )
}

export async function getHome(): Promise<Home> {
  return clientFetch(
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
  return clientFetch(
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
  return clientFetch(
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
  return clientFetch(
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

export async function getProject(slug: string): Promise<Project> {
  return clientFetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
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
    }`,
    { slug: slug }
  )
}

export async function getSpace(slug: string): Promise<Space> {
  return clientFetch(
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
