import { PortableTextComponents } from "@portabletext/react"
import { urlFor } from "./sanity-utils"

const components: PortableTextComponents = {
  // block(props) {
  //   // console.log(props);
  //   switch (props.node?.style) {
  //     case "h2":
  //       return <h2>{props.children}</h2>;
  //     case "text-lg":
  //       return <p className='text-lg'>{props.children}</p>;
  //     case "text-xl":
  //       return <p className='text-xl'>{props.children}</p>;
  //     default:
  //       return <p>{props.children}</p>;
  //   }
  // },
  types: {
    image: ({ value }) => {
      console.log(value)
      return <img src={urlFor(value.asset)} />
    },
    textIcon: ({ value }) => {
      console.log(value)
      return <img className="icon" src={urlFor(value.icon.asset)} />
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
  },
}

export default components
