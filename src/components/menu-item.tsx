import { format } from "date-fns";
import Link from "next/link";
import { useParams } from "next/navigation";

import { DocumentIcon } from "@/components/icons/document-icon";

import { Document } from "@/hooks/use-documents";
import { cn } from "@/lib/utils";

export const MenuItem = ({ title, createdAt, id }: Document) => {
  const params = useParams();

  return (
    <div className="flex items-center gap-x-4">
      <DocumentIcon className="text-white" />
      <div className="flex flex-col">
        <span className="body-m text-neutral-400">
          {format(createdAt, "dd MMM yyyy")}
        </span>
        <Link
          href={id}
          className={cn(
            "text-white heading-m hover:text-primary transition-colors duration-150",
            params.documentId === id && "text-primary",
          )}
        >
          {title}.md
        </Link>
      </div>
    </div>
  );
};
