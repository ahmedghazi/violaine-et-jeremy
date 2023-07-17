import Link from "next/link"
import React from "react"
import website from "../config/website"
import { getInfos, getSettings } from "../utils/sanity-queries"
// import { LinkExternal, LinkInternal, Settings } from "../types/schema"
import { _linkResolver } from "../utils/utils"
// import Infos from "./InfosModal"
// import { useSelectedLayoutSegment } from "next/navigation"
// import clsx from "clsx"
// import NavLink from "./NavLink"
import HeaderMD from "./HeaderMD"
import HeaderSM from "./HeaderSM"

export default async function Header() {
  const settings = await getSettings()
  const { navWorks, navStudio } = settings
  const infos = await getInfos()

  return (
    <header>
      <HeaderMD settings={settings} infos={infos} titleAlt={website.titleAlt} />
      <HeaderSM settings={settings} infos={infos} titleAlt={website.titleAlt} />
    </header>
  )
}

// export default async Header;
