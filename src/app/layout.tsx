import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Sthana | Studio Desain Interior",
  description: "Memaknai desain sebagai perpaduan antara rasa dan fungsi. Berlandaskan filosofi through hues and views, kami menerjemahkan warna, pencahayaan, tekstur, dan sudut pandang menjadi ruang yang menghadirkan keindahan sekaligus mendukung aktivitas penggunanya secara optimal.",
  keywords: ["desain interior", "interior studio", "sthana", "desain rumah", "dekorasi rumah", "jakarta interior designer", "Nabila Pramesti Kusuma"],
  authors: [{ name: "Nabila Pramesti Kusuma, M.Ds." }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="h-full scroll-smooth antialiased"
    >
      <body className="bg-brand-bg text-brand-text min-h-full flex flex-col font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

