import "./styles/tailwind.css"
import "./styles/index.scss"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { PageContextProvider } from "./context/PageContext"
import config from "./config/website"
import { ReactNode } from "react"
import CookieWrapper from "./components/ui/CookieWrapper"

export const metadata = {
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
            <main>{children}</main>
            <Footer />
            <CookieWrapper />
          </PageContextProvider>
        </div>
      </body>
    </html>
  )
}
