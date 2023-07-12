import { PortableText } from "@portabletext/react"
import React from "react"
import { PageModulaire, TitleText } from "../types/schema"
import Mailchimp from "./ui/Mailchimp"
import Link from "next/link"
import { _linkResolver } from "../utils/utils"

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
            {item?.text && <PortableText value={item?.text} />}
          </div>
        </div>
      ))}
      <div className="footer-item">
        <Mailchimp
          action="https://buildingparis.us5.list-manage.com/subscribe/post?u=8a8b23b6691303402d5307d91&amp;id=0c368c3d5e"
          field={{
            name: "EMAIL",
            placeholder: "",
            type: "email",
            required: true,
          }}
        />
        <div className="text-xs md:text-sm">
          {linkLegals && (
            <Link href={_linkResolver(linkLegals)}>{linkLegals.title}</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contacts
