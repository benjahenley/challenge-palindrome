import Navbar from "../Navbar";
import { useModal } from "../hooks/useModal";
import { SidebarModal } from "../modals/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toggle, isOpen, close } = useModal();

  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-100 text-gray-800 dark:bg-slate-800 dark:text-slate-100 px-4 md:px-10">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-4xl">
        <div className="w-full">
          <Navbar toggleSidebar={() => toggle("sidebar")} />
        </div>
        <SidebarModal
          isOpen={isOpen("sidebar")}
          onClose={() => close("sidebar")}
        />
        {children}
      </div>
    </div>
  );
}
