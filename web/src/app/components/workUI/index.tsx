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
}

const WorkUI = ({ worksImages, worksTexts }: Props) => {
  const [display, setDisplay] = useState<string>("grid")
  // console.log(allWorks)
  return (
    <div className="work-ui">
      <BtnsDisplay display={display} setDisplay={setDisplay} />
      {worksImages && display === "grid" && <Grid input={worksImages} />}
      {worksTexts && display === "list" && <List input={worksTexts} />}
    </div>
  )
}

export default WorkUI
