import { PreviewShowIcon } from "./icons/preview-show-icon";

export const Preview = () => {
  return (
    <div className="flex-1 hidden md:block">
      <div className="bg-neutral-100 dark:bg-neutral-800 p-3 flex items-center justify-between">
        <p className="uppercase heading-s text-neutral-400 dark:text-neutral-300">
          Preview
        </p>
        <button className="hover:text-primary transition-colors duration-150 cursor-pointer">
          <PreviewShowIcon />
        </button>
      </div>
    </div>
  );
};
