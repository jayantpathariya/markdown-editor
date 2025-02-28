"use client";

import Markdown from "react-markdown";

import { PreviewHideIcon } from "@/components/icons/preview-hide-icon";
import { PreviewShowIcon } from "@/components/icons/preview-show-icon";

import { useMarkdown } from "@/hooks/use-markdown";
import { useView } from "@/hooks/use-view";
import { cn } from "@/lib/utils";

export const Preview = () => {
  const { markdown } = useMarkdown();

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
      <div className="p-4 h-[calc(100%-7rem)] overflow-y-auto">
        <div
          className={cn(
            "prose dark:prose-invert font-roboto-slab prose-sm sm:prose-base prose-h5:font-bold prose-h6:font-bold",
            view === "preview" && "max-w-2xl mx-auto",
          )}
        >
          <Markdown>{markdown.content}</Markdown>
        </div>
      </div>
    </div>
  );
};
