"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { DarkModeIcon } from "../icons/dark-mode-icon";
import { LightModeIcon } from "../icons/light-mode-icon";

export const ThemeSwitch = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full  flex items-center gap-x-2 py-4 px-6 bg-neutral-800"
    >
      <DarkModeIcon
        className={cn("text-neutral-500", theme === "dark" && "text-white")}
      />
      <div className="w-11 h-6 bg-neutral-500 relative rounded-full">
        <span
          className={cn(
            "absolute size-4 bg-white rounded-full transition-transform duration-300 ease-in-out transform mt-1",
            theme === "dark" ? " -translate-x-4" : "translate-x-0",
          )}
        />
      </div>
      <LightModeIcon
        className={cn("text-neutral-500", theme === "light" && "text-white")}
      />
    </button>
  );
};
