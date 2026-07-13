"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-stone-200">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/jumbotron.webp"
          alt="Sthana Cover Space"
          fill
          className={`object-cover object-center rounded-none transition-all duration-1000 ease-in-out ${
            isLoaded ? "blur-0 scale-100" : "blur-xl scale-105"
          }`}
          onLoad={() => setIsLoaded(true)}
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}