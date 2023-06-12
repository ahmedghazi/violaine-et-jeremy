"use client";
import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

const PageContext = createContext({});

interface PageContextProps {
  // location?: object;
  children: ReactNode;
  // pageContext: object;
}

export const PageContextProvider = (props: PageContextProps) => {
  const { children } = props;
  const pathname = usePathname();
  // console.log(pathname);
  const settings = {
    pathname,
  };

  useEffect(() => {
    _format();
    window.addEventListener("resize", _format);

    return () => {
      window.removeEventListener("resize", _format);
    };
  }, []);

  const _format = () => {
    const wh = window.innerHeight;

    document.documentElement.style.setProperty("--app-height", wh + "px");

    const header = document.querySelector("header");
    let headerBounding = {} || { height: 50 };
    if (header) {
      headerBounding = header.getBoundingClientRect();

      document.documentElement.style.setProperty(
        "--header-height",
        headerBounding.height + "px"
      );
    }
  };

  return (
    <PageContext.Provider value={{ settings }}>{children}</PageContext.Provider>
  );
};

// export default PageContext;
// export { PageContext, PageContextProvider };

export const usePageContext = () => useContext(PageContext);
