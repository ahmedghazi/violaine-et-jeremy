import React from "react"
import { Contact, Project } from "../types/schema"
import CreditsItem from "./ui/CreditsItem"

type Props = {
  credits: Contact[]
  links: Contact[]
}

const WorkCredits = ({ credits, links }: Props) => {
  return (
    <section className="credits b-t py-50">
      <div className="grid gap-md md:grid-cols-4 mb-50">
        <h4>CREDITS</h4>
        <ul className="credits grid gap-md md:grid-cols-3 col-span-3">
          {credits?.map((item, i) => (
            <li key={i}>
              <CreditsItem
                label={item.label || ""}
                value={item.value || ""}
                url={item.url || ""}
                labelSerif={true}
                valueSerif={false}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-md md:grid-cols-4 ">
        <h4>LINKS</h4>
        <ul className="credits grid gap-md md:grid-cols-3 col-span-3">
          {links?.map((item, i) => (
            <li key={i}>
              <CreditsItem
                label={item.label || ""}
                value={item.value || ""}
                url={item.url || ""}
                labelSerif={false}
                valueSerif={true}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WorkCredits
