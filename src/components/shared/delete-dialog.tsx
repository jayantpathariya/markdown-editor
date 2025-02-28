"use client";

import { useEffect, useState } from "react";

import { useMarkdown } from "@/hooks/use-markdown";
import { cn } from "@/lib/utils";

interface DeleteDialogProps {
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  onDelete?: () => void;
}

export const DeleteDialog = ({
  open,
  onOpenChange,
  onDelete,
}: DeleteDialogProps) => {
  const [isOpen, setIsOpen] = useState(open ?? false);
  const { markdown } = useMarkdown();

  useEffect(() => {
    setIsOpen(open ?? false);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onOpenChange?.(false);
  };

  const handleDelete = () => {
    onDelete?.();
    handleClose();
  };

  return (
    <div
      className={cn("fixed inset-0 bg-black/50 z-10", !isOpen && "hidden")}
      onClick={handleClose}
    >
      <div
        role="dialog"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-4 rounded-md prose dark:prose-invert font-roboto-slab max-w-[380px] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-2">Delete this document?</h2>
        <p>
          Are you sure you want to delete the {markdown.title} document and its
          content? This action cannot be reversed.
        </p>
        <button
          className="font-roboto bg-primary w-full py-2 px-4 rounded-md heading-m hover:bg-primary-hover"
          onClick={handleDelete}
        >
          Confirm & Delete
        </button>
      </div>
    </div>
  );
};
