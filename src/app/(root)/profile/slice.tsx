"use client";

import { Button, Img, Input } from "@/components";

export const Slice = () => {
  return (
    <form className="relative w-full p-4 space-y-6 overflow-hidden border lg:p-14 bg-light/20 backdrop-blur rounded-xl">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
        <Input label="Nama Depan" type="text" id="firstName" placeholder="John" value={"john"} onChange={(e: React.ChangeEvent) => console.log(e)} theme="light" />
        <Input label="Nama Belakang" type="text" id="lastName" placeholder="Doe" value={"doe"} onChange={(e: React.ChangeEvent) => console.log(e)} theme="light" />
        <Button type="button" className={`flex items-center justify-center gap-2 border rounded-lg border-secondary ${"male" === "male" ? "bg-secondary text-light" : "text-gray-400 bg-light"}`}>
          <Img src="/icons/emoji-man.svg" alt="logo man" className="size-6" />
          Laki-laki
        </Button>
        <Button type="button" className={`flex items-center justify-center gap-2 border rounded-lg border-secondary ${"female" === "female" ? "bg-secondary text-light" : "text-gray-400 bg-light"}`}>
          <Img src="/icons/emoji-woman.svg" alt="logo woman" className="size-6" />
          Perempuan
        </Button>
      </div>
      <Input label="Tanggal Lahir" type="date" id="dateOfBirth" placeholder="2001-09-05" value={"date"} onChange={(e: React.ChangeEvent) => console.log(e)} theme="light" />
      <Input label="Email" type="email" id="email" placeholder="johndoe@gmail.com" value={"email"} onChange={(e: React.ChangeEvent) => console.log(e)} theme="light" />
      <Button type="submit" className="w-full font-semibold rounded-3xl bg-secondary text-light hover:bg-secondary/90 hover:tracking-wider">
        Simpan
      </Button>
    </form>
  );
};
