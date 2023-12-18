import React from "react"
import { Metadata } from "next"
import { redirect } from "next/navigation"
import { getProject, projectQuery } from "@/app/utils/sanity-queries"
import WorkContent from "@/app/components/WorkContent"
// import WorkTitle from "@/app/components/WorkTitle"
import { ProjectExtend } from "@/app/types/extend"
import { draftMode } from "next/headers"
import { getCachedClient, getClient } from "@/app/utils/sanity-client"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getProject(params.slug)
  // console.log(data.seo?.metaImage?.asset)
  // let imageUrl:string = data.seo?.metaImage?.asset ? data.seo?.metaImage?.asset?.url : ''
  return {
    title: `${data?.seo?.metaTitle}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: [data.seo?.metaImage?.asset?.url || ""],
    },
    robots: {
      index: data.isArchive !== true,
    },
  }
}

const ProjectSingle: ({ params }: Props) => Promise<JSX.Element> = async ({
  params,
}) => {
  const { isEnabled: preview } = draftMode()
  let data: ProjectExtend
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      projectQuery,
      params
    )
  } else {
    data = (await getProject(params.slug)) as ProjectExtend
  }

  // console.log(data.isArchive)
  if (data && data.isArchive) {
    redirect("/works/design")
  }

  return !data ? (
    <div></div>
  ) : (
    <div className="project-single single-design px-sm md:px-md pt-100">
      <div className="header fixed top-0 left-0 flex justify-center py-sm w-full pointer-events-none z-40 text-sm md:text-md">
        <div className="inner">
          <h1 className="">{data.title}</h1> <span className="sep-dash">—</span>
          <em className="serif ">{data.industry}</em>
        </div>
      </div>
      <WorkContent input={data} />
    </div>
  )
}

export default ProjectSingle
