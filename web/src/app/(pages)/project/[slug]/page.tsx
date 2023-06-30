import React from "react"
import { Metadata } from "next"
import { getProject } from "@/app/utils/sanity-queries"
import WorkContent from "@/app/components/WorkContent"
import WorkTitle from "@/app/components/WorkTitle"
import { ProjectExtend } from "@/app/types/extend"

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
  const data: ProjectExtend = (await getProject(params.slug)) as ProjectExtend

  return (
    <div className="page-project px-md">
      <div className="header fixed top-0 left-0 flex justify-center py-sm w-full pointer-events-none z-40">
        <div className="inner">
          <h1 className="px-md">{data.title}</h1>{" "}
          <span className="sep-dash">—</span>
          <em className="serif px-md">{data.industry}</em>
        </div>
        {/* <WorkTitle title={data.title } subtitle={data.industry} /> */}
      </div>
      <WorkContent input={data} />
    </div>
  )
}

export default ProjectSingle
