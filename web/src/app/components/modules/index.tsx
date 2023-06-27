"use client"
import React from "react"
import styled from "styled-components"
// import TexteUI from './TexteUI';
// import ImageUI from './ImageUI';
// import TexteImageUI from './TexteImageUI';
// import EmbedUI from './EmbedUI';
import { CompositionUI } from "@/app/types/schema"
import ModuleCompositionUI from "./ModuleCompositionUI"
import "./index.scss"

const Container = styled.div`
  section {
    /* margin-bottom: var(--space-md); */
  }
`

type Props = {
  input: CompositionUI[]
}
const Modules = ({ input }: Props) => {
  return (
    <Container className="modules flex- flex-wrap- ">
      {input.map((item, i) => (
        <ModuleCompositionUI key={`comp-${i}`} input={item} />
      ))}
    </Container>
  )
}

export default Modules
