"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { useEffect, useMemo, useState } from "react"
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
} from "sanity-codegen"
import { Logos } from "../types/schema"

type Props = {
  input: Array<Logos>
}
type ImageProps = {
  _type: "image"
  asset: SanityImageAsset
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

const FooterLogos = ({ input }: Props) => {
  const [logos, setLogos] = useState<SanityImageAsset | any>(null)

  const pathname = usePathname()
  // console.log(logos)
  useEffect(() => {
    _randomLogo()
  }, [pathname])

  const _randomLogo = () => {
    const rand = Math.round(Math.random() * (input.length - 1))
    // console.log(rand)
    if (input[rand]) setLogos(input[rand].items)
  }

  return (
    <div className="logos flex justify-between items-start">
      {/* <pre>{JSON.stringify(logos, null, 2)}</pre> */}
      {logos &&
        logos.map((item: ImageProps, i: number) => (
          <div className="aspect-square- " key={item.asset._id}>
            <Image
              src={item.asset.url}
              alt="v-&-j-logo"
              width={item.asset.metadata.dimensions.width}
              height={item.asset.metadata.dimensions.height}
            />
          </div>
        ))}
    </div>
  )
}

export default FooterLogos
