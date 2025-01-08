"use client";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { Button, Img } from "@/components";

interface ResultHealthyProps {
  description: string;
  isLoading: boolean;
  isSubmitting: boolean;
  onSubmitting: () => void;
}

export const ResultHealthy = ({ description, isLoading, isSubmitting, onSubmitting }: ResultHealthyProps) => {
  const router = useRouter();
  return (
    <div className="relative grid px-8 py-16 space-y-8 overflow-hidden border bg-light/20 backdrop-blur rounded-xl place-items-center">
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
            onAnimationComplete={onSubmitting}
          />
          <div className="space-y-4">
            <div className="relative p-8 border-2 h-60 bg-light border-secondary rounded-3xl">
              <div className="absolute px-4 py-1 font-medium bg-secondary rounded-xl -top-4 left-8">
                <h4 className="text-lg">Hasil Perhitungan</h4>
              </div>
              <p className={`leading-relaxed ${description ? "text-dark" : "text-gray-400"}`}>
                {description ? description : "Hitunglah kebutuhan kalori Anda pada Kalkulator Kalori di samping untuk melihat hasil perthitungan!"}
              </p>
            </div>
          </div>

          {description && (
            <>
              <Button
                onClick={() => router.push("/alyysa-zahra/tips")}
                className="w-full font-semibold border-2 rounded-3xl bg-secondary text-light border-light hover:border-secondary hover:tracking-wider"
              >
                Dapatkan Tips
              </Button>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-light">
                  <Img src="/icons/note.svg" alt="note icon" className="w-10 aspect-square" />
                  <h3 className="text-3xl font-semibold">Klik Dapatkan Tips!</h3>
                </div>
                <p className="leading-normal">Untuk mendapatkan tips makanan sehat dan olahraga dalam bentuk jadwal menu makan dan jadwal olahraga.</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
