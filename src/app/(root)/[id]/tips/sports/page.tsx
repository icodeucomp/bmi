import { NavbarHome } from "@/components/ui/navbar";
import { Background, Container } from "@/components";
import { Sports } from "@/components/ui";

export default function SportsPage() {
  return (
    <Background src="/images/measure-diet.webp" alt="home background" className="justify-between h-full min-h-screen pb-12 bg-dark/40">
      <div className="bg-light">
        <NavbarHome />
      </div>
      <Container>
        <Sports />
      </Container>
    </Background>
  );
}
