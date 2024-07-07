"use client";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { cn } from "@/libs/utils";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={cn(
          "w-full min-h-screen",
          isSidebarOpen && "overflow-x-hidden"
        )}
      >
        <div
          className={cn(
            "w-full ml-0 transition-all duration-300 ease-in-out",
            isSidebarOpen && "ml-[250px]"
          )}
        >
          <Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </div>
      </div>
    </>
  );
}
