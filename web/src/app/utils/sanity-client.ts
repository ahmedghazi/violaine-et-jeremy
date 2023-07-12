import { createClient } from "next-sanity"
import type { SanityClient } from "@sanity/client"
import { apiVersion, dataset, projectId, useCdn } from "./env"
import { cache } from "react"

export const sanityConfig = {
  projectId: projectId,
  dataset: dataset,
}
export const client = createClient({
  projectId,
  dataset,
  apiVersion: apiVersion,
  useCdn,
  perspective: "published",
})

// export function getClient({
//   preview,
// }: {
//   preview?: { token: string }
// }): SanityClient {

// const token = process.env.SANITY_API_READ_TOKEN
// const preview =
//   process.env.SANITY_API_PREVIEW_DRAFTS === 'true' ? { token } : undefined
// const client = getClient({ preview })

/*
{
  preview: {
    token: xxxxxx
  }
}
*/
export function getClient(preview?: { token?: string }): SanityClient {
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts")
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    })
  }
  return client
}
// export function getClient({
//   preview,
// }: {
//   preview?: { token: string }
// }): SanityClient {
//   const client = createClient({
//     projectId: 'your-project-id',
//     dataset: 'production',
//     apiVersion: '2023-06-20',
//     useCdn: true,
//     perspective: 'published',
//   })
//   if (preview) {
//     if (!preview.token) {
//       throw new Error('You must provide a token to preview drafts')
//     }
//     return client.withConfig({
//       token: preview.token,
//       useCdn: false,
//       ignoreBrowserTokenWarning: true,
//       perspective: 'previewDrafts',
//     })
//   }
//   return client
// }

export const getCachedClient = (preview?: { token?: string }) => {
  const client = getClient(preview)

  return cache(client.fetch.bind(client))
}
