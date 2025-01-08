"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button, Container, Img } from "@/components";

export const NavbarHome = () => {
  const router = useRouter();

  const pathname = usePathname();
  return (
    <Container className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4 text-light">
        <Img src="/icons/logo.svg" alt="logo" className="size-14" />
        <span className="text-2xl font-bold">BodyCalc</span>
      </div>
      <div className="flex items-center gap-4 bg-gray-200 rounded-3xl">
        <Button
          onClick={() => router.push("/")}
          className={`font-semibold rounded-3xl ${pathname === "/" || pathname.includes("tips") ? "bg-primary text-light hover:bg-primary/80" : "bg-transparent text-dark"}`}
        >
          Beranda
        </Button>
        <Button onClick={() => router.push("/healthy")} className={`font-semibold rounded-3xl ${pathname === "/healthy" ? "bg-primary text-light hover:bg-primary/80" : "bg-transparent text-dark"}`}>
          Kesehatan Saya
        </Button>
        <Button onClick={() => router.push("/profile")} className={`font-semibold rounded-3xl ${pathname === "/profile" ? "bg-primary text-light hover:bg-primary/80" : "bg-transparent text-dark"}`}>
          Profil
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-semibold rounded-lg text-dark">Alyysa Zahra</span>
        <Button onClick={() => router.push("/login")} className="font-medium bg-red-600 border-2 rounded-lg border-light hover:bg-red-700">
          Keluar
        </Button>
      </div>
    </Container>
  );
};
