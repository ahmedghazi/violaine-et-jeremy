import { createClient, groq } from "next-sanity";

// export async function getPodcasts(): Promise<Podcast[]> {
//   const client = createClient({
//     projectId: process.env.SANITY_PROJECT_ID,
//     dataset: "production",
//     apiVersion: "2023-03-04",
//     useCdn: true,
//   });

//   return client.fetch(groq`*[_type == "podcast"] | order(_createdAt desc)`);
// }
