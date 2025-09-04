"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  children: ReactNode;   
  footer?: ReactNode; 
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children, footer }) => {
  const router = useRouter();

  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute left-4 top-4 flex items-center gap-2 text-gray-600 hover:text-primary dark:text-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <span className="text-sm">Back</span>
      </button>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-blacksection">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>

        {children}

        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </section>
  );
};

export default AuthLayout;
