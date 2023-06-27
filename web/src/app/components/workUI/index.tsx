"use client"
import { Project, Space } from "@/app/types/schema"
import React, { useState } from "react"
import BtnsDisplay from "./BtnsDisplay"
import Grid from "./Grid"
import List from "./List"
import "./index.scss"

type Props = {
  works: (Project | Space)[]
  allWorks: (Project | Space)[]
}

const WorkUI = ({ works, allWorks }: Props) => {
  const [display, setDisplay] = useState<string>("list")
  // console.log(allWorks)
  return (
    <div className="work-ui">
      <BtnsDisplay display={display} setDisplay={setDisplay} />
      {display === "grid" && <Grid input={works} />}
      {display === "list" && <List input={allWorks} />}
    </div>
  )
}

export default WorkUI
