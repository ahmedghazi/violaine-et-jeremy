import React from "react"
import { Project, SanityImageAsset, Space } from "../types/schema"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import clsx from "clsx"
import Modules from "./modules"
import CreditsItem from "./ui/CreditsItem"

type Props = {
  input: Project | Space
}

const ArticleWork = ({ input }: Props) => {
  const imageCover: SanityImageAsset | any = input.imageCover?.asset
  return (
    <div className="work-content mb-200">
      <div
        className={clsx(
          "intro mb-100",
          input.textIntroDrapeau ? "is-drapeau" : ""
        )}
      >
        <div
          className={clsx(
            "flex",
            input.textIntroDrapeau ? " flex-row" : "flex-col items-center"
          )}
        >
          {imageCover && (
            <figure>
              <Image
                src={imageCover.url}
                width={imageCover?.metadata?.dimensions.width}
                height={imageCover?.metadata?.dimensions.height}
                alt={input.title || "alt"}
                sizes="100vw"
                style={{
                  // width: "100%",
                  // height: "auto",
                  aspectRatio: `${imageCover?.metadata?.dimensions.width} / ${imageCover?.metadata?.dimensions.height}`,
                }}
                blurDataURL={imageCover?.metadata?.lqip} //automatically provided
                placeholder="blur" // Optional blur-up while loading
              />
            </figure>
          )}
          <div className="text-intro">
            <div className="text py-md">
              {input.text && <PortableText value={input.text} />}
            </div>
          </div>
        </div>
      </div>

      {input.content && input.content.length && (
        <Modules input={input.content} />
      )}

      <section className="credits b-t py-50">
        <div className="grid gap-md md:grid-cols-4 mb-50">
          <h4>CREDITS</h4>
          <ul className="credits grid gap-md md:grid-cols-3 col-span-3">
            {input.credits?.map((item, i) => (
              <li key={i}>
                <CreditsItem
                  label={item.label || ""}
                  value={item.value || ""}
                  url={item.url || ""}
                  labelSerif={true}
                  valueSerif={false}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-md md:grid-cols-4">
          <h4>LINKS</h4>
          <ul className="credits grid gap-md md:grid-cols-3 col-span-3">
            {input.links?.map((item, i) => (
              <li key={i}>
                <CreditsItem
                  label={item.label || ""}
                  value={item.value || ""}
                  url={item.url || ""}
                  labelSerif={false}
                  valueSerif={true}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="related">
        <nav className="nav-related flex justify-between serif italic">
          <div className="prev ">prev</div>
          <div className="next">next</div>
        </nav>
        <h4 className="text-center">Other projects in the same style</h4>
        card project card project card project
      </section>
      {/* <pre>{JSON.stringify(input.credits, null, 2)}</pre>*/}
      {/* <pre>{JSON.stringify(input.links, null, 2)}</pre> */}
    </div>
  )
}

export default ArticleWork
