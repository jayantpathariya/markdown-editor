"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
      className="p-2 rounded-full fixed bottom-4 right-4 bg-gray-800"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};
