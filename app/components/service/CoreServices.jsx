import { 
  Share2, 
  PlayCircle, 
  Globe, 
  Briefcase, 
  Database, 
  Megaphone 
} from 'lucide-react';

export default function CoreServices() {
  const services = [
    {
      title: "Social Media",
      description: "Content creation, scheduling, and community management across all major social platforms.",
      icon: <Share2 className="text-[#c22d2d]" size={20} />,
    },
    {
      title: "Video Editing",
      description: "Professional short-form and long-form video editing tailored for viral growth and engagement.",
      icon: <PlayCircle className="text-[#c22d2d]" size={20} />,
    },
    {
      title: "Website Optimization",
      description: "Speed, SEO, and conversion rate optimization to turn your visitors into paying customers.",
      icon: <Globe className="text-[#c22d2d]" size={20} />,
    },
    {
      title: "LinkedIn Management",
      description: "Personal branding and outbound lead generation for founders and B2B sales teams.",
      icon: <Briefcase className="text-[#c22d2d]" size={20} />,
    },
    {
      title: "Sales Data/CRM",
      description: "CRM setup, data hygiene, and automated sales reporting for clear revenue attribution.",
      icon: <Database className="text-[#c22d2d]" size={20} />,
    },
    {
      title: "Campaign Management",
      description: "End-to-end execution of product launches, email sequences, and paid advertising.",
      icon: <Megaphone className="text-[#c22d2d]" size={20} />,
    },
  ];

  return (
    <section className="bg-[#fdfaf6] py-24 px-6 md:px-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-4">
            Core Execution Services
          </h2>
          <p className="text-gray-500 text-lg">
            Pick the capabilities you need or get the full-stack team experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-md transition-all border border-gray-50 flex flex-col h-full"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 bg-[#c22d2d]/10 rounded-xl flex items-center justify-center mb-8">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#2d3748] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-10 flex-grow">
                {service.description}
              </p>

              {/* Action Links */}
              <div className="flex items-center gap-6">
                <button className="text-[#c22d2d] text-xs font-extrabold uppercase tracking-widest hover:underline">
                  Learn More
                </button>
                <button className="text-[#846319] text-xs font-extrabold uppercase tracking-widest hover:underline">
                  Book a Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}