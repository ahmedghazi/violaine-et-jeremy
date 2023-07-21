"use client"
import React, { useState } from "react"

type Props = {}

const Credits = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div
      className="credits flex items-baseline "
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className="label mr-lg"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(!open)}
        // onMouseLeave={() => setOpen(false)}
      >
        CREDITS
      </div>
      {open && (
        <div className="value text-xs">
          <em className="serif">Design by</em>{" "}
          <a
            href="https://joanna-spadiliero.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1e"
          >
            JOANNA SPADILIERO
          </a>{" "}
          <em className="serif ">Code by</em>{" "}
          <a
            href="https://ahmedghazi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AHMED GHAZI
          </a>
        </div>
      )}
    </div>
  )
}

export default Credits
