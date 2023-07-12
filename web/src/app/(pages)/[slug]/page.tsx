import { getPageModulaire, getWorks } from "@/app/utils/sanity-queries"
import React from "react"
import { Metadata } from "next"
import Modules from "@/app/components/modules"

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getPageModulaire(params.slug)
  return {
    title: `${data?.seo?.metaTitle}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url,
    },
  }
}

const Page: ({ params }: PageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  const data = await getPageModulaire(params.slug)
  // console.log(data)
  return (
    <div className="page px-sm md:px-md">
      <div className="header fixed top-0 left-0 flex justify-center py-sm w-full pointer-events-none z-40">
        <div className="inner">
          <h1 className="">{data.title}</h1>
        </div>
      </div>
      {/* <pre>{JSON.stringify(data.seo, null, 2)}</pre> */}
      <article className="look-default">
        {data.content && data.content.length && (
          <Modules input={data.content} />
        )}
      </article>
    </div>
  )
}

export default Page
