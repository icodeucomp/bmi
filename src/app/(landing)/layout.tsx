import { Poppins } from "next/font/google";

import "../globals.css";
import { Background, Container } from "@/components";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen overflow-x-hidden`}>
        <Background src="/images/jogging.webp" alt="login background" className="justify-between h-full min-h-screen">
          <Container>{children}</Container>
        </Background>
      </body>
    </html>
  );
}
