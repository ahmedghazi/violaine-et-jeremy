"use client"
import React, { useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Contact, Project, SanityImageAsset, Space } from "../types/schema"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import clsx from "clsx"
import Modules from "./modules"
// import CreditsItem from "./ui/CreditsItem"
import WorkCredits from "./WorkCredits"
import { _linkResolver } from "../utils/utils"
import { ProjectExtend, SpaceExtend } from "../types/extend"
import WorkRelated from "./WorkRelated"
import components from "../utils/portableTextComponents"
import CreditsItem from "./ui/CreditsItem"

type Props = {
  input: ProjectExtend | SpaceExtend
}
type ArticleProps = {
  input: Project | Space
  imageIntro: SanityImageAsset | any
}
const ArticleWorkDefault = ({ input, imageIntro }: ArticleProps) => (
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
        {imageIntro && (
          <figure>
            <Image
              src={imageIntro.url}
              width={imageIntro?.metadata?.dimensions.width}
              height={imageIntro?.metadata?.dimensions.height}
              alt={input.title || "alt"}
              sizes="100vw"
              style={{
                // width: "100%",
                // height: "auto",
                aspectRatio: `${imageIntro?.metadata?.dimensions.width} / ${imageIntro?.metadata?.dimensions.height}`,
              }}
              blurDataURL={imageIntro?.metadata?.lqip} //automatically provided
              placeholder="blur" // Optional blur-up while loading
              unoptimized
              className={clsx(
                imageIntro?.metadata?.dimensions.aspectRatio > 1
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
            <ul className="intro-credits">
              {input.introCredits?.length &&
                input.introCredits.map((item: Contact, i: number) => (
                  <li key={item.label}>
                    {/* <span className="serif">{ item.label}</span> */}
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
        </div>
      </div>
    </div>

    {input.content && input.content.length && <Modules input={input.content} />}
  </article>
)

const ArticleWorkSplit = ({ input, imageIntro }: ArticleProps) => (
  <article className="look-split grid- md:grid-cols-2- gap-md- flex flex-col-reverse md:flex-row">
    <div className="content">
      {imageIntro && (
        <figure className="mb-md hidden-sm">
          <Image
            className={clsx(
              imageIntro?.metadata?.dimensions.aspectRatio > 1
                ? "is-landscape"
                : "is-portrait"
            )}
            src={imageIntro.url}
            width={imageIntro?.metadata?.dimensions.width}
            height={imageIntro?.metadata?.dimensions.height}
            alt={input.title || "alt"}
            sizes="100vw"
            style={{
              // width: "100%",
              // height: "auto",
              aspectRatio: `${imageIntro?.metadata?.dimensions.width} / ${imageIntro?.metadata?.dimensions.height}`,
            }}
            blurDataURL={imageIntro?.metadata?.lqip} //automatically provided
            placeholder="blur" // Optional blur-up while loading
            unoptimized
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
          {imageIntro && (
            <figure className="mb-md sm-only">
              <Image
                className={clsx(
                  imageIntro?.metadata?.dimensions.aspectRatio > 1
                    ? "is-landscape"
                    : "is-portrait"
                )}
                src={imageIntro.url}
                width={imageIntro?.metadata?.dimensions.width}
                height={imageIntro?.metadata?.dimensions.height}
                alt={input.title || "alt"}
                sizes="100vw"
                style={{
                  // width: "100%",
                  // height: "auto",
                  aspectRatio: `${imageIntro?.metadata?.dimensions.width} / ${imageIntro?.metadata?.dimensions.height}`,
                }}
                blurDataURL={imageIntro?.metadata?.lqip} //automatically provided
                placeholder="blur" // Optional blur-up while loading
                unoptimized
              />
            </figure>
          )}
          {input.text && (
            <PortableText value={input.text} components={components} />
          )}
          <ul className="intro-credits">
            {input.introCredits?.length &&
              input.introCredits.map((item: Contact, i: number) => (
                <li key={item.label}>
                  {/* <span className="serif">{ item.label}</span> */}
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
      </div>
    </div>
  </article>
)

const ArticleWork = ({ input }: Props) => {
  const imageIntro: SanityImageAsset | any = input.imageIntro?.asset
  // const router = useRouter()

  // const _onClick = () => {
  //   const parentParts = location.pathname.split("/")
  //   const parentPage = `/works/${
  //     parentParts[1] === "project" ? "design" : parentParts[1]
  //   }`
  //   // console.log(parentParts, parentPage)
  //   router.push(parentPage)
  // }

  useEffect(() => {
    window.addEventListener("scroll", _onScroll)
    return () => {
      window.removeEventListener("scroll", _onScroll)
    }
  }, [])

  const _onScroll = () => {
    const credits = document.querySelector("main section.credits")
    if (!credits) return
    const bounding: DOMRect = credits.getBoundingClientRect()
    const wrapper = document.querySelector(".project-single")
    wrapper?.classList.toggle("is-below-fold", bounding.y <= 44)
  }

  const prevNext = useMemo(() => {
    const projectIndex = input.works.worksImages.findIndex(
      (item) => item._id === input._id
    )
    let prevIndex: number = 0,
      nextIndex: number = 0

    if (projectIndex === 0) {
      prevIndex = input.works.worksImages.length - 1
      nextIndex = projectIndex + 1
    }
    if (projectIndex > 0 && projectIndex < input.works.worksImages.length - 1) {
      prevIndex = projectIndex - 1
      nextIndex = projectIndex + 1
    }

    if (projectIndex === input.works.worksImages.length) {
      prevIndex = projectIndex - 1
      nextIndex = 0
    }
    // console.log({ prevIndex, projectIndex, nextIndex })
    return {
      prev: input.works.worksImages[prevIndex],
      next: input.works.worksImages[nextIndex],
    }
  }, [])

  return (
    <div className="work-content">
      {/* <div
        className="back-button fixed inset-0 "
        onClick={_onClick}
        role="button"
        aria-label="back"
      ></div> */}
      {input.look !== "split" && (
        <ArticleWorkDefault input={input} imageIntro={imageIntro} />
      )}

      {input.look === "split" && (
        <ArticleWorkSplit input={input} imageIntro={imageIntro} />
      )}

      <WorkCredits credits={input.credits} links={input.links} />
      <WorkRelated
        prev={prevNext.prev}
        next={prevNext.next}
        related={input.related ? input.related : []}
      />
    </div>
  )
}

export default ArticleWork
