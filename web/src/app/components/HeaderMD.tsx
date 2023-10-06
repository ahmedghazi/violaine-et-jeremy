"use client"
import Link from "next/link"
import React from "react"
import { Infos, LinkExternal, LinkInternal, Settings } from "../types/schema"
import NavLink from "./NavLink"
import InfosModal from "./InfosModal"
import clsx from "clsx"
import { _linkResolver } from "../utils/utils"
import { usePageContext } from "../context/PageContext"
import { usePathname } from "next/navigation"

type Props = {
  titleAlt: string
  settings: Settings
  infos: Infos
}

const HeaderMD = ({ titleAlt, settings, infos }: Props) => {
  const pathName = usePathname()

  const _getWorksLandingUrl = (label: string): string => {
    if (!settings.navWorks) return "/"
    const item = settings.navWorks?.filter(
      (el) => el.label?.toLowerCase() === label
    )
    if (item) {
      return _linkResolver(item[0].link)
    } else {
      return _linkResolver(settings.navWorks[0].link)
    }
  }

  const worksUrl =
    pathName.indexOf("space") > -1
      ? _getWorksLandingUrl("space")
      : _getWorksLandingUrl("design")

  return (
    <div className="header--md hidden-sm">
      <div className="inner flex justify-between">
        <div className="header-section flex">
          <Link href={"/"} className="col-item site-name relative z-10">
            {titleAlt}
          </Link>
          <nav className="nav-works col-item  relative flex btn">
            <div className="label">
              <Link href={worksUrl}>{settings.navWorksLabel}</Link>
            </div>
            <ul className="flex absolute- top-0-">
              {settings.navWorks?.map((item: LinkInternal) => (
                <li
                  key={item.label}
                  className={clsx(
                    "lowercase serif pr-sm- italic",
                    `nav-${item.link?.slug?.current}`
                  )}
                >
                  <NavLink input={item} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header-section flex justify-end">
          <nav className="nav-studio relative">
            <ul className="flex ">
              {settings.navStudio?.map((item: LinkInternal | LinkExternal) => (
                <li key={item.label} className="col-item">
                  {item._type === "linkInternal" && (
                    <InfosModal infosData={infos} settingsData={settings} />
                  )}
                  {item._type === "linkExternal" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label} <span className="absolute">↗</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HeaderMD
