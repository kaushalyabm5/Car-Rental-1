import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Master Car Rental | Luxury Chauffeur & Wedding Fleet Sri Lanka",
  description:
    "Luxury chauffeur-driven car rentals and wedding fleet services across Sri Lanka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={`${poppins.className} font-sans bg-white text-[#0A0A0A] antialiased`}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}