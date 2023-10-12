"use client"
import React, { useState } from "react"

type Props = {}

const Credits = (props: Props) => {
  const designer = {
    name: "JOANNA SPADILIERO",
    url: "https://joanna-spadiliero.com",
  }
  const [open, setOpen] = useState<boolean>(true)
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
            href={designer.url}
            target="_blank"
            className="p-0 mr-1e"
            rel="noopener noreferrer"
          >
            {designer.name}
          </a>{" "}
          <br />
          <em className="serif ">Code by</em>{" "}
          <a
            href="https://ahmedghazi.com/"
            target="_blank"
            className="p-0"
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
