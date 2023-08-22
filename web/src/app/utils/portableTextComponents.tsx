import { PortableTextComponents } from "@portabletext/react"
import { urlFor, urlForNoWidth } from "./sanity-utils"
// import Image from "next/image"

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    "text-lg": ({ children }) => <div className="md:text-lg">{children}</div>,
    text_lg: ({ children }) => <p className="md:text-lg">{children}</p>,
    text_sm: ({ children }) => <p className="text-xs ">{children}</p>,
  },
  types: {
    textIcon: ({ value }) => {
      console.log(urlForNoWidth(value.icon.asset))
      return (
        // <Image
        //   src={urlFor(value.icon.asset, 360)}
        //   alt="icon"
        //   width={360}
        //   height={360}
        //   className="text-icon"
        // />
        <img
          src={urlForNoWidth(value.icon.asset)}
          alt="text-icon"
          className="text-icon"
        />
      )
    },
  },

  marks: {
    linkExternal: ({ children, value }) => {
      return (
        <a href={value.href} rel={"noopener noreferrer"} target="_blank">
          {children}
        </a>
      )
    },
    linkInternal: ({ children }) => <div>link internal {children}</div>,
    sans: ({ children }) => <span className="sans">{children}</span>,
    "gt-alpina": ({ children }) => (
      <span className="gt-alpina">{children}</span>
    ),
    align_left: ({ children, value }) => (
      <span className="text-left inline-block">{children}</span>
    ),
    align_center: ({ children, value }) => (
      <span className="text-center inline-block">{children}</span>
    ),
    align_right: ({ children, value }) => (
      <span className="text-right inline-block">{children}</span>
    ),
  },
}

export default components
