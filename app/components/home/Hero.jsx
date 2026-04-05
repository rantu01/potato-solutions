import Image from 'next/image';
import { ArrowRight } from 'lucide-react'; // আইকনের জন্য ল্যাক্সাইড আইকন ব্যবহার করছি

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-white px-6 md:px-16 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT CONTENT --- */}
        <div className="flex flex-col space-y-6">
          {/* Badge */}
          <div>
            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: 'rgba(243,196,119,0.12)', color: 'var(--color-secondary)' }}>
              The Digital Ingredient
            </span>
          </div>

          {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#333] leading-[1.1]">
            Web Solutions That <br />
            Fit Your Business <br />
              Like the <span className="text-primary italic">Perfect Ingredient.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed">
            We don't do cookie-cutter. We build scalable, high-performance 
            digital ecosystems that adapt to your growth as naturally as the humble 
            potato transforms into a gourmet masterpiece.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary hover-bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all">
              Build Your Website <ArrowRight size={20} />
            </button>
            <button className="bg-[#e5e7eb] hover:bg-[#d1d5db] text-[#4b5563] px-8 py-4 rounded-xl font-bold text-lg transition-all">
              View Our Work
            </button>
          </div>
        </div>

        {/* --- RIGHT IMAGE --- */}
        <div className="relative flex justify-center items-center">
          {/* Background Glows (ইমেজের পেছনে যে কালার শ্যাডো আছে) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/50 blur-[100px] rounded-full -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100/50 blur-[100px] rounded-full -z-10"></div>
          
          <div className="relative w-full max-w-[500px] aspect-square rounded-[60px] overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
            <Image 
              src="/img/hero-laptop.jpg" // public/img/hero-laptop.jpg
              alt="Workspace with laptop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}