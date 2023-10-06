import React from "react"
import { Contact, Project } from "../types/schema"
import CreditsItem from "./ui/CreditsItem"

type Props = {
  credits?: Contact[]
  links?: Contact[]
}

const WorkCredits = ({ credits, links }: Props) => {
  return (
    <section className="credits b-t py-50 text-sm md:text-md">
      {credits && credits.length && (
        <div className="flex flex-wrap">
          <h4>CREDITS</h4>

          <div className="items flex flex-wrap">
            {credits?.map((item, i) => (
              <div key={i} className="credits-item pr-lg hidden-sm">
                <CreditsItem
                  label={item.label || ""}
                  value={item.value || ""}
                  url={item.url || ""}
                  labelSerif={true}
                  valueSerif={false}
                />
              </div>
            ))}
          </div>
          <ul className="credits--detail sm-only">
            {credits &&
              credits.length &&
              credits?.map((item, i) => (
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
      )}
      {links && links.length && (
        <div className="flex has-space-top flex-wrap">
          <h4>LINKS</h4>
          <div className="items flex flex-wrap">
            {links?.map((item, i) => (
              <div key={i} className="credits-item hidden-sm">
                <CreditsItem
                  label={item.label || ""}
                  value={item.value || ""}
                  url={item.url || ""}
                  labelSerif={true}
                  valueSerif={false}
                />
              </div>
            ))}
          </div>

          <ul className="credits--detail sm-only">
            {links?.map((item, i) => (
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
      )}
    </section>
  )
}

export default WorkCredits
