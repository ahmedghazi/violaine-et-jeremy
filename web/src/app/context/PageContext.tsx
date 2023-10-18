"use client"
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { usePathname } from "next/navigation"

// const PageContext = createContext({})

interface PageContextProps {
  // location?: object;
  children: ReactNode
  // pageContext: object;
}

type ContextProps = {
  settings: any
  isInfos: boolean
  setIsInfos: Function
  worksView: string
  setWorksView: Function
}

const PageContext = createContext<ContextProps>({} as ContextProps)

export const PageContextProvider = (props: PageContextProps) => {
  const { children } = props
  const pathname = usePathname()
  const [isInfos, setIsInfos] = useState<boolean>(false)
  const [worksView, setWorksView] = useState<string>("grid")
  const settings = {
    pathname,
  }

  const pathName = usePathname()

  // console.log(pathName)

  useEffect(() => {
    // console.log(pathName.includes("works"))
    setTimeout(() => {
      window.scroll(0, 0)
    }, 50)
    // document.documentElement.classList.remove("can-snap")
    document.documentElement.classList.toggle("is-home", pathName === "/")
    // document.documentElement.classList.toggle("can-snap", pathName === "/")
    document.documentElement.classList.toggle(
      "is-works",
      pathName.includes("works")
    )
    document.documentElement.classList.toggle(
      "is-space",
      pathName.includes("space")
    )
  }, [pathName])

  useEffect(() => {
    window.scroll(0, 0)
    _format()
    window.addEventListener("resize", _format)
    window.addEventListener("scroll", _scroll)
    document.addEventListener("keydown", _onKey)
    return () => {
      window.removeEventListener("resize", _format)
      window.removeEventListener("scroll", _scroll)
      document.removeEventListener("keydown", _onKey)
    }
  }, [])

  const _onKey = (e: KeyboardEvent) => {
    if (e.key !== "g") return
    const isShown = document.body.classList.contains("show-guides")
    // console.log(isShown)
    if (isShown) {
      document.body.classList.remove("show-guides")
    } else {
      document.body.classList.add("show-guides")
    }
  }

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

  let _prevScrollTop: number = 0
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
    <PageContext.Provider
      value={{ settings, isInfos, setIsInfos, worksView, setWorksView }}
    >
      {children}
    </PageContext.Provider>
  )
}

// export default PageContext;
// export { PageContext, PageContextProvider };

export const usePageContext = () => useContext(PageContext)
