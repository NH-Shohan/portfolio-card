import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nahim Hossain Shohan",
  description: "Nahim Hossain Shohan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black text-text ${inter.className}`}>
        <div className="h-[150px] w-[150px] bg-[#69696980] rounded-full absolute top-36 left-5 blur-3xl -z-10"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
