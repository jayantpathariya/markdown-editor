"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import { Header } from "@/components/header";
import { Menu } from "@/components/menu";

import { useDocuments } from "@/hooks/use-documents";
import { useMarkdown } from "@/hooks/use-markdown";
import { useMenu } from "@/hooks/use-menu";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  const params = useParams<{
    documentId: string;
  }>();

  const { getDocument } = useDocuments();
  const { setMarkdown } = useMarkdown();
  const { isOpen } = useMenu();

  useEffect(() => {
    const document = getDocument(params.documentId);
    if (document) {
      if (params.documentId) {
        setMarkdown(document);
      }
    }
  }, [getDocument, params.documentId, setMarkdown]);

  return (
    <div className="font-roboto bg-background h-screen overflow-hidden">
      <div className="flex h-full">
        <Menu />
        <div
          className={cn(
            "flex-1 transition-all duration-200",
            isOpen && "ml-64",
          )}
        >
          <Header />
          <main className="h-full">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
