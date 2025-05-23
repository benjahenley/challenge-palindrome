"use client";

import { useTheme } from "next-themes";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <div className="relative rounded-full  focus:outline-red group h-10 w-10">
      <button
        className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
        onClick={handleThemeChange}>
        {resolvedTheme === "dark" ? (
          <IoIosSunny className=" h-8 w-8" />
        ) : (
          <IoIosMoon className=" h-8 w-8" />
        )}
      </button>
    </div>
  );
}
