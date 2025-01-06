"use client";

import * as React from "react";

import { useForm } from "@/hooks";

import { Button, Img, Input } from "@/components";

import { BmiRequest } from "@/types";
import { Result } from "./result";
import { motion } from "framer-motion";

const initValue: BmiRequest = { dateOfBirth: "", gender: null, height: "", weight: "" };

export const BmiForm = () => {
  const [formData, handleFormData] = useForm<BmiRequest>(initValue);
  const [gender, setGender] = React.useState<BmiRequest["gender"]>(null);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { dateOfBirth, height, weight } = formData;
    if (dateOfBirth === "" || height === "" || weight === "" || gender === null) {
      return;
    }
    const body = { gender, height, weight, dateOfBirth };
    console.log(body);
  };

  return (
    <div className="relative w-full p-4 border lg:p-14 bg-light/20 backdrop-blur rounded-xl overflow-hidden">
      <motion.div
        className={`absolute inset-0 bg-secondary z-10 ${isSubmitting ? "block" : "hidden"}`}
        initial={{ borderRadius: "50%", scale: 0 }}
        animate={isSubmitting ? { borderRadius: "0%", scale: 20 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={() => setIsSubmitting(false)}
      />
      <form onSubmit={handleSubmit} className="my-4 space-y-6">
        <div className="flex w-full gap-4">
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
        <Input label="Tanggal Lahir" type="date" id="dateOfBirth" placeholder="" value={formData.dateOfBirth} onChange={handleFormData} theme="light" />
        <Input label="Berat Badan" type="number" id="weight" placeholder="Kg" value={formData.weight} onChange={handleFormData} theme="light" />
        <Input label="Tinggi Badan" type="number" id="height" placeholder="Cm" value={formData.height} onChange={handleFormData} theme="light" />
        <Button type="submit" className="w-full rounded-3xl bg-secondary text-light hover:bg-secondary/90 hover:tracking-wider">
          Hitung!
        </Button>
      </form>
      {/* <Result category="Obesity" value={23.1} /> */}
    </div>
  );
};
