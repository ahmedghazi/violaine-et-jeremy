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
      {/* <div className="inner flex justify-between">
        <div className="header-section flex">
          <Link href={"/"} className="col-item site-name relative z-10">
            {website.titleAlt}
          </Link>
          <nav className="nav-works col-item  relative flex">
            <div className="label">WORKS</div>
            <ul className="flex absolute top-0">
              {navWorks?.map((item: LinkInternal) => (
                <li key={item.label} className="lowercase serif pr-sm italic">
                  <NavLink input={item} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header-section flex justify-end">
          <nav className="nav-studio relative">
            <ul className="flex ">
              {navStudio?.map((item: LinkInternal | LinkExternal) => (
                <li key={item.label} className="col-item">
                  {item._type === "linkInternal" && (
                    <Infos infosData={infos} settingsData={settings} />
                  )}
                  {item._type === "linkExternal" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div> */}
      <HeaderMD settings={settings} infos={infos} titleAlt={website.titleAlt} />
      <HeaderSM settings={settings} infos={infos} titleAlt={website.titleAlt} />
    </header>
  )
}

// export default async Header;
