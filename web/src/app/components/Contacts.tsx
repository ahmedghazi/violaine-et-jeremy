import { PortableText } from "@portabletext/react"
import React from "react"
import { PageModulaire, TitleText } from "../types/schema"
import Mailchimp from "./ui/Mailchimp"
import Link from "next/link"
import { _linkResolver } from "../utils/utils"
import components from "../utils/portableTextComponents"

type Props = {
  input:
    | (TitleText & {
        _key: string
      })[]
    | undefined
  linkLegals: PageModulaire | undefined
}

const Contacts = ({ input, linkLegals }: Props) => {
  return (
    <div className="contacts flex flex-wrap">
      {input?.map((item, i) => (
        <div className="footer-item" key={i}>
          <h5>{item.title}</h5>
          <div className="text-sm">
            {item?.text && (
              <PortableText value={item?.text} components={components} />
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
        <div className="text-sm ">
          {linkLegals && (
            <Link href={_linkResolver(linkLegals)}>{linkLegals.title}</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contacts
