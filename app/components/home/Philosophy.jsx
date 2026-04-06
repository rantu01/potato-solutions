export default function Philosophy() {
  const brands = ["LUMIERE", "NEXUS.CO", "QUANTUM", "VERVE"];

  return (
    <section className="bg-background">
      {/* --- 1. LOGO CLOUD SECTION --- */}
      <div className="bg-surface py-8 border-b border-gray-100 px-6 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-gray-400 font-bold tracking-widest text-xs uppercase italic">
            Trusted by Innovators
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {brands.map((brand) => (
              <span 
                key={brand} 
                className={`text-gray-400 font-bold tracking-widest text-lg italic ${
                  brand === 'QUANTUM' ? 'text-gray-500 border-b-2 border-gray-500' : ''
                }`}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- 2. PHILOSOPHY CONTENT SECTION --- */}
      <div className="container mx-auto px-6 md:px-16 py-24">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-lead mb-16">
          The &quot;Potato&quot; Philosophy
        </h2>

        {/* Two Column Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <p className="text-gray-500 leading-relaxed text-lg">
            Why Potato? Because the potato is nature&apos;s most 
            adaptable creation. It thrives in any soil, nourishes 
            everyone, and can be transformed into endless 
            possibilities. From the simplest starch to the most 
            complex gourmet dish, it is the ultimate foundation.
          </p>
          <p className="text-gray-500 leading-relaxed text-lg">
            At <span className="text-primary font-bold">Potato Solutions</span>, we treat your business the 
            same way. We provide the nutrient-rich digital 
            foundation that allows your vision to grow, adapt, 
            and scale—regardless of the landscape.
          </p>
        </div>

        {/* --- 3. CORE COMPETENCIES SECTION --- */}
        <div className="mt-32 container mx-auto text-start">
          <h3 className="text-3xl font-bold text-lead mb-4">
            Core Competencies
          </h3>
          <p className="text-gray-500 text-lg max-w-xl ">
            We combine high-end engineering with artistic precision to build 
            products that don&apos;t just work—they inspire.
          </p>
        </div>
      </div>
    </section>
  );
}