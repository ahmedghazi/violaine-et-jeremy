import Link from "next/link"
import React from "react"
import { _linkResolver } from "../utils/utils"
import WorkTitle from "./WorkTitle"
import { ProjectExtend, SpaceExtend } from "../types/extend"
import { urlFor } from "../utils/sanity-utils"
import Image from "next/image"
import CardMini from "./CardMini"

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
            <div className="label">prev</div>
            <CardMini
              key={input.prev.slug?.current}
              title={input.prev.title || ""}
              industry={input.prev.industry || ""}
              link={_linkResolver(input.prev) || ""}
              image={input.prev.imageCover?.asset || null}
            />
          </div>
        )}
        {input.next && (
          <div className="nav-related--link next w-1/2">
            <div className="label">next</div>
            <CardMini
              key={input.next.slug?.current}
              title={input.next.title || ""}
              industry={input.next.industry || ""}
              link={_linkResolver(input.next) || ""}
              image={input.next.imageCover?.asset || null}
            />
          </div>
        )}
      </nav>
      {input.related && input.related?.length > 0 && (
        <div className="related-cards -mx-sm md:mx-0">
          <h4 className="text-center text-sm mb-1re">
            Other projects in the same style
          </h4>
          <div className="flex justify-center items-start gap-md">
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
