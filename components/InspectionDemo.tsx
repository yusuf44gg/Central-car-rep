'use client';

import React, { useState } from 'react';
import { Smartphone, CheckCircle, Video, FileText, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';

export default function InspectionDemo() {
  const [activeTab, setActiveTab] = useState<'brakes' | 'battery' | 'fluid'>('brakes');
  const [approvalStatus, setApprovalStatus] = useState<string | null>(null);

  return (
    <section id="diagnostic-lab" className="py-20 lg:py-28 bg-[#F4F5F7] border-y border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4D7DC] text-xs font-semibold text-[#00A8E8] uppercase tracking-wider mb-4 shadow-xs">
            <Activity className="w-3.5 h-3.5 text-[#00A8E8]" />
            100% Visual Transparency
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2022] tracking-tight mb-4">
            Digital Video Inspection Reports
          </h2>
          <p className="font-sans-body text-[#4A5056] text-base sm:text-lg">
            See exactly what our certified mechanics inspect in Salt River. Before any repair begins, you receive an itemized inspection summary and photographic findings directly on your phone or WhatsApp.
          </p>
        </div>

        {/* Live Workshop Bay Tracker & Interactive Digital Report Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Feature Column: 3 Pillars of Diagnostic Integrity */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-5 rounded-xl bg-white border border-[#E2E4E8] shadow-xs flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#00A8E8]/10 border border-[#00A8E8]/30 text-[#00A8E8] flex items-center justify-center shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-[#1E2022] mb-1.5">
                  1. Transparent Photographic &amp; Video Evidence
                </h4>
                <p className="text-sm text-[#4A5056] leading-relaxed">
                  Our technician inspects your vehicle on the hydraulic lift, photographing worn brake linings, leaking shock absorbers, or split CV boots so you verify condition firsthand.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E2E4E8] shadow-xs flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#00A8E8]/10 border border-[#00A8E8]/30 text-[#00A8E8] flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-[#1E2022] mb-1.5">
                  2. Interactive WhatsApp / Digital Authorization
                </h4>
                <p className="text-sm text-[#4A5056] leading-relaxed">
                  Review itemized costs prioritized into green (safe), amber (monitor next service), and red (immediate safety issue). Approve or query individual items without sales pressure.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E2E4E8] shadow-xs flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#00A8E8]/10 border border-[#00A8E8]/30 text-[#00A8E8] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-[#1E2022] mb-1.5">
                  3. Registered RMI Dealer Integrity
                </h4>
                <p className="text-sm text-[#4A5056] leading-relaxed">
                  Every replacement part and procedure adheres to RMI consumer protection and standard repair codes, with all work guaranteed.
                </p>
              </div>
            </div>

            {/* Live Triage Bay Status Box */}
            <div className="p-4 rounded-lg bg-white border border-[#00A8E8]/40 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <span className="text-xs font-semibold text-[#1E2022] block">Salt River Workshop &amp; Valet: Open Today</span>
                  <span className="text-[11px] text-[#6B7280]">Conveniently Located at 400 Albert Road</span>
                </div>
              </div>
              <span className="text-xs font-mono text-[#00A8E8] font-bold">RMI Dealer</span>
            </div>
          </div>

          {/* Right Column: Interactive Phone / Digital Inspection Interface */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-[#1E2022] border border-[#2B2F33] p-5 shadow-2xl relative text-white">
              {/* Phone Header Mock */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2B2F33] text-xs">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#00A8E8]" />
                  <span className="font-mono font-bold text-white text-xs">CENTRAL-INSPECT #2481</span>
                </div>
                <span className="bg-[#00A8E8]/20 text-[#00A8E8] text-[10px] font-bold px-2 py-0.5 rounded border border-[#00A8E8]/40">
                  READY FOR APPROVAL
                </span>
              </div>

              {/* Vehicle Title */}
              <div className="py-3">
                <div className="text-[11px] text-slate-400 uppercase tracking-wide">Vehicle Inspection Subject</div>
                <div className="text-base font-bold text-white">2022 Toyota Hilux 2.8 GD-6 4x4 Legend RS</div>
                <div className="text-xs text-slate-400">Reg: CA 482-910 • Odometer: 54,200 km</div>
              </div>

              {/* Inspection System Tabs */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('brakes')}
                  className={`flex-1 py-1.5 text-xs font-medium rounded transition-all cursor-pointer ${
                    activeTab === 'brakes'
                      ? 'bg-[#00A8E8] text-white shadow'
                      : 'bg-[#121315] text-slate-400 hover:text-white'
                  }`}
                >
                  Brakes (Red)
                </button>
                <button
                  onClick={() => setActiveTab('battery')}
                  className={`flex-1 py-1.5 text-xs font-medium rounded transition-all cursor-pointer ${
                    activeTab === 'battery'
                      ? 'bg-[#00A8E8] text-white shadow'
                      : 'bg-[#121315] text-slate-400 hover:text-white'
                  }`}
                >
                  Battery (Amber)
                </button>
                <button
                  onClick={() => setActiveTab('fluid')}
                  className={`flex-1 py-1.5 text-xs font-medium rounded transition-all cursor-pointer ${
                    activeTab === 'fluid'
                      ? 'bg-[#00A8E8] text-white shadow'
                      : 'bg-[#121315] text-slate-400 hover:text-white'
                  }`}
                >
                  Fluids (Green)
                </button>
              </div>

              {/* Tab Content Display */}
              {activeTab === 'brakes' && (
                <div className="p-4 rounded-lg bg-[#121315] border border-rose-900/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                      Immediate: Front Brake Pads Worn
                    </span>
                    <span className="text-xs font-mono font-bold text-white">R2,250.00</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Front inner brake pads measured at <span className="text-rose-400 font-bold">2.4mm</span> (Safety threshold: 3.0mm). Rotors are within factory thickness spec and can be skimmed on-car.
                  </p>
                  <div className="p-2.5 rounded bg-[#1E2022] text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Includes Ferodo Premier pads + disc skim</span>
                    <span className="text-emerald-400 font-semibold">Parts in Stock</span>
                  </div>
                </div>
              )}

              {activeTab === 'battery' && (
                <div className="p-4 rounded-lg bg-[#121315] border border-amber-900/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      Monitor: 12V Starter Battery
                    </span>
                    <span className="text-xs font-mono font-bold text-white">R1,850.00 (Optional)</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Battery conductance tested at 580 CCA against 720 CCA rated spec (74% health). Starts reliably now, monitor before winter.
                  </p>
                  <div className="p-2.5 rounded bg-[#1E2022] text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Willard / Sabat OEM Replacement</span>
                    <span className="text-amber-400 font-semibold">Monitor Next 6 Mos</span>
                  </div>
                </div>
              )}

              {activeTab === 'fluid' && (
                <div className="p-4 rounded-lg bg-[#121315] border border-emerald-900/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      Passed: Differential & Engine Fluids
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400">PASSED</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    4x4 transfer case & rear differential oil clear and at correct level. Brake fluid moisture &lt; 1%. Antifreeze concentration 50%.
                  </p>
                  <div className="p-2.5 rounded bg-[#1E2022] text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Next 4x4 fluid check at 60,000 km</span>
                    <span className="text-emerald-400 font-semibold">Complimentary Check</span>
                  </div>
                </div>
              )}

              {/* Sample Mobile Action Row */}
              {approvalStatus ? (
                <div className="mt-5 pt-4 border-t border-[#2B2F33]">
                  <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{approvalStatus}</span>
                    </span>
                    <button
                      onClick={() => setApprovalStatus(null)}
                      className="text-[10px] text-slate-400 hover:text-white underline cursor-pointer ml-2"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-5 pt-4 border-t border-[#2B2F33] flex gap-3">
                  <button
                    className="flex-1 py-2.5 rounded-lg bg-[#00A8E8] hover:bg-[#0092ca] active:scale-95 text-white text-xs font-bold transition-all cursor-pointer shadow-md"
                    onClick={() => setApprovalStatus('Digital authorization logged: Workshop commenced on Bay #2.')}
                  >
                    Approve Selected (R2,250.00)
                  </button>
                  <a
                    href="tel:0214473824"
                    className="px-4 py-2.5 rounded-lg bg-[#121315] hover:bg-[#2B2F33] border border-[#3A3F45] text-slate-200 text-xs font-medium transition-all text-center flex items-center justify-center"
                  >
                    Call Workshop
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
