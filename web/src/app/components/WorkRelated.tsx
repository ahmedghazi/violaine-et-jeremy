import Link from "next/link"
import React from "react"
import { _linkResolver } from "../utils/utils"
import WorkTitle from "./WorkTitle"
import { ProjectExtend, SpaceExtend } from "../types/extend"
import { urlFor } from "../utils/sanity-utils"
import Image from "next/image"

type Props = {
  input: ProjectExtend | SpaceExtend
}

const WorkRelated = ({ input }: Props) => {
  return (
    <section className="related">
      <nav className="nav-related flex justify-between serif italic">
        {input.prev && (
          <div className="nav-related--link prev ">
            <Link href={_linkResolver(input.prev)}>
              <span className="label">prev</span>
              <span className="title">{input.prev.title}</span>
            </Link>
          </div>
        )}
        {input.next && (
          <div className="nav-related--link next">
            <Link href={_linkResolver(input.next)}>
              <span className="label">next</span>
              <span className="title">{input.next.title}</span>
            </Link>
          </div>
        )}
      </nav>
      {input.related && input.related?.length > 0 && (
        <div className="related-cards">
          <h4 className="text-center text-sm mb-1re">
            Other projects in the same style
          </h4>
          <div className="flex justify-center gap-md">
            {input.related?.map((item) => (
              <article className="item w-200" key={item._id}>
                <Link href={_linkResolver(item)}>
                  {item.imageCover && (
                    <Image
                      src={urlFor(item.imageCover?.asset)}
                      width={500}
                      height={
                        item.imageCover?.asset.metadata.dimensions.width /
                        item.imageCover?.asset.metadata.dimensions.aspectRatio
                      }
                      alt={item.title || "project"}
                    />
                  )}
                  <div className="text-center pt-1re">
                    <WorkTitle title={item.title || ""} subtitle={item.job} />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default WorkRelated
