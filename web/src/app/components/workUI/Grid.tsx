import { Project, Space } from "@/app/types/schema"
import { _linkResolver } from "@/app/utils/utils"
import React from "react"
import Card from "../Card"

type Props = {
  input: (Project | Space)[]
  withColorPalette: boolean
}

const Grid = ({ input, withColorPalette }: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-md px-sm md:px-md">
      {input &&
        input.length > 0 &&
        input?.map((item, i: number) => (
          <div key={i}>
            <Card
              title={item.title || ""}
              industry={item.industry || ""}
              link={_linkResolver(item) || ""}
              image={item.imageCover?.asset || null}
              withColorPalette={withColorPalette}
            />
          </div>
        ))}
    </div>
  )
}

export default Grid
