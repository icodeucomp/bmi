import { Background, Container } from "@/components";
import { NavbarHome } from "@/components/ui/navbar";
import { HealthyForm } from "@/components/ui";

export default function Home() {
  return (
    <Background src="/images/apples-nuts.webp" alt="home background" className="justify-between h-full min-h-screen pb-12 bg-dark/40">
      <div className="bg-light">
        <NavbarHome />
      </div>
      <Container>
        <div className="space-y-8">
          <h2 className="max-w-screen-md mx-auto mt-16 text-5xl font-bold leading-snug tracking-wide text-center text-light">Hitunglah Kebutuhan Kalori Anda Terlebih Dahulu!</h2>
          <HealthyForm />
        </div>
      </Container>
    </Background>
  );
}
