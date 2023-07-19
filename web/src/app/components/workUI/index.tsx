"use client"
import { Project, Space, WorksTextsItem } from "@/app/types/schema"
import React, { useState } from "react"
import BtnsDisplay from "./BtnsDisplay"
import Grid from "./Grid"
import List from "./List"
import "./index.scss"

type Props = {
  worksImages: (Project | Space)[]
  worksTexts: WorksTextsItem[]
  isDesign: boolean
}

const WorkUI = ({ worksImages, worksTexts, isDesign }: Props) => {
  const [display, setDisplay] = useState<string>("list")
  // console.log(allWorks)
  return (
    <div className="work-ui">
      {isDesign && <BtnsDisplay display={display} setDisplay={setDisplay} />}
      {worksImages && display === "grid" && (
        <Grid input={worksImages} withColorPalette={!isDesign} />
      )}
      {worksTexts && display === "list" && isDesign && (
        <List input={worksTexts} />
      )}
    </div>
  )
}

export default WorkUI
