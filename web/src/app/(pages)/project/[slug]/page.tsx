import React from "react"
import { Metadata } from "next"
import { getProject } from "@/app/utils/sanity-queries"

import WorkContent from "@/app/components/WorkContent"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getProject(params.slug)
  return {
    title: `${data?.seo?.metaTitle}`,
    description: data?.seo?.metaDescription,
  }
}

const ProjectSingle: ({ params }: Props) => Promise<JSX.Element> = async ({
  params,
}) => {
  const data = await getProject(params.slug)

  return (
    <div className="page-project px-md">
      <div className="header fixed top-0 flex justify-center py-sm w-full pointer-events-none z-40">
        <h2>{data.title}</h2> <span className="sep-dash">—</span>
        <em className="serif">{data.industry}</em>
      </div>
      <WorkContent input={data} />
    </div>
  )
}

export default ProjectSingle
