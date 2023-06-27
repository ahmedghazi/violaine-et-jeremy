import Link from "next/link"
import React from "react"
import website from "../config/website"
import { getInfos, getSettings } from "../utils/sanity-queries"
import { LinkExternal, LinkInternal, Settings } from "../types/schema"
import { _linkResolver } from "../utils/utils"
import Infos from "./Infos"

export default async function Header() {
  const settings = await getSettings()
  const { navWorks, navStudio } = settings
  const infos = await getInfos()

  return (
    <header>
      <div className="flex justify-between">
        <div className="header-section flex">
          <Link href={"/"} className="site-name relative z-10">
            {website.titleAlt}
          </Link>
          <nav className="nav-works relative">
            <div className="label">WORKS</div>
            <ul className="flex absolute top-0">
              {navWorks?.map((item: LinkInternal) => (
                <li key={item.label} className="lowercase serif pr-sm italic">
                  <Link href={`${_linkResolver(item.link)}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header-section flex justify-end">
          <nav className="nav-studio relative">
            <ul className="flex ">
              {navStudio?.map((item: LinkInternal | LinkExternal) => (
                <li key={item.label}>
                  {item._type === "linkInternal" && (
                    // <button
                    //   id="btn--toggle-infos"
                    //   onClick={() => setIsInfos(true)}
                    // >
                    //   {item.label}
                    // </button>
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
      </div>
    </header>
  )
}

// export default async Header;
