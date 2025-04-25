"use client";

import { useState } from "react";
import NavBar from "../layout/NavBar";
import ActionButton from "./ActionButton";

export default function HeaderButton() {
  const [display, setDisplay] = useState("hidden");

  return (
    <>
      <button className="cursor-pointer p-1 rounded-full hover:bg-gray-500" onClick={() => setDisplay(d => d.includes("hidden") ? "flex" : "hidden")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className={`absolute ${display} flex-col z-10 right-3 bg-[var(--biscuit)] p-5 gap-5 rounded-2xl rounded-tr-none`}>
        <NavBar styles="flex-col text-[var(--brown)] gap-5 items-center" />
        <ActionButton styles="flex-row md:block text-nowrap">
          Try a demo
        </ActionButton>
      </div>
    </>
  );
}
