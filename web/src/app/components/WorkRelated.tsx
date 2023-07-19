import React from "react"
import { _linkResolver } from "../utils/utils"
import { ProjectExtend, SpaceExtend } from "../types/extend"
import CardMini from "./CardMini"
import Link from "next/link"

type Props = {
  input: ProjectExtend | SpaceExtend
}

const WorkRelated = ({ input }: Props) => {
  // console.log(input)
  return (
    <section className="related ">
      <nav className="nav-related flex justify-between serif italic">
        {input.prev && (
          <div className="nav-related--link prev w-1/2">
            <Link href={_linkResolver(input.prev)}>
              <div className="label">previous</div>
              <div className="title absolute">{input.prev.title || ""}</div>
            </Link>
            {/* <CardMini
              key={input.prev.slug?.current}
              title={input.prev.title || ""}
              industry={input.prev.industry || ""}
              link={_linkResolver(input.prev) || ""}
              image={input.prev.imageCover?.asset || null}
            /> */}
          </div>
        )}
        {input.next && (
          <div className="nav-related--link next w-1/2">
            <Link href={_linkResolver(input.next)}>
              <div className="label">next</div>
              <div className="title absolute">{input.next.title || ""}</div>
            </Link>
            {/* <CardMini
              key={input.next.slug?.current}
              title={input.next.title || ""}
              industry={input.next.industry || ""}
              link={_linkResolver(input.next) || ""}
              image={input.next.imageCover?.asset || null}
            /> */}
          </div>
        )}
      </nav>
      {input.related && input.related?.length > 0 && (
        <div className="related-cards -mx-sm md:mx-0">
          <h4 className="text-center text-sm mb-1re">
            Other projects in the same style
          </h4>
          <div className="flex justify-center items-start gap-sm md:gap-md">
            {input.related?.map((item) => (
              <CardMini
                key={item.slug?.current}
                title={item.title || ""}
                industry={item.industry || ""}
                link={_linkResolver(item) || ""}
                image={item.imageCover?.asset || null}
              />
            ))}
            {input.related?.map((item) => (
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
