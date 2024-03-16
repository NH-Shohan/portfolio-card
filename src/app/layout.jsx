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
        {children}
        <Footer />
      </body>
    </html>
  );
}
