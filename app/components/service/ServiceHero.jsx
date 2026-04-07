import { ArrowRight } from 'lucide-react';

export default function ServiceHero() {
  return (
    <section className="relative w-full bg-[#fdfaf6] py-10 md:py-10 px-6 overflow-hidden">

      {/* ব্যাকগ্রাউন্ডের হালকা গ্লো ইফেক্ট (ইমেজের কোণায় যেমন আছে) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/30 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto text-center max-w-5xl">

        {/* উপরের ছোট ব্যাজ (Execution at Scale) */}
        <div className="flex justify-center mb-8">
          <span className="bg-[#fde6b1] text-[#846319] px-5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-[0.2em]">
            Execution at Scale
          </span>

        </div>

        {/* মেইন হেডলাইন */}
        <h1 className="text-4xl md:text-7xl font-black text-[#2d3748] leading-[1.05] tracking-tight mb-10">
          Your Fractional <br />
          Marketing and <span className="text-primary">Sales</span> <br />
          <span className="text-primary">Execution</span> Team
        </h1>

        {/* সাব-টেক্সট বা বর্ণনা */}
        <div className="flex justify-center mb-12">
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            We don't just strategize; we execute. Get a dedicated team of
            specialists to scale your operations without the overhead of full-time hires.
          </p>
        </div>

        {/* কল টু অ্যাকশন বাটনসমূহ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="bg-primary hover:bg-[#2a553f] text-white px-10 py-5 rounded-full text-lg font-bold flex items-center gap-3 transition-all shadow-lg shadow-green-900/10">
            Book a Call <ArrowRight size={22} />
          </button>

          <button className="bg-[#e5e7eb] hover:bg-[#d1d5db] text-[#4b5563] px-10 py-5 rounded-full text-lg font-bold transition-all">
            View Pricing
          </button>
        </div>
        <serviceHero></serviceHero>
      </div>
    </section>
  );
}