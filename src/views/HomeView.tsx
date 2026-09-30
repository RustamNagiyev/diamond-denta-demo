import React from 'react';
import { NavTab } from '../types';
import { SERVICES_LIST, IMAGES, CLINIC_WHATSAPP_LINK, onImageFallbackError } from '../data/clinicData';
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  ShieldCheck,
  Cpu,
  UserCheck,
  CheckCircle,
  Gem,
  Activity,
  Layers,
  Scissors
} from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenCreditModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenBooking,
  onOpenCreditModal,
}) => {
  const serviceIcons = [Gem, Activity, Layers, Scissors];

  return (
    <div className="w-full text-[#E5E1E4]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroSmile}
            alt="Diamond Denta Estetik Gülüş"
            onError={onImageFallbackError}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Editorial vignette overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/50 to-[#0A0A0C]/80" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A0A0C]/40 to-[#0A0A0C]/90" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-24">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A96E]/40 bg-[#0A0A0C]/70 backdrop-blur-md text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#E6C487] mb-6">
            <span>•</span>
            <span>BAKI</span>
            <span>•</span>
            <span>ESTETİK DENTİSTRİYA</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-[-0.01em] text-[#F5F1EA] leading-[1.1] mb-6 text-balance">
            Mükəmməl gülüşün ünvanı
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#D0C5B5] font-light max-w-xl mx-auto tracking-wide mb-10">
            Peşəkar komanda. Müasir texnologiyalar.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C9A96E] hover:bg-[#E6C487] active:scale-[0.98] text-[#0A0A0C] font-medium text-sm tracking-wider rounded-lg transition-all shadow-[0_4px_25px_rgba(201,169,110,0.35)] cursor-pointer"
            >
              Online Rezerv
            </button>

            <a
              href={CLINIC_WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 border border-[#C9A96E]/40 hover:border-[#C9A96E] bg-[#141418]/60 hover:bg-[#141418]/90 text-[#F5F1EA] text-sm tracking-wide rounded-lg flex items-center justify-center gap-2.5 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#C9A96E]" />
              <span>WhatsApp ilə yaz</span>
            </a>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#A8A39A] opacity-75 hover:opacity-100 transition-opacity">
          <span className="text-[10px] tracking-[0.25em] uppercase font-light">
            KƏŞF EDİN
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C9A96E]" />
        </div>
      </section>


      {/* 2. ÖZƏL XİDMƏTLƏRİMİZ / XİDMƏTLƏR */}
      <section className="py-24 sm:py-32 bg-[#0A0A0C] border-t border-[#C9A96E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium mb-2">
                ÖZƏL XİDMƏTLƏRİMİZ
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1EA] font-normal">
                Xidmətlər
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#A8A39A] font-light max-w-md">
              Zərif estetika və qabaqcıl stomatoloji həllər
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.map((srv, idx) => {
              const IconComp = serviceIcons[idx % serviceIcons.length];
              return (
                <div
                  key={srv.id}
                  onClick={() => onSelectTab('services')}
                  className="group relative p-7 rounded-xl bg-[#141418] border border-[#C9A96E]/15 hover:border-[#C9A96E]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] cursor-pointer"
                >
                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-lg border border-[#C9A96E]/30 bg-[#1C1B20] flex items-center justify-center text-[#C9A96E] mb-8 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/10 transition-colors">
                      <IconComp className="w-5 h-5 text-[#C9A96E]" />
                    </div>

                    {/* Number & Category */}
                    <div className="text-[11px] tracking-[0.18em] uppercase text-[#A8A39A] mb-2 font-mono">
                      {srv.number} / {srv.category}
                    </div>

                    {/* Card Title */}
                    <h3 className="font-serif text-2xl text-[#F5F1EA] mb-3 group-hover:text-[#C9A96E] transition-colors">
                      {srv.subtitle}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#A8A39A] font-light leading-relaxed mb-8">
                      {srv.shortDesc}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-[#C9A96E] group-hover:text-[#E6C487] transition-colors">
                    <span>Ətraflı</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 3. FƏRQLİ TƏCRÜBƏ / NİYƏ DİAMOND DENTA? */}
      <section className="py-24 sm:py-32 bg-[#0E0E10] border-t border-[#C9A96E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium mb-2">
                  FƏRQLİ TƏCRÜBƏ
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1EA] font-normal leading-tight">
                  Niyə Diamond Denta?
                </h2>
              </div>

              {/* 3 Value Pillars */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full border border-[#C9A96E]/30 bg-[#141418] flex items-center justify-center shrink-0 text-[#C9A96E] group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/10 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-[#C9A96E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#F5F1EA] mb-1">
                      Peşəkar komanda
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A8A39A] font-light leading-relaxed">
                      Yüksək ixtisaslı və beynəlxalq təcrübəli mütəxəssislər.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full border border-[#C9A96E]/30 bg-[#141418] flex items-center justify-center shrink-0 text-[#C9A96E] group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/10 transition-colors">
                    <Cpu className="w-4 h-4 text-[#C9A96E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#F5F1EA] mb-1">
                      Müasir texnologiyalar
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A8A39A] font-light leading-relaxed">
                      Son nəsil rəqəmsal diaqnostika və premium avadanlıqlar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full border border-[#C9A96E]/30 bg-[#141418] flex items-center justify-center shrink-0 text-[#C9A96E] group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/10 transition-colors">
                    <UserCheck className="w-4 h-4 text-[#C9A96E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#F5F1EA] mb-1">
                      Fərdi yanaşma
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A8A39A] font-light leading-relaxed">
                      Hər pasiyentin anatomiyasına və təbəssümünə xüsusi planlama.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation trigger */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-6 py-3 bg-[#1C1B20] hover:bg-[#25242A] border border-[#C9A96E]/30 hover:border-[#C9A96E] text-xs uppercase tracking-widest text-[#E6C487] rounded-lg transition-all cursor-pointer"
                >
                  Fərdi Konsultasiyaya Yazılın
                </button>
              </div>
            </div>

            {/* Right Photo Duo */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Photo 1: Lounge */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#C9A96E]/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] group">
                <img
                  src={IMAGES.clinicInterior}
                  alt="Reseption & Lounge"
                  onError={onImageFallbackError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-block px-3 py-1 bg-black/70 backdrop-blur-md border border-white/20 rounded text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-[#F5F1EA]">
                    RESEPTİON & LOUNGE
                  </div>
                </div>
              </div>

              {/* Photo 2: Studio / Doctor */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#C9A96E]/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] group">
                <img
                  src={IMAGES.doctorPortrait}
                  alt="Rəqəmsal Dental Studiya"
                  onError={onImageFallbackError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-block px-3 py-1 bg-black/70 backdrop-blur-md border border-white/20 rounded text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-[#F5F1EA]">
                    RƏQƏMSAL DENTAL STUDİYA
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 4. TRANSFORMASİYALAR / GÜLÜŞ QALEREYASI */}
      <section className="py-24 sm:py-32 bg-[#0A0A0C] border-t border-[#C9A96E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium mb-2">
              TRANSFORMASİYALAR
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1EA] font-normal mb-3">
              Gülüş Qalereyası
            </h2>
            <p className="text-sm sm:text-base text-[#A8A39A] font-light">
              Məmnun pasiyentlərimizin real nəticələri
            </p>
          </div>

          {/* 3 Featured Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Card 1 */}
            <div
              onClick={() => onSelectTab('results')}
              className="group bg-[#141418] border border-[#C9A96E]/15 hover:border-[#C9A96E]/40 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={IMAGES.afterTeeth}
                  alt="Tam Gülüş Dizaynı"
                  onError={onImageFallbackError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A8A39A] mb-1.5 font-mono">
                  E-MAX KERAMİKA
                </div>
                <h3 className="font-serif text-xl text-[#F5F1EA] mb-2 group-hover:text-[#C9A96E] transition-colors">
                  Tam Gülüş Dizaynı
                </h3>
                <p className="text-xs text-[#A8A39A] font-light">
                  Təbii rəng tonu və anatomik relyef
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => onSelectTab('results')}
              className="group bg-[#141418] border border-[#C9A96E]/15 hover:border-[#C9A96E]/40 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={IMAGES.heroSmile}
                  alt="Holivud Təbəssümü"
                  onError={onImageFallbackError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A8A39A] mb-1.5 font-mono">
                  ESTETİK VİNİRLƏR
                </div>
                <h3 className="font-serif text-xl text-[#F5F1EA] mb-2 group-hover:text-[#C9A96E] transition-colors">
                  Holivud Təbəssümü
                </h3>
                <p className="text-xs text-[#A8A39A] font-light">
                  Fərdi simmetriya və qapalı xətlər
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              onClick={() => onSelectTab('results')}
              className="group bg-[#141418] border border-[#C9A96E]/15 hover:border-[#C9A96E]/40 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={IMAGES.bracesModel}
                  alt="Xətti Bərabərləşdirmə"
                  onError={onImageFallbackError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A8A39A] mb-1.5 font-mono">
                  RƏQƏMSAL ORTODONTİYA
                </div>
                <h3 className="font-serif text-xl text-[#F5F1EA] mb-2 group-hover:text-[#C9A96E] transition-colors">
                  Xətti Bərabərləşdirmə
                </h3>
                <p className="text-xs text-[#A8A39A] font-light">
                  Oklüziyanın tam funksional bərpası
                </p>
              </div>
            </div>

          </div>

          {/* View All CTA */}
          <div className="text-center">
            <button
              onClick={() => onSelectTab('results')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C9A96E] hover:text-[#E6C487] border-b border-[#C9A96E]/50 pb-1 hover:border-[#E6C487] transition-all cursor-pointer"
            >
              <span>Bütün nəticələr</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* 5. HIGH-CONTRAST CREAM SURFACE BANNER */}
      <section className="py-14 sm:py-16 bg-[#F5F1EA] text-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C6D37]">
                <span>•</span>
                <span>ƏLÇATAN PREMİUM KEYFİYYƏT</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#0A0A0C] font-normal leading-tight">
                Kreditlə və hissə-hissə ödəniş mümkündür
              </h2>
              <p className="text-xs sm:text-sm text-[#4A4742] font-normal">
                Təbəssümünüzü təxirə salmayın. Rahat ödəniş şərtləri ilə xidmətlərimizdən faydalanın.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <button
                onClick={onOpenCreditModal}
                className="px-8 py-3.5 bg-[#0A0A0C] hover:bg-[#201F22] text-[#F5F1EA] text-xs sm:text-sm font-medium tracking-wider rounded-lg transition-all cursor-pointer shadow-md"
              >
                Məlumat al
              </button>

              <div className="flex items-center gap-2 text-xs text-[#4A4742] font-medium">
                <CheckCircle className="w-4 h-4 text-[#8C6D37]" />
                <span>Komissiyasız və daxili şərtlər</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 6. MƏSLƏHƏT VƏ DİAQNOSTİKA CALL-TO-ACTION */}
      <section className="py-24 sm:py-32 bg-[#0A0A0C] text-center border-t border-[#C9A96E]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
            MƏSLƏHƏT VƏ DİAQNOSTİKA
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1EA] font-normal">
            Gülüşünüz üçün ilk addımı atın
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A39A] font-light max-w-lg mx-auto">
            Klinikamızda qəbul yalnız öncədən qeydiyyat əsasında həyata keçirilir.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 bg-[#C9A96E] hover:bg-[#E6C487] text-[#0A0A0C] font-medium text-xs sm:text-sm tracking-wider rounded-lg transition-all shadow-[0_0_25px_rgba(201,169,110,0.3)] cursor-pointer"
            >
              Online Rezerv
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
