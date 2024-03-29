"use client"
import { usePageContext } from "@/app/context/PageContext"
import clsx from "clsx"
import { publish } from "pubsub-js"
import React, { useEffect, useState } from "react"

const BtnsDisplay = () => {
  const { worksView, setWorksView } = usePageContext()

  useEffect(() => {
    // publish("DISABLE_LENIS", worksView === "list")
    publish("WINDOW_RESIZE")
  }, [worksView])

  return (
    <div className="header fixed top-0 flex justify-center items-center py-sm w-full pointer-events-none z-50 text-xs">
      <div className="inner">
        <button
          className={clsx("px-sm pointer-events-auto")}
          onClick={() => setWorksView("grid")}
        >
          selected
        </button>
        <span>·</span>
        <button
          className={clsx("px-sm pointer-events-auto")}
          onClick={() => setWorksView("list")}
        >
          archive
        </button>
      </div>
    </div>
  )
}

export default BtnsDisplay
