"use client";

import { FormEvent } from "react";

import Link from "next/link";

import { useForm } from "@/hooks";

import { Button, Img, Input } from "@/components";

import { FcGoogle } from "react-icons/fc";

import { loginRequest } from "@/types";

const initValue = { email: "", password: "" };

export const LoginForm = () => {
  const [formData, handleFormData] = useForm<loginRequest>(initValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-8 bg-light rounded-xl w-full">
      <div className="flex flex-col items-center gap-4 mt-4 text-dark">
        <Img src="/icons/logo.svg" alt="logo" className="size-36" />
        <span className="text-3xl font-bold">Daftar</span>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Input label="Email" type="email" id="email" placeholder="johndoe@gmail.com" value={formData.email} onChange={handleFormData} />
        <Input label="Password" type="password" id="password" placeholder="******" value={formData.password} onChange={handleFormData} />
        <div className="space-y-4">
          <Button type="submit" className="w-full rounded-lg bg-secondary text-light">
            Daftar
          </Button>
          <p className="font-semibold text-center">atau</p>
          <Button type="button" className="flex items-center justify-center w-full gap-2 rounded-lg bg-dark text-light">
            <FcGoogle size={20} />
            Daftar dengan Google
          </Button>
        </div>
      </form>

      <div className="flex items-center justify-center gap-1 mt-8">
        <p className="font-light text-dark">Belum punya akun?</p>
        <Link href="/register" className="font-semibold text-secondary hover:underline">
          Daftar disini
        </Link>
      </div>
    </div>
  );
};
