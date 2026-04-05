import Link from 'next/link';
import { SendHorizontal } from 'lucide-react'; // নিউজলেটার বাটনের আইকনের জন্য

export default function Footer() {
    return (
        <footer className="pt-16 pb-8 px-6 md:px-16 border-t border-gray-100" style={{ background: 'var(--background)' }}>
            <div className="container mx-auto">
                {/* --- Top Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* 1. Brand Section */}
                    <div className="flex flex-col space-y-6">
                        <Link href="/" className="">
                            <img className="w-30 h-30" src="/logo/p-logo-removebg-preview.png" alt="Potato Solutions Logo" />

                        </Link>
                        <p className="text-[#718096] text-sm leading-relaxed max-w-xs">
                            The premium fractional agency for businesses that value adaptability,
                            performance, and modern editorial aesthetics.
                        </p>
                    </div>

                    {/* 2. Company Links */}
                    <div>
                        <h3 className="text-[#2d3748] font-bold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-[#718096] hover-primary transition-colors">About</Link></li>
                            <li><Link href="/portfolio" className="text-[#718096] hover-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="/contact" className="text-[#718096] hover-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* 3. Connect Links */}
                    <div>
                        <h3 className="text-[#2d3748] font-bold mb-6">Connect</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-[#718096] hover-primary transition-colors">LinkedIn</Link></li>
                            <li><Link href="#" className="text-[#718096] hover-primary transition-colors">GitHub</Link></li>
                            <li><Link href="#" className="text-[#718096] hover-primary transition-colors">Clutch</Link></li>
                        </ul>
                    </div>

                    {/* 4. Newsletter Section */}
                    <div>
                        <h3 className="text-[#2d3748] font-bold mb-6">Newsletter</h3>
                        <div className="relative flex items-center">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white border-none py-3 px-4 rounded-lg shadow-sm focus:ring-2 outline-none text-gray-600"
                            />
                            <button className="absolute right-1.5 bg-primary text-white p-2 rounded-md hover-bg-primary transition-colors">
                                <SendHorizontal size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- Bottom Section (Copyright) --- */}
                <div className="border-t border-gray-200 pt-8 text-center">
                    <p className="text-[#718096] text-sm">
                        © {new Date().getFullYear()} Potato Solutions. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}