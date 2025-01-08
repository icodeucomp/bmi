"use client";

import { useRouter } from "next/navigation";

import { Button, Motion } from "@/components";

import { IoIosArrowBack } from "react-icons/io";

const workoutSchedules = [
  {
    day: "Monday",
    workout: {
      title: "Strength Training (Upper Body)",
      activities: ["Jogging (5-10 minutes)", "Push-Up, Dumbbell Bench Press, Dumbbell Row, Shoulder Press, Bicep Curl, Tricep Dip (3 sets x 10-15 reps)", "Cooldown"],
    },
  },
  {
    day: "Tuesday",
    workout: {
      title: "Cardio and Mobility",
      activities: ["Cycling/Brisk Walking (20-30 minutes)", "Yoga/Pilates (30 minutes)"],
    },
  },
  {
    day: "Wednesday",
    workout: {
      title: "Strength Training (Lower Body)",
      activities: ["Jogging (5-10 minutes)", "Squat, Lunges, Deadlift, Leg Press, Calf Raise (3 sets x 10-15 reps)", "Cooldown"],
    },
  },
  {
    day: "Thursday",
    workout: {
      title: "Active Rest",
      activities: ["Leisurely Walk (30-60 minutes)"],
    },
  },
  {
    day: "Friday",
    workout: {
      title: "Strength Training (Full Body)",
      activities: ["Jogging (5-10 minutes)", "Burpee, Pull-Up, Plank, Kettlebell Swing, Mountain Climber (3 sets x 10-15 reps)", "Cooldown"],
    },
  },
  {
    day: "Saturday",
    workout: {
      title: "Cardio HIIT",
      activities: ["Jogging (5-10 minutes)", "Sprint 30 seconds, Walk 1 minute (5-8 repetitions)", "Cooldown"],
    },
  },
  {
    day: "Sunday",
    workout: {
      title: "Rest and Recovery",
      activities: ["Yoga/Meditation (30-60 minutes)"],
    },
  },
];

export const Sports = () => {
  const router = useRouter();

  const imtValue = localStorage.getItem("imt") || "0";
  const tdEEValue = localStorage.getItem("tdEE") || "0";

  const color = +imtValue >= 30 ? "bg-red-600" : +imtValue < 30 && +imtValue > 23 ? "bg-yellow-600" : +imtValue <= 23 && +imtValue > 18.5 ? "bg-green-600" : "bg-gray-600";

  const category = +imtValue >= 30 ? "Obesity" : +imtValue < 30 && +imtValue > 23 ? "Overweight" : +imtValue <= 23 && +imtValue > 18.5 ? "Ideal" : "Underweight";
  return (
    <div className="mt-20 space-y-8">
      <Motion tag="div" initialY={50} animateY={0} duration={0.4} className="px-6 py-8 bg-light/20 backdrop-blur rounded-3xl">
        <button onClick={() => router.push("/alyysa-zahra/tips")} className="flex items-center gap-2 text-xl font-semibold text-secondary">
          <IoIosArrowBack className="fill-secondary" size={24} />
          Kembali
        </button>
        <h4 className="mt-8 text-3xl font-bold text-center text-light">Tips Olahraga</h4>

        <div className="my-8 space-y-4">
          <p>
            <strong>Konsisten</strong>: Usahakan untuk berolahraga secara teratur setiap minggu.
          </p>
          <p>
            <strong>Variasi</strong>: Variasikan jenis olahraga yang Anda lakukan agar tidak bosan dan merangsang otot dengan cara yang berbeda.
          </p>
          <p>
            <strong>Pemanasan dan pendinginan</strong>: Lakukan pemanasan sebelum berolahraga dan pendinginan setelahnya untuk mencegah cedera.
          </p>
          <p>
            <strong>Dengarkan tubuh</strong>: Jika merasa sakit atau tidak enak badan, istirahatlah.
          </p>
          <p>
            <strong>Hidrasi</strong>: Minum air putih yang cukup sebelum, selama, dan setelah berolahraga.
          </p>
        </div>
        <div className="flex gap-4 font-medium">
          <Button className={`${color} w-full rounded-3xl cursor-default`}>
            {category} &gt; {imtValue}
          </Button>
          <Button className="w-full cursor-default bg-secondary rounded-3xl">Kebutuhan Kalori Anda: {tdEEValue} kkal/hari</Button>
        </div>
      </Motion>
      <Motion tag="div" initialY={50} animateY={0} duration={0.4} delay={0.3} className="px-6 py-8 bg-light/20 backdrop-blur rounded-3xl">
        <p className="leading-normal">
          Untuk mendukung diet dengan kebutuhan kalori {tdEEValue} kkal/hari, berikut jadwal olahraga UMUM seminggu yang dirancang untuk mendukung peningkatan berat badan secara sehat dan seimbang
          dengan asupan kalori. Program ini menekankan latihan kekuatan dan pembentukan otot, yang berfungsi untuk meningkatkan massa otot dan nafsu makan.
        </p>
        <div className="flex gap-4 mt-6 font-medium">
          <Button className={`${color} w-full rounded-3xl cursor-default`}>
            {category} &gt; {imtValue}
          </Button>
          <Button className="w-full cursor-default bg-secondary rounded-3xl">Kebutuhan Kalori Anda: {tdEEValue} kkal/hari</Button>
        </div>
      </Motion>
      <Motion tag="div" initialY={50} animateY={0} duration={0.4} delay={0.3} className="px-6 py-8 bg-light/20 backdrop-blur rounded-3xl">
        <h3 className="text-2xl font-semibold text-secondary">Jadwal Makanan Sehat</h3>
        <div className="p-6 rounded-lg text-light">
          <div className="grid grid-cols-3 gap-8 mt-8">
            {workoutSchedules.map((workoutSchedule, i) => (
              <Motion tag="div" initialY={50} animateY={0} duration={0.5 * i} delay={0.3 * i} key={i} className="relative p-4 pt-6 space-y-2 list-none bg-transparent border-2 rounded-2xl h-60">
                <span className="absolute px-8 py-1 font-semibold -translate-x-1/2 rounded-xl bg-secondary -top-4 left-1/2">{workoutSchedule.day}</span>
                <h4 className="text-lg font-semibold text-secondary">{workoutSchedule.workout.title}</h4>
                {workoutSchedule.workout.activities.map((activity, j) => (
                  <li key={j} className="relative pl-4">
                    <span className="absolute top-0 left-0">•</span>
                    {activity}
                  </li>
                ))}
              </Motion>
            ))}
          </div>
        </div>
      </Motion>
    </div>
  );
};
