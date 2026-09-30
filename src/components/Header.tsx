import React, { useState } from 'react';
import { NavTab } from '../types';
import { User, Menu, X, Calendar, Phone } from 'lucide-react';
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_RAW } from '../data/clinicData';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { key: NavTab; label: string }[] = [
    { key: 'home', label: 'Ana səhifə' },
    { key: 'services', label: 'Xidmətlər' },
    { key: 'team', label: 'Komanda' },
    { key: 'results', label: 'Nəticələr' },
    { key: 'contact', label: 'Əlaqə' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0A0A0C]/85 backdrop-blur-md border-b border-[#C9A96E]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => {
            onSelectTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#C9A96E] text-lg font-serif tracking-widest group-hover:text-[#E6C487] transition-colors">
              ✦
            </span>
            <div>
              <div className="font-serif text-xl sm:text-2xl tracking-[0.2em] text-[#F5F1EA] font-normal leading-tight group-hover:text-[#C9A96E] transition-colors">
                DIAMOND DENTA
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium leading-none mt-0.5">
                Estetik Dental Klinika
              </div>
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = currentTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  onSelectTab(item.key);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-sm tracking-wide transition-colors relative py-1 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'text-[#C9A96E] font-medium'
                    : 'text-[#A8A39A] hover:text-[#F5F1EA]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A96E] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Call desktop button */}
          <a
            href={`tel:${CLINIC_PHONE_RAW}`}
            className="hidden lg:flex items-center gap-2 text-xs tracking-wider text-[#A8A39A] hover:text-[#C9A96E] transition-colors px-2 py-1"
            title="Zəng edin"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span>{CLINIC_PHONE_DISPLAY}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium tracking-wider text-[#0A0A0C] bg-[#C9A96E] hover:bg-[#E6C487] active:scale-[0.98] transition-all rounded-md shadow-[0_0_15px_rgba(201,169,110,0.2)] cursor-pointer"
          >
            Online Rezerv
          </button>

          <button
            onClick={onOpenBooking}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E6C487] hover:bg-[#F3E2C4] text-[#0A0A0C] flex items-center justify-center transition-all cursor-pointer shadow-sm"
            title="VIP Pasiyent Kabineti"
          >
            <User className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0A0A0C]" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A8A39A] hover:text-[#F5F1EA] focus:outline-none"
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141418] border-b border-[#C9A96E]/20 px-6 py-5 space-y-3 animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                onSelectTab(item.key);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`block w-full text-left py-2.5 text-base tracking-wide transition-colors ${
                currentTab === item.key
                  ? 'text-[#C9A96E] font-medium'
                  : 'text-[#E5E1E4] hover:text-[#C9A96E]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${CLINIC_PHONE_RAW}`}
              className="flex items-center gap-2 text-sm text-[#C9A96E] py-1"
            >
              <Phone className="w-4 h-4" />
              <span>{CLINIC_PHONE_DISPLAY}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-[#0A0A0C] bg-[#C9A96E] rounded-md"
            >
              <Calendar className="w-4 h-4" />
              Online Rezerv Et
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
