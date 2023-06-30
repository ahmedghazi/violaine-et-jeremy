import { createClient } from "next-sanity"
import type { SanityClient } from "@sanity/client"
import { apiVersion, dataset, projectId, useCdn } from "./env"

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

export function getClient({
  preview,
}: {
  preview?: { token: string }
}): SanityClient {
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
