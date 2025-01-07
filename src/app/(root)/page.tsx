import { HealthyForm, ResultHealthy } from "@/components/ui";

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-light max-w-screen-md tracking-wide leading-snug mx-auto text-center mt-16">Hitunglah Kebutuhan Kalori Anda Terlebih Dahulu!</h2>
      <div className="grid grid-cols-2 gap-8">
        <HealthyForm />
        <ResultHealthy />
      </div>
    </div>
  );
}
