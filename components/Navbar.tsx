'use client';

import React, { useState, useEffect } from 'react';
import { Wrench, Phone, ShieldCheck, Clock, Menu, X, Calendar, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Emergency & Status Ticker */}
      <div id="emergency-banner" className="bg-[#121315] border-b border-[#2B2F33] text-xs text-slate-300 py-1.5 px-4 z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-[#00A8E8]/15 text-[#00A8E8] px-2.5 py-0.5 rounded font-semibold border border-[#00A8E8]/30 text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00A8E8] animate-pulse"></span>
              EST. 1997 • REGISTERED RMI DEALER & MEGUIAR&apos;S VALET
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-[#00A8E8]" />
              Mon–Fri 7:30 – 17:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A8E8]" />
              400 Albert Road, Salt River, Cape Town
            </span>
            <a
              id="top-emergency-phone"
              href="tel:0214473824"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#00A8E8] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#00A8E8]" />
              <span>(021) 447 3824</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header with Glassmorphism */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#1E2022]/95 backdrop-blur-md border-b border-[#2B2F33] shadow-lg shadow-black/20 py-3'
            : 'bg-[#1E2022]/85 backdrop-blur-md border-b border-[#2B2F33]/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a id="brand-logo-link" href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#121315] border border-[#00A8E8]/40 flex items-center justify-center shadow-inner group-hover:border-[#00A8E8] transition-colors">
              <Wrench className="w-5 h-5 text-[#00A8E8] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif-display text-2xl font-bold tracking-tight text-white">CENTRAL</span>
                <span className="text-[11px] font-mono tracking-widest text-[#00A8E8] font-bold uppercase">Car Repairs</span>
              </div>
              <span className="text-[10px] tracking-wider text-slate-300 uppercase font-sans-body">Salt River • Cape Town • Est. 1997</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
            <a href="#services" className="hover:text-[#00A8E8] transition-colors">Services</a>
            <a href="#estimator" className="hover:text-[#00A8E8] transition-colors">Instant Estimate</a>
            <a href="#diagnostic-lab" className="hover:text-[#00A8E8] transition-colors">Inspection & Valet</a>
            <a href="#reviews" className="hover:text-[#00A8E8] transition-colors">Client Reviews</a>
            <a href="#location" className="hover:text-[#00A8E8] transition-colors">Location & Hours</a>
          </nav>

          {/* Direct CTA Group */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-whatsapp-cta"
              href="https://wa.me/27825630095"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-md bg-[#121315] hover:bg-[#2B2F33] border border-[#3A3F45] text-xs font-semibold text-white flex items-center gap-2 transition-colors"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>WhatsApp: 082 563 0095</span>
            </a>

            <button
              id="nav-book-diagnostic-btn"
              onClick={() => onOpenBooking()}
              className="px-4 py-2 rounded-md bg-[#00A8E8] hover:bg-[#0092ca] active:scale-[0.98] text-white text-xs font-semibold tracking-wide flex items-center gap-2 shadow-md shadow-[#00A8E8]/25 transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Service Bay</span>
              <ChevronRight className="w-3 h-3 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md bg-[#121315] border border-slate-700 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div id="mobile-navigation-dropdown" className="lg:hidden bg-[#1E2022] border-b border-[#2B2F33] px-4 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 hover:text-[#00A8E8] rounded hover:bg-[#121315]"
              >
                Services & Engineering
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 hover:text-[#00A8E8] rounded hover:bg-[#121315]"
              >
                Instant Repair Estimate (ZAR)
              </a>
              <a
                href="#diagnostic-lab"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 hover:text-[#00A8E8] rounded hover:bg-[#121315]"
              >
                Workshop & Car Wash Standards
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 hover:text-[#00A8E8] rounded hover:bg-[#121315]"
              >
                Verified Driver Reviews
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 hover:text-[#00A8E8] rounded hover:bg-[#121315]"
              >
                Salt River Location & Hours
              </a>
            </nav>

            <div className="pt-4 border-t border-[#2B2F33] flex flex-col gap-3">
              <a
                id="mobile-phone-call"
                href="tel:0214473824"
                className="w-full py-3 rounded-md bg-[#121315] border border-[#3A3F45] text-white font-bold text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#00A8E8]" />
                <span>Call Workshop: (021) 447 3824</span>
              </a>
              <a
                id="mobile-whatsapp-call"
                href="https://wa.me/27825630095"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-md bg-emerald-600 text-white font-bold text-center text-sm flex items-center justify-center gap-2"
              >
                <span>WhatsApp: 082 563 0095</span>
              </a>
              <button
                id="mobile-book-diagnostic-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-md bg-[#00A8E8] text-white font-semibold text-center text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Service Bay</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
