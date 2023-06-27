import { Project, Space } from "@/app/types/schema"
import { _linkResolver } from "@/app/utils/utils"
import Link from "next/link"
import React from "react"
import ListItem from "./ListItem"

type Props = {
  input: (Project | Space)[]
}

const List = ({ input }: Props) => {
  const thead = ["year", "client", "project", "industry", "location", ""]
  return (
    <div className="list px-100">
      <div className="thead grid md:grid-cols-6 ">
        {thead.map((th: string, i: number) => (
          <div key={i} className="th uppercase">
            {th}
          </div>
        ))}
      </div>
      <div className="tbody serif">
        {input &&
          input.length > 0 &&
          input?.map((item, i: number) => (
            <ListItem key={item.slug?.current} input={item} />
          ))}
      </div>
    </div>
  )
}

export default List
