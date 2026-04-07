// src/components/Navbar.jsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
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

        {/* === SECTION 3: MOBILE MENU BUTTON + CTA BUTTON === */}
        {/* Mobile: show hamburger button (drawer). Desktop: keep existing CTA unchanged. */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <Link 
          href="/build" 
          className="hidden md:inline-flex bg-primary text-white px-6 py-2.5 rounded-full text-lg font-semibold hover-bg-primary transition-colors"
        >
          Build Your Website
        </Link>

      </nav>

      {/* Drawer (mobile) */}
      <div aria-hidden={!open} className="">
        {/* overlay */}
        {open && (
          <button
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/30"
            aria-label="Close menu overlay"
          />
        )}

        <aside
          className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 shadow-lg ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-4 flex items-center justify-between border-b">
            <Link href="/" onClick={() => setOpen(false)} className="inline-block">
              <img className="w-28 h-auto" src="/logo/p-logo-removebg-preview.png" alt="Potato Solutions" />
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <nav className="px-6 py-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium text-gray-700"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  );
}