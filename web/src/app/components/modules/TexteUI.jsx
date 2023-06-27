import React from "react"
import { PortableText } from "@portabletext/react"
import components from "@/app/utils/portableTextComponents"
// import PortableText from "@sanity/block-content-to-react";
// import SanityTexte from '../ui/SanityTexte';

const TexteUI = ({ input }) => {
  const { text } = input
  // console.log(text)
  return (
    <div className="module module--text">
      <div className="text">
        {text && <PortableText value={text} components={components} />}
      </div>
    </div>
  )
}

export default TexteUI
