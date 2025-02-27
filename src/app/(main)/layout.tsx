import { Header } from "@/components/header";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="font-roboto bg-background h-screen overflow-hidden">
      <Header />
      <main className="h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
