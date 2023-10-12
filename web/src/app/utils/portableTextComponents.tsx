import { PortableTextComponents } from "@portabletext/react"
import { urlFor, urlForNoWidth } from "./sanity-utils"
import clsx from "clsx"
import CreditsItem from "../components/ui/CreditsItem"
import { Contact } from "../types/schema"
// import Image from "next/image"

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    "text-lg": ({ children }) => <div className="md:text-lg">{children}</div>,
    text_lg: ({ children }) => <p className="md:text-lg">{children}</p>,
    text_sm: ({ children }) => <p className="text-sm ">{children}</p>,
  },
  types: {
    textIcon: ({ value }) => {
      return (
        <div
          className={clsx(
            "text-icon flex",
            value.align ? `justify-${value.align}` : ""
          )}
        >
          <img
            src={urlForNoWidth(value.icon.asset)}
            alt="text-icon"
            loading="lazy"
            className="text-icon"
          />
        </div>
      )
    },
    textCredits: ({ value }) => (
      <>
        <ul className="intro-credits">
          {/* <pre>{JSON.stringify(value, null, 2)}</pre> */}
          {value.items?.length &&
            value.items.map((item: Contact, i: number) => (
              <li key={item.label}>
                <CreditsItem
                  label={item.label || ""}
                  value={item.value || ""}
                  url={item.url || ""}
                  labelSerif={true}
                  valueSerif={false}
                />
              </li>
            ))}
        </ul>
      </>
    ),
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
    indent: ({ children, value }) => (
      <span className="text-indent  indent-lg block">{children}</span>
    ),
    align_left: ({ children, value }) => (
      <span className="text-left block">{children}</span>
    ),
    align_center: ({ children, value }) => (
      <span className="text-center block">{children}</span>
    ),
    align_right: ({ children, value }) => (
      <span className="text-right block">{children}</span>
    ),
  },
}

export default components
