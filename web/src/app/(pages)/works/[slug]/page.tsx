import { getWorks } from "@/app/utils/sanity-queries"
// import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { Metadata } from "next"
import { Project, Space, WorksTextsItem } from "@/app/types/schema"
import { _linkResolver } from "@/app/utils/utils"
import WorkUI from "@/app/components/workUI"

export const revalidate = 3600

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getWorks(params.slug)
  return {
    title: `${data?.seo?.metaTitle}`,
    description: data?.seo?.metaDescription,
  }
}

const Page: ({ params }: PageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  const data = await getWorks(params.slug)
  const worksImages: (Project | Space)[] = data.worksImages as (
    | Project
    | Space
  )[]
  const worksTexts: WorksTextsItem[] = data.worksTexts as WorksTextsItem[]

  return (
    <div className="page-works ">
      <WorkUI worksImages={worksImages} worksTexts={worksTexts} />
    </div>
  )
}

export default Page
