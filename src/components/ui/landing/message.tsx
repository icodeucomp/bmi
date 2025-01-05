import { Button, Img } from "@/components";

export const Message = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Img src="/images/bicycle.webp" alt="bicycle race" className="aspect-square w-36 rounded-3xl border-4" cover />
        <Img src="/images/vegetable.webp" alt="vegetable" className="aspect-square w-36 rounded-full border-4" cover />
        <Img src="/images/bicycle.webp" alt="evening run" className="aspect-square w-36 rounded-3xl border-4" cover />
        <Img src="/images/cooking.webp" alt="cooking time" className="aspect-square w-36 rounded-full border-4" cover />
      </div>
      <div className="space-y-2 text-light">
        <h2 className="text-6xl font-bold leading-tight">Langkah Pertama menuju Kesehatan Optimal!</h2>
        <p className="font-semibold">Temukan beberapa tips untuk menentukan kebutuhan kalori Anda!</p>
      </div>
      <div className="flex gap-4">
        <Button className="rounded-3xl border-2 flex items-center gap-2 hover:tracking-wide hover:border-secondary font-medium bg-secondary">
          <Img src="/icons/food-grains.svg" alt="food grains icons" className="aspect-square w-6" cover />
          Makanan Sehat
        </Button>
        <Button className="rounded-3xl border-2 flex items-center gap-2 hover:tracking-wide hover:border-primary font-medium bg-primary">
          <Img src="/icons/sports-mode.svg" alt="sports mode icons" className="aspect-square w-6" cover />
          Olahraga
        </Button>
      </div>
    </div>
  );
};
