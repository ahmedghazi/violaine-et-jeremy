"use client"
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { usePathname } from "next/navigation"

const PageContext = createContext({})

interface PageContextProps {
  // location?: object;
  children: ReactNode
  // pageContext: object;
}

export const PageContextProvider = (props: PageContextProps) => {
  const { children } = props
  const pathname = usePathname()
  // console.log(pathname);
  const [isInfos, setIsInfos] = useState<boolean>(false)
  const settings = {
    pathname,
  }

  let _prevScrollTop: number = 0

  useEffect(() => {
    _format()
    window.addEventListener("resize", _format)
    window.addEventListener("scroll", _scroll)

    return () => {
      window.removeEventListener("resize", _format)
      window.removeEventListener("scroll", _scroll)
    }
  }, [])

  const _format = () => {
    const wh = window.innerHeight

    document.documentElement.style.setProperty("--app-height", wh + "px")

    const header = document.querySelector("header")
    let headerBounding = {} || { height: 50 }
    if (header) {
      headerBounding = header.getBoundingClientRect()

      document.documentElement.style.setProperty(
        "--header-height",
        headerBounding.height + "px"
      )
    }
  }

  const _scroll = () => {
    let direction = ""
    if (window.scrollY >= 10) {
      direction = window.scrollY > _prevScrollTop ? "down" : "up"
    } else {
      direction = "up"
    }

    _prevScrollTop = window.scrollY
    // document.body.classList.toggle('is-top', window.scrollY === 0);
  }

  return (
    <PageContext.Provider value={{ settings, isInfos, setIsInfos }}>
      {children}
    </PageContext.Provider>
  )
}

// export default PageContext;
// export { PageContext, PageContextProvider };

export const usePageContext = () => useContext(PageContext)
