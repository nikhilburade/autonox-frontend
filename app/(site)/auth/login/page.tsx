import Login from "@/components/Auth/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexora - AI personalized growth and automation",
  description: "Login page for Nexora",
};

export default function LoginPage() {
  return <Login />;
}
