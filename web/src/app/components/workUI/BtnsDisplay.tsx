"use client"
import React, { useState } from "react"

type Props = {
  display: string
  setDisplay: Function
}

const BtnsDisplay = ({ display, setDisplay }: Props) => {
  return (
    <div className="header fixed top-0 flex justify-center items-center py-sm w-full pointer-events-none z-50 text-xs">
      <button
        className="px-sm pointer-events-auto "
        onClick={() => setDisplay("grid")}
      >
        images
      </button>
      <span>·</span>
      <button
        className="px-sm pointer-events-auto"
        onClick={() => setDisplay("list")}
      >
        texts
      </button>
    </div>
  )
}

export default BtnsDisplay
