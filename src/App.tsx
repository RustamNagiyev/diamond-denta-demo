/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { BookingModal } from './components/BookingModal';
import { CreditModal } from './components/CreditModal';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { ResultsView } from './views/ResultsView';
import { ContactView } from './views/ContactView';
import { TeamView } from './views/TeamView';
import { MessageCircle, Phone } from 'lucide-react';
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_RAW, CLINIC_WHATSAPP_LINK } from './data/clinicData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCreditOpen, setIsCreditOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string>('Vinir və Estetik Bərpa');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setBookingService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E5E1E4] flex flex-col selection:bg-[#C9A96E]/30 selection:text-[#FFFFFF]">
      
      {/* Top Sticky Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main View Router */}
      <main className="flex-1 pb-16 md:pb-0">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenBooking={handleOpenBooking}
            onOpenCreditModal={() => setIsCreditOpen(true)}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'team' && (
          <TeamView onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'results' && (
          <ResultsView onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileNav
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
      />

      {/* Floating Instant Contact Buttons */}
      <div className="fixed bottom-20 md:bottom-8 right-4 sm:right-6 z-40 flex flex-col gap-3">
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${CLINIC_PHONE_RAW}`}
          className="w-12 h-12 rounded-full bg-[#18181E] border border-[#C9A96E]/50 text-[#C9A96E] hover:text-[#FFFFFF] hover:border-[#C9A96E] hover:bg-[#C9A96E]/20 shadow-[0_5px_20px_rgba(0,0,0,0.6)] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          title={`Zəng et: ${CLINIC_PHONE_DISPLAY}`}
        >
          <Phone className="w-5 h-5 text-[#C9A96E]" />
        </a>

        {/* WhatsApp Direct Chat Button */}
        <a
          href={CLINIC_WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_5px_25px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          title="WhatsApp ilə yazın"
        >
          <MessageCircle className="w-6 h-6 fill-current text-white" />
        </a>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={bookingService}
      />

      {/* Credit & Installment Modal */}
      <CreditModal
        isOpen={isCreditOpen}
        onClose={() => setIsCreditOpen(false)}
        onOpenBooking={() => handleOpenBooking('Kreditlə Müalicə Planı')}
      />

    </div>
  );
}
