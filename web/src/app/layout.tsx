// import "./globals.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { PageContextProvider } from "./context/PageContext"
import config from "./config/website"
import "./styles/tailwind.css"
import "./styles/index.scss"

export const metadata = {
  title: {
    template: `%s — ${config.title}`,
  },
  description: config.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <PageContextProvider>
            <Header />
            <main>{children}</main>
          </PageContextProvider>
          <Footer />
        </div>
      </body>
    </html>
  )
}
