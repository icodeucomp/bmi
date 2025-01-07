import { Poppins } from "next/font/google";

import { Message, NavbarLanding } from "@/components/ui";

import { Background, Container } from "@/components";

import "../globals.css";

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
        <Background src="/images/jogging.webp" alt="landing background" className="justify-between h-full min-h-screen bg-dark/40">
          <Container>
            <NavbarLanding />
            <div className="grid grid-cols-2 gap-8 mt-20">
              <Message />
              {children}
            </div>
          </Container>
        </Background>
      </body>
    </html>
  );
}
