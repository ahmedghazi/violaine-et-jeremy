import React from "react"
import { getSettings } from "../utils/sanity-queries"
import Contacts from "./Contacts"
import FooterLogos from "./FooterLogos"

const Footer = async () => {
  // export default async function Footer() {
  const settings = await getSettings()
  const { links, logos } = settings
  return (
    <footer className="">
      <div className="inner">
        <div className="mb-100">
          <Contacts input={links} />
        </div>
        {logos && (
          <div className="">
            <FooterLogos input={logos} />
          </div>
        )}
        <div className="absolute right-0 bottom-0 text-xs copy">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
