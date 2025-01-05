"use client";

import * as React from "react";

import { useForm } from "@/hooks";

import { DatePicker } from "./date-picker";

import { Button, Img, Input } from "@/components";

import { BmiRequest } from "@/types";

const initValue: BmiRequest = { dateOfBirth: "", gender: null, height: "", weight: "" };

export const BmiForm = () => {
  const [formData, handleFormData] = useForm<BmiRequest>(initValue);
  const [gender, setGender] = React.useState<BmiRequest["gender"]>(null);
  const [dateOfBirth, setDateOfBirth] = React.useState<BmiRequest["dateOfBirth"]>("");

  const handleDateChange = (date: { year: string; month: string; day: string }) => {
    setDateOfBirth(`${date.year}-${date.month}-${date.day}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("🚀 ~ BmiForm ~ formData:", formData);
    console.log("🚀 ~ BmiForm ~ gender:", gender);
    console.log("🚀 ~ BmiForm ~ dateOfBirth:", dateOfBirth);
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
        <DatePicker onDateChange={handleDateChange} />
        <Input label="Berat Badan" type="number" id="weight" placeholder="Kg" value={formData.weight} onChange={handleFormData} theme="light" />
        <Input label="Tinggi Badan" type="number" id="height" placeholder="Cm" value={formData.height} onChange={handleFormData} theme="light" />
        <div className="space-y-4">
          <Button type="submit" className="w-full rounded-lg bg-secondary text-light">
            Daftar
          </Button>
        </div>
      </form>
    </div>
  );
};
