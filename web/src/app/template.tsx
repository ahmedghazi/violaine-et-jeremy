import React from "react"
import PageTransition from "./components/ui/PageTransition"
// import { PageWrapper } from "@/app/PageWrapper"

type Props = {
  children: React.ReactNode
}

export default function Template({ children }: Props) {
  return (
    <div className="template">
      <PageTransition>{children}</PageTransition>
    </div>
  )
}
