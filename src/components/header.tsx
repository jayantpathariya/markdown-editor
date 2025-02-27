"use client";

import { useState } from "react";

import { DeleteIcon } from "@/components/icons/delete-icon";
import { DocumentIcon } from "@/components/icons/document-icon";
import { MenuIcon } from "@/components/icons/menu-icon";
import { SaveIcon } from "@/components/icons/save-icon";

import { Logo } from "./icons/logo";

export const Header = () => {
  const [documentName, setDocumentName] = useState("untitled.md");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <header className="bg-neutral-700 flex items-center gap-x-3">
      <button className="py-4 px-3 bg-neutral-600 hover:bg-primary cursor-pointer transition-colors duration-150">
        <MenuIcon className="text-white" />
      </button>
      <div className="mx-2 hidden lg:block text-white">
        <Logo />
      </div>
      <div className="w-px h-[2rem] bg-neutral-500 hidden lg:block" />
      <div className="flex items-center justify-between w-full p-2">
        <div className="flex items-center gap-x-2">
          <DocumentIcon className="size-5 text-white" />
          <div className="flex flex-col">
            <span className="body-m text-neutral-400 hidden md:inline-block">
              Document Name
            </span>
            {isEditing ? (
              <input
                type="text"
                className={`heading-m text-white py-1 pr-2 outline-none border-b caret-primary`}
                value={documentName}
                onChange={(e) => setDocumentName(e.target.value)}
                onBlur={() => setIsEditing(false)}
                autoFocus
              />
            ) : (
              <span
                className="heading-m text-white border-b border-transparent"
                onClick={() => setIsEditing(true)}
              >
                {documentName}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-4 ">
          <button className="text-neutral-400 hover:text-primary transition-colors duration-150 cursor-pointer">
            <DeleteIcon className="size-5" />
          </button>
          <button className="bg-primary text-primary-foreground p-2.5 md:size-fit flex items-center justify-center gap-x-2 rounded-md md:px-4 md:py-2 hover:bg-primary-hover transition-colors duration-150 cursor-pointer">
            <SaveIcon />
            <span className="heading-m hidden md:inline-block">
              Save Changes
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
