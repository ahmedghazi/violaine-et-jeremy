"use client"
import React, { useState } from "react"

type Props = {}

const Credits = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="credits flex">
      <div className="label mr-lg" onClick={() => setOpen(!open)}>
        CREDITS
      </div>
      {open && (
        <div className="value ">
          <span className="serif">Design by</span>{" "}
          <a
            href="https://joanna-spadiliero.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1e"
          >
            JOANNA SPADILIERO
          </a>{" "}
          <span className="serif ">Code by</span>{" "}
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
