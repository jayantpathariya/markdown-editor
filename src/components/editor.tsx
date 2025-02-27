import { PreviewShowIcon } from "./icons/preview-show-icon";

export const Editor = () => {
  return (
    <div className="flex-1 border-r border-neutral-200 dark:border-neutral-500 h-full">
      <div className="bg-neutral-100 dark:bg-neutral-800 p-3 flex items-center justify-between">
        <p className="uppercase heading-s text-neutral-400 dark:text-neutral-300">
          Markdown
        </p>
        <button className="hover:text-primary transition-colors duration-150 cursor-pointer">
          <PreviewShowIcon />
        </button>
      </div>
    </div>
  );
};
