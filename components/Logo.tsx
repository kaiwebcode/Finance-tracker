import { PiggyBank } from "lucide-react";
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 py-3">
      {/* <PiggyBank className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" /> */}

      {/* <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-4xl font-bold leading-tight tracking-tighter text-transparent">
        
      </p> */}
      <Image src="./logo.svg" alt="Logo" height={35} width={35} />
      <p className="font-semibold text-white text-3xl ml-2">Financial-Tracker</p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-1">
       <p className="font-semibold text-white text-2xl ">Financial-Tracker</p>
    </a>
  );
}

export default Logo;
