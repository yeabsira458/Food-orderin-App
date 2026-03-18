import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-center">
      <Link href="/ " className="font-bold text-xl ">
        MASSIMO
      </Link>
      <p className="ml-4"> All RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
