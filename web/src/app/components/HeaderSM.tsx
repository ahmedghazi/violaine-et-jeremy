"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Infos, LinkExternal, LinkInternal, Settings } from "../types/schema"
import InfosModal from "./InfosModal"
import NavLink from "./NavLink"
import clsx from "clsx"
import { usePathname } from "next/navigation"

type Props = {
  titleAlt: string
  settings: Settings
  infos: Infos
}

const HeaderSM = ({ titleAlt, settings, infos }: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const pathName = usePathname()
  // console.log(pathName)

  useEffect(() => {
    // console.log(pathName)
    setOpen(false)
  }, [pathName])

  return (
    <div className="sm-only">
      <div className="inner flex justify-between z-10">
        <Link href={"/"} className="w-1/3 site-name relative z-10">
          {titleAlt}
        </Link>
        <button
          className={clsx(
            "btn-menu-toggle text-center w-1/3 pointer-events-auto z-10",
            open ? "is-open" : ""
          )}
          onClick={() => setOpen(!open)}
        >
          <div className="icon">✾</div>
          <div className="burger"></div>
        </button>
        <div className="w-1/3 flex justify-end">
          <InfosModal infosData={infos} settingsData={settings} />
        </div>
      </div>
      <div
        className={clsx("nav-overlay fixed inset-0 z-0", open ? "is-open" : "")}
      >
        <div className="inner">
          <nav className="nav-works">
            <div className="label">WORKS</div>
            <ul className="flex absolute top-0">
              {settings.navWorks?.map((item: LinkInternal) => (
                <li key={item.label} className="lowercase serif pr-sm- italic">
                  <NavLink input={item} />
                </li>
              ))}
            </ul>
          </nav>
          <nav className="nav-studio relative">
            <ul className="flex ">
              {settings.navStudio?.map((item: LinkInternal | LinkExternal) => (
                <li key={item.label} className="">
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

export default HeaderSM
