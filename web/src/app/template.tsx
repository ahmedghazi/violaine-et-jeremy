import React from "react"
import { PageWrapper } from "@/app/PageWrapper"

type Props = {
  children: React.ReactNode
}

export default function Template({ children }: Props) {
  return <div className="template">{children}</div>
}
