"use client";

import { useRouter } from "next/navigation";

import { Img } from "@/components";

export const Choose = () => {
  const router = useRouter();
  return (
    <div className="mt-20 space-y-12">
      <div className="space-y-8 text-light">
        <h3 className="text-center font-bold text-4xl max-w-screen-md mx-auto">Anda dapat melihat Tips makan sehat dan tips olahraga.</h3>
        <p className="text-center text-lg max-w-screen-lg mx-auto font-medium">
          Pelajari cara menjaga keseimbangan kalori tubuh melalui pola makan sehat dan olahraga teratur. Dapatkan tips praktis untuk memenuhi kebutuhan energi harian Anda dan mendukung gaya hidup yang
          lebih sehat!
        </p>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="bg-light/20 backdrop-blur rounded-3xl p-8">
          <div className="bg-light p-6 rounded-3xl space-y-2 cursor-pointer" onClick={() => router.push("/alyysa-zahra/tips/healthy-food")}>
            <Img src="/images/diet-animation.webp" alt="diet animation" className="aspect-square w-52" />
            <h5 className="text-dark font-semibold text-lg text-center">Tips Makanan Sehat</h5>
          </div>
        </div>
        <div className="bg-light/20 backdrop-blur rounded-3xl p-8">
          <div className="bg-light p-6 rounded-3xl space-y-2 cursor-pointer" onClick={() => router.push("/alyysa-zahra/tips/sports")}>
            <Img src="/images/treadmill-animation.webp" alt="diet animation" className="aspect-square w-52" />
            <h5 className="text-dark font-semibold text-lg text-center">Tips Olahraga</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
