import { BmiForm, Message, Navbar } from "@/components/ui";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 gap-8">
        <Message />
        <BmiForm />
      </div>
    </>
  );
}
