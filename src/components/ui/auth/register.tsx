"use client";

import * as React from "react";

import Link from "next/link";

import { useForm } from "@/hooks";

import { Button, Img, Input } from "@/components";

import { FcGoogle } from "react-icons/fc";

import { registerRequest } from "@/types";

const initValue = { email: "", password: "", firstName: "", lastName: "", gender: null };

export const RegisterForm = () => {
  const [formData, handleFormData] = useForm<registerRequest>(initValue);
  const [gender, setGender] = React.useState<registerRequest["gender"]>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, firstName, lastName, password } = formData;
    const body: registerRequest = { email, password, firstName, lastName, gender };
    console.log(body);
  };

  return (
    <div className="w-full p-4 lg:p-8 bg-light rounded-xl">
      <div className="flex flex-col items-center gap-4 mt-4 text-dark">
        <Img src="/icons/logo.svg" alt="logo" className="size-36" />
        <span className="text-3xl font-bold">Daftar</span>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
          <Input label="Nama Depan" type="text" id="firstName" placeholder="John" value={formData.firstName} onChange={handleFormData} />
          <Input label="Nama Belakang" type="text" id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleFormData} />
          <Button
            type="button"
            onClick={() => setGender("male")}
            className={`flex items-center justify-center gap-2 border rounded-lg border-secondary ${gender === "male" ? "bg-secondary text-light" : "text-gray-400 bg-light"}`}
          >
            <Img src="/icons/emoji-man.svg" alt="logo man" className="size-6" />
            Laki-laki
          </Button>
          <Button
            type="button"
            onClick={() => setGender("female")}
            className={`flex items-center justify-center gap-2 border rounded-lg border-secondary ${gender === "female" ? "bg-secondary text-light" : "text-gray-400 bg-light"}`}
          >
            <Img src="/icons/emoji-woman.svg" alt="logo woman" className="size-6" />
            Perempuan
          </Button>
        </div>
        <Input label="Email" type="email" id="email" placeholder="johndoe@gmail.com" value={formData.email} onChange={handleFormData} />
        <Input label="Password" type="password" id="password" placeholder="******" value={formData.password} onChange={handleFormData} />
        <div className="space-y-4">
          <Button type="submit" className="w-full rounded-3xl bg-secondary text-light">
            Daftar
          </Button>
          <p className="font-semibold text-center">atau</p>
          <Button type="button" className="flex items-center justify-center w-full gap-2 rounded-3xl bg-dark text-light">
            <FcGoogle size={20} />
            Daftar dengan Google
          </Button>
        </div>
      </form>

      <div className="flex items-center justify-center gap-1 mt-8">
        <p className="font-light text-dark">Sudah punya akun?</p>
        <Link href="/login" className="font-semibold text-secondary hover:underline">
          Masuk disini
        </Link>
      </div>
    </div>
  );
};
