"use client";

import { Header } from "@/components/header";
import { Menu } from "@/components/menu";

import { useMenu } from "@/hooks/use-menu";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  const { isOpen } = useMenu();

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
