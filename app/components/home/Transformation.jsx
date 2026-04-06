import { Zap } from 'lucide-react';

export default function Transformation() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="container mx-auto">
        {/* মেইন ডার্ক কার্ড */}
        <div className="relative overflow-hidden bg-[#0a0a0a] rounded-[50px] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between min-h-[450px]">
          
          {/* ডান পাশের লালচে অ্যাবস্ট্রাক্ট শ্যাডো (Blob) */}
          <div className="absolute right-[-5%] top-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#c22d2d] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute right-[5%] top-[20%] w-[250px] h-[250px] bg-[#c22d2d] opacity-10 rounded-full mix-blend-screen pointer-events-none"></div>

          {/* টেক্সট কন্টেন্ট */}
          <div className="relative z-10 max-w-2xl flex flex-col space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Your digital <br /> 
              transformation starts <br /> 
              with one ingredient.
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Let&apos;s craft a website that adapts to your growth and commands the 
              attention your brand deserves.
            </p>

            <div className="pt-4">
              <button className="bg-[#c22d2d] hover:bg-[#a12323] text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 transition-all group">
                Build Your Website 
                <Zap size={20} className="fill-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* ডান পাশের খালি জায়গা (যেখানে আপনার ইমেজে ডার্ক শেপ আছে) */}
          <div className="hidden lg:block relative z-10 w-1/3 h-full">
             {/* এখানে চাইলে কোনো ছোট ইলাস্ট্রেশন দিতে পারেন */}
          </div>
          
        </div>
      </div>
    </section>
  );
}