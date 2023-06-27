import { getWorks } from "@/app/utils/sanity-queries"
// import { usePathname, useRouter } from "next/navigation"
import React from "react"
// import Image from "next/image"
// import { Project, Space } from "@/app/types/schema"
import WorkCard from "@/app/components/WorkCard"
import { Metadata } from "next"
import Card from "@/app/components/Card"
import { Project, SanityDocument, Space } from "@/app/types/schema"
import { _linkResolver } from "@/app/utils/utils"
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
interface IWorkItem extends SanityDocument {}

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
  // const works: (Project | Space)[] = data.works!
  const works: (Project | Space)[] = data.works as (Project | Space)[]
  // console.log(data)
  return (
    <div className="page px-md">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-md">
        {works &&
          works.length > 0 &&
          works?.map((item, i: number) => (
            <div key={i}>
              {/* <WorkCard input={item} /> */}
              <Card
                title={item.title || ""}
                industry={item.industry || ""}
                link={_linkResolver(item) || ""}
                image={item.imageCover?.asset || null}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Page
