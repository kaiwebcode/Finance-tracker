// import Logo from "@/components/Logo";
import Logo from "@/components/Logo";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      {/* <Logo /> */}
      <div >{children}
        <div>
          <p> Kai here </p>
        </div>
      </div>
    </div>
  );
}

export default layout;