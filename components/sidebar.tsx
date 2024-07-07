import { cn } from "@/libs/utils";
import { File, Plus } from "lucide-react";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const docs = [
  { id: 1, name: "Untitled.md", lastModified: "10 minutes ago" },
  { id: 2, name: "My First Document.md", lastModified: "1 hours ago" },
  { id: 3, name: "Welcome.md", lastModified: "2 hour ago" },
];

export const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 w-[250px] h-full p-6 bg-cstm-black-900 transition-transform duration-300 ease-in-out text-cstm-black-100",
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
          {docs.map((doc) => (
            <li key={doc.id} className="flex items-center gap-x-4 group">
              <File className="text-cstm-black-400 size-5" />
              <Link href={`/documents/${doc.id}`}>
                <span className="text-body-m font-light text-cstm-black-500">
                  {doc.lastModified}
                </span>
                <p className="text-heading-m group-hover:text-cstm-orange-default transition duration-200 ease-in-out">
                  {doc.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
