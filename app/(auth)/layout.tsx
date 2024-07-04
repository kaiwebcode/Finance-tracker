// import Logo from "@/components/Logo";
import Logo from "@/components/Logo";
import React, { ReactNode } from "react";
import Header from "../components/Header";

function layout() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      {/* <Logo /> */}
      <Header />
      <div> Yoo Kai is Here..</div>
    </div>
  );
}

export default layout;
