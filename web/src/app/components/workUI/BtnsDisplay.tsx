"use client"
import clsx from "clsx"
import React, { useState } from "react"

type Props = {
  display: string
  setDisplay: Function
}

const BtnsDisplay = ({ display, setDisplay }: Props) => {
  return (
    <div className="header fixed top-0 flex justify-center items-center py-sm w-full pointer-events-none z-50 text-xs">
      <div className="inner">
        <button
          className={clsx(
            "px-sm pointer-events-auto",
            display !== "grid" ? "serif-" : ""
          )}
          onClick={() => setDisplay("grid")}
        >
          images
        </button>
        <span>·</span>
        <button
          className={clsx(
            "px-sm pointer-events-auto",
            display !== "list" ? "serif-" : ""
          )}
          onClick={() => setDisplay("list")}
        >
          texts
        </button>
      </div>
    </div>
  )
}

export default BtnsDisplay
