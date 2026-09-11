'use client';

import React from 'react';
import Image from 'next/image';
import { Shield, Award, Clock, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (service?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <>
      <section id="hero-section" className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden">
        {/* Full-bleed Hero Image - Clear, vivid, and prominent */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/workshop_hero_1789103115915.jpg"
            alt="Central Car Repairs Workshop and Service Bays in Salt River"
            fill
            priority
            className="object-cover object-center brightness-[1.02] contrast-[1.03]"
            referrerPolicy="no-referrer"
          />

          {/* Minimal, uncluttered dark scrim to ensure full image visibility while guaranteeing high contrast text */}
          <div className="absolute inset-0 bg-black/25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121315] via-[#121315]/25 to-black/30 pointer-events-none"></div>
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40 pointer-events-none"></div>
        </div>

        {/* Hero Content Overlay: Centered, calm, and uncluttered */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 flex flex-col items-center text-center">
          {/* Refined Trust Badge Pill */}
          <div
            id="hero-badge-pill"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121315]/85 border border-white/15 backdrop-blur-md text-xs text-slate-200 mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#00A8E8]"></span>
            <span className="font-semibold text-[#00A8E8] tracking-widest uppercase text-[11px]">RMI Registered Dealer &amp; Meguiar&apos;s Valet</span>
            <span className="text-white/30">•</span>
            <span className="text-slate-300 font-medium">Salt River, Cape Town</span>
          </div>

          {/* Master Headline: 9 words, Display Serif, beautiful optical tracking */}
          <h1
            id="hero-headline"
            className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-white max-w-4xl leading-[1.12] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]"
          >
            Precision Auto Repairs &amp; Meguiar&apos;s Valet in Salt River
          </h1>

          {/* Crisp 1-sentence Subheadline with generous line-height and constrained measure */}
          <p
            id="hero-subheadline"
            className="font-sans-body text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-10 leading-relaxed font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            Cape Town&apos;s trusted mechanical workshop and full-service car care center at 400 Albert Road, servicing all vehicle makes since 1997.
          </p>

          {/* Clean, balanced CTAs - 2 clear high-contrast actions */}
          <div id="hero-cta-group" className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              id="hero-primary-schedule-btn"
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#00A8E8] hover:bg-[#0092ca] text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-3 shadow-lg shadow-[#00A8E8]/25 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Book Service Bay</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="hero-whatsapp-dispatch-btn"
              href="https://wa.me/27825630095"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#121315]/90 hover:bg-[#2B2F33] text-white border border-white/20 font-semibold text-sm tracking-wide flex items-center justify-center gap-2.5 backdrop-blur-md active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp 082 563 0095</span>
            </a>
          </div>
        </div>
      </section>

      {/* Anchored Cohesive Trust Strip: Bridges the Hero into Services cleanly */}
      <div id="trust-metrics-strip" className="bg-[#1E2022] border-y border-[#2B2F33] py-6 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#2B2F33]">
            <div className="pt-4 md:pt-0 md:px-4 first:pl-0 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#121315] border border-[#00A8E8]/30 flex items-center justify-center text-[#00A8E8] shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-tight">RMI Registered</p>
                <p className="text-xs text-slate-400">Guaranteed Workmanship</p>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#121315] border border-[#00A8E8]/30 flex items-center justify-center text-[#00A8E8] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-tight">Established 1997</p>
                <p className="text-xs text-slate-400">27+ Years Cape Town</p>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#121315] border border-[#00A8E8]/30 flex items-center justify-center text-[#00A8E8] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-tight">Meguiar&apos;s Valet</p>
                <p className="text-xs text-slate-400">On-Premises Car Wash</p>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#121315] border border-[#00A8E8]/30 flex items-center justify-center text-[#00A8E8] shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-tight">400 Albert Road</p>
                <p className="text-xs text-slate-400">Salt River, Cape Town</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
