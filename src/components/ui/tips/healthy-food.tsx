"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components";
import { IoIosArrowBack } from "react-icons/io";

export const HealthyFood = () => {
  const router = useRouter();
  return (
    <div className="mt-20 space-y-8">
      <div className="bg-light/20 backdrop-blur rounded-3xl py-8 px-4">
        <button onClick={() => router.push("/alyysa-zahra/tips")} className="flex items-center gap-2 text-secondary text-xl font-semibold">
          <IoIosArrowBack className="fill-secondary" size={24} />
          Kembali
        </button>
        <p className="leading-normal mt-4">
          <strong>Konsultasikan dengan ahli gizi:</strong> Setiap individu memiliki kebutuhan nutrisi yang berbeda. Konsultasikan dengan ahli gizi untuk mendapatkan rencana diet yang paling sesuai
          dengan kondisi Anda.
        </p>
        <p className="leading-normal mt-6">
          <strong>Sesuaikan porsi:</strong> Jumlah porsi yang tertera bisa disesuaikan dengan kebutuhan kalori dan ukuran tubuh Anda.
        </p>
        <div className="flex gap-4 font-medium mt-6">
          <Button className="bg-red-600 w-full rounded-3xl">Obesity &gt; 30 </Button>
          <Button className="bg-secondary w-full rounded-3xl">Kebutuhan Kalori Anda: 1446 kkal/hari</Button>
        </div>
      </div>
      <div className="bg-light/20 backdrop-blur rounded-3xl py-8 px-4">
        <h3 className="text-secondary text-2xl font-semibold">Jadwal Makanan Sehat</h3>
        <div className="flex items-center justify-between border-2 border-secondary rounded-xl bg-light overflow-hidden mt-4">
          <Button className="text-dark font-semibold w-full hover:text-light hover:bg-secondary">Senin</Button>
          <Button className="text-dark font-semibold w-full hover:text-light hover:bg-secondary">Selasa</Button>
          <Button className="text-dark font-semibold w-full hover:text-light hover:bg-secondary">Rabu</Button>
          <Button className="text-dark font-semibold w-full hover:text-light hover:bg-secondary">Kamis</Button>
          <Button className="text-dark font-semibold w-full hover:text-light hover:bg-secondary">Jumat</Button>
          <Button className="text-dark font-semibold w-full hover:text-light hover:bg-secondary">Sabtu</Button>
          <Button className="text-dark font-semibold w-full hover:text-light hover:bg-secondary">Minggu</Button>
        </div>
      </div>
    </div>
  );
};
