'use client';

import React from 'react';
import Image from 'next/image';
import { Shield, Zap, Cpu, Gauge, Disc, Compass, Wrench, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: (serviceName?: string) => void;
}

const SERVICES_DATA = [
  {
    id: 'logbook-servicing',
    title: 'Major & Minor Mechanical Servicing',
    category: 'Logbook Maintenance',
    icon: Shield,
    featuredImage: '/assets/images/diagnostic_bay_1789103134406.jpg',
    description:
      'Comprehensive mechanical servicing for all makes and models of passenger cars, SUVs, and light trucks. Quality filters, premium lubricants, and thorough 50-point safety audits.',
    features: [
      'Castrol & Liqui-Moly synthetic oil and OEM filter replacements',
      'Spark plugs, fuel filters, fluid top-ups & safety checks',
      'RMI registered guarantee on all replacement parts and labor',
    ],
    turnaround: 'Same-Day Turnaround',
    warranty: 'Work Guaranteed',
  },
  {
    id: 'diagnostics-telemetry',
    title: 'Computer Diagnostics & Electrical Tracing',
    category: 'Electronic Diagnostics',
    icon: Cpu,
    description:
      'State-of-the-art electronic diagnostic scanning tools to read error codes, diagnose check-engine warnings, test sensor signals, and clear vehicle warning lights.',
    features: [
      'OBD-II multi-brand computer scanning and fault clearing',
      'Engine, ABS, and airbag system interrogation',
      'Auto-electrical diagnostic investigation and battery tests',
    ],
    turnaround: '1–2 Hours',
    warranty: 'Precision Tested',
  },
  {
    id: 'brakes-clutch-suspension',
    title: 'Brakes, Clutches & Suspension Repairs',
    category: 'Mechanical Overhaul',
    icon: Disc,
    description:
      'Front and rear brake pad and disc replacement, clutch kit fitment, shock absorbers, control arm bushings, tie rod ends, and steering components.',
    features: [
      'Ferodo, Brembo & OEM approved disc and pad fitment',
      'Hydraulic clutch bleeding and complete master/slave cylinder rebuilds',
      'Suspension noise diagnosis and road-tested stability check',
    ],
    turnaround: 'Same-Day / 24 Hours',
    warranty: 'RMI Backed',
  },
  {
    id: 'car-wash-valet',
    title: 'On-Premises Meguiar’s Car Wash & Full Valet',
    category: 'Vehicle Detailing',
    icon: Zap,
    description:
      'Our dedicated on-site car wash facility offers everything from rapid wash & go to complete showroom valets using genuine Meguiar’s premium detailing products.',
    features: [
      'Meguiar’s high-gloss hand wash, chamois dry, and wax application',
      'Deep interior shampoo, carpet extraction, and leather conditioning',
      'Engine bay degreasing and undercarriage wash',
    ],
    turnaround: '1–4 Hours',
    warranty: 'Showroom Finish',
  },
  {
    id: 'headlight-restoration',
    title: 'Headlight Lens Refurbishing & Restoration',
    category: 'Safety & Visibility',
    icon: Gauge,
    description:
      'Professional mechanical wetsanding, compound polishing, and UV-resistant protective clear coating for cloudy, yellowed, or oxidized polycarbonate headlight lenses.',
    features: [
      'Restores up to 100% of night-time beam clarity and projection',
      'UV-inhibitor sealant to protect against Cape Town sun exposure',
      'Fraction of the cost of buying new headlight assemblies',
    ],
    turnaround: '1 Hour',
    warranty: 'Long-Life Clarity',
  },
  {
    id: 'windscreen-repairs',
    title: 'Windscreen Chip & Minor Crack Repairs',
    category: 'Glass Repair',
    icon: Compass,
    description:
      'Specialist optical resin injection for stone chips, starbursts, and minor cracks before they spread across the glass, passing Roadworthy inspections.',
    features: [
      'High-refractive optical resin cures under UV light',
      'Prevents expensive full windscreen replacements',
      'Insurance-friendly and certified for road safety',
    ],
    turnaround: '30–45 Mins',
    warranty: 'Structural Seal',
  },
];

export default function Services({ onOpenBooking }: ServicesProps) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F4F5F7] border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4D7DC] text-xs font-semibold text-[#00A8E8] uppercase tracking-wider mb-4 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#00A8E8]" />
              Engineering Disciplines
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2022] tracking-tight mb-4">
              Comprehensive Automotive Services
            </h2>
            <p className="font-sans-body text-[#4A5056] text-base sm:text-lg">
              Every procedure adheres to manufacturer technical specifications and RMI codes of practice with all workmanship guaranteed.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="self-start md:self-auto px-5 py-2.5 rounded-lg bg-[#1E2022] hover:bg-[#2B2F33] text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
          >
            <span>Book Service Bay</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00A8E8]" />
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            const isFeatured = !!service.featuredImage;

            return (
              <div
                key={service.id}
                className={`rounded-xl bg-white border border-[#E2E4E8] hover:border-[#00A8E8]/70 hover:shadow-xl hover:shadow-slate-300/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Optional Macro Structural Photography banner for featured card */}
                {isFeatured && (
                  <div className="relative h-48 w-full overflow-hidden border-b border-[#E2E4E8]">
                    <Image
                      src={service.featuredImage}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 bg-[#00A8E8] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded z-10 shadow-sm">
                      RMI Registered
                    </span>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  {/* Top Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-[#00A8E8] font-bold uppercase tracking-wider">
                      {service.category}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#F4F5F7] border border-[#E2E4E8] flex items-center justify-center text-[#1E2022] group-hover:text-[#00A8E8] group-hover:border-[#00A8E8]/50 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif-display text-xl font-bold text-[#1E2022] mb-2.5 group-hover:text-[#00A8E8] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans-body text-sm text-[#4A5056] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Tech Points */}
                  <div className="space-y-2.5 mb-6 mt-auto">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#2D3136]">
                        <Check className="w-3.5 h-3.5 text-[#00A8E8] shrink-0" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specs Footer */}
                  <div className="pt-4 border-t border-[#E2E4E8] flex items-center justify-between text-xs text-[#6B7280]">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#8C939E] block">Duration</span>
                      <span className="font-bold text-[#1E2022]">{service.turnaround}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-semibold text-[#8C939E] block">Quality</span>
                      <span className="font-bold text-[#00A8E8]">{service.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-0 bg-white">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full py-3 rounded-lg bg-[#1E2022] hover:bg-[#00A8E8] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-[0.99]"
                  >
                    <span>Inquire About {service.category}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
