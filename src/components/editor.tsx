"use client";

import { PreviewShowIcon } from "@/components/icons/preview-show-icon";

import { useView } from "@/hooks/use-view";
import { cn } from "@/lib/utils";

export const Editor = () => {
  const { view, setView } = useView();

  return (
    <div
      className={cn(
        "flex-1 border-r border-neutral-200 dark:border-neutral-500 h-full hidden",
        view === "editor" && "block",
      )}
    >
      <div className="bg-neutral-100 dark:bg-neutral-800 p-3 flex items-center justify-between">
        <p className="uppercase heading-s text-neutral-400 dark:text-neutral-300">
          Markdown
        </p>
        <button
          onClick={() => setView("preview")}
          className="hover:text-primary transition-colors duration-150 cursor-pointer md:hidden"
        >
          <PreviewShowIcon />
        </button>
      </div>
    </div>
  );
};
