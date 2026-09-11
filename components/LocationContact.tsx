'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Car, Coffee, Key, Navigation, Send, CheckCircle2 } from 'lucide-react';

export default function LocationContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    inquiry: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F4F5F7] border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4D7DC] text-xs font-semibold text-[#00A8E8] uppercase tracking-wider mb-4 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#00A8E8]" />
            Salt River Workshop &amp; Valet Center
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2022] tracking-tight mb-4">
            Workshop Location &amp; Direct Contact
          </h2>
          <p className="font-sans-body text-[#4A5056] text-base sm:text-lg">
            Centrally situated at 400 Albert Road in Salt River, Cape Town, featuring dedicated mechanical repair bays and our on-premises Meguiar&apos;s car wash.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Facility Details & Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Address & Contact Card */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E4E8] shadow-xs space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00A8E8]/10 border border-[#00A8E8]/30 text-[#00A8E8] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-[#1E2022]">
                    Central Car Repairs
                  </h3>
                  <p className="text-sm text-[#4A5056] mt-1.5 leading-relaxed">
                    400 Albert Road<br />
                    Salt River, Cape Town, 7925
                  </p>
                  <a
                    href="https://maps.app.goo.gl/J3aYVMMr9kEgVFqw7"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8E8] hover:underline mt-2.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps / Directions</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="pt-5 border-t border-[#E2E4E8] space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#4A5056] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#00A8E8]" />
                    Workshop Reception:
                  </span>
                  <a href="tel:0214473824" className="text-sm font-bold font-mono text-[#1E2022] hover:text-[#00A8E8] transition-colors">
                    (021) 447 3824
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#4A5056] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    WhatsApp / Cell:
                  </span>
                  <a
                    href="https://wa.me/27825630095"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold font-mono text-emerald-600 hover:underline"
                  >
                    082 563 0095
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#4A5056] flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00A8E8]" />
                    Email Service Desk:
                  </span>
                  <a href="mailto:info@central-car-repairs.co.za" className="text-sm font-mono text-[#4A5056] hover:text-[#1E2022] transition-colors">
                    info@central-car-repairs.co.za
                  </a>
                </div>
              </div>
            </div>

            {/* Hours of Operation Card */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E4E8] shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#00A8E8]" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E2022]">
                  Workshop &amp; Valet Operating Hours
                </h4>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-[#E2E4E8]">
                  <span className="text-[#4A5056]">Monday – Friday</span>
                  <span className="font-semibold text-[#1E2022]">7:30 AM – 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#E2E4E8]">
                  <span className="text-[#4A5056]">Saturday &amp; Sunday</span>
                  <span className="text-[#6B7280] font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Facility Amenities */}
            <div className="p-5 rounded-xl bg-white border border-[#E2E4E8] shadow-xs">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1E2022] block mb-3">
                Customer Convenience &amp; Facility Features
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs text-[#4A5056]">
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-[#00A8E8]" />
                  <span>On-Site Meguiar&apos;s Wash</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-3.5 h-3.5 text-[#00A8E8]" />
                  <span>Customer Reception Area</span>
                </div>
                <div className="flex items-center gap-2">
                  <Key className="w-3.5 h-3.5 text-[#00A8E8]" />
                  <span>Early Drop-off Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#00A8E8]" />
                  <span>Secure Enclosed Premises</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Dark Google Map & Direct Dispatch Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Embedded Dark-Styled Google Map */}
            <div className="rounded-xl overflow-hidden border border-[#2B2F33] bg-[#1E2022] shadow-xl relative">
              <div className="p-3 bg-[#1E2022] border-b border-[#2B2F33] flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  GPS: 400 Albert Road, Salt River, Cape Town
                </span>
                <a
                  href="https://maps.app.goo.gl/J3aYVMMr9kEgVFqw7"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-mono text-[#00A8E8] hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
              <div className="relative h-72 sm:h-80 w-full bg-[#1E2022]">
                <iframe
                  id="google-facility-map"
                  title="Central Car Repairs Salt River Map"
                  src="https://maps.google.com/maps?q=Central+Car+Repairs+400+Albert+Road+Salt+River+Cape+Town&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[1.1] opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Floating Map Pin Card */}
                <div className="absolute bottom-4 left-4 p-3 rounded-lg bg-[#1E2022]/95 border border-[#2B2F33] backdrop-blur-md text-xs text-white max-w-xs shadow-xl pointer-events-none">
                  <p className="font-bold font-serif-display text-sm text-white">Central Car Repairs &amp; Valet</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">400 Albert Road, Salt River • Quick access from N2, Nelson Mandela Blvd &amp; Woodstock</p>
                </div>
              </div>
            </div>

            {/* Quick Diagnostic Inquiry Form */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E4E8] shadow-xs">
              <h3 className="font-serif-display text-xl font-bold text-[#1E2022] mb-2">
                Ask Our Workshop Service Advisors
              </h3>
              <p className="text-xs text-[#4A5056] mb-6">
                Have a question regarding your vehicle service, warning light, clutch, or full Meguiar&apos;s valet? Send us a message and we will respond promptly.
              </p>

              {formSubmitted ? (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Inquiry received! A Central Car Repairs advisor will contact you shortly.</span>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', phone: '', vehicle: '', inquiry: '' });
                    }}
                    className="text-xs underline text-emerald-700 hover:text-emerald-900 ml-3 cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E2022] mb-1.5">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Johan van der Merwe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F4F5F7] border border-[#E2E4E8] text-xs text-[#1E2022] placeholder:text-[#6B7280] focus:outline-none focus:border-[#00A8E8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1E2022] mb-1.5">Mobile Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 082 555 1234"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F4F5F7] border border-[#E2E4E8] text-xs text-[#1E2022] placeholder:text-[#6B7280] focus:outline-none focus:border-[#00A8E8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E2022] mb-1.5">Vehicle Make, Model &amp; Year</label>
                    <input
                      type="text"
                      required
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      placeholder="e.g. 2021 Toyota Hilux 2.8 GD-6 or BMW 320d"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F4F5F7] border border-[#E2E4E8] text-xs text-[#1E2022] placeholder:text-[#6B7280] focus:outline-none focus:border-[#00A8E8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E2022] mb-1.5">Describe Symptom, Repair, or Valet Required</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.inquiry}
                      onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                      placeholder="Tell us what repair, mechanical service, or Meguiar's valet you need..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F4F5F7] border border-[#E2E4E8] text-xs text-[#1E2022] placeholder:text-[#6B7280] focus:outline-none focus:border-[#00A8E8] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#00A8E8] hover:bg-[#0092ca] text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry to Central Car Repairs</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
