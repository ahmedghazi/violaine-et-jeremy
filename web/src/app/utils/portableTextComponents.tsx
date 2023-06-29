import { PortableTextComponents } from "@portabletext/react"
import { urlFor } from "./sanity-utils"
import Image from "next/image"

const components: PortableTextComponents = {
  // block(props) {
  //   console.log(props)
  //   switch (props.node?.style) {
  //     case "h2":
  //       return <h2>{props.children}</h2>
  //     case "text-lg":
  //       return <p className="text-lg">{props.children}</p>
  //     case "text-xl":
  //       return <p className="text-xl">{props.children}</p>
  //     default:
  //       return <p>{props.children}</p>
  //   }
  // },
  types: {
    image: ({ value }) => {
      console.log(value)
      return <img src={urlFor(value.asset)} alt="some image" />
    },
    textIcon: ({ value }) => {
      console.log(urlFor(value.icon.asset, 60))
      // return <img className="icon" src={urlFor(value.icon.asset)} alt="icon" />
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
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
    align_center: ({ children, value }) => (
      <p className="text-center">{children}</p>
    ),
    "text-lg": ({ children, value }) => <p className="text-lg">{children}</p>,
  },
}

export default components
