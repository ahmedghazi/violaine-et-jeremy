import { Project, Space } from "./schema"

export interface ProjectExtend extends Project {
  prev: {
    _type: string
    slug?: { _type: "slug"; current: string }
    title: string
  }
  next: {
    _type: string
    slug?: { _type: "slug"; current: string }
    title: string
  }
}

export interface SpaceExtend extends Space {
  prev: {
    _type: string
    slug?: { _type: "slug"; current: string }
    title: string
  }
  next: {
    _type: string
    slug?: { _type: "slug"; current: string }
    title: string
  }
}