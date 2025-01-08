import { HealthyForm } from "@/components/ui";

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="max-w-screen-md mx-auto mt-16 text-5xl font-bold leading-snug tracking-wide text-center text-light">Hitunglah Kebutuhan Kalori Anda Terlebih Dahulu!</h2>
      <HealthyForm />
    </div>
  );
}
