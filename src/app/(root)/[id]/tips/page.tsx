import { NavbarHome } from "@/components/ui/navbar";
import { Background, Container } from "@/components";
import { Choose } from "@/components/ui";

export default function TipsPage() {
  return (
    <Background src="/images/measure-diet.webp" alt="home background" className="justify-between h-full min-h-screen pb-12 bg-dark/40">
      <div className="bg-light">
        <NavbarHome />
      </div>
      <Container>
        <Choose />
      </Container>
    </Background>
  );
}
