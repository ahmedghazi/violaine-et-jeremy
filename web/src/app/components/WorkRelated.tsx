import React from "react"
import { _linkResolver } from "../utils/utils"
import { ProjectExtend, SpaceExtend } from "../types/extend"
import CardMini from "./CardMini"
import Link from "next/link"
import WorkTitle from "./WorkTitle"
import { Project, Space } from "../types/schema"

type Props = {
  prev: Project | ProjectExtend | Space | SpaceExtend
  next: Project | ProjectExtend | Space | SpaceExtend
  related: Array<Project | ProjectExtend | Space | SpaceExtend | any>
}

const WorkRelated = ({ prev, next, related }: Props) => {
  // console.log(input)
  return (
    <section className="related ">
      <nav className="nav-related flex justify-between serif text-sm md:text-md">
        {prev && (
          <div className="nav-related--link prev w-1/2">
            <Link href={_linkResolver(prev)}>
              <div className="label italic">previous</div>

              <div className="title absolute text-sm">
                <WorkTitle title={prev.title || ""} subtitle={prev.industry} />
              </div>
            </Link>
          </div>
        )}
        {next && (
          <div className="nav-related--link next w-1/2">
            <Link href={_linkResolver(next)}>
              <div className="label italic">next</div>
              <div className="title absolute text-sm">
                <WorkTitle title={next.title || ""} subtitle={next.industry} />
              </div>
            </Link>
          </div>
        )}
      </nav>
      {related && related?.length > 0 && (
        <div className="related-cards -mx-sm md:mx-0">
          <h4 className="text-center text-xs md:text-sm mb-1re">
            See other delights
          </h4>
          <div className="flex justify-center items-start- items-baseline gap-sm md:gap-md">
            {related?.slice(0, 3).map((item) => (
              <CardMini
                key={item.slug?.current}
                title={item.title || ""}
                industry={item.industry || ""}
                link={_linkResolver(item) || ""}
                image={item.imageCover?.asset || null}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default WorkRelated
