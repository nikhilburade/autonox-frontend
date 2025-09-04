"use client";

import Link from "next/link";
import { useState } from "react";
import AuthLayout from "./authlayout";

const Login = () => {
  const [loading, setLoading] = useState(false);

  return (
    <AuthLayout
      title="Welcome Back 👋"
      footer={
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      }
    >
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-700 dark:bg-black dark:text-gray-200"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-700 dark:bg-black dark:text-gray-200"
        />
        <button type="submit" className="btn-primary w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
