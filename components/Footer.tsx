'use client';

import React from 'react';
import { Wrench, ShieldCheck, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#181A1C] border-t border-[#2B2F33] text-slate-400 text-xs">
      {/* Upper Credential & Partner Strip */}
      <div className="border-b border-[#2B2F33] py-7 bg-[#141517]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#00A8E8]" />
            <span className="text-white font-semibold tracking-wide text-xs">
              Accredited Workshop & Diagnostic Partnerships
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11px] font-mono text-slate-300">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8E8]" />
              RMI Registered Member
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8E8]" />
              5-Star MIWA Graded Workshop
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8E8]" />
              Bosch Diagnostic Systems
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8E8]" />
              Approved Mechanical Warranty Provider
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#25282B] border border-[#00A8E8]/40 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-[#00A8E8]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif-display text-xl font-bold tracking-tight text-white">CENTRAL</span>
                  <span className="text-[10px] font-mono tracking-widest text-[#00A8E8] font-semibold uppercase">Car Repairs</span>
                </div>
                <span className="text-[9px] tracking-wider text-slate-400 uppercase font-sans-body">Mechanical Workshop &amp; Meguiar&apos;s Valet • Est. 1997</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Premier automotive mechanical workshop and car care center in Salt River, Cape Town. Specializing in manufacturer logbook servicing, engine diagnostics, brake and clutch overhauls, and our on-premises Meguiar&apos;s car wash and valet.
            </p>

            <div className="p-3.5 rounded-lg bg-[#25282B] border border-[#33373C] text-xs space-y-1.5 max-w-sm">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#00A8E8]" />
                <span>RMI Registered Workshop Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-400">
                All mechanical repairs, logbook servicing, and replacement parts backed by RMI standards.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-4">
              Workshop Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Minor &amp; Major Servicing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brakes &amp; Disc Skimming</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Engine Diagnostics &amp; ECU</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Clutch &amp; Gearbox Repairs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Meguiar&apos;s Wash &amp; Valet</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Headlight Restoration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Windscreen Chip Repairs</a></li>
            </ul>
          </div>

          {/* Standards & Transparency */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-4">
              Customer Experience
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#diagnostic-lab" className="hover:text-white transition-colors">Digital Inspection Reports</a></li>
              <li><a href="#estimator" className="hover:text-white transition-colors">Transparent Service Estimator</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Verified Customer Reviews</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Salt River / Albert Rd Location</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Early Morning Key Drop-off</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Warranty Claim Support</a></li>
            </ul>
          </div>

          {/* Workshop Contact */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-4">
              Salt River HQ
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Workshop Address</span>
                <span className="text-white">400 Albert Road<br />Salt River, Cape Town, 7925</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Telephone</span>
                <a href="tel:0214473824" className="text-white font-mono hover:text-[#00A8E8]">(021) 447 3824</a>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">WhatsApp / Mobile</span>
                <a href="https://wa.me/27825630095" target="_blank" rel="noreferrer" className="text-emerald-400 font-mono font-bold hover:underline">082 563 0095</a>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Hours</span>
                <span className="text-slate-300">Mon–Fri: 7:30 – 17:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#2B2F33] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Central Car Repairs. 400 Albert Road, Salt River, Cape Town. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-slate-400">RMI Member</span>
            <span>•</span>
            <span className="hover:text-slate-400">Workmanship Guaranteed</span>
            <span>•</span>
            <span className="hover:text-slate-400">Privacy &amp; Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
