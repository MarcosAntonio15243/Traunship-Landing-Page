"use client";

import { useState } from "react";
import NavBar from "../layout/NavBar";
import ActionButton from "./ActionButton";
import { IoMdMenu } from "react-icons/io";

export default function HeaderButton() {
  const [display, setDisplay] = useState("hidden");

  return (
    <>
      <IoMdMenu className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-500" onClick={() => setDisplay(d => d.includes("hidden") ? "flex" : "hidden")} />
      <div className={`absolute ${display} flex-col z-10 right-3 bg-[var(--biscuit)] p-5 gap-5 rounded-2xl rounded-tr-none`}>
        <NavBar onClick={() => setDisplay("hidden")} styles="flex-col text-[var(--brown)] gap-5 items-center" />
        <ActionButton styles="flex-row md:block text-nowrap">
          Try a demo
        </ActionButton>
      </div>
    </>
  );
}
