import "./styles/tailwind.css"
import "./styles/index.scss"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { PageContextProvider } from "./context/PageContext"
import config from "./config/website"
import { ReactNode } from "react"
import CookieWrapper from "./components/ui/CookieWrapper"
// import { LenisProvider } from "./components/ui/LenisProvider"
import PageTransitionAlt from "./components/ui/PageTransitionAlt"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata = {
  metadataBase: new URL("https://violaineetjeremy.fr"),
  title: {
    template: `%s — ${config.title}`,
  },
  description: config.description,
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <PageContextProvider>
            <Header />

            <main>
              <PageTransitionAlt>{children}</PageTransitionAlt>
            </main>

            <Footer />
            <CookieWrapper />
            <GoogleAnalytics gaId="G-H8GSKXHC1C" />
          </PageContextProvider>
        </div>
      </body>
    </html>
  )
}
