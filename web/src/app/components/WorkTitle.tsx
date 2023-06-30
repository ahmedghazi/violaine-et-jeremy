import React from "react"

type Props = {
  title: string
  subtitle?: string
}

const WorkTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="flex justify-center">
      <h2 className="">{title}</h2>{" "}
      {subtitle && <span className="sep-dash">—</span>}
      {subtitle && <em className="serif">{subtitle}</em>}
    </div>
  )
}

export default WorkTitle
