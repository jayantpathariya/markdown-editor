import { create } from "zustand";

import { documents as documentsData } from "@/constant";

export type Document = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};

type DocumentState = {
  documents: Document[];
  addDocuments: (documents: Document[]) => void;
  addDocument: (document: Document) => void;
  getDocument: (id: string) => Document | undefined;
  getDocuments: () => Document[];
  updateDocument: (
    id: string,
    {
      title,
      content,
    }: {
      title: string;
      content: string;
    },
  ) => void;
  deleteDocument: (document: Document) => void;
};

export const useDocuments = create<DocumentState>((set) => ({
  documents: documentsData,
  addDocuments: (documents) => set({ documents }),
  addDocument: (document) =>
    set((state) => ({ documents: [...state.documents, document] })),
  getDocument: (id): Document | undefined => {
    const documents = useDocuments.getState().documents;

    const document = documents.find((d) => d.id === id);

    return document;
  },
  getDocuments: (): Document[] => useDocuments.getState().documents,
  updateDocument: (id, { title, content }) =>
    set((state) => ({
      documents: state.documents.map((d) =>
        d.id === id ? { ...d, title, content } : d,
      ),
    })),
  deleteDocument: (document) =>
    set((state) => ({
      documents: state.documents.filter((d) => d.id !== document.id),
    })),
}));
