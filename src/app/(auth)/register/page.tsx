import { Metadata } from "next";

import { RegisterForm } from "@/components/ui";

export const metadata: Metadata = {
  title: "Register",
  description: "Register form for bmi",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
