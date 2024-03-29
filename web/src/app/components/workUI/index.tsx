"use client"
import { Project, Space, WorksTextsItem } from "@/app/types/schema"
import React, { useEffect } from "react"
import BtnsDisplay from "./BtnsDisplay"
import Grid from "./Grid"
import List from "./List"
import "./index.scss"
import { usePageContext } from "@/app/context/PageContext"

type Props = {
  worksImages: (Project | Space)[]
  worksTexts: WorksTextsItem[]
  isDesign: boolean
}

const WorkUI = ({ worksImages, worksTexts, isDesign }: Props) => {
  const { worksView, setWorksView } = usePageContext()

  useEffect(() => {
    if (!worksTexts || worksTexts.length === 0) {
      setWorksView("grid")
    }
  }, [])

  return (
    <div className="work-ui">
      {isDesign && <BtnsDisplay />}
      {worksImages && worksView === "grid" && (
        <Grid input={worksImages} withColorPalette={!isDesign} />
      )}
      {worksTexts && worksView === "list" && isDesign && (
        <List input={worksTexts} />
      )}
    </div>
  )
}

export default WorkUI
