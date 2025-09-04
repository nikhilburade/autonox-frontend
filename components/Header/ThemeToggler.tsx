"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-3 rounded-full transition duration-300 
                 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 
                 dark:hover:from-indigo-400 dark:hover:to-purple-500 
                 group"
    >
      {/* Light mode → Moon icon */}
      <Image
        src="/images/icon/icon-moon.svg"
        alt="moon icon"
        width={21}
        height={21}
        className="dark:hidden transition-colors duration-300 group-hover:invert group-hover:brightness-0 group-hover:filter"
      />

      {/* Dark mode → Sun icon */}
      <Image
        src="/images/icon/icon-sun.svg"
        alt="sun icon"
        width={22}
        height={22}
        className="hidden dark:block transition-colors duration-300 group-hover:invert group-hover:brightness-0 group-hover:filter"
      />
    </button>
  );
};

export default ThemeToggler;
