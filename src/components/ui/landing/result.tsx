"use client";

import { Button, Img } from "@/components";

export const ResultBmi = ({ value }: { value: number }) => {
  const color = value >= 30 ? "text-red-600" : value < 30 && value > 23 ? "text-yellow-600" : value <= 23 && value > 18.5 ? "text-green-600" : "text-gray-600";
  const category = value >= 30 ? "Obesity" : value < 30 && value > 23 ? "Overweight" : value <= 23 && value > 18.5 ? "Ideal" : "Underweight";
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-light">
          <Img src="/icons/note.svg" alt="note icon" className="w-10 aspect-square" />
          <h3 className="text-4xl font-semibold">Klik Selanjutnya!</h3>
        </div>
        <p className="leading-normal">Jika kamu ingin menurunkan berat badan, kamu bisa menggunakan kalkulator kalori untuk menentukan kebutuhan kalori kamu beserta tips nya!</p>
      </div>
      <div className="px-4 py-8 space-y-8 bg-light rounded-3xl">
        <div className="space-y-2 text-center">
          <h4 className="text-5xl font-bold text-secondary">{value}</h4>
          <p className="text-xl font-medium text-dark">Hasil IMT anda termasuk</p>
          <p className={`text-3xl font-bold ${color}`}>{category}</p>
        </div>
        <div className="overflow-x-auto text-dark">
          <table className="min-w-full text-left">
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Underweight (kekurangan bobot)</td>
                <td className="px-4 py-2 border border-gray-300">&lt; 18.5</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Ideal (Normal bobot)</td>
                <td className="px-4 py-2 border border-gray-300">22.9</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Overweight (Kelebihan bobot)</td>
                <td className="px-4 py-2 border border-gray-300">23 - 29.9</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Obesity (Obesitas)</td>
                <td className="px-4 py-2 border border-gray-300">&ge; 30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex gap-4">
          <Button onClick={() => window.location.reload()} className="w-full border-2 rounded-3xl bg-light border-secondary hover:bg-secondary text-secondary hover:text-light">
            Kembali
          </Button>
          <Button className="w-full rounded-3xl bg-secondary text-light hover:tracking-wider">Selanjutnya</Button>
        </div>
      </div>
    </div>
  );
};
