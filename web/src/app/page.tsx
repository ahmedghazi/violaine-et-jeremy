// import Image from "next/image";
import Landing from "./components/Landing"
import type { Metadata } from "next"
import website from "./config/website"

export const revalidate = 3600 // revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(website.url),
    title: website.title,
    description: website.description,
    openGraph: {
      images: [website.image],
    },
  }
}

export default function Home() {
  return (
    <div className="home">
      <Landing />
    </div>
  )
}
