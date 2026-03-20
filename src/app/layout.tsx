import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "ArogyaSetu — India's Unified Government Healthcare Portal",
  description: "Official Government of India Healthcare Portal — Ministry of Health & Family Welfare",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Navbar />
        <BackButton />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
