import Signup from "@/components/Auth/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - Solid SaaS Boilerplate",
  description: "This is Sign Up page for Startup Pro"
};

export default function SignupPage() {
  return <Signup />;
}

