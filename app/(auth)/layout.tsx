// import Logo from "@/components/Logo";
import Logo from "@/components/Logo";
import React, { ReactNode } from "react";
import Header from "../components/Header";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      {/* <Logo /> */}
      <Header />
      {/* <div> Yoo Kai is Here..</div> */}
    </div>
  );
}

export default layout;
