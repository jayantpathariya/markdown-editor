import Link from "next/link";

import { DocumentIcon } from "@/components/icons/document-icon";

interface MenuItemProps {
  id: number;
  name: string;
  createdAt: string;
}

export const MenuItem = ({ name, createdAt, id }: MenuItemProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <DocumentIcon className="text-white" />
      <div className="flex flex-col">
        <span className="body-m text-neutral-400">{createdAt}</span>
        <Link
          href={`/document/${id}`}
          className="text-white heading-m hover:text-primary transition-colors duration-150"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};
