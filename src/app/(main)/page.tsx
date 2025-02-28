"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

import { useDocuments } from "@/hooks/use-documents";

export default function Home() {
  const { documents, addDocument } = useDocuments();

  useEffect(() => {
    if (documents.length === 0) {
      const id = addDocument();
      redirect(id);
    } else {
      redirect(documents[0].id);
    }
  }, [documents.length, addDocument, documents]);

  return null;
}
