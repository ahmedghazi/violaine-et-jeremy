import React from "react"
import { getSettings } from "../utils/sanity-queries"
import { PortableText } from "@portabletext/react"
import Contacts from "./Contacts"

const Footer = async () => {
  // export default async function Footer() {
  const settings = await getSettings()
  const { links } = settings
  return (
    <footer className="">
      <div className="inner">
        <Contacts input={links} />
        <div className="absolute right-0 bottom-0 text-sm">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
