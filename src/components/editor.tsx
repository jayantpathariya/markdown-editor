"use client";

import { PreviewShowIcon } from "@/components/icons/preview-show-icon";

import { documents } from "@/constant";
import { useView } from "@/hooks/use-view";
import { cn } from "@/lib/utils";

export const Editor = () => {
  const { view, setView } = useView();

  return (
    <div
      className={cn(
        "flex-1 border-r border-neutral-200 dark:border-neutral-500 h-full hidden",
        view === "editor" && "flex flex-col",
      )}
    >
      <div className="bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-300 p-3 flex items-center justify-between">
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

      <textarea
        defaultValue={documents[1].content}
        className="bg-background p-4 w-full h-[calc(100%-6.1rem)] md:h-[calc(100%-6.5rem)] outline-none markdown resize-none text-neutral-600 dark:text-neutral-300"
      />
    </div>
  );
};
