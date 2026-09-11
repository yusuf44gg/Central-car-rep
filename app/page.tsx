'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Estimator from '@/components/Estimator';
import InspectionDemo from '@/components/InspectionDemo';
import Reviews from '@/components/Reviews';
import LocationContact from '@/components/LocationContact';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [preselectedCategory, setPreselectedCategory] = useState<string>('');

  const handleOpenBooking = (service?: string) => {
    setPreselectedService(service || '');
    setPreselectedCategory('');
    setBookingOpen(true);
  };

  const handleOpenBookingWithService = (service: string, category: string) => {
    setPreselectedService(service);
    setPreselectedCategory(category);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1E2022] flex flex-col font-sans-body">
      {/* Sticky Glassmorphic Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content with 80px–120px Section Rhythms */}
      <main className="flex-1">
        {/* Full-bleed Hero with Text Overlay & Primary CTAs directly on top */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Technical Disciplines & Mechanical Capabilities */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Interactive Instant Cost & Time Estimator */}
        <Estimator onOpenBookingWithService={handleOpenBookingWithService} />

        {/* Digital Video Inspection Lab & Live Bay Telemetry */}
        <InspectionDemo />

        {/* Verified Driver Reviews with Filterable Categories */}
        <Reviews />

        {/* Dedicated Facility Location, Embedded Dark Google Map & Direct Dispatch */}
        <LocationContact />
      </main>

      {/* Footer with Master Certifications & Warranty Protection */}
      <Footer />

      {/* Interactive Priority Booking & Diagnostic Bay Reservation Modal */}
      <BookingModal
        key={`${preselectedService}-${preselectedCategory}-${bookingOpen ? 'open' : 'closed'}`}
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={preselectedService}
        preselectedCategory={preselectedCategory}
      />
    </div>
  );
}
