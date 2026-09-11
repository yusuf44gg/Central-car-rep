'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Car, Shield, CheckCircle2, Phone, AlertCircle, Wrench } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedCategory?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedService = '',
  preselectedCategory = '',
}: BookingModalProps) {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [service, setService] = useState(preselectedService || 'Brake Disc Skimming, Pads & Fluid Service');
  const [vehicleMake, setVehicleMake] = useState(preselectedCategory || 'European & Luxury');
  const [yearModel, setYearModel] = useState('');
  const [date, setDate] = useState('2026-09-15');
  const [timeSlot, setTimeSlot] = useState('07:30 AM (Morning Drop-off)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [needsShuttle, setNeedsShuttle] = useState(false);
  const [notes, setNotes] = useState('');
  const [workOrderNumber, setWorkOrderNumber] = useState('CCR-84920');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = `CCR-${Date.now().toString().slice(-5)}`;
    setWorkOrderNumber(orderId);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1E2022] border border-[#2B2F33] shadow-2xl p-6 sm:p-8 text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#121315] text-slate-400 hover:text-white border border-[#2B2F33] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00A8E8] uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5 text-[#00A8E8]" />
              Central Car Repairs • 400 Albert Road, Salt River
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Book Workshop Service or Meguiar&apos;s Valet
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Reserve your bay with our experienced technicians in Salt River. RMI registered, quality replacement parts and workmanship guaranteed.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service & Category Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Required Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121315] border border-[#2B2F33] text-xs text-white focus:outline-none focus:border-[#00A8E8]"
                  >
                    <option value="Major & Minor Logbook Servicing">Major & Minor Logbook Servicing</option>
                    <option value="Brake Disc Skimming, Pads & Fluid Service">Brake Disc Skimming, Pads & Fluid Service</option>
                    <option value="Advanced Diagnostic Scan & Fault Finding">Advanced Diagnostic Scan & Fault Finding</option>
                    <option value="Clutch & Gearbox Mechanical Repair">Clutch & Gearbox Mechanical Repair</option>
                    <option value="Meguiar's Wash & Executive Valet">Meguiar&apos;s Wash & Executive Valet</option>
                    <option value="Headlight Refurbishment & Restoration">Headlight Refurbishment & Restoration</option>
                    <option value="Windscreen Chip & Starburst Repair">Windscreen Chip & Starburst Repair</option>
                    <option value="Engine Cooling & Radiator Service">Engine Cooling & Radiator Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Vehicle Type
                  </label>
                  <select
                    value={vehicleMake}
                    onChange={(e) => setVehicleMake(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121315] border border-[#2B2F33] text-xs text-white focus:outline-none focus:border-[#00A8E8]"
                  >
                    <option value="European & Luxury">European & Luxury (BMW, Mercedes, Audi, VW, Porsche)</option>
                    <option value="Bakkie & 4x4 / SUV">Bakkie & 4x4 / SUV (Hilux, Ranger, D-Max, Land Cruiser)</option>
                    <option value="Passenger & Hatch">Passenger & Hatch (Toyota, Hyundai, Kia, Renault, Suzuki)</option>
                    <option value="Fleet & Commercial">Fleet & Commercial (Ford Transit, Quantum, Fleets)</option>
                  </select>
                </div>
              </div>

              {/* Vehicle Exact Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Year, Model & Registration / VIN
                </label>
                <input
                  type="text"
                  required
                  value={yearModel}
                  onChange={(e) => setYearModel(e.target.value)}
                  placeholder="e.g. 2021 Toyota Hilux 2.8 GD-6 (Reg: CA 458-120)"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#121315] border border-[#2B2F33] text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00A8E8]"
                />
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Preferred Service Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121315] border border-[#2B2F33] text-xs text-white focus:outline-none focus:border-[#00A8E8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Drop-off / Bay Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121315] border border-[#2B2F33] text-xs text-white focus:outline-none focus:border-[#00A8E8]"
                  >
                    <option value="07:30 AM (Early Drop-off)">07:30 AM (Early Drop-off)</option>
                    <option value="08:30 AM (Standard Drop-off)">08:30 AM (Standard Drop-off)</option>
                    <option value="10:00 AM (Mid-Morning Slot)">10:00 AM (Mid-Morning Slot)</option>
                    <option value="01:30 PM (Afternoon Diagnostic)">01:30 PM (Afternoon Diagnostic)</option>
                  </select>
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Johan van der Merwe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121315] border border-[#2B2F33] text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00A8E8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Mobile Phone (WhatsApp)</label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="082 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121315] border border-[#2B2F33] text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00A8E8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="johan@example.co.za"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121315] border border-[#2B2F33] text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00A8E8]"
                  />
                </div>
              </div>

              {/* Shuttle Service Checkbox */}
              <div className="p-3.5 rounded-lg bg-[#121315] border border-[#2B2F33] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Car className="w-4 h-4 text-[#00A8E8]" />
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      Early Morning Drop-off / Express Key Deposit
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Located at 400 Albert Road, Salt River with convenient access to Woodstock and Cape Town CBD.
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={needsShuttle}
                  onChange={(e) => setNeedsShuttle(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-700 text-[#00A8E8] focus:ring-[#00A8E8] cursor-pointer"
                />
              </div>

              {/* Diagnostic Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Vehicle Symptoms, Repair, or Valet Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Grinding sound under braking, clutch slip, Meguiar's full valet, or logbook service..."
                  className="w-full px-3.5 py-2 rounded-lg bg-[#121315] border border-[#2B2F33] text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00A8E8] resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-[#00A8E8]" />
                  <span>RMI Registered Workshop • Workmanship Guaranteed</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#00A8E8] hover:bg-[#0092ca] active:scale-[0.98] text-white font-semibold text-xs tracking-wide shadow-md shadow-[#00A8E8]/20 cursor-pointer transition-colors"
                >
                  Confirm Workshop Booking
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-6 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono text-[#00A8E8] uppercase tracking-widest font-semibold block mb-1">
                Booking Logged • Order #{workOrderNumber}
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Workshop Bay Reserved for {clientName || 'Valued Client'}
              </h2>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                We have registered your appointment for <span className="text-white font-semibold">{yearModel || 'Vehicle'}</span> on <span className="text-[#00A8E8] font-semibold">{date}</span> at <span className="text-white font-semibold">{timeSlot}</span>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#121315] border border-[#2B2F33] text-left space-y-3 text-xs max-w-lg mx-auto">
              <div className="flex justify-between border-b border-[#2B2F33] pb-2">
                <span className="text-slate-400">Scheduled Service:</span>
                <span className="font-semibold text-white">{service}</span>
              </div>
              <div className="flex justify-between border-b border-[#2B2F33] pb-2">
                <span className="text-slate-400">Early Key Drop-off:</span>
                <span className="font-semibold text-white">{needsShuttle ? 'Requested' : 'Standard check-in'}</span>
              </div>
              <div className="flex justify-between border-b border-[#2B2F33] pb-2">
                <span className="text-slate-400">WhatsApp Updates To:</span>
                <span className="font-semibold text-emerald-400">{clientPhone || 'Confirmed'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Workshop Address:</span>
                <span className="font-semibold text-white">400 Albert Road, Salt River, Cape Town</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#121315] border border-[#2B2F33] text-[11px] text-slate-300 max-w-lg mx-auto flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#00A8E8]" />
              <span>Questions or directions? Call (021) 447 3824 or WhatsApp 082 563 0095</span>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-lg bg-[#00A8E8] hover:bg-[#0092ca] text-white text-xs font-semibold tracking-wide cursor-pointer transition-colors"
            >
              Done & Return to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
