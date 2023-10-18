"use client"
// import { getClient } from "@/sanity/lib/getClient";
import { LiveQueryProvider } from "@sanity/preview-kit"
import { useMemo } from "react"
import { getClient } from "../utils/sanity-client"

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode
  token: string
}) {
  const client = useMemo(() => getClient({ token }), [token])
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}
