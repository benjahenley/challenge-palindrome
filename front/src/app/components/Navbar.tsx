import ThemeButton from "@/app/components/ui/ThemeButton";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <div className="h-16 flex items-center justify-between gap-2 w-full p-2 max-w-screen-xl shadow-md px-5 md:px-10 mx-auto mt-5 border border-gray-300 dark:border-slate-500 rounded-full">
      <BiMenuAltLeft
        className="cursor-pointer w-10 h-10"
        onClick={toggleSidebar}
      />
      <ThemeButton />
    </div>
  );
}
