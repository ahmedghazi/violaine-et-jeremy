"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Infos, LinkExternal, LinkInternal, Settings } from "../types/schema"
import InfosModal from "./InfosModal"
import NavLink from "./NavLink"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { useScroll } from "../hooks/useScroll"

type Props = {
  titleAlt: string
  settings: Settings
  infos: Infos
}

const HeaderSM = ({ titleAlt, settings, infos }: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const pathName = usePathname()
  // console.log(pathName)
  const { scrollDirection } = useScroll()
  // console.log({ scrollDirection })
  useEffect(() => {
    // console.log(pathName)
    setOpen(false)
  }, [pathName])

  useEffect(() => {
    document.body.classList.toggle("is-modal", open)
  }, [open])

  return (
    <div
      className={clsx(
        "header--sm sm-only text-sm",
        `scroll-${scrollDirection}`
      )}
    >
      <div className="inner flex justify-between z-10 ">
        <Link href={"/"} className="w-1/4- site-name relative z-10">
          {titleAlt}
        </Link>
        {/* <button
          className={clsx(
            "btn-menu-toggle text-center w-1/4- pointer-events-auto z-10 text-sm",
            open ? "is-open" : ""
          )}
          onClick={() => setOpen(!open)}
        >

          {open ? "CLOSE" : "WORKS"}
        </button> */}
        {settings.navWorks?.map((item: LinkInternal) => (
          <div key={item.label} className="w-1/4- uppercase nav-link">
            <NavLink input={item} />
          </div>
        ))}
        <div className="w-1/4- flex justify-end">
          <InfosModal infosData={infos} settingsData={settings} />
        </div>
      </div>
      {/* <div
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

        </div>
      </div> */}
    </div>
  )
}

export default HeaderSM
