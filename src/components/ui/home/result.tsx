"use client";

import { Button, Img } from "@/components";

export const ResultHealthy = () => {
  return (
    <div className="px-8 py-16 space-y-8 overflow-hidden border bg-light/20 backdrop-blur rounded-xl">
      <div className="space-y-4">
        <div className="relative p-8 border-2 bg-light border-secondary rounded-3xl">
          <div className="absolute px-4 py-1 font-medium bg-secondary rounded-xl -top-4 left-8">
            <h4 className="text-lg">Hasil Perhitungan</h4>
          </div>
          <p className="leading-relaxed text-dark">
            Kebutuhan Kalori harian kamu adalah 1.808 kkal/hari. Perhatikan kamu mengalami Obesitas. Jika ingin menurunkan berat badan kamu perlu mengurangi asupan kalori menjadi 1.446 kkal/hari. Jika
            hari ini kamu hanya beristirahat atau tidak banyak bergerak kebutuhan kalorimu menjadi 1.507 kkal/hari
          </p>
        </div>
      </div>
      <Button className="w-full font-semibold border-2 rounded-3xl bg-secondary text-light border-light hover:border-secondary hover:tracking-wider">Dapatkan Tips</Button>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-light">
          <Img src="/icons/note.svg" alt="note icon" className="w-10 aspect-square" />
          <h3 className="text-3xl font-semibold">Klik Dapatkan Tips!</h3>
        </div>
        <p className="leading-normal">Untuk mendapatkan tips makanan sehat dan olahraga dalam bentuk jadwal menu makan dan jadwal olahraga.</p>
      </div>
    </div>
  );
};
