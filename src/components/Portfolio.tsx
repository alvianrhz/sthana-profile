"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  images: string[];
  instagramUrl?: string; 
}

const projects: Project[] = [
  {
    id: 1,
    title: "Soft light, deep tones, and the perfect arch",
    category: "Dapur & Ruang Makan",
    images: [
      "/arch-0.webp", 
      "/arch-1.webp", 
      "/arch-2.webp"
    ],
    instagramUrl: "https://www.instagram.com/p/DX_5merFE-6/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 2,
    title: "Elegance in every texture",
    category: "Ruang Keluarga",
    images: [
      "/texture-3.webp",
      "/texture-1.webp",
      "/texture-2.webp",
      "/texture-0.webp",
      "/texture-4.webp",
      "/texture-5.webp"
    ],
    instagramUrl: "https://www.instagram.com/p/DXmNE52lA_q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 3,
    title: "It’s all in the contrast",
    category: "Kamar Mandi",
    images: [
      "/contrast-0.webp",
      "/contrast-1.webp",
      "/contrast-2.webp",
      "/contrast-3.webp"
    ],
    instagramUrl: "https://www.instagram.com/p/DXeLxW8kUGL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 4,
    title: "Define Your Green Luxury",
    category: "Dapur & Ruang Makan",
    images: [
      "/green-3.webp",
      "/green-0.webp",
      "/green-1.webp",
      "/green-2.webp"      
    ],
    instagramUrl: "https://www.instagram.com/p/DXbUi3oFDB4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 5,
    title: "Bold in red.",
    category: "Kamar Tidur",
    images: [
      "/red-0.webp",
      "/red-1.webp",
      "/red-2.webp"
    ],
    instagramUrl: "https://www.instagram.com/p/DXZCVL1FOOO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  }
];

// KOMPONEN BARU: Menangani efek blur pada setiap gambar secara individual
function SlideImage({ src, alt, href }: { src: string; alt: string; href?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageElement = (
    <Image
      src={src}
      alt={alt}
      fill
      // KUNCI ANIMASI: Transisi dari blur-xl dan scale-105 menjadi normal saat isLoaded bernilai true
      className={`object-cover rounded-none pointer-events-none select-none transition-all duration-700 ease-in-out ${
        isLoaded ? "blur-0 scale-100" : "blur-xl scale-105"
      }`}
      onLoad={() => setIsLoaded(true)}
      sizes="(max-w-768px) 100vw, 33vw"
    />
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        // bg-stone-200 memberikan warna dasar yang elegan sebelum gambar muncul
        className="absolute inset-0 w-full h-full block cursor-pointer overflow-hidden bg-stone-200"
      >
        {imageElement}
      </a>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-stone-200">
      {imageElement}
    </div>
  );
}

function SliderCard({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const images = project.images;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div className="group w-full aspect-[4/5] overflow-hidden bg-stone-100 relative">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Memanggil sub-komponen SlideImage alih-alih tag Image langsung */}
          <SlideImage 
            src={images[currentIndex]} 
            alt={`Desain ${project.category} - ${project.title} | Sthana Studio - Foto ${currentIndex + 1}`} 
            href={project.instagramUrl} 
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={(e) => {
            e.stopPropagation();
            paginate(-1);
          }}
          className="text-white hover:text-neutral-250 transition-colors cursor-pointer pointer-events-auto bg-transparent border-none p-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            paginate(1);
          }}
          className="text-white hover:text-neutral-250 transition-colors cursor-pointer pointer-events-auto bg-transparent border-none p-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="spaces" className="pt-24 pb-28 bg-white relative w-full">
      {/* Title */}
      <div className="w-full px-6 md:px-12 mb-16">
        <span className="text-xl font-bold tracking-[0.1em] text-neutral-900 uppercase font-sans">
          [PORTOFOLIO]
        </span>
      </div>

      {/* 3-column Tight Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
        {projects.map((project) => (
          <SliderCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}