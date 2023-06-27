"use client"
import React from "react"
import { CompositionUI } from "@/app/types/schema"
import ModuleCompositionUI from "./ModuleCompositionUI"
import "./index.scss"

type Props = {
  input: CompositionUI[]
}
const Modules = ({ input }: Props) => {
  return (
    <div className="modules  ">
      {input.map((item, i) => (
        <ModuleCompositionUI key={`comp-${i}`} input={item} />
      ))}
    </div>
  )
}

export default Modules
