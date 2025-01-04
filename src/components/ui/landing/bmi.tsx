"use client";

import * as React from "react";

import { useForm } from "@/hooks";

import { Button, Img, Input } from "@/components";

import { registerRequest } from "@/types";
import DatePicker from "./date-picker";

const initValue = { email: "", password: "", firstName: "", lastName: "", gender: null };

export const BmiForm = () => {
  const [formData, handleFormData] = useForm<registerRequest>(initValue);
  const [gender, setGender] = React.useState<registerRequest["gender"]>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, firstName, lastName, password } = formData;
    const body: registerRequest = { email, password, firstName, lastName, gender };
    console.log(body);
  };

  return (
    <div className="p-4 lg:p-8 bg-light/20 backdrop-blur rounded-xl w-full">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="flex gap-4 w-full">
          <Button
            type="button"
            onClick={() => setGender("male")}
            className={`flex items-center justify-center gap-2 border rounded-lg border-secondary w-full ${gender === "male" ? "bg-secondary text-light" : "text-gray-400 bg-light"}`}
          >
            <Img src="/icons/emoji-man.svg" alt="logo man" className="size-6" />
            Laki-laki
          </Button>
          <Button
            type="button"
            onClick={() => setGender("female")}
            className={`flex items-center justify-center gap-2 border rounded-lg border-secondary w-full ${gender === "female" ? "bg-secondary text-light" : "text-gray-400 bg-light"}`}
          >
            <Img src="/icons/emoji-woman.svg" alt="logo woman" className="size-6" />
            Perempuan
          </Button>
        </div>
        <DatePicker />
        <Input label="Berat Badan" type="text" id="weight" placeholder="Kg" value={formData.email} onChange={handleFormData} theme="light" />
        <Input label="Tinggi Badan" type="text" id="height" placeholder="Cm" value={formData.password} onChange={handleFormData} theme="light" />
        <div className="space-y-4">
          <Button type="submit" className="w-full rounded-lg bg-secondary text-light">
            Daftar
          </Button>
        </div>
      </form>
    </div>
  );
};
