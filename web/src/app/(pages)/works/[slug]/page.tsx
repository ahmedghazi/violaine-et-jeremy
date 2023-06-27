import { getAllWorks, getWorks } from "@/app/utils/sanity-queries"
// import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { Metadata } from "next"
import { Project, SanityDocument, Space } from "@/app/types/schema"
import { _linkResolver } from "@/app/utils/utils"
import WorkUI from "@/app/components/workUI"
// The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

type PageProps = {
  params: {
    slug: string
  }
}
// interface IWorkItem extends SanityDocument {}

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

  const type = params.slug === "spaces" ? "space" : "project"
  const allWorks = await getAllWorks(type)

  const works: (Project | Space)[] = data.works as (Project | Space)[]

  return (
    <div className="page px-md-">
      <WorkUI works={works} allWorks={allWorks} />
    </div>
  )
}

export default Page
