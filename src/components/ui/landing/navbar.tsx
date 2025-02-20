"use client";

import { useRouter } from "next/navigation";

import { Button, Img } from "@/components";

export const NavbarLanding = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4 text-light">
        <Img src="/icons/logo.svg" alt="logo" className="size-14" />
        <span className="text-2xl font-bold">BodyCalc</span>
      </div>
      <div className="flex gap-4">
        <Button onClick={() => router.push("/login")} className="font-medium border-2 rounded-lg border-light hover:bg-light hover:text-dark hover:tracking-wide">
          Masuk
        </Button>
        <Button onClick={() => router.push("/register")} className="font-medium border-2 rounded-lg bg-primary border-light hover:border-primary hover:tracking-wide">
          Daftar
        </Button>
      </div>
    </div>
  );
};
