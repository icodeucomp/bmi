"use client";

import * as React from "react";

import { useForm } from "@/hooks";

import { ResultHealthy } from "./result";
import { Button, Dropdown, Img, Input } from "@/components";

import { calculateAge, calculateTDEE } from "@/utils";

import { DropdownProps, HealthyRequest } from "@/types";

const initValue: HealthyRequest = { dateOfBirth: "", gender: null, height: "", weight: "", activityLevel: null };

export const HealthyForm = () => {
  const [formData, handleFormData] = useForm<HealthyRequest>(initValue);
  const [gender, setGender] = React.useState<HealthyRequest["gender"]>(null);
  const [activityLevel, setActivityLevel] = React.useState<HealthyRequest["activityLevel"]>(null);
  const [description, setDescription] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const selectDropdownValue: DropdownProps["data"] = [
    { display: "Pilih opsi aktivitas", value: null },
    { display: "Tidak Banyak bergerak", value: "sedentary" },
    { display: "Sedikit Aktif", value: "lightly active" },
    { display: "Cukup Aktif", value: "moderately active" },
    { display: "Sangat Aktif", value: "very active" },
    { display: "Sangat-sangat Aktif", value: "extra active" },
  ];

  const handleFilteredDropdown = (value: "sedentary" | "lightly active" | "moderately active" | "very active" | "extra active" | null) => {
    setActivityLevel(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { dateOfBirth, height, weight } = formData;
    if (dateOfBirth === "" || height === "" || weight === "" || gender === null || activityLevel === null) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitting(true);
      setIsLoading(false);
    }, 1000);
    setTimeout(() => {
      const birthDate = new Date(dateOfBirth);
      const age = calculateAge(birthDate);
      const user = { activityLevel, age, gender, height: +height, weight: +weight };
      const imt = +weight / (+height / 100) ** 2;
      const dailyCalories = calculateTDEE(user);
      localStorage.setItem("tdEE", dailyCalories.toFixed(2).toString());
      localStorage.setItem("imt", imt.toFixed(2).toString());
      setDescription(`Kebutuhan Kalori harian kamu adalah ${Math.ceil(dailyCalories)} kkal/hari.`);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="relative w-full p-4 overflow-hidden border lg:p-14 bg-light/20 backdrop-blur rounded-xl">
        <form onSubmit={handleSubmit} className="my-4 space-y-6">
          <div className="flex w-full gap-4">
            <Button
              type="button"
              onClick={() => setGender("male")}
              className={`flex items-center justify-center gap-2 border rounded-lg border-secondary w-full ${gender === "male" ? "bg-secondary text-light" : "text-gray-400 bg-light"}`}
            >
              <Img src="/icons/emoji-man.svg" alt="logo man" className="min-w-6 size-6" />
              Laki-laki
            </Button>
            <Button
              type="button"
              onClick={() => setGender("female")}
              className={`flex items-center justify-center gap-2 border rounded-lg border-secondary w-full ${gender === "female" ? "bg-secondary text-light" : "text-gray-400 bg-light"}`}
            >
              <Img src="/icons/emoji-woman.svg" alt="logo woman" className="min-w-6 size-6" />
              Perempuan
            </Button>
          </div>
          <Input label="Tanggal Lahir" type="date" id="dateOfBirth" placeholder="" value={formData.dateOfBirth} onChange={handleFormData} theme="light" />
          <div className="flex w-full gap-4">
            <Input label="Berat Badan" type="number" id="weight" placeholder="Kg" value={formData.weight} onChange={handleFormData} theme="light" />
            <Input label="Tinggi Badan" type="number" id="height" placeholder="Cm" value={formData.height} onChange={handleFormData} theme="light" />
          </div>
          <div>
            <label>Pilih tingkat intensitas aktivitas fisik Anda</label>
            <Dropdown className="top-12" parentClassName="w-full" data={selectDropdownValue} handleFiltered={handleFilteredDropdown} selectedValue={activityLevel} />
          </div>

          <Button type="submit" className="w-full rounded-3xl bg-secondary text-light hover:bg-secondary/90 hover:tracking-wider">
            Hitung!
          </Button>
        </form>
      </div>
      <ResultHealthy description={description} isLoading={isLoading} isSubmitting={isSubmitting} onSubmitting={() => setIsSubmitting(false)} />
    </div>
  );
};
