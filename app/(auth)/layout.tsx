// import Logo from "@/components/Logo";
import Logo from "@/components/Logo";
import React, { ReactNode } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

export default layout;
