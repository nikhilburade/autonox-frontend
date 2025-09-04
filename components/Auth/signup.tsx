"use client";

import Link from "next/link";
import { useState } from "react";
import AuthLayout from "./authlayout";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  return (
    <AuthLayout
      title="Create an Account 🚀"
      footer={
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      }
    >
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-700 dark:bg-black dark:text-gray-200"
        />
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
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>
    </AuthLayout>
  );
};

export default Signup;
