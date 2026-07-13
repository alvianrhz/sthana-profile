"use client";

import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="min-h-screen flex flex-col bg-white border-t border-neutral-200">
      
      {/* Bagian Utama (Memenuhi sisa layar dan memusatkan konten secara vertikal) */}
      {/* flex-1 akan membuat bagian ini melar dan mendorong footerbar ke paling bawah layar */}
      <div className="flex-1 flex items-center w-full px-6 md:px-12 py-16">
        
        {/* KUNCI PERBAIKAN 1: Menggunakan items-end agar bagian bawah kolom sejajar */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          
          {/* Kolom Kiri: CTA & Intro */}
          <div className="lg:col-span-6">
            <span className="text-xl font-bold tracking-[0.1em] text-neutral-900 uppercase font-sans block">
              [KOLABORASI]
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#B22222] font-sans leading-none mt-3 md:mt-4">
              Mari Mulai Dialog <br />
              Tentang Warna, Cahaya, dan Sudut Pandang Anda
            </h2>
            <p className="text-neutral-600 font-light text-base leading-relaxed max-w-md font-sans mt-6 md:mt-8">
              Diskusikan bagaimana elemen-elemen warna, pencahayaan, tekstur, dan sudut pandang unik Anda dapat diterjemahkan menjadi ruang yang optimal. Kami siap mendampingi Anda menciptakan perpaduan rasa dan fungsi yang optimal di setiap ruang Anda.
            </p>
          </div>

          {/* Kolom Kanan: Detail Kontak */}
          <div className="lg:col-span-6 space-y-4">
            <a href="mailto:karyasthana@gmail.com" className="flex items-center space-x-4 text-neutral-800 hover:text-[#B22222] transition-colors group">
              <div className="w-10 h-10 border border-neutral-900 flex items-center justify-center text-neutral-900 rounded-none transition-transform duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm tracking-wider font-sans">karyasthana@gmail.com</span>
            </a>
            
            <a href="tel:+6281330683984" className="flex items-center space-x-4 text-neutral-800 hover:text-[#B22222] transition-colors group">
              <div className="w-10 h-10 border border-neutral-900 flex items-center justify-center text-neutral-900 rounded-none transition-transform duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm tracking-wider uppercase font-sans">+62 81 330 683 984</span>
            </a>
            
            <div className="flex items-center space-x-4 text-neutral-800 group">
              <div className="w-10 h-10 border border-neutral-900 flex items-center justify-center text-neutral-900 rounded-none transition-transform duration-300">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm tracking-wider font-sans">Lamongan, Jawa Timur, Indonesia</span>
            </div>

            <a href="https://www.instagram.com/sthana.studio" className="flex items-center space-x-4 text-neutral-800 hover:text-[#B22222] transition-colors group">
              <div className="w-10 h-10 border border-neutral-900 flex items-center justify-center text-neutral-900 rounded-none transition-transform duration-300">
                <Instagram className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm tracking-wider font-sans">Sthana.Studio</span>
            </a>
          </div>
          
        </div>
      </div>

      {/* KUNCI PERBAIKAN 2: Footerbar dibuat tipis di ujung bawah layar */}
      {/* Padding dibuat kecil (py-6) tanpa margin raksasa */}
      <div className="w-full py-6 border-t border-neutral-100 flex justify-center text-center px-6">
        <span className="text-xs text-neutral-500 font-light font-sans tracking-wide">
          &copy; {new Date().getFullYear()} Sthana Studio. Hak Cipta Dilindungi.
        </span>
      </div>
      
    </footer>
  );
}