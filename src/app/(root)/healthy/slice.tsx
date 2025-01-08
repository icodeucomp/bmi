"use client";

import { Input } from "@/components";

export const Slice = () => {
  return (
    <form className="relative flex flex-col justify-center w-full p-4 space-y-6 border lg:p-8 bg-light/20 backdrop-blur rounded-xl">
      <div className="space-y-2">
        <span className="font-semibold text-gray-200">Umur</span>
        <p className="text-2xl font-bold text-light">19 Tahun 6 Bulan 24 Hari</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
        <Input label="Berat Badan (Kg)" type="text" id="weight" placeholder="Kg" value={"70"} onChange={(e: React.ChangeEvent) => console.log(e)} theme="light" />
        <Input label="Tinggi Badan (Cm)" type="text" id="height" placeholder="Cm" value={"170"} onChange={(e: React.ChangeEvent) => console.log(e)} theme="light" />
      </div>
    </form>
  );
};
