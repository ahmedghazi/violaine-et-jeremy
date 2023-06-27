import {
  CompositionItemImage,
  CompositionItemText,
  CompositionUI,
} from "@/app/types/schema"
import React, { Children, ReactNode } from "react"
import ImageUI from "./ImageUI"
import TexteUI from "./TexteUI"
import clsx from "clsx"

type Props = {
  input: CompositionUI
}

type ItemWrapperProps = {
  gridSize: string
  gridArea: string
  children: ReactNode
}

const ItemWrapper = ({ gridSize, gridArea, children }: ItemWrapperProps) => {
  return (
    <div
      className={clsx(
        "composition--item ",
        `is-${gridSize}`,
        gridSize === "full" ? "col-span-2 row-span-2" : ""
      )}
      style={{
        gridArea: gridArea,
      }}
    >
      {children}
    </div>
  )
}

const ModuleCompositionUI = ({ input }: Props) => {
  // console.log(input)
  const { items, gutter } = input
  const _renderModules = () => {
    if (!items) return ""

    const _modules = items.map(
      (module: CompositionItemImage | CompositionItemText, i) => {
        switch (module._type) {
          case "compositionItemImage":
            return module.image ? (
              <ItemWrapper
                key={i}
                gridArea={module.gridArea || ""}
                gridSize={module.gridSize || ""}
              >
                <ImageUI input={module} />
              </ItemWrapper>
            ) : null
          case "compositionItemText":
            return <TexteUI key={i} input={module} />

          default:
            return null
        }
      }
    )
    return _modules
  }

  return (
    <section
      className={clsx(
        "composition grid",

        `grid `,
        gutter ? "gap-md" : ""
      )}
    >
      {_renderModules()}
    </section>
  )
}

export default ModuleCompositionUI
