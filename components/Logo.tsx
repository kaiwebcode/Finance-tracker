import { PiggyBank } from "lucide-react";
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      {/* <PiggyBank className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" /> */}

      {/* <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-4xl font-bold leading-tight tracking-tighter text-transparent">
        
      </p> */}
      <Image src="./logo.svg" alt="Logo" height={28} width={28} />
      <p className="font-semibold text-white text-2xl ml-2.5">Finance</p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-1">
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-2xl font-bold leading-tight tracking-tighter text-transparent">
        Finance-Tracker
      </p>
    </a>
  );
}

export default Logo;
