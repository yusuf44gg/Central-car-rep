'use client';

import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    author: 'Craig Sutherland',
    vehicle: '2021 Toyota Hilux 2.8 GD-6 4x4',
    service: 'Major 60,000 km Logbook Service & Brakes',
    rating: 5,
    date: '3 days ago',
    comment:
      'Central Car Repairs is hands down the most honest and reliable workshop in Salt River. They serviced our Hilux and gave it a full Meguiar’s valet. Kept me updated via phone and WhatsApp with itemized quotes. Reasonable pricing and outstanding work.',
    certified: true,
  },
  {
    id: 2,
    author: 'Annelize van Wyk',
    vehicle: '2020 BMW 330i M Sport',
    service: 'Electronic Diagnostics & Water Pump',
    rating: 5,
    date: '1 week ago',
    comment:
      'Had an elusive overheating warning on Albert Road. The team diagnosed the auxiliary water pump sensor within an hour and replaced it with genuine OEM parts. Excellent communication and clean, secure premises.',
    certified: true,
  },
  {
    id: 3,
    author: 'Mogamat Adams',
    vehicle: '2022 Ford Ranger 2.0 Bi-Turbo',
    service: 'Major Mechanical Service & Brake Pads',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'Convenient location right on Albert Road in Salt River. Dropped the bakkie off before work and picked it up sparkling clean and running like a dream. RMI registered so complete peace of mind.',
    certified: true,
  },
  {
    id: 4,
    author: 'Grant Harrison',
    vehicle: '2019 VW Polo Vivo 1.4',
    service: 'Clutch Kit Replacement & Valet',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'Replaced the slipping clutch kit and completed a full interior and exterior valet. The car drives like new and looks showroom fresh. Honest advice from real professionals who have been here since 1997.',
    certified: true,
  },
  {
    id: 5,
    author: 'Nadia Pillay',
    vehicle: '2021 Mercedes-Benz C200',
    service: 'Headlight Restoration & Service',
    rating: 5,
    date: '1 month ago',
    comment:
      'My headlights were terribly yellowed and foggy. Central Car Repairs refurbished them to crystal clarity and did the annual oil service. Saved me thousands compared to replacing the light units.',
    certified: true,
  },
  {
    id: 6,
    author: 'Hein Brand',
    vehicle: '2018 Toyota Land Cruiser Prado',
    service: 'Brake Overhaul & Windscreen Chip',
    rating: 5,
    date: '1 month ago',
    comment:
      'Repaired a starburst stone chip on the windscreen and replaced rear brake pads. Friendly, fast, and transparent billing. Highly recommended for anyone working or living in Woodstock and Salt River.',
    certified: true,
  },
];

export default function Reviews() {
  const [filter, setFilter] = useState<'all' | 'bakkie' | 'european' | 'general'>('all');

  const filteredReviews = REVIEWS.filter((r) => {
    if (filter === 'bakkie') return r.vehicle.includes('Hilux') || r.vehicle.includes('Ranger') || r.vehicle.includes('Land Cruiser');
    if (filter === 'european') return r.vehicle.includes('BMW') || r.vehicle.includes('Mercedes') || r.vehicle.includes('VW');
    return true;
  });

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F4F5F7] border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4D7DC] text-xs font-semibold text-[#00A8E8] uppercase tracking-wider mb-4 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-[#00A8E8] text-[#00A8E8]" />
              Verified Cape Town Motorists
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2022] tracking-tight mb-4">
              Trusted by Drivers Across Cape Town
            </h2>
            <p className="font-sans-body text-[#4A5056] text-base sm:text-lg">
              Read verified feedback from vehicle owners who trust Central Car Repairs at 400 Albert Road, Salt River for honest mechanics, precision servicing, and showroom Meguiar&apos;s valets.
            </p>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="p-4 rounded-xl bg-white border border-[#E2E4E8] shadow-xs flex items-center gap-4">
            <div className="text-3xl font-bold font-mono text-[#1E2022]">4.9</div>
            <div>
              <div className="flex text-amber-400 gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-[#6B7280]">Google Maps Verified Reviews</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'bakkie', label: 'Bakkie & 4x4' },
            { id: 'european', label: 'German & European' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer border ${
                filter === tab.id
                  ? 'bg-[#00A8E8] border-[#00A8E8] text-white shadow-xs'
                  : 'bg-white border-[#E2E4E8] text-[#4A5056] hover:text-[#1E2022] hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E4E8] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Header with stars & date */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-[#6B7280] font-mono">{review.date}</span>
                </div>

                {/* Service Tag */}
                <div className="inline-block bg-[#00A8E8]/10 text-[#00A8E8] text-xs font-mono font-bold px-2.5 py-1 rounded border border-[#00A8E8]/20 mb-4">
                  {review.service}
                </div>

                {/* Body Text */}
                <p className="font-sans-body text-sm text-[#374151] leading-relaxed mb-6 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author & Vehicle */}
              <div className="pt-4 border-t border-[#E2E4E8] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1E2022] flex items-center gap-1.5">
                    <span>{review.author}</span>
                    {review.certified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    )}
                  </h4>
                  <p className="text-xs text-[#6B7280] mt-0.5">{review.vehicle}</p>
                </div>
                <div className="text-[10px] uppercase tracking-wider font-semibold text-[#00A8E8] bg-[#00A8E8]/10 px-2.5 py-1 rounded">
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
