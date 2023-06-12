import Image from "next/image"
import React from "react"

type Props = {}

const Landing = (props: Props) => {
  const contacts = [
    {
      title: "Instagram",
      url: "https://www.instagram.com/violaineetjeremy/",
      label: "@violaineetjeremy",
    },
    {
      title: "Behance",
      url: "https://www.behance.net/violaineetjeremy",
      label: "violaineetjeremy",
    },
    { title: "Type Foundry", url: "https://vj-type.com", label: "vj-type.com" },
  ]
  return (
    <div className="landing">
      <div className="header">
        <div className="message text-lg">NEW WEBSITE ON ITS WAY...</div>
        <Image
          src="/icon-bird.svg"
          alt="Icon bird"
          // className="dark:invert"
          width={74}
          height={35}
          priority
        />
      </div>
      <div className="footer flex flex-col md:flex-row justify-between">
        <Image
          src="/violaine-et-jeremy-logo.svg"
          alt="Violaine & Jérémy Logo"
          // className="dark:invert"
          width={545}
          height={80}
          priority
        />
        <ul className="social flex items-baseline flex-col md:flex-row">
          {contacts.map((item) => (
            <li key={item.label} className="">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="title">{item.title}</div>
                <div className="label">{item.label}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Landing
