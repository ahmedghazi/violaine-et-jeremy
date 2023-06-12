import React from "react";
// import { getSettings } from "../utils/sanity-utils";
// import { Settings } from "../types/schema";

type Props = {};

const Footer = (props: Props) => {
  // const settings: Settings = await getSettings();
  return (
    <footer className='p-md'>
      <div className='grid md:grid-cols-4 gap-md'>
        <div className='col-span-2'>
          © PodCast Archive {new Date().getFullYear()}
        </div>

        <div className='social '>
          <h5>Keep in touch</h5>
          <ul className='flex'>
            <li>IG</li>
            <li>/</li>
            <li>TW</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
