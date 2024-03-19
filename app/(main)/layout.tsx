import MobileNav from "@/components/shared/nav/MobileNav";
import Sidebar from "@/components/shared/nav/Sidebar";
import { IReadOnlyChildren } from "@/types/types";

const MainLayout: React.FC<IReadOnlyChildren> = ({ children }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default MainLayout;
