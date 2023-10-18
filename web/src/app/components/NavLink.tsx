"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { _linkResolver } from "../utils/utils"
import clsx from "clsx"

type Props = {
  input: any
}

const NavLink = ({ input }: Props) => {
  const pathName = usePathname()
  return (
    <Link
      href={_linkResolver(input.link)}
      className={clsx(
        pathName === _linkResolver(input.link) ? "is-current-page" : ""
      )}
    >
      {input.label}
    </Link>
  )
}

export default NavLink
