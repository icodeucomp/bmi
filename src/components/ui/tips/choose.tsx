"use client";

import { useRouter } from "next/navigation";

import { Img } from "@/components";

export const Choose = () => {
  const router = useRouter();
  return (
    <div className="mt-20 space-y-12">
      <div className="space-y-8 text-light">
        <h3 className="max-w-screen-md mx-auto text-4xl font-bold text-center">Anda dapat melihat Tips makan sehat dan tips olahraga.</h3>
        <p className="max-w-screen-lg mx-auto text-lg font-medium text-center">
          Pelajari cara menjaga keseimbangan kalori tubuh melalui pola makan sehat dan olahraga teratur. Dapatkan tips praktis untuk memenuhi kebutuhan energi harian Anda dan mendukung gaya hidup yang
          lebih sehat!
        </p>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="p-8 bg-light/20 backdrop-blur rounded-3xl hover:bg-secondary hover:backdrop-blur-none">
          <div className="p-6 space-y-2 cursor-pointer bg-light rounded-3xl" onClick={() => router.push("/alyysa-zahra/tips/healthy-food")}>
            <Img src="/images/diet-animation.webp" alt="diet animation" className="aspect-square w-52" />
            <h5 className="text-lg font-semibold text-center text-dark">Tips Makanan Sehat</h5>
          </div>
        </div>
        <div className="p-8 bg-light/20 backdrop-blur rounded-3xl hover:bg-secondary hover:backdrop-blur-none">
          <div className="p-6 space-y-2 cursor-pointer bg-light rounded-3xl" onClick={() => router.push("/alyysa-zahra/tips/sports")}>
            <Img src="/images/treadmill-animation.webp" alt="diet animation" className="aspect-square w-52" />
            <h5 className="text-lg font-semibold text-center text-dark">Tips Olahraga</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
