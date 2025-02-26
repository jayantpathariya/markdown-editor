import { DeleteIcon } from "@/components/icons/delete-icon";
import { DocumentIcon } from "@/components/icons/document-icon";
import { MenuIcon } from "@/components/icons/menu-icon";
import { SaveIcon } from "@/components/icons/save-icon";

export const Header = () => {
  return (
    <header className="bg-neutral-700 flex items-center gap-x-3">
      <button className="p-4 bg-neutral-600">
        <MenuIcon className="size-6 text-white" />
      </button>
      <div className="flex items-center justify-between w-full p-2">
        <div className="flex items-center gap-x-2">
          <DocumentIcon className="size-5 text-white" />
          <div className="flex flex-col">
            <span className="body-m text-neutral-400 hidden md:inline-block">
              Document Name
            </span>
            <span className="heading-m text-white">welcome.md</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <button>
            <DeleteIcon className="size-5 text-neutral-400" />
          </button>
          <button className="bg-primary text-primary-foreground p-2.5 md:size-fit flex items-center justify-center rounded-md md:px-4 md:py-2">
            <SaveIcon className="size-5 " />
            <span className="heading-m hidden md:inline-block">
              Save Changes
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
