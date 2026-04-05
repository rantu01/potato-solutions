// src/components/Navbar.jsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
  ];

  return (
    // 1. The main header, fixed to the top of the screen
    <header className="fixed top-0 left-0 right-0 z-50 bg-white ">
      
      {/* 2. Container to limit width, center content, and add horizontal padding */}
      <nav className="container mx-auto px-2 py-0 flex items-center justify-between">
        
        {/* === SECTION 1: LOGO === */}
        {/* We use a Link for the logo too, pointing to the homepage */}
        <Link href="/" className="">
          <img className="w-30 h-30" src="/logo/p-logo-removebg-preview.png" alt="Potato Solutions Logo" />
          
        </Link>

        {/* === SECTION 2: NAVIGATION LINKS === */}
        {/* Hidden on small screens (mobile-first approach), visible from 'md' (768px) up */}
        <ul className="hidden md:flex items-center gap-x-8">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    isActive
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-gray-600 hover-primary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* === SECTION 3: CTA BUTTON === */}
        {/* This will always be on the right side */}
        <Link 
          href="/build" 
          className="bg-primary text-white px-6 py-2.5 rounded-full text-lg font-semibold hover-bg-primary transition-colors"
        >
          Build Your Website
        </Link>

      </nav>
    </header>
  );
}