import { getAllWorks, getWorks } from "@/app/utils/sanity-queries"
// import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { Metadata } from "next"
import { Project, Space } from "@/app/types/schema"
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
  const works: (Project | Space)[] = data.works as (Project | Space)[]

  const allWorks = await getAllWorks(
    params.slug === "spaces" ? "space" : "project"
  )

  return (
    <div className="page-works ">
      <WorkUI works={works} allWorks={allWorks} />
    </div>
  )
}

export default Page
