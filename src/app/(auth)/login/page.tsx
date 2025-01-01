import { Metadata } from "next";

import { LoginForm } from "@/components/ui";

export const metadata: Metadata = {
  title: "Login",
  description: "Login form for bmi",
};

export default function LoginPage() {
  return <LoginForm />;
}
