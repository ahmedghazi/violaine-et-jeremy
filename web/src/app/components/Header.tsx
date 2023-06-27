"use client";

import Link from "next/link";
import React from "react";

// import { getSettings } from "../utils/sanity-utils";
// import { LinkInternal, Settings } from "../types/schema";

type Props = {};

export default function Header(props: Props) {
  // const settings: Settings = await getSettings();
  // console.log(settings);
  return (
    <header>
      <div className='inner grid grid-cols-2 md:grid-cols-4 gap-md items-center  '>
        <Link href={"/"}>website name</Link>
      </div>
    </header>
  );
}

// export default async Header;
