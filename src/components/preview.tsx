"use client";

import Markdown from "react-markdown";

import { PreviewHideIcon } from "@/components/icons/preview-hide-icon";
import { PreviewShowIcon } from "@/components/icons/preview-show-icon";

import { documents } from "@/constant";
import { useView } from "@/hooks/use-view";
import { cn } from "@/lib/utils";

export const Preview = () => {
  const { view, setView } = useView();

  return (
    <div
      className={cn("flex-1 hidden md:block", view === "preview" && "block")}
    >
      <div className="bg-neutral-100 dark:bg-neutral-800 p-3 flex items-center justify-between">
        <p className="uppercase heading-s text-neutral-400 dark:text-neutral-300">
          Preview
        </p>
        <button
          onClick={() => setView("editor")}
          className="hover:text-primary transition-colors duration-150 cursor-pointer md:hidden text-neutral-400 dark:text-neutral-300"
        >
          <PreviewHideIcon />
        </button>
        <div className="hidden md:inline-block">
          {view === "editor" ? (
            <button
              onClick={() => setView("preview")}
              className="hover:text-primary transition-colors duration-150 cursor-pointer text-neutral-400 dark:text-neutral-300"
            >
              <PreviewShowIcon />
            </button>
          ) : (
            <button
              onClick={() => setView("editor")}
              className="hover:text-primary transition-colors duration-150 cursor-pointer text-neutral-400 dark:text-neutral-300"
            >
              <PreviewHideIcon />
            </button>
          )}
        </div>
      </div>
      <div className="p-4 h-[calc(100%-6.1rem)] md:h-[calc(100%-6.5rem)] overflow-y-auto">
        <div className={cn(view === "preview" && "max-w-2xl mx-auto")}>
          <Markdown>{documents[1].content}</Markdown>
        </div>
      </div>
    </div>
  );
};
