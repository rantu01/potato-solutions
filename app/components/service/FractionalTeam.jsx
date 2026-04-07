import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function FractionalTeam() {
  const features = [
    {
      title: "Reliable Execution",
      description: "Daily output you can rely on, no ghosting, no excuses."
    },
    {
      title: "Complete Coverage",
      description: "From design to CRM management, we handle the full stack."
    },
    {
      title: "Leadership Leverage",
      description: "Free up your time to focus on high-level growth strategy."
    }
  ];

  return (
    <section className="bg-[#f9f8f6] py-24 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT CONTENT --- */}
        <div className="flex flex-col space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3748] leading-tight">
            Fractional Marketing Team
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg">
            Replace your fragmented freelancer network with a cohesive unit of 
            specialists managed by experts.
          </p>

          <div className="space-y-6 pt-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-[#c22d2d] fill-[#c22d2d]/10" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2d3748]">{item.title}</h4>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT IMAGE CARD --- */}
        <div className="relative">
          {/* Main White Card Background */}
          <div className="bg-white p-6 md:p-8 rounded-[40px] shadow-xl shadow-gray-200/50">
            {/* The Image Container */}
            <div className="relative aspect-[4/3] w-full rounded-[30px] overflow-hidden bg-black">
              <Image 
                src="/img/Fractional Marketing Team.webp" // আপনার আপলোড করা ইমেজটি এখানে বসান
                alt="Fractional Team Asset"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>

          {/* Floating Efficiency Badge (গোল্ডেন বক্সটি) */}
          <div className="absolute -bottom-6 -left-6 md:left-0 bg-[#846319] text-white p-8 rounded-[24px] shadow-2xl min-w-[180px]">
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold">94%</span>
              <span className="text-sm md:text-base font-medium opacity-80 leading-tight mt-1">
                Efficiency <br /> Increase
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}