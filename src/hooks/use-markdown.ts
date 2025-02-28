import { create } from "zustand";

import { Document } from "./use-documents";

type MarkdownState = {
  markdown: Document;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setMarkdown: (markdown: Document) => void;
};

export const useMarkdown = create<MarkdownState>((set) => ({
  markdown: {
    id: crypto.randomUUID(),
    title: "untitled-document",
    content: "",
    createdAt: new Date(),
  },
  setTitle: (title) =>
    set((state) => ({
      markdown: { ...state.markdown, title },
    })),
  setContent: (content) =>
    set((state) => ({
      markdown: { ...state.markdown, content },
    })),
  setMarkdown: (markdown) =>
    set(() => ({
      markdown,
    })),
}));
