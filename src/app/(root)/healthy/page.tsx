import { Background, Container } from "@/components";
import { NavbarHome } from "@/components/ui/navbar";

export default function HealthyPage() {
  return (
    <Background src="/images/cooking.webp" alt="home background" className="justify-between h-full min-h-screen pb-12 bg-dark/40">
      <div className="bg-light">
        <NavbarHome />
      </div>
      <Container>
        <div>test</div>
      </Container>
    </Background>
  );
}
