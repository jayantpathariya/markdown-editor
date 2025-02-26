import { Header } from "@/components/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="font-roboto">
      <Header />
      {children}
    </div>
  );
};
export default MainLayout;
