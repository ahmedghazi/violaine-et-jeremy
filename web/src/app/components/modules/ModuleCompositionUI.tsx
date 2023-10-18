import {
  CompositionItemEmbed,
  CompositionItemImage,
  CompositionItemText,
  CompositionUI,
} from "@/app/types/schema"
import React, { Children, ReactNode, useMemo } from "react"
import ImageUI from "./ImageUI"
import TexteUI from "./TexteUI"
import EmbedUI from "./EmbedUI"
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
  const gridSizeClean =
    gridSize.indexOf("-qtl") > -1 ? gridSize.replace("-qtl", "") : gridSize
  return (
    <div
      className={clsx(
        "composition--item",
        `is-${gridSizeClean}`,
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
      (
        module:
          | CompositionItemImage
          | CompositionItemText
          | CompositionItemEmbed,
        i
      ) => {
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
            return (
              <ItemWrapper
                key={i}
                gridArea={module.gridArea || ""}
                gridSize={module.gridSize || ""}
              >
                <TexteUI key={i} input={module} />
              </ItemWrapper>
            )

          case "compositionItemEmbed":
            return (
              <ItemWrapper
                key={i}
                gridArea={module.gridArea || ""}
                gridSize={module.gridSize || ""}
              >
                <EmbedUI key={i} input={module} />
              </ItemWrapper>
            )

          default:
            return null
        }
      }
    )
    return _modules
  }

  //prevent image crop
  const isHalfHalf = useMemo(() => {
    if (items?.length !== 2) return false
    const gridSizes = items?.map((el) => el.gridSize)
    const notHalfHalf = gridSizes?.filter((el) => el !== "half")
    return notHalfHalf && notHalfHalf?.length === 0
  }, [])

  const isTriplette = useMemo(() => {
    if (items?.length !== 3) return false
    const gridSizes = items?.map((el) => el.gridSize)
    const notTriplette = gridSizes?.filter((el) => el !== "third")
    return notTriplette && notTriplette?.length === 0
  }, [])

  const isTripletteAndHasText = useMemo(() => {
    if (items?.length !== 3) return false
    return items.filter((el) => el._type === "compositionItemText").length > 0
  }, [])

  return (
    <section
      className={clsx(
        "composition grid",
        gutter ? "gap-sm md:gap-md" : "",
        isHalfHalf ? "is-half-half" : "",
        isTriplette ? "is-triplette" : "",
        isTripletteAndHasText ? "is-triplette-and-has-text" : "",
        input.autoHeight ? "auto-height" : "",
        gutter ? "has-gutter" : ""
      )}
    >
      {_renderModules()}
    </section>
  )
}

export default ModuleCompositionUI
