import { Data } from "@/db/data";
import { cn } from "@/libs/utils";
import { File, Moon, Plus, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  documents: Data[];
};

export const Sidebar = ({ isOpen, documents }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 w-[250px] h-full p-6 bg-cstm-black-900 transition-transform duration-300 ease-in-out text-cstm-black-100 flex flex-col justify-between",
        !isOpen && "translate-x-[-100%]",
        isOpen && "translate-x-0"
      )}
    >
      <div className="flex flex-col gap-y-6">
        <h2 className="uppercase text-heading-s font-medium tracking-[2px] text-cstm-black-500">
          My Documents
        </h2>
        <button className="flex items-center gap-x-2 px-4 py-3 rounded-md bg-cstm-orange-default hover:bg-cstm-orange-hover">
          <Plus className="text-cstm-black-100 size-4" />
          <span>New Document</span>
        </button>
        <ul className="flex flex-col gap-y-4">
          {documents.map((doc) => (
            <li key={doc.id} className="flex items-center gap-x-4 group">
              <File className="text-cstm-black-400 size-5" />
              <Link href={`/documents/${doc.id}`}>
                <span className="text-body-m font-light text-cstm-black-500">
                  {doc.createdAt}
                </span>
                <p
                  className={cn(
                    "text-heading-m group-hover:text-cstm-orange-default transition duration-200 ease-in-out",
                    pathname.includes(doc.id) && "text-cstm-orange-default"
                  )}
                >
                  {doc.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-4">
        <Moon
          className={cn(
            "size-6 text-cstm-black-500",
            !isDarkMode && "text-cstm-black-200"
          )}
        />
        <label
          htmlFor="dark-mode"
          className="relative w-[48px] h-[24px] bg-cstm-black-500 rounded-full cursor-pointer"
        >
          <input
            type="checkbox"
            id="dark-mode"
            className="sr-only peer"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
          <span className="w-[12px] h-[12px] bg-white rounded-full absolute top-[5px] left-1 peer-checked:left-8 transition-all duration-300"></span>
        </label>
        <Sun
          className={cn(
            "size-6 text-cstm-black-500",
            isDarkMode && "text-cstm-black-200"
          )}
        />
      </div>
    </aside>
  );
};
