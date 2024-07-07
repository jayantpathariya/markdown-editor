import { File, Menu, Save, Trash2 } from "lucide-react";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="bg-cstm-black-800 h-14 md:h-16 flex items-center justify-between">
      <div className="flex h-full items-center gap-x-4">
        <button className="bg-cstm-black-700 h-full px-3">
          <Menu className="text-cstm-black-200 size-8" />
        </button>
        <div className="hidden md:block">
          <Logo />
        </div>
        <div className="w-px bg-cstm-black-600 h-[60%] hidden md:block"></div>
        <div className="flex items-center gap-x-4">
          <File className="text-cstm-black-400 size-5" />
          <div>
            <p className="hidden md:block text-body-m font-light text-cstm-black-500">
              Document Name
            </p>
            <h1 className="text-white text-heading-m">Untitled.md</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-3 px-3">
        <button>
          <Trash2 className="text-cstm-black-400 size-5" />
        </button>
        <button className="bg-cstm-orange-default hover:bg-cstm-orange-hover transition duration-200 p-2 rounded-md flex items-center gap-x-2">
          <Save className="text-cstm-black-100 size-5" />
          <span className="text-cstm-black-100 hidden md:inline-block">
            Save Changes
          </span>
        </button>
      </div>
    </header>
  );
};
