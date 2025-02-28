import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Document = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};

type DocumentState = {
  documents: Document[];
  addDocuments: (documents: Document[]) => void;
  addDocument: () => string;
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
  deleteDocument: (id: string) => void;
};

export const useDocuments = create<DocumentState>()(
  persist(
    (set, get) => ({
      documents: [],
      addDocuments: (documents) => set({ documents }),
      addDocument: () => {
        const document = {
          id: crypto.randomUUID(),
          title: "untitled",
          content: "",
          createdAt: new Date(),
        };
        set((state) => ({
          documents: [...state.documents, document],
        }));

        return document.id;
      },
      getDocument: (id): Document | undefined => {
        const documents = get().documents;

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

      deleteDocument: (id: string) => {
        const document = {
          id: crypto.randomUUID(),
          title: "untitled",
          content: "",
          createdAt: new Date(),
        };
        if (get().documents.length === 1) {
          set({ documents: [document] });
        }

        set((state) => ({
          documents: state.documents.filter((d) => d.id !== id),
        }));
      },
    }),
    {
      name: "documents-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
