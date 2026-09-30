import React from 'react';
import { IMAGES, CLINIC_PHONE_DISPLAY, CLINIC_WHATSAPP_LINK, onImageFallbackError } from '../data/clinicData';
import { Award, GraduationCap, ArrowRight, MessageCircle } from 'lucide-react';

interface TeamViewProps {
  onOpenBooking: (doctorOrService?: string) => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ onOpenBooking }) => {
  const doctors = [
    {
      id: 'doc-1',
      name: 'Dr. Rəşad Nəğıyev',
      role: 'Baş Həkim, Estetik Stomatoloq',
      specialty: 'Digital Smile Design & Keramik Vinirlər',
      experience: '16 illik təcrübə',
      education: 'Almaniya və İsveçrə beynəlxalq estetik stomatologiya sertifikasiyası',
      image: IMAGES.doctorPortrait,
      badge: 'BAŞ HƏKİM',
    },
    {
      id: 'doc-2',
      name: 'Dr. Leyla Əliyeva',
      role: 'Baş Ortodont',
      specialty: 'Şəffaf Qapaqlar (Aligner) & Damon Sistemləri',
      experience: '12 illik təcrübə',
      education: 'Avropa Ortodontiya Cəmiyyətinin (EOS) həqiqi üzvü',
      image: IMAGES.bracesModel,
      badge: 'ORTODONTİYA',
    },
    {
      id: 'doc-3',
      name: 'Dr. Elmir Qasımov',
      role: 'Cərrah-İmplantoloq',
      specialty: '3D Naviqasiyalı İmplantasiya & Sümük Rekonstruksiyası',
      experience: '14 illik təcrübə',
      education: 'İsveçrə Straumann və Almaniya Bego sistemləri üzrə ekspert',
      image: IMAGES.surgerySuite,
      badge: 'CƏRRAHİYYƏ',
    },
  ];

  return (
    <div className="w-full text-[#E5E1E4]">
      
      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 bg-[#0A0A0C] text-center border-b border-[#C9A96E]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A96E]/40 bg-[#141418] text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C9A96E]">
            <span>•</span>
            <span>PEŞƏKAR KOMANDA</span>
            <span>•</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F5F1EA] font-normal tracking-[-0.01em]">
            Hər təbəssümün arxasında sənətkar dayanır
          </h1>

          <p className="text-sm sm:text-base text-[#A8A39A] font-light max-w-xl mx-auto">
            Beynəlxalq təlim keçmiş, yüzlərlə qüsursuz təbəssüm yaratmış mütəxəssislərimiz.
          </p>

        </div>
      </section>


      {/* 2. DOCTORS GRID */}
      <section className="py-20 sm:py-28 bg-[#0E0E10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#141418] border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] sm:aspect-[4/4] overflow-hidden relative">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      onError={onImageFallbackError}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/15 rounded text-[10px] uppercase tracking-widest text-[#E6C487]">
                        {doc.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl text-[#F5F1EA]">
                        {doc.name}
                      </h3>
                      <div className="text-xs uppercase tracking-wider text-[#C9A96E] font-medium mt-1">
                        {doc.role}
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-[#A8A39A] font-light">
                      <div className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-[#C9A96E] shrink-0" />
                        <span>{doc.specialty}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-[#C9A96E] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{doc.education}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <button
                    onClick={() => onOpenBooking(doc.name)}
                    className="w-full py-3 bg-[#1C1B20] hover:bg-[#C9A96E] hover:text-[#0A0A0C] border border-[#C9A96E]/30 text-xs uppercase tracking-wider font-medium text-[#F5F1EA] rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Konsultasiyaya Yazıl</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 3. ATELIER & LAB PHILOSOPHY */}
      <section className="py-20 sm:py-28 bg-[#0A0A0C] border-t border-[#C9A96E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
                DENTAL ATELYE KONSEPSİYASI
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1EA] font-normal leading-tight">
                Hər vinir fərdi zərgərlik əsəri kimi yonulur
              </h2>
              <p className="text-sm sm:text-base text-[#A8A39A] font-light leading-relaxed">
                Diamond Denta adi diş poliklinikası deyil. Biz hər pasiyentin üz dinamikasına, dodaq xəttinə və mimikasına uyğun unikal gülüş dizayn edirik. Daxili rəqəmsal laboratoriyamız sayəsində vinirlərin rəngi, mikro-teksturası və işıq sındırma qabiliyyəti təbii mina ilə tam eyniləşdirilir.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href={CLINIC_WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 bg-[#C9A96E] hover:bg-[#E6C487] text-[#0A0A0C] font-medium text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp ilə Əlaqə ({CLINIC_PHONE_DISPLAY})</span>
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#C9A96E]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <img
                src={IMAGES.labVeneer}
                alt="Keramik Laboratoriya"
                onError={onImageFallbackError}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-[#E5E1E4] bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10">
                ✦ 100% Təbii Biomimetika • Mikroskop altında hazırlıq
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
