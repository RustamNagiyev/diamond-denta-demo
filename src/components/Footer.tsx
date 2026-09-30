import React from 'react';
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_RAW, CLINIC_WHATSAPP_LINK } from '../data/clinicData';
import { Instagram, MessageCircle, Phone, Clock, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0E0E10] border-t border-[#C9A96E]/15 text-[#E5E1E4] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#C9A96E] text-base">✦</span>
              <span className="font-serif text-xl tracking-[0.2em] text-[#F5F1EA]">
                DIAMOND DENTA
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A8A39A] leading-relaxed max-w-xs font-light">
              Baku, Azərbaycan. Fərdi təbəssüm memarlığı və premium estetik stomatologiya.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C9A96E] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span>Nizami küç. Baku Center</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5">
            <div className="text-xs uppercase tracking-[0.18em] text-[#A8A39A] font-medium">
              Əlaqə Nömrəsi
            </div>
            <a
              href={`tel:${CLINIC_PHONE_RAW}`}
              className="block font-serif text-2xl tracking-wide text-[#F5F1EA] hover:text-[#C9A96E] transition-colors"
            >
              {CLINIC_PHONE_DISPLAY}
            </a>
            <p className="text-xs text-[#A8A39A] font-light">
              Bütün zənglər və VIP konsultasiyalar üçün
            </p>
          </div>

          {/* Working Hours */}
          <div className="space-y-2.5">
            <div className="text-xs uppercase tracking-[0.18em] text-[#A8A39A] font-medium">
              İş Saatları
            </div>
            <div className="font-serif text-xl tracking-wide text-[#F5F1EA] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C9A96E]" />
              <span>Hər gün 11:00 - 19:00</span>
            </div>
            <p className="text-xs text-[#A8A39A] font-light">
              Qəbul yalnız öncədən yazılışladır
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.18em] text-[#A8A39A] font-medium">
              Sosial Əlaqə
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-xs text-[#E5E1E4] hover:text-[#C9A96E] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-[#C9A96E]/30 flex items-center justify-center group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/10 transition-all">
                  <Instagram className="w-4 h-4 text-[#C9A96E]" />
                </div>
                <span>Instagram</span>
              </a>

              <a
                href={CLINIC_WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-xs text-[#E5E1E4] hover:text-[#C9A96E] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-[#C9A96E]/30 flex items-center justify-center group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/10 transition-all">
                  <MessageCircle className="w-4 h-4 text-[#C9A96E]" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7771] gap-4">
          <div>
            © 2024 Diamond Denta Aesthetic Clinic. Bütün hüquqlar qorunur.
          </div>
          <div className="tracking-widest uppercase font-serif text-[11px] text-[#A8A39A]">
            Architectural Dentistry Baku
          </div>
        </div>

      </div>
    </footer>
  );
};
