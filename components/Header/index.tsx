"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathUrl = usePathname();

  // Scroll hide/reappear logic
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white shadow-sm 
                  transition-transform duration-300 dark:bg-black 
                  ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="header-padding flex items-center justify-between">
        {/* Left side (logo + menu + hamburger on mobile) */}
        <div className="flex items-center gap-8">
          {/* Mobile Hamburger */}
          <button
            aria-label="Menu"
            className="lg:hidden flex flex-col gap-1.5"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="h-0.5 w-6 bg-black dark:bg-white"></span>
            <span className="h-0.5 w-6 bg-black dark:bg-white"></span>
            <span className="h-0.5 w-6 bg-black dark:bg-white"></span>
          </button>

          {/* Logo (with controllable size) */}
          <Link href="/" className="block">
              {/* Dark mode logo */}
              <Image
                src="/images/brand/brand-08.svg"
                alt="logo"
                width={50}
                height={30}
                className="hidden dark:block"
              />

              {/* Light mode logo */}
              <Image
                src="/images/logo/2.png"
                alt="logo"
                width={50}
                height={30}
                priority
                className="dark:hidden"
              />
            </Link>

        {/* Desktop Menu */}
        <nav className={`${navigationOpen ? "is-open" : ""} hidden lg:block`}>
          <ul className="flex items-center gap-8 text-[17px]">
            {menuData
              .filter((menuItem) => !menuItem.submenu)
              .map((menuItem) => (
                <li key={menuItem.id}>
                  <Link
                    href={menuItem.path || "#"}
                    className={`relative block transition-all duration-200 
                        text-black dark:text-white 
                        hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent
                        ${pathUrl === menuItem.path ? "font-semibold" : ""}`}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Desktop buttons + toggler */}
        <div className="hidden lg:flex items-center gap-6">
          <ThemeToggler />
          <Link
            href="/auth/login"
            className="btn-secondary text-[15px] px-6 py-2.5"
          >
            Log in
          </Link>
          <Link
            href="/auth/signup"
            className="btn-primary text-[15px] px-6 py-2.5"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="scale-90">
            <ThemeToggler />
          </div>
          <Link
            href="/auth/signup"
            className="btn-primary text-xs px-3 py-1.5"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>

      {/* Mobile Menu */ }
  {
    navigationOpen && (
      <div className="lg:hidden animate-slide-down bg-white dark:bg-black px-6 py-4 shadow-md">
        <ul className="flex flex-col gap-4 text-[17px]">
          {menuData
            .filter((menuItem) => !menuItem.submenu)
            .map((menuItem) => (
              <li key={menuItem.id}>
                <Link
                  href={menuItem.path || "#"}
                  onClick={() => setNavigationOpen(false)}
                  className={`block transition-colors hover:text-primary ${pathUrl === menuItem.path
                    ? "text-primary font-medium"
                    : "text-black dark:text-white"
                    }`}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          <li>
            <Link
              href="/auth/login"
              onClick={() => setNavigationOpen(false)}
              className="block transition-colors hover:text-primary text-black dark:text-white"
            >
              Log in
            </Link>
          </li>
        </ul>
      </div>
    )
  }
    </header >
  );
};

export default Header;
