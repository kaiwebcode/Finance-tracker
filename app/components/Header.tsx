"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser(); // Check if the hook is imported correctly

  return (
    <div className="p-5 flex justify-between items-center border shadow-lg">
      <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in?redirect_url=https%3A%2F%2Ffinancial-tracker-eta.vercel.app%2F-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
