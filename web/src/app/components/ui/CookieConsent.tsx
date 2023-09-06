"use client"
import React, { useEffect, useState } from "react"
import { hasCookie, setCookie } from "cookies-next"
import { BlockContent } from "@/app/types/schema"
import { PortableText } from "@portabletext/react"
import components from "@/app/utils/portableTextComponents"

type Props = {
  message: BlockContent
}

const CookieConsent = ({ message }: Props) => {
  const [showConsent, setShowConsent] = useState<boolean>(true)

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"))
  }, [])

  const acceptCookie = () => {
    setShowConsent(true)
    setCookie("localConsent", "true", {})
  }

  if (showConsent) {
    return null
  }

  return (
    <div className="fixed bottom-0 w-full bg-bg ">
      <div className="inner  p-md flex place-items-end justify-center b-t w-full text-sm">
        <div className="mr-md">
          {/* <pre>{JSON.stringify(settings.messageCookies, null, 2)}</pre> */}
          This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our Cookie
          Policy.
          {/* <PortableText value={message} components={components} /> */}
        </div>
        <button
          className="bg-green-500 py-2 px-8 rounded underline"
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
