"use client";

import { useRouter } from "next/navigation";

import { useDocuments } from "@/hooks/use-documents";
import { useMenu } from "@/hooks/use-menu";
import { cn } from "@/lib/utils";

import { MenuItem } from "./menu-item";
import { ThemeSwitch } from "./shared/theme-switch";

export const Menu = () => {
  const { documents, addDocument } = useDocuments();
  const { isOpen } = useMenu();

  const router = useRouter();

  const handleAddDocument = () => {
    const documentId = addDocument();
    router.push(documentId);
  };

  return (
    <div
      className={cn(
        "absolute top-0 left-0 h-full w-64 -translate-x-full bg-neutral-800 transition-all duration-200 z-10 overflow-hidden",
        isOpen && "translate-x-0",
      )}
    >
      <div className="py-4 px-6">
        <p className="heading-s uppercase text-neutral-400 mb-6">My Document</p>
        <button
          onClick={handleAddDocument}
          className="bg-primary py-2 px-4 w-full rounded-md text-primary-foreground heading-m cursor-pointer hover:bg-primary-hover transition-colors duration-150 mb-4"
        >
          + New Document
        </button>
      </div>
      <div className="flex flex-col gap-y-4 overflow-y-auto h-[calc(100%-12rem)] px-6">
        {documents.map((document) => (
          <MenuItem key={document.id} {...document} />
        ))}
      </div>
      <ThemeSwitch />
    </div>
  );
};
