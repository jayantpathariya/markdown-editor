"use client";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { data } from "@/db/data";
import { cn } from "@/libs/utils";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} documents={data} />
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
          <main className="w-full h-full flex">
            <div className="flex-1">
              <div>
                <h2>Markdown</h2>
              </div>
            </div>
            <div className="flex-1">Markdown Preview</div>
          </main>
        </div>
      </div>
    </>
  );
}
