import { Metadata } from "next";
import { BmiForm } from "@/components/ui";

export const metadata: Metadata = {
  title: "Landing",
  description: "Landing page for bmi",
};

export default function LandingPage() {
  return <BmiForm />;
}
