import React from "react"
import { PortableText } from "@portabletext/react"
import components from "@/app/utils/portableTextComponents"
// import PortableText from "@sanity/block-content-to-react";
// import SanityTexte from '../ui/SanityTexte';
import { CompositionItemText } from "@/app/types/schema"
import clsx from "clsx"

type Props = {
  input: CompositionItemText
}
const TexteUI = ({ input }: Props) => {
  const { text, align } = input
  // console.log(input)
  return (
    <div className="module module--text">
      <div
        className={clsx(
          "flex lex-col  h-full justify-center",
          align ? `items-${align}` : `items-start`
        )}
      >
        <div className="text ">
          {text && <PortableText value={text} components={components} />}
        </div>
      </div>
    </div>
  )
}

export default TexteUI
