import { groq } from "next-sanity"
import { client } from "./sanity-client"
import { Home, Infos, Project, Settings, Space, Work } from "../types/schema"

export async function getSettings(): Promise<Settings> {
  return client.fetch(
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
      }
    }`
  )
}

export async function getHome(): Promise<Home> {
  return client.fetch(
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
  return client.fetch(
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
  return client.fetch(
    groq`*[_type == "work" && slug.current == $slug][0]{
      ...,
      works[]->{
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
      }
    }`,
    { slug: slug }
  )
}

export async function getAllWorks(type: string): Promise<(Project | Space)[]> {
  return client.fetch(
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
  return client.fetch(
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
      }
    }`,
    { slug: slug }
  )
}

export async function getSpace(slug: string): Promise<Space> {
  return client.fetch(
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
