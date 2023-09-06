import React from "react"
import { _linkResolver } from "../utils/utils"
import { ProjectExtend, SpaceExtend } from "../types/extend"
import CardMini from "./CardMini"
import Link from "next/link"
import WorkTitle from "./WorkTitle"

type Props = {
  input: {
    prev: ProjectExtend | SpaceExtend
    next: ProjectExtend | SpaceExtend
  }
}

const WorkRelated = ({ input }: Props) => {
  // console.log(input)
  return (
    <section className="related ">
      <nav className="nav-related flex justify-between serif text-sm md:text-md">
        {input.prev && (
          <div className="nav-related--link prev w-1/2">
            <Link href={_linkResolver(input.prev)}>
              <div className="label italic">previous</div>

              <div className="title absolute text-sm">
                <WorkTitle
                  title={input.prev.title || ""}
                  subtitle={input.prev.industry}
                />
              </div>
            </Link>
          </div>
        )}
        {input.next && (
          <div className="nav-related--link next w-1/2">
            <Link href={_linkResolver(input.next)}>
              <div className="label italic">next</div>
              <div className="title absolute text-sm">
                <WorkTitle
                  title={input.next.title || ""}
                  subtitle={input.next.industry}
                />
              </div>
            </Link>
          </div>
        )}
      </nav>
      {input.related && input.related?.length > 0 && (
        <div className="related-cards -mx-sm md:mx-0">
          <h4 className="text-center text-xs md:text-sm mb-1re">
            Other projects in the same style
          </h4>
          <div className="flex justify-center items-start- items-baseline gap-sm md:gap-md">
            {input.related?.slice(0, 3).map((item) => (
              <CardMini
                key={item.slug?.current}
                title={item.title || ""}
                industry={item.industry || ""}
                link={_linkResolver(item) || ""}
                image={item.imageCover?.asset || null}
              />
            ))}
            {/* {input.related?.slice(0, 3).map((item) => (
              <CardMini
                key={item.slug?.current}
                title={item.title || ""}
                industry={item.industry || ""}
                link={_linkResolver(item) || ""}
                image={item.imageCover?.asset || null}
              />
            ))}
            {input.related?.slice(0, 3).map((item) => (
              <CardMini
                key={item.slug?.current}
                title={item.title || ""}
                industry={item.industry || ""}
                link={_linkResolver(item) || ""}
                image={item.imageCover?.asset || null}
              />
            ))} */}
          </div>
        </div>
      )}
    </section>
  )
}

export default WorkRelated
