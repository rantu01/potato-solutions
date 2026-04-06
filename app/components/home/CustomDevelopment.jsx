import Image from 'next/image';
import { Code2, PenTool, ArrowRight } from 'lucide-react';

export default function Services() {
    return (
        <section className="bg-background py-8 px-6 md:px-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* --- LEFT CARD: Custom Development --- */}
                    {/* এই কার্ডটি ২ কলাম জায়গা নিবে (lg:col-span-2) */}
                    <div className="lg:col-span-2 bg-background  rounded-[40px] p-10 md:p-16 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                        <div>
                            <div className="text-accent mb-8">
                                <Code2 size={40} strokeWidth={1.5} />
                            </div>
                            <h2 className="text-4xl font-bold text-lead mb-6">
                                Custom Development
                            </h2>
                            <p className="text-muted text-lg leading-relaxed max-w-md">
                                Bespoke engineering for complex problems. We build proprietary
                                engines that give you an unfair advantage in your market.
                            </p>
                        </div>

                        <div className="mt-12">
                            <button className="flex items-center gap-3 text-accent font-bold text-lg hover:gap-5 transition-all">
                                Explore Our Tech Stack <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* --- RIGHT CARD: Editorial UI/UX --- */}
                    <div className="bg-primary rounded-[40px] p-8 md:p-10 text-white flex flex-col">
                        <div className="mb-8">
                            <PenTool size={36} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">
                            Editorial UI/UX
                        </h2>
                        <p className="text-white/80 text-lg leading-snug mb-10">
                            Design that feels like a premium print publication, translated for the digital era.
                        </p>

                        {/* Image Placeholder - আপনার মোবাইলের ছবি এখানে বসাবেন */}
                        <div className="mt-auto relative w-full aspect-[4/5] rounded-[30px] overflow-hidden bg-foreground">
                            <Image
                                src="/img/CustomDevelopment.webp" // আপনার ইমেজের পাথ দিন
                                alt="Editorial UI UX Design"
                                fill
                                className="object-cover opacity-80"
                            />
                            {/* ইমেজের ভেতরে যে টাইপোগ্রাফি দেখা যাচ্ছে তার ডামি */}
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <p className="text-4xl font-serif font-black text-white/20 uppercase break-all leading-none">
                                    EDITORIAL UIUX DESIGN
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

                    {/* --- LEFT CARD: Future-Proof Scaling --- */}
                    <div className="bg-[#fde6b1] rounded-[40px] p-10 flex flex-col justify-center space-y-4">
                        {/* Icon Placeholder */}
                        <div className="text-[#846319]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h10" /><path d="M7 12h10" /><path d="M7 17h10" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#846319]">
                            Future-Proof Scaling
                        </h3>
                        <p className="text-[#b4944b] text-lg leading-relaxed">
                            We build for the company you will become tomorrow, not just the one you are today.
                        </p>
                    </div>

                    {/* --- RIGHT CARD: Ready to see the results? --- */}
                    <div className="md:col-span-2 bg-surface rounded-[40px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col space-y-6 flex-1 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-lead">
                                Ready to see the results?
                            </h2>
                            <p className="text-muted text-lg max-w-sm">
                                From startup pivots to enterprise overhauls, we've delivered ROI across every vertical.
                            </p>
                            <div>
                                <button className="bg-background text-lead font-bold py-4 px-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                                    Download Portfolio
                                </button>
                            </div>
                        </div>

                        {/* Circle Image Container */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src="/img/modern-office-space-interior.jpg"
                                    alt="Results"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}