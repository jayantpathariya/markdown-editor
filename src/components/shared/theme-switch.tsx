"use client";

import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full fixed bottom-4 right-4 bg-gray-800"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};
