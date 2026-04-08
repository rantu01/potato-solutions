import React from 'react';
import { Utensils, ShieldCheck, Leaf } from 'lucide-react'; // Icons-er jonno Lucide use kora hoyeche

const WhyPotatoSection = () => {
  return (
    <section className="container mx-auto p-12 bg-[#F9F8F6] font-sans pt-20">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 space-y-12 pr-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Why 'Potato'?</h2>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-2">
              Potato is a web agency that builds fast, reliable websites designed to
              grow businesses. We combine product thinking, clean engineering, and
              conversion-focused design to deliver sites that perform for users and
              for your metrics.
            </p>
            <p className="text-gray-600 leading-relaxed text-base font-light">
              From strategy and UX to performance optimization and long-term
              maintenance, we craft solutions tailored to your goals — scalable,
              maintainable, and built to convert.
            </p>
          </div>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-6">
              <div className="bg-red-50 p-3.5 rounded-full mt-1">
                <Utensils className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">Custom Web Experiences</h3>
                <p className="text-gray-500 text-base font-light">
                  We build bespoke sites and platforms tailored to your users,
                  brand, and business goals — no one-size-fits-all templates.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-6">
              <div className="bg-red-50 p-3.5 rounded-full mt-1">
                <ShieldCheck className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">Performance & Reliability</h3>
                <p className="text-gray-500 text-base font-light">
                  Fast-loading, secure, and resilient sites with 99.9% uptime
                  practices and production-ready deployment workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Bento Staggered Grid Layout */}
        <div className="w-full md:w-1/2 flex gap-6">
          
          {/* Column 1 */}
          <div className="w-1/2 space-y-6 flex flex-col">
            {/* Main Potato Image - Large top border-radius */}
            <div className="w-full rounded-[2.5rem] overflow-hidden shadow-inner bg-neutral-200">
              <img 
                src="/logo/p-logo-removebg-preview.png" 
                alt="Potatoes" 
                className="w-full h-auto grayscale object-cover"
              />
            </div>

            {/* Uptime/Reliability Card (Red) - Square shape */}
            <div className="w-full bg-primary rounded-xl aspect-square p-10 flex flex-col justify-center items-center text-white">
              <div className="text-5xl font-extrabold tracking-tight">99.9%</div>
              <div className="text-[11px] uppercase tracking-[0.2em] mt-3 text-center font-medium opacity-80">
                Hosting & Production Reliability
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-1/2 space-y-6 flex flex-col">
            
            {/* Organic Growth Card - Large border-radius, pushed down */}
            <div className="w-full h-80 bg-secondary rounded-xl p-8 flex flex-col justify-center items-start mt-20">
              <div className="flex items-center gap-3">
                 <Leaf className="w-10 h-10 text-[#7A5C2D] mb-4" />
              </div>
              <span className="text-[#7A5C2D] font-bold text-lg leading-tight">Growth & SEO-First Strategy</span>
              <p className="text-sm text-[#7A5C2D] mt-2 opacity-80">Design and content aligned to rank and convert.</p>
            </div>

            {/* Abstract Architecture Image */}
            <div className="w-full w-20 rounded-xl overflow-hidden shadow-inner flex-grow">
              <img 
                src="/img/room.jpg" 
                alt="Architecture" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyPotatoSection;