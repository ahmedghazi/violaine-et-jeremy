import clsx from "clsx"
import React from "react"

type Props = {
  label: string
  value: string
  url: string
  labelSerif: boolean
  valueSerif: boolean
}

const CreditsItem = ({ label, value, url, labelSerif, valueSerif }: Props) => {
  return (
    <div className="credits-contact-item">
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <span className={clsx("label ", labelSerif && "serif italic")}>
            {label}
          </span>{" "}
          <span className={clsx("value ", valueSerif && "serif italic")}>
            {value}
          </span>
        </a>
      )}
      {!url && (
        <div className="">
          <span className={clsx("label ", labelSerif && "serif italic")}>
            {label}
          </span>{" "}
          <span className={clsx("value ", valueSerif && "serif italic")}>
            {value}
          </span>
        </div>
      )}
    </div>
  )
}

export default CreditsItem
