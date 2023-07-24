import React from "react"
import { Project, SanityImageAsset, Space } from "../types/schema"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import clsx from "clsx"
import Modules from "./modules"
// import CreditsItem from "./ui/CreditsItem"
import WorkCredits from "./WorkCredits"
import Link from "next/link"
import { _linkResolver } from "../utils/utils"
import { urlFor } from "../utils/sanity-utils"
import WorkTitle from "./WorkTitle"
import { ProjectExtend, SpaceExtend } from "../types/extend"
import WorkRelated from "./WorkRelated"
import components from "../utils/portableTextComponents"

type Props = {
  input: ProjectExtend | SpaceExtend
}
type ArticleProps = {
  input: Project | Space
  imageCover: SanityImageAsset | any
}
const ArticleWorkDefault = ({ input, imageCover }: ArticleProps) => (
  <article className="look-default">
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
              className={clsx(
                imageCover?.metadata?.dimensions.aspectRatio > 1
                  ? "is-landscape"
                  : "is-portrait"
              )}
            />
          </figure>
        )}
        <div className="text-intro text-sm md:text-md">
          <div className="inner">
            <div className="text">
              {input.text && (
                <PortableText value={input.text} components={components} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    {input.content && input.content.length && <Modules input={input.content} />}
  </article>
)

const ArticleWorkSplit = ({ input, imageCover }: ArticleProps) => (
  <article className="look-split grid- md:grid-cols-2- gap-md- flex flex-col-reverse md:flex-row">
    <div className="content">
      {imageCover && (
        <figure className="mb-md hidden-sm">
          <Image
            className={clsx(
              imageCover?.metadata?.dimensions.aspectRatio > 1
                ? "is-landscape"
                : "is-portrait"
            )}
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
      {input.content && input.content.length && (
        <Modules input={input.content} />
      )}
    </div>
    <div className="text-intro text-sm md:text-md mb-lg md:mb-0">
      <div className="inner">
        <div className="text">
          {imageCover && (
            <figure className="mb-md sm-only">
              <Image
                className={clsx(
                  imageCover?.metadata?.dimensions.aspectRatio > 1
                    ? "is-landscape"
                    : "is-portrait"
                )}
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
          {input.text && (
            <PortableText value={input.text} components={components} />
          )}
        </div>
      </div>
    </div>
  </article>
)

const ArticleWork = ({ input }: Props) => {
  const imageCover: SanityImageAsset | any = input.imageCover?.asset
  // console.log(input.related)
  return (
    <div className="work-content">
      {input.look !== "split" && (
        <ArticleWorkDefault input={input} imageCover={imageCover} />
      )}

      {input.look === "split" && (
        <ArticleWorkSplit input={input} imageCover={imageCover} />
      )}

      {/* {input.credits &&
        input.credits.length > 0 &&
        input.links &&
        input.links?.length > 0 && (
          <WorkCredits credits={input.credits} links={input.links} />
        )} */}
      <WorkCredits credits={input.credits} links={input.links} />

      <WorkRelated input={input} />
    </div>
  )
}

export default ArticleWork
