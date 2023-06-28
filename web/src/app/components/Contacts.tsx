import { PortableText } from "@portabletext/react"
import React from "react"
import { TitleText } from "../types/schema"

type Props = {
  input:
    | (TitleText & {
        _key: string
      })[]
    | undefined
}

const Contacts = ({ input }: Props) => {
  return (
    <div className="grid md:grid-cols-4 gap-md">
      {input?.map((item, i) => (
        <div className="footer-item" key={i}>
          <h5>{item.title}</h5>
          <div className="text-sm">
            {item?.text && <PortableText value={item?.text} />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Contacts
