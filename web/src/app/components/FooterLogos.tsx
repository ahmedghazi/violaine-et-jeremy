"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { useEffect, useMemo, useState } from "react"
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
} from "sanity-codegen"

type Props = {
  input: Array<{
    _type: "image"
    asset: SanityImageAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }>
}

const FooterLogos = ({ input }: Props) => {
  const [logo, setLogo] = useState<SanityImageAsset | any>(null)

  const pathname = usePathname()
  // console.log(pathname)
  useEffect(() => {
    _randomLogo()
  }, [pathname])

  const _randomLogo = () => {
    const rand = Math.round(Math.random() * input.length - 1)
    setLogo(input[rand].asset)
  }

  return (
    <div className="logos">
      {logo && (
        <Image
          src={logo.url}
          alt="v-&-j-logo"
          width={logo.metadata.dimensions.width}
          height={logo.metadata.dimensions.height}
        />
      )}
    </div>
  )
}

export default FooterLogos
