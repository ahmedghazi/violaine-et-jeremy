import React from "react"
import CookieConsent from "./CookieConsent"
import { getSettings } from "@/app/utils/sanity-queries"

const CookieWrapper = async () => {
  const settings = await getSettings()
  console.log(settings.messageCookies)
  return (
    <div>
      {settings.messageCookies && (
        <CookieConsent message={settings.messageCookies} />
      )}
    </div>
  )
}

export default CookieWrapper
