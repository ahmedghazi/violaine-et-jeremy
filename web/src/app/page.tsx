import type { Metadata } from "next"
import website from "./config/website"
import { getHome } from "./utils/sanity-queries"
import { PortableText } from "@portabletext/react"
import HomeFeed from "./components/HomeFeed"

export const revalidate = 3600 // revalidate every hour

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHome()
  //data?.seo?.metaImage.asset.url ||
  return {
    metadataBase: new URL(website.url),
    title: data?.seo?.metaTitle || website.title,
    description: data?.seo?.metaDescription || website.description,
    openGraph: {
      images: [website.image],
    },
  }
}

const Home: ({ params }: PageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  const data = await getHome()
  return (
    <div className="page-home px-md">
      {data.text && (
        <div className="about fixed left-0 top-100 w-full px-md text-center serif italic text-lg  text">
          <PortableText value={data?.text} />
        </div>
      )}
      {data.projects && <HomeFeed input={data.projects} />}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  )
}

export default Home
