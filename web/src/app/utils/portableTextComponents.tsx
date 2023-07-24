import { PortableTextComponents } from "@portabletext/react"
import { urlFor } from "./sanity-utils"
import Image from "next/image"

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    "text-lg": ({ children }) => <div className="md:text-lg">{children}</div>,
    text_lg: ({ children }) => <p className="md:text-lg">{children}</p>,
    text_sm: ({ children }) => <p className="text-xs ">{children}</p>,
    // align_center: ({ children }) => <p className="text-center">{children}</p>,
  },
  types: {
    // image: ({ value }) => {
    //   console.log(value)
    //   return <img src={urlFor(value.asset)} alt="some image" />
    // },
    textIcon: ({ value }) => {
      return (
        <Image
          src={urlFor(value.icon.asset, 60)}
          alt="icon"
          width={60}
          height={60}
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
      <p className="text-left">{children}</p>
    ),
    align_center: ({ children, value }) => (
      <p className="text-center">{children}</p>
    ),
    align_right: ({ children, value }) => (
      <p className="text-right">{children}</p>
    ),
  },
}

export default components
