"use client";

import { useState } from "react";
import Image from "next/image";

export default function About() {
  // Tambahkan state untuk melacak status loading masing-masing gambar
  const [isLeftLoaded, setIsLeftLoaded] = useState(false);
  const [isTextLoaded, setIsTextLoaded] = useState(false);
  const [isProfilLoaded, setIsProfilLoaded] = useState(false);

  return (
    <section id="about" className="pt-16 md:pt-28 pb-0 md:pb-0 bg-white relative w-full overflow-hidden">
      <div className="w-full">
        
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[680px] gap-8 items-stretch justify-between px-4 md:px-0">
          
          {/* Kolom Kiri: Gambar Lantai */}
          <div className="h-[400px] md:h-full w-auto flex-shrink-0 relative overflow-hidden bg-stone-100">
            <Image
              src="/hues-left.webp"
              alt="Sthana interior editorial view"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: '100%' }} 
              className={`rounded-none object-left transition-all duration-700 ease-in-out ${
                isLeftLoaded ? "blur-0 scale-100" : "blur-xl scale-105"
              }`}
              onLoad={() => setIsLeftLoaded(true)}
              priority
            />
          </div>

          {/* Kolom Tengah: Teks Filosofi */}
          <div className="flex-1 flex flex-col justify-end h-full relative z-10 py-4 md:py-6">
            
            <div className="absolute top-0 md:top-[-4rem] left-0 md:left-[-37.2%] w-[130%] md:w-[160%] max-w-[450px] md:max-w-[700px] pointer-events-none select-none z-0">
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

            <div className="relative z-10 flex flex-col items-end md:ml-auto w-full md:max-w-[360px] pt-32 md:pt-0 mt-auto mb-0">
              <span className="text-xl font-bold tracking-[0.1em] text-neutral-900 uppercase font-sans mb-4 text-right w-full">
                [STHANA]
              </span>
              <p className="text-neutral-700 font-light text-sm md:text-base leading-relaxed text-right md:text-justify font-sans m-0 p-0">
                Memaknai desain sebagai perpaduan antara rasa dan fungsi. Berlandaskan filosofi through hues and views, kami menerjemahkan warna, pencahayaan, tekstur, dan sudut pandang menjadi ruang yang menghadirkan keindahan sekaligus mendukung aktivitas penggunanya secara optimal.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Foto Profil Nabila */}
          <div className="h-[400px] md:h-full w-auto flex-shrink-0 relative flex justify-end mt-8 md:mt-0 overflow-hidden bg-stone-100">
            <Image
              src="/new-profil.webp"
              alt="Nabila Pramesti Kusuma"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: '100%' }} 
              className={`rounded-none grayscale hover:grayscale-0 object-right transition-all duration-1000 ease-in-out ${
                isProfilLoaded ? "blur-0 scale-100" : "blur-xl scale-105"
              }`}
              onLoad={() => setIsProfilLoaded(true)}
              priority
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}