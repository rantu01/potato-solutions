import React from 'react';

export default function AboutHero() {
  return (
    <section className=" py-20 px-6 md:px-16 ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT CONTENT --- */}
        <div className="flex flex-col space-y-6">
          <div className="inline-block">
            <span className="bg-[#d1fae5] text-[#065f46] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              Our Identity
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-[#2d3748] leading-tight">
            Bespoke digital <br />
            <span className="text-[#c22d2d]">versatility.</span>
          </h2>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
            We don't just build websites; we engineer digital foundations 
            that adapt to your growth. Simple in concept, infinite in application.
          </p>
        </div>

        {/* --- RIGHT IMAGE SECTION --- */}
        <div className="relative">
          {/* Main Large Image Card */}
          <div className="relative w-full aspect-[1/1] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="/img/view-city.avif" // আপনার ইমেজের পাথ এখানে দিন
              alt="Digital Workspace"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Red Feedback Box */}
          <div className="mt-6 md:mb-0 md:absolute md:-bottom-10 md:-left-16 bg-primary text-white p-6 md:p-10 rounded-[30px] md:rounded-bl-none shadow-2xl w-full md:w-auto max-w-md md:max-w-[220px]">
            <p className="text-white md:text-xl font-bold leading-snug mb-4">
              "The perfect blend of reliability and creative flair."
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm">★</span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider opacity-90">
                Top Rated Agency 2026
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}