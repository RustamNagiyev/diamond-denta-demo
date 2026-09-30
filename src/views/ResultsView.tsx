import React, { useState } from 'react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { GALLERY_CASES, IMAGES, CLINIC_WHATSAPP_LINK, onImageFallbackError } from '../data/clinicData';
import { MessageCircle, Sparkles } from 'lucide-react';

interface ResultsViewProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'vinir' | 'implant' | 'breket'>('all');

  const filteredCases = activeFilter === 'all'
    ? GALLERY_CASES
    : GALLERY_CASES.filter((c) => c.category === activeFilter);

  return (
    <div className="w-full text-[#E5E1E4]">
      
      {/* 1. HERO SECTION & FILTER TABS */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 bg-[#0A0A0C] text-center border-b border-[#C9A96E]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A96E]/40 bg-[#141418] text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C9A96E]">
            <span>•</span>
            <span>NƏTİCƏLƏR</span>
            <span>•</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F5F1EA] font-normal tracking-[-0.01em]">
            Real gülüşlər, real nəticələr
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#A8A39A] font-light max-w-2xl mx-auto">
            Pasiyentlərimizin estetik transformasiyaları və fərdi gülüş memarlığı.
          </p>

          {/* Filter Tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'all', label: 'Hamısı' },
              { id: 'vinir', label: 'Vinir' },
              { id: 'implant', label: 'İmplant' },
              { id: 'breket', label: 'Breket' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-6 py-2 rounded-full text-xs font-medium tracking-wider transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#C9A96E] text-[#0A0A0C] shadow-[0_0_15px_rgba(201,169,110,0.3)]'
                    : 'bg-[#141418] border border-[#C9A96E]/20 text-[#A8A39A] hover:text-[#F5F1EA] hover:border-[#C9A96E]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>


      {/* 2. FEATURED BEFORE / AFTER COMPARISON SECTION */}
      <section className="py-20 sm:py-28 bg-[#0E0E10] border-b border-[#C9A96E]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
              GÜLÜŞ TRANSFORMASİYASI
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F1EA] font-normal">
              Öncə və Sonra Müqayisəsi
            </h2>
            <p className="text-xs sm:text-sm text-[#A8A39A] font-light max-w-lg mx-auto">
              Dəqiq planlama və yüksək sənətkarlıqla əldə edilmiş təbii harmoniya.
            </p>
          </div>

          {/* Interactive Before & After Slider */}
          <BeforeAfterSlider
            beforeImage={IMAGES.beforeTeeth}
            afterImage={IMAGES.afterTeeth}
            beforeLabel="ƏVVƏL"
            afterLabel="SONRA"
            tagline="Keramik Vinir • Təbii ağlıq və düzülüş"
          />

        </div>
      </section>


      {/* 3. GÜLÜŞ ARXİVİ (GALLERY GRID) */}
      <section className="py-20 sm:py-28 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium mb-2">
                GÜLÜŞ ARXİVİ
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1EA] font-normal">
                Hər təbəssüm fərdi hekayədir
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#A8A39A] font-light max-w-md">
              Sənətkarlıqla işlənmiş hər bir detal biomimetik dəqiqliklə təbii anatomiyanı qoruyur.
            </p>
          </div>

          {/* 6 Case Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((item) => (
              <div
                key={item.id}
                className="group bg-[#141418] border border-[#C9A96E]/15 hover:border-[#C9A96E]/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={onImageFallbackError}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/15 rounded text-[10px] uppercase tracking-wider text-[#C9A96E] font-medium">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-xl text-[#F5F1EA] group-hover:text-[#C9A96E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A8A39A] font-light leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2 text-[11px] text-[#C9A96E]/80 font-mono">
                    ✦ {item.subDetail}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 4. FINAL CALL TO ACTION CARD */}
      <section className="py-20 sm:py-28 bg-[#0E0E10] border-t border-[#C9A96E]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-2xl bg-[#141418] border border-[#C9A96E]/30 text-center space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            
            <div className="w-12 h-12 mx-auto rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E]">
              <Sparkles className="w-5 h-5 text-[#C9A96E]" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1EA] font-normal">
                Sizin gülüşünüz növbəti ola bilər
              </h2>
              <p className="text-xs sm:text-sm text-[#A8A39A] font-light max-w-md mx-auto">
                Fərdi konsultasiya və gülüş analizi üçün bizimlə əlaqə saxlayın.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C9A96E] hover:bg-[#E6C487] text-[#0A0A0C] font-medium text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(201,169,110,0.3)] cursor-pointer"
              >
                Online Rezerv
              </button>

              <a
                href={CLINIC_WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 border border-[#C9A96E]/40 hover:border-[#C9A96E] bg-white/5 hover:bg-white/10 text-[#F5F1EA] text-xs sm:text-sm uppercase tracking-wider rounded-lg flex items-center justify-center gap-2.5 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#C9A96E]" />
                <span>WhatsApp ilə Məsləhət</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
