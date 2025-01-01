import { Poppins } from "next/font/google";

import { Background, Img } from "@/components";

import "../globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} grid grid-cols-1 md:grid-cols-2 overflow-x-hidden`}>
        <Background src="/images/temp-1.webp" alt="login background" className="flex-col justify-between hidden h-full p-12 md:flex bg-gradient-to-b from-transparent to-dark/30">
          <div className="flex items-center gap-4 text-light">
            <Img src="/icons/logo.svg" alt="logo" className="size-14" />
            <span className="text-2xl font-bold">BodyCalc</span>
          </div>
          <div className="p-8 mb-12 space-y-2 rounded-lg bg-light/20">
            <p>&quot;Calories are not just numbers; they are the fuel for your body. Choose nutrient-dense calories that empower your health, not just satisfy your hunger.&quot;</p>
            <p className="font-semibold">Dr. Marion Nestle, Nutrition Expert and Author</p>
          </div>
        </Background>
        <div className="p-8 lg:p-16 bg-primary">{children}</div>
      </body>
    </html>
  );
}
