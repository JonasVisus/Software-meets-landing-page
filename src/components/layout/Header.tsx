'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  { name: 'Lösungen', href: '/#solutions' },
  { name: 'Referenzen', href: '/#cases' },
  { name: 'Über uns', href: '/about' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar fixed top-0 z-50 bg-primary backdrop-blur-md border-b border-primary-700">
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/logo.png" 
            alt="Software Solutions Logo" 
            width={40} 
            height={40}
            className="w-10 h-10"
          />
          <span className="font-bold text-xl text-white">Quantical Software Solutions</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="font-medium text-white/90 hover:text-white hover:bg-white/10">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <Link href="/kontakt" className="btn bg-white text-primary hover:bg-gray-100 border-none hidden md:flex">
          Demo anfordern
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="btn btn-ghost text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Menü öffnen</span>
          {mobileMenuOpen ? (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-primary-700 animate-slide-down">
          <ul className="menu p-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-medium text-white/90 hover:text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link 
                href="/kontakt" 
                className="btn bg-white text-primary hover:bg-gray-100 border-none w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demo anfordern
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
