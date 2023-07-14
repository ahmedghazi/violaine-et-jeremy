import type { Metadata } from "next"
import website from "./config/website"
import { getHome } from "./utils/sanity-queries"
import { PortableText } from "@portabletext/react"
import HomeFeed from "./components/HomeFeed"
import { draftMode } from "next/headers"
import components from "./utils/portableTextComponents"

export const revalidate = 3600 // revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHome()
  //data?.seo?.metaImage.asset.url ||
  return {
    metadataBase: new URL(website.url),
    title: data?.seo?.metaTitle || website.title,
    description: data?.seo?.metaDescription || website.description,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  }
}

const Home: () => Promise<JSX.Element> = async () => {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined
  const data = await getHome()

  // if (preview && preview.token) {
  //   return <div>is preview</div>
  // }
  return (
    <div className="page-home px-sm md:px-md">
      {data.text && (
        <div className="about sticky left-0 top-100 w-full px-md text-center serif italic md:text-lg text">
          <PortableText value={data?.text} components={components} />
        </div>
      )}

      {data.projects && <HomeFeed input={data.projects} />}
    </div>
  )
}

export default Home
