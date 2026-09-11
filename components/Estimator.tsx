'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, Clock, ShieldCheck, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

interface EstimatorProps {
  onOpenBookingWithService: (serviceName: string, vehicleCategory: string) => void;
}

interface ServiceOption {
  id: string;
  name: string;
  category: string;
  symptoms: string[];
  baseTime: string;
  oemSpec: string;
  priceRanges: {
    [key: string]: { min: number; max: number };
  };
  description: string;
}

const VEHICLE_CATEGORIES = [
  { id: 'european', label: 'European & Luxury', sub: 'BMW, Mercedes, Audi, VW, Porsche' },
  { id: 'bakkie_4x4', label: 'Bakkie & 4x4 / SUV', sub: 'Toyota Hilux, Ford Ranger, Isuzu, Land Cruiser' },
  { id: 'passenger', label: 'Passenger & Hatch', sub: 'Toyota, Hyundai, Kia, Renault, Suzuki' },
  { id: 'fleet', label: 'Fleet & Commercial', sub: 'Ford Transit, Quantum, Delivery Vans' },
];

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'brakes',
    name: 'Brake Disc Skimming, Pads & Fluid Service',
    category: 'Braking & Safety',
    symptoms: [
      'High-pitched squeal or metallic grinding under braking',
      'Spongy pedal, steering shudder or vibration under high speed',
      'ABS warning light or brake pad wear warning illuminated',
    ],
    baseTime: '2 – 3 Hours',
    oemSpec: 'Ferodo / Brembo / ATE OEM Spec Pads & Rotors',
    priceRanges: {
      european: { min: 2850, max: 5400 },
      bakkie_4x4: { min: 2250, max: 4200 },
      passenger: { min: 1650, max: 3100 },
      fleet: { min: 1950, max: 3600 },
    },
    description: 'Precision micrometer disc profiling, on-car rotor skimming, ceramic brake pads fitment, and synthetic DOT 4 fluid pressure flush.',
  },
  {
    id: 'diagnostics',
    name: 'Advanced Diagnostic Scan & ECU Telemetry',
    category: 'Computer Diagnostics',
    symptoms: [
      'Check engine light / limp mode or flashing warning light',
      'Engine hesitation, rough idle, stalling or misfire',
      'Intermittent CAN-bus or electrical sensor failure',
    ],
    baseTime: '1 – 2 Hours',
    oemSpec: 'Bosch & Dealer-Grade Diagnostic Systems',
    priceRanges: {
      european: { min: 950, max: 1650 },
      bakkie_4x4: { min: 850, max: 1450 },
      passenger: { min: 750, max: 1250 },
      fleet: { min: 800, max: 1350 },
    },
    description: 'Live sensor data stream interrogation, freeze-frame extraction, oscilloscope electrical trace, and itemized diagnostic audit.',
  },
  {
    id: 'suspension',
    name: 'Hunter 3D Wheel Alignment & Suspension',
    category: 'Steering & Handling',
    symptoms: [
      'Vehicle pulls to the left/right or steering off-center',
      'Clunking noise over Cape Town road imperfections or speed humps',
      'Uneven shoulder tire wear or premature tread scalloping',
    ],
    baseTime: '1 – 2 Hours',
    oemSpec: 'Hunter HawkEye 3D Digital Alignment System',
    priceRanges: {
      european: { min: 650, max: 1450 },
      bakkie_4x4: { min: 550, max: 1250 },
      passenger: { min: 450, max: 950 },
      fleet: { min: 500, max: 1100 },
    },
    description: 'Computerized 3D camber, caster, and toe alignment, ball joint, tie rod, and control arm bushing integrity test.',
  },
  {
    id: 'maintenance',
    name: 'Major & Minor Logbook Servicing',
    category: 'Logbook Maintenance',
    symptoms: [
      'Due for scheduled 15,000 km or 30,000 km milestone',
      'Annual preventative maintenance & fluid renewal',
      'Pre-road trip or holiday vehicle safety check',
    ],
    baseTime: '2 – 3 Hours',
    oemSpec: 'Liqui-Moly / Castrol Synthetic OEM Fluids',
    priceRanges: {
      european: { min: 2650, max: 4950 },
      bakkie_4x4: { min: 2350, max: 4400 },
      passenger: { min: 1650, max: 3200 },
      fleet: { min: 1850, max: 3500 },
    },
    description: 'Full 48-point digital vehicle health check, synthetic engine oil swap, OEM air/fuel/oil filters, spark plug/glow plug check, and logbook stamp.',
  },
  {
    id: 'walnut',
    name: 'Walnut Blasting & Decarbonization',
    category: 'Engine Performance',
    symptoms: [
      'Loss of power, sluggish acceleration, poor fuel economy',
      'Cold-start misfire or rough morning idle',
      'Carbon buildup typical in direct-injection engines (TSI, TFSI, N54/N55)',
    ],
    baseTime: '4 – 5 Hours',
    oemSpec: 'Fine Walnut Shell Decarbonization System',
    priceRanges: {
      european: { min: 3800, max: 6500 },
      bakkie_4x4: { min: 3200, max: 5600 },
      passenger: { min: 2800, max: 4800 },
      fleet: { min: 3000, max: 5200 },
    },
    description: 'Safe media blasting of intake ports and intake valves to eliminate suffocating baked carbon, restoring clean airflow and throttle response.',
  },
  {
    id: 'climate',
    name: 'Air-Conditioning Regas & HVAC Diagnostics',
    category: 'Climate Control',
    symptoms: [
      'AC blowing warm or humid air on maximum cooling',
      'Unpleasant musty smell when climate control engages',
      'Compressor clutch squealing or cycling constantly',
    ],
    baseTime: '1.5 – 2 Hours',
    oemSpec: 'Automated Refrigerant Recovery & Vacuum Fill',
    priceRanges: {
      european: { min: 1150, max: 1950 },
      bakkie_4x4: { min: 950, max: 1650 },
      passenger: { min: 850, max: 1450 },
      fleet: { min: 900, max: 1550 },
    },
    description: 'Full refrigerant evacuation, vacuum leak check, compressor lubricating oil replenishment, and precision factory-spec gas charge.',
  },
];

