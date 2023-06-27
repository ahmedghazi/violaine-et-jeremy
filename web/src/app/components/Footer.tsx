import React from "react"
import { getSettings } from "../utils/sanity-queries"
import { PortableText } from "@portabletext/react"

const Footer = async () => {
  // export default async function Footer() {
  const settings = await getSettings()
  const { links } = settings
  return (
    <footer className="">
      <div className="inner">
        <div className="grid md:grid-cols-4 gap-md">
          {links?.map((item) => (
            <div className="footer-item" key={item._key}>
              <h5>{item.title}</h5>
              <div className="text-sm">
                {item?.text && <PortableText value={item?.text} />}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 bottom-0 text-sm">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
