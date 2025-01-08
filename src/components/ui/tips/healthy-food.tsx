"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Button, Motion } from "@/components";

import { IoIosArrowBack } from "react-icons/io";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

type Day = (typeof days)[number];

const foodSchedule: Record<Day, { breakfast: string; lunch: string; dinner: string }> = {
  Monday: {
    breakfast: "Oatmeal with fruits",
    lunch: "Grilled chicken with quinoa",
    dinner: "Salmon with steamed vegetables",
  },
  Tuesday: {
    breakfast: "Smoothie bowl",
    lunch: "Turkey sandwich with avocado",
    dinner: "Vegetable stir-fry with tofu",
  },
  Wednesday: {
    breakfast: "Greek yogurt with granola",
    lunch: "Chicken Caesar salad",
    dinner: "Grilled steak with roasted sweet potatoes",
  },
  Thursday: {
    breakfast: "Egg and avocado toast",
    lunch: "Sushi bowl with brown rice",
    dinner: "Vegetable curry with naan bread",
  },
  Friday: {
    breakfast: "Pancakes with honey and berries",
    lunch: "Grilled salmon salad",
    dinner: "Homemade pizza with fresh toppings",
  },
  Saturday: {
    breakfast: "French toast with maple syrup",
    lunch: "Vegetable pasta",
    dinner: "BBQ chicken with coleslaw",
  },
  Sunday: {
    breakfast: "Scrambled eggs with spinach",
    lunch: "Roast beef with mashed potatoes",
    dinner: "Lentil soup with garlic bread",
  },
};

export const HealthyFood = () => {
  const router = useRouter();

  const [activeDay, setActiveDay] = useState<Day>("Monday");

  const imtValue = localStorage.getItem("imt") || "0";
  const tdEEValue = localStorage.getItem("tdEE") || "0";

  const color = +imtValue >= 30 ? "bg-red-600" : +imtValue < 30 && +imtValue > 23 ? "bg-yellow-600" : +imtValue <= 23 && +imtValue > 18.5 ? "bg-green-600" : "bg-gray-600";

  const category = +imtValue >= 30 ? "Obesity" : +imtValue < 30 && +imtValue > 23 ? "Overweight" : +imtValue <= 23 && +imtValue > 18.5 ? "Ideal" : "Underweight";
  return (
    <div className="mt-20 space-y-8">
      <Motion tag="div" initialY={50} animateY={0} duration={0.8} className="px-6 py-8 bg-light/20 backdrop-blur rounded-3xl">
        <button onClick={() => router.push("/alyysa-zahra/tips")} className="flex items-center gap-2 text-xl font-semibold text-secondary">
          <IoIosArrowBack className="fill-secondary" size={24} />
          Kembali
        </button>
        <p className="mt-4 leading-normal">
          <strong>Konsultasikan dengan ahli gizi:</strong> Setiap individu memiliki kebutuhan nutrisi yang berbeda. Konsultasikan dengan ahli gizi untuk mendapatkan rencana diet yang paling sesuai
          dengan kondisi Anda.
        </p>
        <p className="mt-6 leading-normal">
          <strong>Sesuaikan porsi:</strong> Jumlah porsi yang tertera bisa disesuaikan dengan kebutuhan kalori dan ukuran tubuh Anda.
        </p>
        <div className="flex gap-4 mt-6 font-medium">
          <Button className={`${color} w-full rounded-3xl cursor-default`}>
            {category} &gt; {imtValue}
          </Button>
          <Button className="w-full cursor-default bg-secondary rounded-3xl">Kebutuhan Kalori Anda: {tdEEValue} kkal/hari</Button>
        </div>
      </Motion>
      <Motion tag="div" initialY={50} animateY={0} duration={0.8} delay={0.5} className="px-6 py-8 bg-light/20 backdrop-blur rounded-3xl">
        <h3 className="text-2xl font-semibold text-secondary">Jadwal Makanan Sehat</h3>
        <div className="flex items-center justify-between mt-4 overflow-hidden border-2 border-secondary rounded-xl bg-light">
          {days.map((item, index) => (
            <Button
              key={index}
              onClick={() => setActiveDay(item)}
              className={`font-semibold w-full hover:text-light hover:bg-secondary ${activeDay === item ? "text-light bg-secondary" : "text-dark bg-light"}`}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="p-6 rounded-lg text-light">
          <div className="grid grid-cols-3 gap-8">
            <Motion tag="div" initialY={50} animateY={0} duration={0.4} className="p-4 space-y-2 bg-transparent border-2 rounded-2xl h-44">
              <h4 className="text-lg font-semibold text-secondary">Breakfast</h4>
              <li>{foodSchedule[activeDay].breakfast}</li>
            </Motion>
            <Motion tag="div" initialY={50} animateY={0} duration={0.4} delay={0.2} className="p-4 space-y-2 bg-transparent border-2 rounded-2xl h-44">
              <h4 className="text-lg font-semibold text-secondary">Lunch</h4>
              <li>{foodSchedule[activeDay].lunch}</li>
            </Motion>
            <Motion tag="div" initialY={50} animateY={0} duration={0.4} delay={0.3} className="p-4 space-y-2 bg-transparent border-2 rounded-2xl h-44">
              <h4 className="text-lg font-semibold text-secondary">Dinner</h4>
              <li>{foodSchedule[activeDay].dinner}</li>
            </Motion>
          </div>
        </div>
      </Motion>
    </div>
  );
};
