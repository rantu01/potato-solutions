import Image from 'next/image';

export default function AgencyFulfillment() {
  const fulfillmentFeatures = [
    {
      title: "Revenue Operational Support",
      description: "We integrate seamlessly into your existing workflows, acting as the silent engine behind your client success.",
      borderColor: "border-l-[#846319]" // গোল্ডেন বর্ডার
    },
    {
      title: "Seamless Integration",
      description: "Use our team via Slack, Notion, or your project management tool of choice. It's like having an in-house team on demand.",
      borderColor: "border-l-[#c22d2d]" // লাল বর্ডার
    }
  ];

  return (
    <section className="bg-[#fdfaf6] py-24 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT SIDE: CIRCLE IMAGE --- */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* ছবির বাইরের হালকা শ্যাডো বা বর্ডার ইফেক্ট */}
            <div className="absolute inset-0 rounded-full border-[12px] border-white shadow-2xl"></div>
            
            <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#f3e8d2]">
              <Image 
                src="/img/Operational-Excellence-scaled.jpg" // আপনার আপলোড করা টেক ইমেজটি এখানে দিন
                alt="Operational Excellence"
                fill
                className="object-cover"
              />
              {/* ইমেজের ওপরের টেক্সট ওভারলে (যদি ইমেজে না থাকে তবে এখান থেকে দিতে পারেন) */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                 <h3 className="text-white text-xl md:text-3xl font-black tracking-tighter text-center px-10 leading-none uppercase">
                   Operational Excellence
                 </h3>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
              Agency Fulfillment
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
              Whitelabel execution that lets you scale your agency without 
              increasing fixed headcount costs.
            </p>
          </div>

          {/* ফিচার কার্ডগুলো */}
          <div className="space-y-6 max-w-xl">
            {fulfillmentFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-2xl shadow-sm border-l-4 ${feature.borderColor} hover:shadow-md transition-shadow`}
              >
                <h4 className="text-xl font-bold text-[#2d3748] mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}