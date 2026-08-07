"use client";

import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [isLeftLoaded, setIsLeftLoaded] = useState(false);
  const [isTextLoaded, setIsTextLoaded] = useState(false);
  const [isProfilLoaded, setIsProfilLoaded] = useState(false);
  const [isProfilColored, setIsProfilColored] = useState(false);

  return (
    <section id="about" className="pt-16 md:pt-28 pb-0 md:pb-0 bg-white relative w-full overflow-hidden">
      <div className="w-full">
        
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[680px] gap-8 items-stretch justify-between px-4 md:px-0">
          
          {/* Kolom Kiri: Gambar Lantai */}
          <div className="h-[400px] md:h-full w-full md:w-auto flex-shrink-0 relative overflow-hidden bg-stone-100">
            <Image
              src="/hues-left.webp"
              alt="Sthana interior editorial view"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-full md:w-auto h-full object-cover md:object-left rounded-none transition-all duration-700 ease-in-out ${
                isLeftLoaded ? "blur-0 scale-100" : "blur-xl scale-105"
              }`}
              onLoad={() => setIsLeftLoaded(true)}
              priority
            />
          </div>

          {/* Kolom Tengah: Teks Filosofi */}
          <div className="flex-1 flex flex-col justify-end h-full relative z-10 py-4 md:py-6">
            
            {/* KUNCI MOBILE 1: Penambahan mx-auto agar bounding box gambar berada di tengah (jika layar > 450px tapi masih mode mobile) */}
            <div className="relative md:absolute top-0 md:top-[-4rem] left-0 md:left-[-37.2%] w-full md:w-[160%] max-w-[450px] md:max-w-[700px] mx-auto md:mx-0 pointer-events-none select-none z-0 mb-6 md:mb-0">
              <Image
                src="/hues-text.webp"
                alt="Hues & Views"
                width={957}
                height={751}
                className={`w-full h-auto object-contain rounded-none transition-all duration-700 ease-in-out ${
                  isTextLoaded ? "blur-0 scale-100" : "blur-xl scale-105"
                }`}
                onLoad={() => setIsTextLoaded(true)}
                priority
              />
            </div>

            {/* KUNCI MOBILE 2 & DESKTOP:
                - max-w-[450px] dan mx-auto menyamakan ukuran kotak paragraf dengan kotak gambar HUES di mode mobile.
                - md:mr-[6%] lg:mr-[10%] menarik sisi kanan paragraf di desktop agar sejajar HUES. 
            */}
            <div className="relative z-10 flex flex-col w-full max-w-[450px] md:max-w-[380px] mx-auto md:mx-0 md:ml-auto pt-0 md:pt-0 mt-auto mb-0 md:mr-[8%] lg:mr-[12%]">
              <span className="text-xl font-bold tracking-[0.1em] text-neutral-900 uppercase font-sans mb-4 text-right w-full">
                [STHANA]
              </span>
              {/* KUNCI MOBILE 3: Menggunakan text-justify murni agar teks menyentuh sisi kiri dan kanan secara merata */}
              <p className="text-neutral-700 font-light text-sm md:text-base leading-relaxed text-justify font-sans m-0 p-0">
                Memaknai desain sebagai perpaduan antara rasa dan fungsi. Berlandaskan filosofi through hues and views, kami menerjemahkan warna, pencahayaan, tekstur, dan sudut pandang menjadi ruang yang menghadirkan keindahan sekaligus mendukung aktivitas penggunanya secara optimal.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Foto Profil Nabila */}
          <div className="h-[400px] md:h-full w-full md:w-auto flex-shrink-0 relative flex justify-end mt-8 md:mt-0 overflow-hidden bg-stone-100">
            <a
              href="https://www.instagram.com/nblakusuma/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto h-full block"
            >
              <Image
                src="/new-profil.webp"
                alt="Nabila Pramesti Kusuma"
                width={0}
                height={0}
                sizes="100vw"
                className={`w-full md:w-auto h-full object-cover md:object-right rounded-none grayscale hover:grayscale-0 cursor-pointer transition-all duration-1000 ease-in-out ${
                  isProfilColored ? "grayscale-0" : ""
                } ${
                  isProfilLoaded ? "blur-0 scale-100" : "blur-xl scale-105"
                }`}
                onLoad={() => setIsProfilLoaded(true)}
                onClick={() => setIsProfilColored(!isProfilColored)}
                priority
              />
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}