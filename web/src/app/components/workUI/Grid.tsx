import { Project, Space } from "@/app/types/schema"
import { _linkResolver } from "@/app/utils/utils"
import React from "react"
import Card from "../Card"

type Props = {
  input: (Project | Space)[]
}

const Grid = ({ input }: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-md">
      {input &&
        input.length > 0 &&
        input?.map((item, i: number) => (
          <div key={i}>
            <Card
              title={item.title || ""}
              industry={item.industry || ""}
              link={_linkResolver(item) || ""}
              image={item.imageCover?.asset || null}
            />
          </div>
        ))}
    </div>
  )
}

export default Grid
