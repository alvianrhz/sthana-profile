"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-8 bg-transparent">
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/NEW LOGOOOO.webp"
            alt="Sthana Logo"
            width={160}
            height={54}
            className={`object-contain h-10 md:h-12 w-auto scale-[2.5] md:scale-[5] origin-left transition-all duration-700 ease-in-out ${
              isLoaded ? "blur-0 opacity-100" : "blur-md opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
            priority
          />
        </a>

        {/* Brand label */}
        <span className="text-xs md:text-xl font-bold tracking-[0.1em] text-white uppercase font-sans">
          [INTERIOR DESIGNER]
        </span>
      </div>
    </header>
  );
}