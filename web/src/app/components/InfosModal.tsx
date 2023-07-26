"use client"
import React, { useEffect, useState } from "react"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { SanityImageAsset } from "sanity-codegen"
import clsx from "clsx"
import { subscribe, unsubscribe } from "pubsub-js"
import { Infos, Settings } from "../types/schema"
import Contacts from "./Contacts"
import components from "../utils/portableTextComponents"
import Credits from "./ui/Credits"

type Props = {
  infosData: Infos
  settingsData: Settings
}
export default function InfosModal({ infosData, settingsData }: Props) {
  const image: SanityImageAsset | any = infosData.image?.asset

  const { links, linkLegals } = settingsData

  const _toggle = () => {
    setActive(!active)
  }

  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    const token = subscribe("IS_INFOS", (e, v) => {
      setActive(v)
    })

    return () => {
      unsubscribe(token)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle("is-modal", active)
  }, [active])

  return (
    <div id="infos">
      <button onClick={_toggle} className="btn-toggle z-10 relative">
        {active ? "CLOSE" : "INFOS"}
      </button>
      <div className={clsx("infos-overlay", active ? "is-active" : "")}>
        <div className="inner scrollable">
          <div className="links ">
            <Contacts input={links} linkLegals={linkLegals} />

            <div className="sm-only">
              <Credits />
            </div>
          </div>

          <div className="content pb-100-">
            <div className="md:flex ">
              <div className="grid-item md:pr-md text-lg-">
                <div className="flex flex-col justify-between h-full pb-md">
                  <div className="text ">
                    {infosData.text && (
                      <PortableText
                        value={infosData.text}
                        components={components}
                      />
                    )}
                  </div>
                  <div className="hidden-sm">
                    <Credits />
                  </div>
                </div>
              </div>
              <div className="grid-item">
                {image && (
                  <Image
                    src={image.url}
                    width={image?.metadata?.dimensions.width}
                    height={image?.metadata?.dimensions.height}
                    alt={infosData.title || "alt"}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    blurDataURL={image?.metadata?.lqip} //automatically provided
                    placeholder="blur" // Optional blur-up while loading
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
