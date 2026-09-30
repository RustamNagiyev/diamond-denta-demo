import React from 'react';
import { SERVICES_LIST } from '../data/clinicData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesViewProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full text-[#E5E1E4]">
      
      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 bg-[#0A0A0C] text-center border-b border-[#C9A96E]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A96E]/40 bg-[#141418] text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C9A96E]">
            <span>•</span>
            <span>XİDMƏTLƏR</span>
            <span>•</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F5F1EA] font-normal tracking-[-0.01em]">
            Gülüşünüz üçün hər şey bir ünvanda
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#A8A39A] font-light max-w-2xl mx-auto">
            Fərdi yanaşma, premium materiallar və qabaqcıl rəqəmsal stomatologiya.
          </p>

          {/* Little diamond emblem */}
          <div className="pt-2 flex justify-center text-[#C9A96E]">
            <span className="text-sm tracking-widest">✧</span>
          </div>

        </div>
      </section>


      {/* 2. DETAILED PROCEDURES LIST (Alternating 2-column) */}
      <section className="py-20 sm:py-28 bg-[#0E0E10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {SERVICES_LIST.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div
                  className={`space-y-6 ${
                    isReversed
                      ? 'lg:col-span-6 lg:order-2'
                      : 'lg:col-span-6 lg:order-1'
                  }`}
                >
                  <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C9A96E]">
                    {service.number} / {service.category}
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F1EA] font-normal leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#A8A39A] font-light leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Bullet features with diamond glyph */}
                  <div className="space-y-3 pt-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <span className="text-[#C9A96E] text-xs mt-1 shrink-0">✧</span>
                        <span className="text-xs sm:text-sm text-[#D0C5B5] font-light leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#C9A96E] hover:text-[#E6C487] border-b border-[#C9A96E]/50 pb-1 hover:border-[#E6C487] transition-all cursor-pointer group"
                    >
                      <span>Randevu al</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Media Card */}
                <div
                  className={`relative ${
                    isReversed
                      ? 'lg:col-span-6 lg:order-1'
                      : 'lg:col-span-6 lg:order-2'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#C9A96E]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group bg-[#141418]">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/15 rounded text-[10px] uppercase tracking-widest text-[#E6C487]">
                        {service.tag}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>


      {/* 3. HIGH-CONTRAST CREAM SURFACE BANNER */}
      <section className="py-16 sm:py-20 bg-[#F5F1EA] text-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            <div className="max-w-2xl space-y-3">
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C6D37]">
                FƏRDİ KONSULTASİYA
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#0A0A0C] font-normal leading-tight">
                Hansı xidmətin sizə uyğun olduğunu bilmirsiniz?
              </h2>
              <p className="text-xs sm:text-sm text-[#4A4742] font-normal leading-relaxed">
                Həkimlərimiz ağız boşluğunun vəziyyətini dəqiq qiymətləndirərək fərdi müalicə planı tərtib edir.
              </p>

              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-[#4A4742]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D37]" />
                  <span>Komissiyasız və daxili şərtlər</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D37]" />
                  <span>3D Konsultasiya</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D37]" />
                  <span>Beynəlxalq protokol zəmanəti</span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => onOpenBooking('Fərdi Konsultasiya')}
                className="px-8 py-3.5 bg-[#0A0A0C] hover:bg-[#201F22] text-[#F5F1EA] text-xs sm:text-sm font-medium tracking-wider rounded-lg transition-all cursor-pointer shadow-lg"
              >
                Pulsuz məsləhət al
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
