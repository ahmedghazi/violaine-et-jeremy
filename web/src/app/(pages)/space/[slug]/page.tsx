import React from "react"
import { Space } from "@/app/types/schema"
import { Metadata } from "next"
import { getSpace } from "@/app/utils/sanity-queries"
import WorkContent from "@/app/components/WorkContent"
import { ProjectExtend, SpaceExtend } from "@/app/types/extend"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSpace(params.slug)
  return {
    title: `${data?.seo?.metaTitle}`,
    description: data?.seo?.metaDescription,
  }
}

const SpaceSingle: ({ params }: Props) => Promise<JSX.Element> = async ({
  params,
}) => {
  const data: SpaceExtend = (await getSpace(params.slug)) as SpaceExtend

  return (
    <div className="project-single px-md">
      <div className="header fixed top-0 flex justify-center py-sm w-full pointer-events-none z-40">
        <h2>{data.title}</h2> <span className="sep-dash">—</span>
        <em className="serif">{data.industry}</em>
      </div>
      <WorkContent input={data} />
    </div>
  )
}

export default SpaceSingle
