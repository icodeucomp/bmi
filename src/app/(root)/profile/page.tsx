import { Background, Container, Img } from "@/components";
import { NavbarHome } from "@/components/ui/navbar";
import { Slice } from "./slice";

export default function ProfilePage() {
  return (
    <Background src="/images/diet-food.webp" alt="home background" className="justify-between h-full min-h-screen pb-12 bg-dark/40">
      <div className="bg-light">
        <NavbarHome />
      </div>
      <Container className="mt-20">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center gap-4">
            <Img src="/icons/logo.svg" alt="logo apps" className="aspect-square w-72" />
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Allysa Zahra</h1>
              <p className="font-light text-gray-300">jarjaraa30@gmail.com</p>
              <p className="text-sm font-bold">Perempuan</p>
            </div>
          </div>
          <Slice />
        </div>
      </Container>
    </Background>
  );
}
