"use client"
import React, { useEffect, useState } from "react"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { SanityImageAsset } from "sanity-codegen"
import clsx from "clsx"
import { subscribe, unsubscribe } from "pubsub-js"
import { Infos, Settings } from "../types/schema"

type Props = {
  infosData: Infos
  settingsData: Settings
}
export default function Infos({ infosData, settingsData }: Props) {
  const image: SanityImageAsset | any = infosData.image?.asset

  const { links } = settingsData

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

  return (
    <div id="infos">
      <button onClick={_toggle} className="btn-toggle z-10 relative">
        {active ? "CLOSE" : "INFOS"}
      </button>
      <div className={clsx("infos-overlay", active ? "is-active" : "")}>
        <div className="links grid grid-cols-2 md:grid-cols-4 gap-md ">
          {links?.map((item) => (
            <div className="links-item" key={item._key}>
              <h5>{item.title}</h5>
              <div className="text-sm sans">
                {item?.text && <PortableText value={item?.text} />}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-md">
          <div className="grid-item">
            {infosData.text && <PortableText value={infosData.text} />}
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
  )
}
