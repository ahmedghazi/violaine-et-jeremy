"use client"
import { PortableText } from "@portabletext/react"
import React, { useEffect, useRef, useState } from "react"
import { PageModulaire, TitleText } from "../types/schema"
import Mailchimp from "./ui/Mailchimp"
import Link from "next/link"
import { _linkResolver } from "../utils/utils"
import components from "../utils/portableTextComponents"
import clsx from "clsx"

type Props = {
  input:
    | (TitleText & {
        _key: string
      })[]
    | undefined
  linkLegals: PageModulaire | undefined
}

const Contacts = ({ input, linkLegals }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [studioContact, setStudioContact] = useState<any>(null)
  useEffect(() => {
    const text = input?.filter((el) => el.title?.toLowerCase() === "contact")
    if (text) {
      console.log(text[0])
      setStudioContact(text[0])
    }
  }, [])

  return (
    <div className="contacts flex flex-wrap" ref={ref}>
      {input?.map((item, i) => (
        <div className="footer-item" key={i}>
          <h5 className="text-sm md:text-md">{item.title}</h5>

          <div className="text-xs md:text-sm">
            {item.title?.toLowerCase() !== "contact" && item?.text && (
              <PortableText value={item?.text} components={components} />
            )}
            {item.title?.toLowerCase() === "contact" && studioContact && (
              <PortableText
                value={studioContact.text}
                components={components}
              />
            )}
          </div>
        </div>
      ))}
      <div className="footer-item">
        <Mailchimp
          action="xxxx"
          field={{
            name: "EMAIL",
            placeholder: "",
            type: "email",
            required: true,
          }}
        />
        {/* <div className="text-xs md:text-sm ">
          {linkLegals && (
            <Link href={_linkResolver(linkLegals)}>{linkLegals.title}</Link>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default Contacts
