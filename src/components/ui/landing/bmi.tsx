"use client";

import * as React from "react";

import { useForm } from "@/hooks";

import { motion } from "framer-motion";

import { Button, Img, Input } from "@/components";
import { ResultBmi } from "./result";

import { BmiRequest } from "@/types";

const initValue: BmiRequest = { dateOfBirth: "", gender: null, height: "", weight: "" };

export const BmiForm = () => {
  const [formData, handleFormData] = useForm<BmiRequest>(initValue);
  const [gender, setGender] = React.useState<BmiRequest["gender"]>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const [isResult, setIsResult] = React.useState<boolean>(false);
  const [imtCalcResult, setImtCalcResult] = React.useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitting(true);
      setIsLoading(false);
    }, 1000);
    const { dateOfBirth, height, weight } = formData;
    if (dateOfBirth === "" || height === "" || weight === "" || gender === null) {
      return;
    }
    setTimeout(() => {
      const imtCalc = +weight / (+height / 100) ** 2;
      setImtCalcResult(+imtCalc.toFixed(2));
      setIsResult(true);
    }, 2000);
  };

  return (
    <div className="relative w-full p-4 overflow-hidden border lg:p-14 bg-light/20 backdrop-blur rounded-xl">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <motion.div
            className={`absolute inset-0 bg-secondary z-10 ${isSubmitting ? "block" : "hidden"}`}
            initial={{ borderRadius: "50%", scale: 0 }}
            animate={isSubmitting ? { borderRadius: "0%", scale: 20 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={() => setIsSubmitting(false)}
          />
          {isResult && !isLoading ? (
            <ResultBmi value={imtCalcResult} />
          ) : (
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
          )}
        </>
      )}
    </div>
  );
};
