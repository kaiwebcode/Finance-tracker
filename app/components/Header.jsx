import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } =useUser // Check if the hook is imported correctly

  return (
    <div className="p-5 flex justify-between items-center border shadow-lg">
      <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
      {/* {isSignedIn?  */}
        <Link href={'/sign-in'}>
          <Button>Get Started</Button>
        </Link>
        <UserButton /> 
      {/* } */}
    </div>
  );
}

export default Header;