export default function Estimator({ onOpenBookingWithService }: EstimatorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('european');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('brakes');
  const [selectedSymptom, setSelectedSymptom] = useState<string>('');

  const currentService = SERVICE_OPTIONS.find((s) => s.id === selectedServiceId) || SERVICE_OPTIONS[0];
  const priceRange = currentService.priceRanges[selectedCategory] || { min: 1800, max: 3500 };

  const handleBook = () => {
    const categoryName = VEHICLE_CATEGORIES.find((c) => c.id === selectedCategory)?.label || 'Vehicle';
    onOpenBookingWithService(currentService.name, categoryName);
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-[#F4F5F7] border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4D7DC] text-xs font-semibold text-[#00A8E8] uppercase tracking-wider mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#00A8E8]" />
            Cape Town Workshop Cost Estimator
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2022] tracking-tight mb-4">
            Transparent Repair & Service Estimator (ZAR)
          </h2>
          <p className="font-sans-body text-[#4A5056] text-base sm:text-lg">
            Estimate transparent workshop costs calibrated for your vehicle type, genuine OEM parts, and registered RMI guarantee at 400 Albert Road, Salt River.
          </p>
        </div>

        {/* Estimator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Vehicle Category Selector */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E4E8] shadow-xs">
              <label className="block text-xs font-semibold text-[#1E2022] uppercase tracking-wider mb-3">
                1. Select Vehicle Platform
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VEHICLE_CATEGORIES.map((cat) => {
                  const active = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`p-3.5 rounded-lg text-left transition-all cursor-pointer border ${
                        active
                          ? 'bg-[#00A8E8]/10 border-[#00A8E8] text-[#1E2022] shadow-xs ring-1 ring-[#00A8E8]'
                          : 'bg-[#F4F5F7] border-[#E2E4E8] hover:border-slate-400 text-[#4A5056]'
                      }`}
                    >
                      <span className={`block font-semibold text-sm ${active ? 'text-[#00A8E8]' : 'text-[#1E2022]'}`}>
                        {cat.label}
                      </span>
                      <span className="block text-[11px] text-[#6B7280] mt-0.5 leading-tight truncate">
                        {cat.sub}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Service Selection */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E4E8] shadow-xs">
              <label className="block text-xs font-semibold text-[#1E2022] uppercase tracking-wider mb-3">
                2. Select Required Service System
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((svc) => {
                  const active = selectedServiceId === svc.id;
                  return (
                    <button
                      key={svc.id}
                      onClick={() => {
                        setSelectedServiceId(svc.id);
                        setSelectedSymptom('');
                      }}
                      className={`p-4 rounded-lg text-left transition-all cursor-pointer border ${
                        active
                          ? 'bg-[#00A8E8]/10 border-[#00A8E8] text-[#1E2022] shadow-xs ring-1 ring-[#00A8E8]'
                          : 'bg-[#F4F5F7] border-[#E2E4E8] hover:border-slate-400 text-[#4A5056]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-mono text-[#00A8E8] font-bold uppercase tracking-wider">
                          {svc.category}
                        </span>
                        {active && <CheckCircle2 className="w-4 h-4 text-[#00A8E8]" />}
                      </div>
                      <h4 className="font-semibold text-sm text-[#1E2022]">{svc.name}</h4>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Diagnostic Symptoms */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E4E8] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold text-[#1E2022] uppercase tracking-wider">
                  3. Observed Symptoms (Optional)
                </label>
                <span className="text-xs text-[#6B7280]">Helps our mechanics prepare parts</span>
              </div>
              <div className="space-y-2">
                {currentService.symptoms.map((symptom, idx) => {
                  const isChecked = selectedSymptom === symptom;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedSymptom(isChecked ? '' : symptom)}
                      className={`w-full p-3 rounded-lg text-left text-xs transition-all flex items-center justify-between border cursor-pointer ${
                        isChecked
                          ? 'bg-[#00A8E8]/15 border-[#00A8E8] text-[#1E2022]'
                          : 'bg-[#F4F5F7] border-[#E2E4E8] hover:border-slate-400 text-[#4A5056]'
                      }`}
                    >
                      <span>{symptom}</span>
                      <span
                        className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] font-bold ${
                          isChecked ? 'bg-[#00A8E8] text-white border-[#00A8E8]' : 'border-slate-400'
                        }`}
                      >
                        {isChecked ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Output Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-7 rounded-xl bg-[#1E2022] text-white border border-[#2B2F33] shadow-2xl relative overflow-hidden">
              {/* Top accent bar in Anodized Cyan */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#00A8E8]"></div>

              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00A8E8] font-bold">
                  Estimate Breakdown (ZAR)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#121315] border border-[#3A3F45] text-[11px] text-[#00A8E8] font-medium">
                  <Sparkles className="w-3 h-3 text-[#00A8E8]" />
                  RMI Code of Ethics
                </span>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-white mb-2">
                {currentService.name}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {currentService.description}
              </p>

              {/* Price Calculation Box */}
              <div className="p-5 rounded-lg bg-[#121315] border border-[#2B2F33] mb-6">
                <span className="text-xs text-slate-400 block mb-1">Estimated Turnkey Cost (Parts & Labor)</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold text-white font-mono">
                    R{priceRange.min.toLocaleString()} – R{priceRange.max.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">ZAR (Excl. VAT)</span>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-3 mb-6 text-xs text-slate-300">
                <div className="flex items-center justify-between py-2 border-b border-[#2B2F33]">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#00A8E8]" />
                    Estimated Bay Time:
                  </span>
                  <span className="font-semibold text-white">{currentService.baseTime}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#2B2F33]">
                  <span className="text-slate-400 flex items-center gap-1.5">
                     <ShieldCheck className="w-3.5 h-3.5 text-[#00A8E8]" />
                     Warranty Coverage:
                  </span>
                  <span className="font-semibold text-[#00A8E8]">RMI Registered Guarantee</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#2B2F33]">
                  <span className="text-slate-400 flex items-center gap-1.5">
                     <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8E8]" />
                     Quality Spec:
                  </span>
                  <span className="font-semibold text-white text-right max-w-[200px] truncate">
                    {currentService.oemSpec}
                  </span>
                </div>
              </div>

              {/* Pre-Booking Transparency Notice */}
              <div className="p-3.5 rounded bg-[#121315] border border-[#2B2F33] text-[11px] text-slate-300 flex items-start gap-2.5 mb-6">
                <AlertCircle className="w-4 h-4 text-[#00A8E8] shrink-0 mt-0.5" />
                <span>
                  Our technicians conduct a thorough inspection before carrying out repairs. You receive itemized authorization before any additional work commences.
                </span>
              </div>

              {/* Action Button */}
              <button
                id="estimator-book-service-btn"
                onClick={handleBook}
                className="w-full py-4 rounded-lg bg-[#00A8E8] hover:bg-[#0092ca] active:scale-[0.98] text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md shadow-[#00A8E8]/25 transition-all cursor-pointer"
              >
                <span>Book Service in Salt River</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
