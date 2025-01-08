import { Background, Container, Img } from "@/components";
import { NavbarHome } from "@/components/ui/navbar";
import { Slice } from "./slice";

export default function HealthyPage() {
  return (
    <Background src="/images/cooking.webp" alt="home background" className="justify-between h-full min-h-screen pb-12 bg-dark/40">
      <div className="bg-light">
        <NavbarHome />
      </div>
      <Container className="mt-20">
        <div className="grid grid-cols-2 gap-8">
          <Img src="/icons/logo.svg" alt="logo apps" className="mx-auto aspect-square w-72" />

          <Slice />
        </div>
      </Container>
    </Background>
  );
}
