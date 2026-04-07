import { ArrowRight } from 'lucide-react';

export default function ExecutionCTA() {
  return (
    <section className="relative w-full bg-[#fdfaf6] py-24 md:py-32 px-6 overflow-hidden">
      {/* ব্যাকগ্রাউন্ডের হালকা গ্লো ইফেক্ট */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-red-100/40 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-orange-100/30 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto text-center max-w-4xl">
        
        {/* মেইন হেডলাইন */}
        <h2 className="text-4xl md:text-6xl font-black text-primary leading-[1.1] tracking-tight mb-8">
          Execution That Scales. <br />
          <span className="text-[#c22d2d]">Output You Can Count On.</span>
        </h2>

        {/* সাব-টেক্সট */}
        <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to offload your marketing execution? Let&apos;s build your 
          fractional team today.
        </p>

        {/* কল টু অ্যাকশন বাটনসমূহ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="bg-[#c22d2d] hover:bg-[#a12323] text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-lg shadow-red-900/20">
            Book Your Strategy Call
          </button>
          
          <button className="bg-[#e5e7eb] hover:bg-[#d1d5db] text-[#4b5563] px-10 py-5 rounded-full text-lg font-bold transition-all">
            Check Our Portfolio
          </button>
        </div>

      </div>
    </section>
  );
}