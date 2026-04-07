export default function ProcessStandards() {
  const steps = [
    {
      id: "01",
      title: "Discovery",
      description: "Deep dive into your current ops and goals."
    },
    {
      id: "02",
      title: "Setup",
      description: "Tool integration and workflow mapping."
    },
    {
      id: "03",
      title: "Execution",
      description: "Daily tasks and project fulfillment begins."
    },
    {
      id: "04",
      title: "Optimize",
      description: "Weekly reporting and performance tweaks."
    }
  ];

  return (
    <section className="bg-primary py-24 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto">
        
        {/* --- Top Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Process and Quality Standards
            </h2>
            <p className="text-white/70 text-lg md:text-xl">
              Our proprietary execution framework ensures nothing falls through the cracks.
            </p>
          </div>

          {/* Right Side Status Badges */}
          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl text-center min-w-[110px]">
              <div className="text-2xl font-bold text-white leading-none">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60 mt-2 font-bold">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl text-center min-w-[110px]">
              <div className="text-2xl font-bold text-white leading-none">24hr</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60 mt-2 font-bold">Response</div>
            </div>
          </div>
        </div>

        {/* --- Bottom Process Steps --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-[32px] overflow-hidden bg-white/5 border border-white/10">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`p-10 flex flex-col space-y-4 hover:bg-white/5 transition-colors duration-300 relative
                ${index !== steps.length - 1 ? 'md:border-r border-white/10' : ''} 
                ${index < 2 ? 'border-b md:border-b-0' : ''}
                lg:border-b-0
              `}
            >
              <span className="text-gray-400 text-2xl font-bold font-mono">
                {step.id}
              </span>
              <h3 className="text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}